-- AthleticaAI Database Schema
-- This script creates the complete database schema for the fitness application

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE user_fitness_level AS ENUM ('beginner', 'intermediate', 'advanced', 'expert');
CREATE TYPE user_goal AS ENUM ('weight_loss', 'muscle_gain', 'strength', 'endurance', 'general_fitness');
CREATE TYPE workout_difficulty AS ENUM ('easy', 'medium', 'hard', 'extreme');
CREATE TYPE exercise_type AS ENUM ('cardio', 'strength', 'flexibility', 'balance', 'sports');

-- Users table (synchronized with Clerk)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clerk_id TEXT UNIQUE NOT NULL, -- Clerk user ID
    email TEXT UNIQUE NOT NULL,
    first_name TEXT,
    last_name TEXT,
    avatar_url TEXT,
    
    -- Fitness profile
    fitness_level user_fitness_level DEFAULT 'beginner',
    primary_goal user_goal,
    height_cm INTEGER,
    weight_kg DECIMAL(5,2),
    birth_date DATE,
    gender TEXT CHECK (gender IN ('male', 'female', 'other')),
    
    -- Preferences
    preferred_workout_duration INTEGER DEFAULT 45, -- minutes
    available_days_per_week INTEGER DEFAULT 3,
    preferred_workout_time TEXT, -- 'morning', 'afternoon', 'evening'
    
    -- Subscription
    subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'premium', 'pro')),
    subscription_expires_at TIMESTAMP WITH TIME ZONE,
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_active_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    onboarding_completed BOOLEAN DEFAULT FALSE
);

-- Exercises table
CREATE TABLE exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    instructions TEXT[],
    muscle_groups TEXT[],
    equipment TEXT[],
    exercise_type exercise_type NOT NULL,
    difficulty workout_difficulty DEFAULT 'medium',
    duration_minutes INTEGER,
    calories_per_minute DECIMAL(4,2),
    video_url TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Workout templates
CREATE TABLE workout_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    difficulty workout_difficulty DEFAULT 'medium',
    duration_minutes INTEGER NOT NULL,
    target_muscle_groups TEXT[],
    equipment_needed TEXT[],
    calories_estimate INTEGER,
    is_public BOOLEAN DEFAULT TRUE,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Workout template exercises (junction table)
CREATE TABLE workout_template_exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workout_template_id UUID REFERENCES workout_templates(id) ON DELETE CASCADE,
    exercise_id UUID REFERENCES exercises(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    sets INTEGER DEFAULT 1,
    reps INTEGER,
    duration_seconds INTEGER,
    rest_seconds INTEGER DEFAULT 60,
    weight_kg DECIMAL(5,2),
    notes TEXT
);

-- User workouts (actual workout sessions)
CREATE TABLE user_workouts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    workout_template_id UUID REFERENCES workout_templates(id),
    name TEXT NOT NULL,
    scheduled_date DATE,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    duration_minutes INTEGER,
    calories_burned INTEGER,
    notes TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User workout exercises (actual exercise performance)
CREATE TABLE user_workout_exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_workout_id UUID REFERENCES user_workouts(id) ON DELETE CASCADE,
    exercise_id UUID REFERENCES exercises(id),
    order_index INTEGER NOT NULL,
    sets_completed INTEGER DEFAULT 0,
    reps_completed INTEGER[],
    weight_used_kg DECIMAL(5,2)[],
    duration_seconds INTEGER,
    calories_burned DECIMAL(6,2),
    notes TEXT,
    completed BOOLEAN DEFAULT FALSE
);

-- User progress tracking
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    weight_kg DECIMAL(5,2),
    body_fat_percentage DECIMAL(4,2),
    muscle_mass_kg DECIMAL(5,2),
    measurements JSONB, -- flexible storage for body measurements
    photos TEXT[], -- URLs to progress photos
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, date)
);

-- User achievements
CREATE TABLE user_achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    achievement_type TEXT NOT NULL,
    achievement_name TEXT NOT NULL,
    description TEXT,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB
);

-- Create indexes for better performance
CREATE INDEX idx_users_clerk_id ON users(clerk_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_user_workouts_user_id ON user_workouts(user_id);
CREATE INDEX idx_user_workouts_date ON user_workouts(scheduled_date);
CREATE INDEX idx_user_progress_user_date ON user_progress(user_id, date);
CREATE INDEX idx_exercises_type ON exercises(exercise_type);
CREATE INDEX idx_exercises_muscle_groups ON exercises USING GIN(muscle_groups);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_exercises_updated_at BEFORE UPDATE ON exercises FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_workout_templates_updated_at BEFORE UPDATE ON workout_templates FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_workouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_workout_exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view their own profile" ON users FOR SELECT USING (clerk_id = auth.jwt() ->> 'sub');
CREATE POLICY "Users can update their own profile" ON users FOR UPDATE USING (clerk_id = auth.jwt() ->> 'sub');

-- RLS Policies for user_workouts
CREATE POLICY "Users can view their own workouts" ON user_workouts FOR SELECT USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));
CREATE POLICY "Users can insert their own workouts" ON user_workouts FOR INSERT WITH CHECK (user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));
CREATE POLICY "Users can update their own workouts" ON user_workouts FOR UPDATE USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));
CREATE POLICY "Users can delete their own workouts" ON user_workouts FOR DELETE USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));

-- Similar policies for other user-specific tables
CREATE POLICY "Users can manage their own workout exercises" ON user_workout_exercises FOR ALL USING (user_workout_id IN (SELECT id FROM user_workouts WHERE user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub')));
CREATE POLICY "Users can manage their own progress" ON user_progress FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));
CREATE POLICY "Users can manage their own achievements" ON user_achievements FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));

-- Public read access for exercises and workout templates
CREATE POLICY "Anyone can view exercises" ON exercises FOR SELECT TO authenticated USING (true);
CREATE POLICY "Anyone can view public workout templates" ON workout_templates FOR SELECT TO authenticated USING (is_public = true);
CREATE POLICY "Users can view their own workout templates" ON workout_templates FOR SELECT TO authenticated USING (created_by IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));

-- Insert some sample exercises
INSERT INTO exercises (name, description, muscle_groups, equipment, exercise_type, difficulty, duration_minutes, calories_per_minute) VALUES
('Push-ups', 'Classic bodyweight exercise for chest, shoulders, and triceps', ARRAY['chest', 'shoulders', 'triceps'], ARRAY[]::text[], 'strength', 'easy', 1, 8.0),
('Squats', 'Fundamental lower body exercise', ARRAY['quadriceps', 'glutes', 'hamstrings'], ARRAY[]::text[], 'strength', 'easy', 1, 10.0),
('Plank', 'Core strengthening exercise', ARRAY['core', 'shoulders'], ARRAY[]::text[], 'strength', 'medium', 1, 5.0),
('Burpees', 'Full body high-intensity exercise', ARRAY['full_body'], ARRAY[]::text[], 'cardio', 'hard', 1, 15.0),
('Mountain Climbers', 'Cardio and core exercise', ARRAY['core', 'shoulders', 'legs'], ARRAY[]::text[], 'cardio', 'medium', 1, 12.0),
('Deadlifts', 'Compound exercise for posterior chain', ARRAY['hamstrings', 'glutes', 'back'], ARRAY['barbell', 'dumbbells'], 'strength', 'hard', 1, 12.0),
('Pull-ups', 'Upper body pulling exercise', ARRAY['back', 'biceps'], ARRAY['pull-up bar'], 'strength', 'medium', 1, 10.0),
('Lunges', 'Single-leg lower body exercise', ARRAY['quadriceps', 'glutes'], ARRAY[]::text[], 'strength', 'easy', 1, 8.0),
('Jumping Jacks', 'Full body cardio exercise', ARRAY['full_body'], ARRAY[]::text[], 'cardio', 'easy', 1, 10.0),
('Russian Twists', 'Core rotational exercise', ARRAY['core', 'obliques'], ARRAY[]::text[], 'strength', 'medium', 1, 6.0);

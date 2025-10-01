-- Ajouter la colonne onboarding_completed à la table users
-- Exécuter ce script dans votre dashboard Supabase

-- Ajouter la colonne si elle n'existe pas déjà
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false;

-- Mettre à jour les utilisateurs existants pour marquer l'onboarding comme complété
-- (on suppose que les utilisateurs existants ont déjà utilisé l'app)
UPDATE users 
SET onboarding_completed = true 
WHERE onboarding_completed IS NULL;

-- Ajouter un commentaire pour documenter la colonne
COMMENT ON COLUMN users.onboarding_completed IS 'Indique si l''utilisateur a complété le processus d''onboarding initial';

-- Optionnel : Créer un index pour améliorer les performances des requêtes
CREATE INDEX IF NOT EXISTS idx_users_onboarding_completed 
ON users(onboarding_completed);

-- Vérifier que la colonne a été ajoutée correctement
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'users' 
AND column_name = 'onboarding_completed';

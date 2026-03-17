/*
  # Update Profile Schema with About Me Section

  1. Changes
    - Update the summary field in the profile table to the new text
    - Add an `about_me` column to store detailed information about the user
  
  2. Notes
    - Uses IF EXISTS checks to prevent errors
    - Maintains existing data while adding new capabilities
*/

-- Add about_me column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profile' AND column_name = 'about_me'
  ) THEN
    ALTER TABLE profile ADD COLUMN about_me text;
  END IF;
END $$;

-- Update the summary to the new text
UPDATE profile 
SET summary = 'Hi, I am Irfanul Huda. Welcome to my Portofolio.'
WHERE id IS NOT NULL;

-- Set a default about_me text if none exists
UPDATE profile 
SET about_me = 'I am a final year Computer Science and Engineering student at SUST with a strong passion for artificial intelligence and machine learning. My research interests lie in Vision-Language Models and Large Language Models, where I explore the intersection of computer vision and natural language processing. Beyond research, I am deeply interested in DevOps practices and full-stack development, allowing me to build and deploy robust, scalable applications. I enjoy tackling complex problems and am always eager to learn new technologies and methodologies.'
WHERE about_me IS NULL;
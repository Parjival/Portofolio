/*
  # Update Profile Summary
  
  Updates the profile summary text to reflect current focus areas.
*/

UPDATE profile 
SET summary = 'Hi, I am Irfanul Huda. I am currently a Final Year Undergrad Student in CSE at SUST. I like researching about AI/ML topics, learning about the depths of deployment and integrations. Welcome to my Portofolio.',
    updated_at = now()
WHERE id = (SELECT id FROM profile LIMIT 1);

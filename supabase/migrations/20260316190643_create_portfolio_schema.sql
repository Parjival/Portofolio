/*
  # Portfolio Database Schema

  1. New Tables
    - `profile`
      - `id` (uuid, primary key)
      - `name` (text)
      - `phone` (text)
      - `email` (text)
      - `linkedin` (text)
      - `github` (text)
      - `summary` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `education`
      - `id` (uuid, primary key)
      - `institution` (text)
      - `degree` (text)
      - `grade` (text)
      - `period` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `type` (text)
      - `technologies` (text)
      - `description` (text)
      - `period` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `skills`
      - `id` (uuid, primary key)
      - `category` (text)
      - `items` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `achievements`
      - `id` (uuid, primary key)
      - `category` (text)
      - `description` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `certifications`
      - `id` (uuid, primary key)
      - `title` (text)
      - `year` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `activities`
      - `id` (uuid, primary key)
      - `role` (text)
      - `organization` (text)
      - `period` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (portfolio is meant to be viewed publicly)
*/

CREATE TABLE IF NOT EXISTS profile (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  linkedin text,
  github text,
  summary text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution text NOT NULL,
  degree text NOT NULL,
  grade text,
  period text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text,
  technologies text,
  description text,
  period text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  items text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  description text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  year text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role text NOT NULL,
  organization text NOT NULL,
  period text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view profile"
  ON profile FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view education"
  ON education FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view skills"
  ON skills FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view achievements"
  ON achievements FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view certifications"
  ON certifications FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view activities"
  ON activities FOR SELECT
  USING (true);
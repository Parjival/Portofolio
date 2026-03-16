import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type {
  Profile,
  Education,
  Project,
  Skill,
  Achievement,
  Certification,
  Activity,
} from '../types/portfolio';

export function usePortfolio() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [education, setEducation] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPortfolioData() {
      try {
        const [
          profileData,
          educationData,
          projectsData,
          skillsData,
          achievementsData,
          certificationsData,
          activitiesData,
        ] = await Promise.all([
          supabase.from('profile').select('*').maybeSingle(),
          supabase.from('education').select('*').order('order_index'),
          supabase.from('projects').select('*').order('order_index'),
          supabase.from('skills').select('*').order('order_index'),
          supabase.from('achievements').select('*').order('order_index'),
          supabase.from('certifications').select('*').order('order_index'),
          supabase.from('activities').select('*').order('order_index'),
        ]);

        if (profileData.error) throw profileData.error;
        if (educationData.error) throw educationData.error;
        if (projectsData.error) throw projectsData.error;
        if (skillsData.error) throw skillsData.error;
        if (achievementsData.error) throw achievementsData.error;
        if (certificationsData.error) throw certificationsData.error;
        if (activitiesData.error) throw activitiesData.error;

        setProfile(profileData.data);
        setEducation(educationData.data || []);
        setProjects(projectsData.data || []);
        setSkills(skillsData.data || []);
        setAchievements(achievementsData.data || []);
        setCertifications(certificationsData.data || []);
        setActivities(activitiesData.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolioData();
  }, []);

  return {
    profile,
    education,
    projects,
    skills,
    achievements,
    certifications,
    activities,
    loading,
    error,
  };
}

/**
 * Weekly schedule management utilities
 *
 * Implements the 5-day learning schedule:
 * - Monday: Spanish (30min) + Japanese review (10min)
 * - Tuesday: Japanese (30min) + Spanish review (10min)
 * - Wednesday: Mandarin (30min) + Japanese review (10min)
 * - Thursday: Spanish (30min) + Mandarin review (10min)
 * - Friday: Integration Day - All three (15min each)
 */

import { WeeklySchedule, DayOfWeek, Language } from '../types';

/**
 * Get the default weekly schedule structure
 */
export function getDefaultWeeklySchedule(): WeeklySchedule {
  const today = new Date();
  const weekStart = getWeekStart(today);

  return {
    weekStarting: weekStart,
    monday: {
      primaryLanguage: 'spanish',
      maintenanceLanguage: 'japanese',
      sessionCompleted: false,
    },
    tuesday: {
      primaryLanguage: 'japanese',
      maintenanceLanguage: 'spanish',
      sessionCompleted: false,
    },
    wednesday: {
      primaryLanguage: 'mandarin',
      maintenanceLanguage: 'japanese',
      sessionCompleted: false,
    },
    thursday: {
      primaryLanguage: 'spanish',
      maintenanceLanguage: 'mandarin',
      sessionCompleted: false,
    },
    friday: {
      primaryLanguage: 'spanish', // Integration day uses all three
      maintenanceLanguage: undefined,
      sessionCompleted: false,
    },
  };
}

/**
 * Get the start of the week (Monday) for a given date
 */
export function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  const monday = new Date(d.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
}

/**
 * Get the current day of week as our DayOfWeek type
 */
export function getCurrentDayOfWeek(): DayOfWeek | null {
  const day = new Date().getDay();
  const dayMap: { [key: number]: DayOfWeek } = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
  };
  return dayMap[day] || null;
}

/**
 * Check if we need to generate a new week's schedule
 */
export function needsNewWeek(schedule: WeeklySchedule): boolean {
  const currentWeekStart = getWeekStart(new Date());
  return schedule.weekStarting.getTime() !== currentWeekStart.getTime();
}

/**
 * Get today's schedule
 */
export function getTodaySchedule(schedule: WeeklySchedule) {
  const today = getCurrentDayOfWeek();
  if (!today) return null;
  return schedule[today];
}

/**
 * Get session duration for a day
 * Regular days: 40 minutes (30 primary + 10 maintenance)
 * Friday (integration): 45 minutes (15 each for three languages)
 */
export function getSessionDuration(day: DayOfWeek): number {
  return day === 'friday' ? 45 : 40;
}

/**
 * Get languages to study today
 */
export function getTodayLanguages(schedule: WeeklySchedule): Language[] {
  const todaySchedule = getTodaySchedule(schedule);
  if (!todaySchedule) return [];

  const today = getCurrentDayOfWeek();
  if (today === 'friday') {
    // Integration day: all three languages
    return ['spanish', 'japanese', 'mandarin'];
  }

  const languages: Language[] = [todaySchedule.primaryLanguage];
  if (todaySchedule.maintenanceLanguage) {
    languages.push(todaySchedule.maintenanceLanguage);
  }

  return languages;
}

/**
 * Get time allocation for today
 */
export function getTodayTimeAllocation(schedule: WeeklySchedule): {
  [key in Language]?: number;
} {
  const todaySchedule = getTodaySchedule(schedule);
  if (!todaySchedule) return {};

  const today = getCurrentDayOfWeek();
  if (today === 'friday') {
    // Integration day: 15 minutes each
    return {
      spanish: 15,
      japanese: 15,
      mandarin: 15,
    };
  }

  const allocation: { [key in Language]?: number } = {
    [todaySchedule.primaryLanguage]: 30,
  };

  if (todaySchedule.maintenanceLanguage) {
    allocation[todaySchedule.maintenanceLanguage] = 10;
  }

  return allocation;
}

/**
 * Get week progress (how many days completed)
 */
export function getWeekProgress(schedule: WeeklySchedule): {
  completed: number;
  total: number;
  percentage: number;
} {
  const days: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const completed = days.filter(day => schedule[day].sessionCompleted).length;

  return {
    completed,
    total: 5,
    percentage: (completed / 5) * 100,
  };
}

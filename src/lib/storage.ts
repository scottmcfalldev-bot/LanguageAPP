/**
 * Local storage utilities for persisting app state
 */

import { AppState, Card, DailySession } from '../types';
import { getDefaultWeeklySchedule } from './scheduleUtils';

const STORAGE_KEY = 'polypath_state';

/**
 * Get initial default state
 */
export function getDefaultState(): AppState {
  return {
    weeklySchedule: getDefaultWeeklySchedule(),
    userProgress: {
      totalCardsLearned: {
        spanish: 0,
        japanese: 0,
        mandarin: 0,
      },
      currentStreak: 0,
      longestStreak: 0,
      weakAreas: {},
      totalTimeSpent: 0,
    },
    cards: [],
    grammarLessons: [],
    completedSessions: [],
  };
}

/**
 * Load app state from localStorage
 */
export function loadState(): AppState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return getDefaultState();
    }

    const parsed = JSON.parse(stored);

    // Convert date strings back to Date objects
    if (parsed.cards) {
      parsed.cards = parsed.cards.map((card: Card) => ({
        ...card,
        nextReview: new Date(card.nextReview),
        createdAt: new Date(card.createdAt),
        lastReviewed: card.lastReviewed ? new Date(card.lastReviewed) : undefined,
      }));
    }

    if (parsed.weeklySchedule) {
      parsed.weeklySchedule.weekStarting = new Date(parsed.weeklySchedule.weekStarting);
    }

    if (parsed.currentSession) {
      parsed.currentSession.date = new Date(parsed.currentSession.date);
    }

    if (parsed.completedSessions) {
      parsed.completedSessions = parsed.completedSessions.map((session: DailySession) => ({
        ...session,
        date: new Date(session.date),
      }));
    }

    if (parsed.userProgress?.lastStudyDate) {
      parsed.userProgress.lastStudyDate = new Date(parsed.userProgress.lastStudyDate);
    }

    return parsed;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return getDefaultState();
  }
}

/**
 * Save app state to localStorage
 */
export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
}

/**
 * Clear all stored data (reset app)
 */
export function clearState(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Export data as JSON for backup
 */
export function exportData(): string {
  const state = loadState();
  return JSON.stringify(state, null, 2);
}

/**
 * Import data from JSON backup
 */
export function importData(jsonString: string): boolean {
  try {
    const state = JSON.parse(jsonString);
    saveState(state);
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
}

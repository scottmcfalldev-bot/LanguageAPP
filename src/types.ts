/**
 * Core types for PolyPath language learning app
 */

export type Language = 'spanish' | 'japanese' | 'mandarin';

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

/**
 * SM-2 Algorithm card representation
 */
export interface Card {
  id: string;
  language: Language;
  front: string;
  back: string;

  // SM-2 algorithm fields
  easeFactor: number;      // Default 2.5
  interval: number;        // Days until next review
  repetitions: number;     // Number of successful reviews
  nextReview: Date;        // When to show this card next

  // Metadata
  createdAt: Date;
  lastReviewed?: Date;

  // Bidirectional support
  isBidirectional: boolean;
  reverseCardId?: string;  // ID of the reverse card if bidirectional
}

/**
 * Review quality rating (0-5 scale from SM-2)
 */
export enum ReviewQuality {
  COMPLETE_BLACKOUT = 0,   // Complete failure
  INCORRECT_REMEMBERED = 1, // Incorrect but recognized
  INCORRECT_EASY = 2,       // Correct with difficulty
  CORRECT_DIFFICULT = 3,    // Correct with hesitation
  CORRECT_EASY = 4,         // Correct with some thought
  PERFECT = 5               // Perfect recall
}

/**
 * Grammar lesson structure
 */
export interface GrammarLesson {
  id: string;
  language: Language;
  title: string;
  level: number;           // 1-10 difficulty
  concept: string;         // The grammar rule being taught
  explanation: string;
  examples: string[];
  exercises: GrammarExercise[];
  completed: boolean;
  lastStudied?: Date;
}

export interface GrammarExercise {
  id: string;
  prompt: string;
  correctAnswer: string;
  alternatives?: string[]; // Accept multiple correct answers
  explanation: string;     // Why this is correct
}

/**
 * Conversation session with AI
 */
export interface ConversationSession {
  id: string;
  language: Language;
  scenario: string;        // e.g., "ordering coffee", "asking directions"
  messages: ConversationMessage[];
  startedAt: Date;
  completedAt?: Date;
  corrections: number;     // Track how many mistakes were made
}

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
  correction?: {
    issue: string;
    explanation: string;
    correctedVersion: string;
  };
}

/**
 * Writing exercise
 */
export interface WritingExercise {
  id: string;
  language: Language;
  prompt: string;
  userResponse?: string;
  aiFeedback?: {
    errors: WritingError[];
    overallFeedback: string;
  };
  completedAt?: Date;
}

export interface WritingError {
  text: string;
  issue: string;
  correction: string;
  explanation: string;
}

/**
 * Daily session structure (30 minutes)
 */
export interface DailySession {
  id: string;
  date: Date;
  language: Language;

  // 5 minutes: SRS Review
  srsCompleted: boolean;
  cardsReviewed: number;

  // 10 minutes: Grammar
  grammarLessonId?: string;
  grammarCompleted: boolean;

  // 10 minutes: Conversation
  conversationSessionId?: string;
  conversationCompleted: boolean;

  // 5 minutes: Writing
  writingExerciseId?: string;
  writingCompleted: boolean;

  completed: boolean;
  totalTimeSpent: number; // seconds
}

/**
 * Weekly schedule (5 days)
 */
export interface WeeklySchedule {
  weekStarting: Date;
  monday: DailySchedule;
  tuesday: DailySchedule;
  wednesday: DailySchedule;
  thursday: DailySchedule;
  friday: DailySchedule;
}

export interface DailySchedule {
  primaryLanguage: Language;
  maintenanceLanguage?: Language;
  sessionCompleted: boolean;
  sessionId?: string;
}

/**
 * User progress tracking
 */
export interface UserProgress {
  totalCardsLearned: {
    spanish: number;
    japanese: number;
    mandarin: number;
  };
  currentStreak: number;
  longestStreak: number;
  lastStudyDate?: Date;

  weakAreas: {
    [language: string]: {
      grammarConcepts: string[];
      difficultVocabulary: string[];
    };
  };

  totalTimeSpent: number; // Total minutes spent studying
}

/**
 * App state
 */
export interface AppState {
  currentSession?: DailySession;
  weeklySchedule: WeeklySchedule;
  userProgress: UserProgress;
  cards: Card[];
  grammarLessons: GrammarLesson[];
  completedSessions: DailySession[];
}

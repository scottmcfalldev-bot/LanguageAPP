/**
 * PolyPath - Main Application Component
 *
 * Evidence-based polyglot language learning
 * Spanish + Japanese + Mandarin
 */

import { useState, useEffect } from 'react';
import { AppState, Language, Card } from './types';
import { loadState, saveState } from './lib/storage';
import { getTodaySchedule, getTodayLanguages, getCurrentDayOfWeek, needsNewWeek, getDefaultWeeklySchedule } from './lib/scheduleUtils';
import { getDueCardsByLanguage } from './lib/sm2';
import { initializeSeedData } from './data/seedData';
import { CardReview } from './components/CardReview';
import { ConversationPractice } from './components/ConversationPractice';
import { WritingExercise } from './components/WritingExercise';
import { ProgressDashboard } from './components/ProgressDashboard';
import './styles.css';

type SessionPhase = 'start' | 'srs' | 'grammar' | 'conversation' | 'writing' | 'complete';

function App() {
  const [state, setState] = useState<AppState>(() => {
    const loaded = loadState();
    // Initialize with seed data if no cards exist
    loaded.cards = initializeSeedData(loaded.cards);
    return loaded;
  });
  const [currentPhase, setCurrentPhase] = useState<SessionPhase>('start');
  const [currentLanguage, setCurrentLanguage] = useState<Language | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);

  // Save state whenever it changes
  useEffect(() => {
    saveState(state);
  }, [state]);

  // Check if we need a new week
  useEffect(() => {
    if (needsNewWeek(state.weeklySchedule)) {
      setState(prev => ({
        ...prev,
        weeklySchedule: getDefaultWeeklySchedule(),
      }));
    }
  }, [state.weeklySchedule]);

  const todaySchedule = getTodaySchedule(state.weeklySchedule);
  const todayLanguages = getTodayLanguages(state.weeklySchedule);
  const currentDay = getCurrentDayOfWeek();

  const startSession = (language: Language) => {
    setCurrentLanguage(language);
    setCurrentPhase('srs');
  };

  const handleSRSComplete = (reviewedCards: Card[]) => {
    // Update cards in state
    setState(prev => {
      const updatedCards = prev.cards.map(card => {
        const reviewed = reviewedCards.find(r => r.id === card.id);
        return reviewed || card;
      });
      return { ...prev, cards: updatedCards };
    });

    setCurrentPhase('conversation');
  };

  const handleConversationComplete = (_messageCount: number, _corrections: number) => {
    setCurrentPhase('writing');
  };

  const handleWritingComplete = (_response: string, _errors: number) => {
    // Update progress
    setState(prev => ({
      ...prev,
      userProgress: {
        ...prev.userProgress,
        totalTimeSpent: prev.userProgress.totalTimeSpent + 30,
        currentStreak: prev.userProgress.currentStreak + 1,
      },
    }));

    setCurrentPhase('complete');
  };

  const handleSessionComplete = () => {
    setCurrentPhase('start');
    setCurrentLanguage(null);
  };

  const getWritingPrompt = (language: Language): string => {
    const prompts = {
      spanish: 'Describe your morning routine using the present tense.',
      japanese: 'Write about your favorite food and why you like it.',
      mandarin: 'Describe your family using possessive pronouns.',
    };
    return prompts[language];
  };

  const getConversationScenario = (language: Language): string => {
    const scenarios = {
      spanish: 'Ordering food at a restaurant',
      japanese: 'Asking for directions',
      mandarin: 'Shopping at a market',
    };
    return scenarios[language];
  };

  if (showDashboard) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>PolyPath</h1>
          <button className="btn-secondary" onClick={() => setShowDashboard(false)}>
            Back to Learning
          </button>
        </header>
        <ProgressDashboard
          progress={state.userProgress}
          schedule={state.weeklySchedule}
          cards={state.cards}
        />
      </div>
    );
  }

  if (currentPhase === 'srs' && currentLanguage) {
    const dueCards = getDueCardsByLanguage(state.cards, currentLanguage);
    return (
      <div className="app">
        <CardReview
          cards={dueCards}
          onReviewComplete={handleSRSComplete}
          onExit={() => setCurrentPhase('conversation')}
        />
      </div>
    );
  }

  if (currentPhase === 'conversation' && currentLanguage) {
    return (
      <div className="app">
        <ConversationPractice
          language={currentLanguage}
          scenario={getConversationScenario(currentLanguage)}
          onComplete={handleConversationComplete}
          onExit={() => setCurrentPhase('writing')}
        />
      </div>
    );
  }

  if (currentPhase === 'writing' && currentLanguage) {
    return (
      <div className="app">
        <WritingExercise
          language={currentLanguage}
          prompt={getWritingPrompt(currentLanguage)}
          onComplete={handleWritingComplete}
          onExit={handleSessionComplete}
        />
      </div>
    );
  }

  if (currentPhase === 'complete') {
    return (
      <div className="app">
        <div className="session-complete">
          <h2>Session Complete!</h2>
          <p>Great work today. Consistency is key to language mastery.</p>
          <div className="complete-stats">
            <p>Time spent: 30 minutes</p>
            <p>Current streak: {state.userProgress.currentStreak} days</p>
          </div>
          <button className="btn-primary" onClick={handleSessionComplete}>
            Done
          </button>
        </div>
      </div>
    );
  }

  // Start screen
  return (
    <div className="app">
      <header className="app-header">
        <h1>PolyPath</h1>
        <p className="tagline">Evidence-Based Polyglot Learning</p>
        <button className="btn-secondary" onClick={() => setShowDashboard(true)}>
          View Progress
        </button>
      </header>

      <main className="main-content">
        {!currentDay ? (
          <div className="weekend-message">
            <h2>Weekend - Time to Rest</h2>
            <p>The 5-day schedule is designed with rest in mind. Use weekends to enjoy native content:</p>
            <ul>
              <li>Watch shows with target language subtitles</li>
              <li>Listen to podcasts</li>
              <li>Read graded readers</li>
            </ul>
          </div>
        ) : todaySchedule?.sessionCompleted ? (
          <div className="session-completed">
            <h2>Today's Session Completed</h2>
            <p>You've already completed today's learning session. Great job!</p>
            <p>Come back tomorrow to continue your journey.</p>
          </div>
        ) : (
          <div className="today-schedule">
            <h2>Today's Learning Plan</h2>
            {currentDay && (
              <div className="day-info">
                <h3>{currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}</h3>
                {currentDay === 'friday' ? (
                  <p className="integration-day">Integration Day - Practice all three languages (15 min each)</p>
                ) : (
                  <div className="language-allocation">
                    <p><strong>Primary Focus:</strong> {todaySchedule?.primaryLanguage} (30 minutes)</p>
                    {todaySchedule?.maintenanceLanguage && (
                      <p><strong>Maintenance Review:</strong> {todaySchedule.maintenanceLanguage} (10 minutes)</p>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="language-buttons">
              {todayLanguages.map(language => {
                const dueCount = getDueCardsByLanguage(state.cards, language).length;
                return (
                  <button
                    key={language}
                    className="btn-language"
                    onClick={() => startSession(language)}
                  >
                    <div className="language-name">
                      {language.charAt(0).toUpperCase() + language.slice(1)}
                    </div>
                    <div className="language-meta">
                      {dueCount} cards due
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="research-foundation">
          <h3>Built on Research</h3>
          <div className="research-points">
            <div className="research-point">
              <strong>SM-2 Spaced Repetition</strong>
              <p>Reviews spaced at optimal intervals for long-term retention</p>
            </div>
            <div className="research-point">
              <strong>Comprehensible Input (i+1)</strong>
              <p>Content dynamically adjusted to be slightly above your level</p>
            </div>
            <div className="research-point">
              <strong>Active Recall</strong>
              <p>Produce language, don't just consume it</p>
            </div>
            <div className="research-point">
              <strong>30 Minutes Daily</strong>
              <p>Optimal learning time backed by cognitive science</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

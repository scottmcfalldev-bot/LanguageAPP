/**
 * Progress Dashboard Component
 *
 * Displays learning statistics, streak tracking, and weak areas
 */

import { UserProgress, WeeklySchedule, Card } from '../types';
import { getWeekProgress } from '../lib/scheduleUtils';
import { getCardStats } from '../lib/sm2';

interface ProgressDashboardProps {
  progress: UserProgress;
  schedule: WeeklySchedule;
  cards: Card[];
}

export function ProgressDashboard({
  progress,
  schedule,
  cards,
}: ProgressDashboardProps) {
  const weekProgress = getWeekProgress(schedule);

  const spanishCards = cards.filter(c => c.language === 'spanish');
  const japaneseCards = cards.filter(c => c.language === 'japanese');
  const mandarinCards = cards.filter(c => c.language === 'mandarin');

  const spanishStats = getCardStats(spanishCards);
  const japaneseStats = getCardStats(japaneseCards);
  const mandarinStats = getCardStats(mandarinCards);

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="progress-dashboard">
      <h2>Your Progress</h2>

      {/* Streak Section */}
      <div className="stats-section">
        <h3>Study Streak</h3>
        <div className="streak-container">
          <div className="stat-box highlight">
            <div className="stat-value">{progress.currentStreak}</div>
            <div className="stat-label">Current Streak (days)</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{progress.longestStreak}</div>
            <div className="stat-label">Longest Streak</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{formatTime(progress.totalTimeSpent)}</div>
            <div className="stat-label">Total Time</div>
          </div>
        </div>
      </div>

      {/* This Week Progress */}
      <div className="stats-section">
        <h3>This Week</h3>
        <div className="week-progress">
          <div className="progress-bar large">
            <div
              className="progress-fill"
              style={{ width: `${weekProgress.percentage}%` }}
            />
          </div>
          <p>{weekProgress.completed} / {weekProgress.total} days completed</p>
        </div>
      </div>

      {/* Language-Specific Stats */}
      <div className="stats-section">
        <h3>Vocabulary Progress</h3>

        <div className="language-stats">
          <LanguageStatCard
            language="Spanish"
            stats={spanishStats}
            color="#ef4444"
          />
          <LanguageStatCard
            language="Japanese"
            stats={japaneseStats}
            color="#3b82f6"
          />
          <LanguageStatCard
            language="Mandarin"
            stats={mandarinStats}
            color="#10b981"
          />
        </div>
      </div>

      {/* Weak Areas */}
      {Object.keys(progress.weakAreas).length > 0 && (
        <div className="stats-section">
          <h3>Areas to Focus On</h3>
          <div className="weak-areas">
            {Object.entries(progress.weakAreas).map(([lang, areas]) => (
              <div key={lang} className="weak-area-item">
                <h4>{lang.charAt(0).toUpperCase() + lang.slice(1)}</h4>
                {areas.grammarConcepts.length > 0 && (
                  <div>
                    <strong>Grammar:</strong>
                    <ul>
                      {areas.grammarConcepts.map((concept, i) => (
                        <li key={i}>{concept}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function LanguageStatCard({
  language,
  stats,
  color,
}: {
  language: string;
  stats: ReturnType<typeof getCardStats>;
  color: string;
}) {
  return (
    <div className="language-stat-card" style={{ borderLeftColor: color }}>
      <h4>{language}</h4>
      <div className="stat-row">
        <span className="stat-label">Total Cards:</span>
        <span className="stat-value">{stats.total}</span>
      </div>
      <div className="stat-row">
        <span className="stat-label">New:</span>
        <span className="stat-value">{stats.new}</span>
      </div>
      <div className="stat-row">
        <span className="stat-label">Learning:</span>
        <span className="stat-value">{stats.learning}</span>
      </div>
      <div className="stat-row">
        <span className="stat-label">Mature:</span>
        <span className="stat-value">{stats.mature}</span>
      </div>
      {stats.total > 0 && (
        <>
          <div className="stat-row">
            <span className="stat-label">Avg Ease:</span>
            <span className="stat-value">{stats.avgEaseFactor.toFixed(2)}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Avg Interval:</span>
            <span className="stat-value">{Math.round(stats.avgInterval)} days</span>
          </div>
        </>
      )}
    </div>
  );
}

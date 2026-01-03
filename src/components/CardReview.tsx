/**
 * Spaced Repetition Card Review Component
 *
 * Implements the active recall system with SM-2 algorithm
 */

import { useState } from 'react';
import { Card, ReviewQuality } from '../types';
import { calculateSM2 } from '../lib/sm2';

interface CardReviewProps {
  cards: Card[];
  onReviewComplete: (updatedCards: Card[]) => void;
  onExit: () => void;
}

export function CardReview({ cards, onReviewComplete, onExit }: CardReviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [reviewedCards, setReviewedCards] = useState<Card[]>([]);

  if (cards.length === 0) {
    return (
      <div className="card-review empty">
        <h2>No Cards Due</h2>
        <p>Great job! You have no vocabulary cards to review right now.</p>
        <button onClick={onExit}>Continue</button>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  const progress = currentIndex + 1;
  const total = cards.length;

  const handleReveal = () => {
    setShowAnswer(true);
  };

  const handleRating = (quality: ReviewQuality) => {
    // Calculate new SM-2 parameters
    const sm2Result = calculateSM2(currentCard, quality);

    // Update the card
    const updatedCard: Card = {
      ...currentCard,
      ...sm2Result,
      lastReviewed: new Date(),
    };

    const newReviewedCards = [...reviewedCards, updatedCard];
    setReviewedCards(newReviewedCards);

    // Move to next card
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    } else {
      // All cards reviewed
      onReviewComplete(newReviewedCards);
    }
  };

  const getRatingLabel = (quality: ReviewQuality): string => {
    const labels = {
      [ReviewQuality.COMPLETE_BLACKOUT]: 'Complete Blackout',
      [ReviewQuality.INCORRECT_REMEMBERED]: 'Incorrect but Remembered',
      [ReviewQuality.INCORRECT_EASY]: 'Correct with Difficulty',
      [ReviewQuality.CORRECT_DIFFICULT]: 'Correct with Hesitation',
      [ReviewQuality.CORRECT_EASY]: 'Correct - Easy',
      [ReviewQuality.PERFECT]: 'Perfect Recall',
    };
    return labels[quality];
  };

  const getRatingColor = (quality: ReviewQuality): string => {
    if (quality <= 2) return '#ef4444'; // Red
    if (quality === 3) return '#f59e0b'; // Orange
    if (quality === 4) return '#10b981'; // Green
    return '#3b82f6'; // Blue
  };

  return (
    <div className="card-review">
      <div className="review-header">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(progress / total) * 100}%` }}
          />
        </div>
        <p className="progress-text">{progress} / {total}</p>
      </div>

      <div className="card-container">
        <div className={`card ${showAnswer ? 'flipped' : ''}`}>
          <div className="card-front">
            <p className="card-text">{currentCard.front}</p>
          </div>

          {showAnswer && (
            <div className="card-back">
              <p className="card-text answer">{currentCard.back}</p>
            </div>
          )}
        </div>

        {!showAnswer ? (
          <button className="btn-primary" onClick={handleReveal}>
            Show Answer
          </button>
        ) : (
          <div className="rating-buttons">
            <p className="rating-prompt">How well did you know this?</p>
            <div className="rating-grid">
              {[
                ReviewQuality.COMPLETE_BLACKOUT,
                ReviewQuality.INCORRECT_EASY,
                ReviewQuality.CORRECT_DIFFICULT,
                ReviewQuality.CORRECT_EASY,
                ReviewQuality.PERFECT,
              ].map(quality => (
                <button
                  key={quality}
                  className="btn-rating"
                  style={{ borderColor: getRatingColor(quality) }}
                  onClick={() => handleRating(quality)}
                >
                  <span className="rating-number">{quality}</span>
                  <span className="rating-label">{getRatingLabel(quality)}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

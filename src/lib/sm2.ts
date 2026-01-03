/**
 * SM-2 Spaced Repetition Algorithm Implementation
 *
 * Based on the original SuperMemo 2 algorithm by Piotr Wozniak (1987)
 *
 * The algorithm adjusts review intervals based on recall quality:
 * - Quality 0-2: Reset the card (failed recall)
 * - Quality 3-5: Increase interval based on ease factor
 *
 * Intervals progression:
 * - First repetition: 1 day
 * - Second repetition: 6 days
 * - Subsequent: previous interval * ease factor
 */

import { Card, ReviewQuality } from '../types';

export interface SM2Result {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: Date;
}

/**
 * Calculate next review parameters based on quality of recall
 */
export function calculateSM2(
  card: Card,
  quality: ReviewQuality
): SM2Result {
  let { easeFactor, interval, repetitions } = card;

  // Quality below 3 means failure - reset progress
  if (quality < ReviewQuality.CORRECT_DIFFICULT) {
    repetitions = 0;
    interval = 1;
  } else {
    // Update ease factor based on quality
    // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

    // Ease factor should not fall below 1.3
    if (easeFactor < 1.3) {
      easeFactor = 1.3;
    }

    // Calculate new interval
    repetitions += 1;

    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
  }

  // Calculate next review date
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    easeFactor,
    interval,
    repetitions,
    nextReview,
  };
}

/**
 * Get cards due for review today
 */
export function getDueCards(cards: Card[]): Card[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Start of today

  return cards.filter(card => {
    const reviewDate = new Date(card.nextReview);
    reviewDate.setHours(0, 0, 0, 0);
    return reviewDate <= now;
  });
}

/**
 * Get cards due for a specific language
 */
export function getDueCardsByLanguage(cards: Card[], language: string): Card[] {
  return getDueCards(cards).filter(card => card.language === language);
}

/**
 * Get the next review date for a card if answered with a specific quality
 * Useful for showing preview to user
 */
export function previewNextReview(card: Card, quality: ReviewQuality): Date {
  const result = calculateSM2(card, quality);
  return result.nextReview;
}

/**
 * Create a new card with default SM-2 parameters
 */
export function createCard(
  id: string,
  language: 'spanish' | 'japanese' | 'mandarin',
  front: string,
  back: string,
  isBidirectional: boolean = true
): Card {
  return {
    id,
    language,
    front,
    back,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: new Date(), // Due immediately for new cards
    createdAt: new Date(),
    isBidirectional,
  };
}

/**
 * Create bidirectional card pair (front→back AND back→front)
 */
export function createBidirectionalCards(
  baseId: string,
  language: 'spanish' | 'japanese' | 'mandarin',
  front: string,
  back: string
): [Card, Card] {
  const forwardCard = createCard(`${baseId}-forward`, language, front, back, true);
  const reverseCard = createCard(`${baseId}-reverse`, language, back, front, true);

  forwardCard.reverseCardId = reverseCard.id;
  reverseCard.reverseCardId = forwardCard.id;

  return [forwardCard, reverseCard];
}

/**
 * Get statistics about card performance
 */
export function getCardStats(cards: Card[]) {
  const stats = {
    total: cards.length,
    new: 0,
    learning: 0,
    mature: 0,
    avgEaseFactor: 0,
    avgInterval: 0,
  };

  let totalEaseFactor = 0;
  let totalInterval = 0;

  cards.forEach(card => {
    if (card.repetitions === 0) {
      stats.new++;
    } else if (card.repetitions < 3) {
      stats.learning++;
    } else {
      stats.mature++;
    }

    totalEaseFactor += card.easeFactor;
    totalInterval += card.interval;
  });

  stats.avgEaseFactor = cards.length > 0 ? totalEaseFactor / cards.length : 0;
  stats.avgInterval = cards.length > 0 ? totalInterval / cards.length : 0;

  return stats;
}

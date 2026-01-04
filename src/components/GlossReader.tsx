/**
 * Interlinear Gloss Reader Component
 *
 * Shows character-by-character breakdown of phrases with visual mapping
 * between target language characters and English meanings
 */

import { useState } from 'react';
import { Language } from '../types';
import { getGlossesByLanguage } from '../data/glossData';

interface GlossReaderProps {
  language: Language;
  onComplete: () => void;
}

export function GlossReader({ language, onComplete }: GlossReaderProps) {
  const glosses = getGlossesByLanguage(language);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showDirectionInfo, setShowDirectionInfo] = useState(true);

  const currentGloss = glosses[currentIndex];

  const languageNames = {
    spanish: 'Spanish',
    japanese: 'Japanese',
    mandarin: 'Mandarin',
  };

  const handleNext = () => {
    if (currentIndex < glosses.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowBreakdown(false);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowBreakdown(false);
    }
  };

  return (
    <div className="gloss-reader">
      <div className="gloss-header">
        <h3>{languageNames[language]} Reading Practice</h3>
        <p className="gloss-subtitle">Character-by-character breakdown</p>
        <div className="gloss-progress">
          {currentIndex + 1} / {glosses.length}
        </div>
      </div>

      {/* Reading direction info for Japanese/Mandarin */}
      {(language === 'japanese' || language === 'mandarin') && showDirectionInfo && currentIndex === 0 && (
        <div className="direction-info">
          <div className="direction-info-content">
            <strong>📖 Reading Direction:</strong>
            <p>
              {language === 'japanese'
                ? 'Modern Japanese (shown here) reads left→right horizontally. Traditional vertical writing reads top→bottom, with columns going right→left.'
                : 'Modern Mandarin (shown here) reads left→right horizontally. Classical Chinese vertical texts read top→bottom, with columns going right→left.'}
            </p>
            <button
              className="btn-dismiss"
              onClick={() => setShowDirectionInfo(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}

      <div className="gloss-content">
        {/* Original phrase in large text */}
        <div className="original-phrase">
          <div className="phrase-label">Original:</div>
          <div className={`phrase-text ${language}`}>
            {currentGloss.phrase}
          </div>
        </div>

        {/* Toggle breakdown button */}
        {!showBreakdown ? (
          <button
            className="btn-primary"
            onClick={() => setShowBreakdown(true)}
          >
            Show Breakdown
          </button>
        ) : (
          <>
            {/* Interlinear gloss - the key feature */}
            <div className="interlinear-gloss">
              <div className="gloss-grid">
                {currentGloss.segments.map((segment, idx) => (
                  <div key={idx} className="gloss-column">
                    {/* Target language character/word */}
                    <div className={`gloss-original ${language}`}>
                      {segment.original}
                    </div>

                    {/* Pronunciation/romanization */}
                    <div className="gloss-pronunciation">
                      {segment.pronunciation}
                    </div>

                    {/* Literal meaning */}
                    <div className="gloss-meaning">
                      {segment.meaning}
                    </div>

                    {/* Grammatical context (NEW!) */}
                    {segment.context && (
                      <div className="gloss-context">
                        <span className="context-icon">ℹ️</span>
                        <div className="context-tooltip">
                          {segment.context}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Translations */}
            <div className="translations-section">
              <div className="translation-box literal">
                <strong>Literal (word-for-word):</strong>
                <p>"{currentGloss.literalTranslation}"</p>
              </div>

              <div className="translation-box natural">
                <strong>Natural English:</strong>
                <p>"{currentGloss.naturalTranslation}"</p>
              </div>
            </div>

            {/* Grammar notes */}
            {currentGloss.notes && (
              <div className="grammar-notes">
                <strong>📚 Grammar Notes:</strong>
                <p>{currentGloss.notes}</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="gloss-navigation">
        <button
          className="btn-secondary"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>

        <button
          className="btn-primary"
          onClick={handleNext}
        >
          {currentIndex < glosses.length - 1 ? 'Next →' : 'Complete'}
        </button>
      </div>
    </div>
  );
}

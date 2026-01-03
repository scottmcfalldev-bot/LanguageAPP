/**
 * Writing/Production Exercise Component
 *
 * Pure active recall - write sentences without assistance
 * AI provides detailed feedback after submission
 */

import { useState } from 'react';
import { Language } from '../types';

interface WritingExerciseProps {
  language: Language;
  prompt: string;
  onComplete: (response: string, errors: number) => void;
  onExit: () => void;
}

export function WritingExercise({
  language,
  prompt,
  onComplete,
}: WritingExerciseProps) {
  const [response, setResponse] = useState('');
  const [feedback, setFeedback] = useState<{
    errors: Array<{ text: string; issue: string; correction: string; explanation: string }>;
    overallFeedback: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const languageNames = {
    spanish: 'Spanish',
    japanese: 'Japanese',
    mandarin: 'Mandarin',
  };

  const handleSubmit = async () => {
    if (!response.trim()) return;

    setIsSubmitting(true);

    // TODO: Integrate with actual Claude API for feedback
    // For now, simulate AI feedback
    setTimeout(() => {
      const simulatedFeedback = {
        errors: [
          // This would come from Claude API
          {
            text: 'example error',
            issue: 'Grammar',
            correction: 'corrected version',
            explanation: 'This is where Claude will explain the mistake',
          },
        ],
        overallFeedback: 'Good effort! Your writing shows progress. Keep practicing.',
      };

      setFeedback(simulatedFeedback);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleFinish = () => {
    onComplete(response, feedback?.errors.length || 0);
  };

  return (
    <div className="writing-exercise">
      <div className="exercise-header">
        <h3>{languageNames[language]} Writing Exercise</h3>
        <p className="instruction">Write your response without using any assistance</p>
      </div>

      <div className="prompt-box">
        <strong>Prompt:</strong>
        <p>{prompt}</p>
      </div>

      {!feedback ? (
        <div className="writing-area">
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder={`Write in ${languageNames[language]}...`}
            rows={8}
            disabled={isSubmitting}
          />
          <div className="writing-controls">
            <span className="char-count">{response.length} characters</span>
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={!response.trim() || isSubmitting}
            >
              {isSubmitting ? 'Analyzing...' : 'Submit for Feedback'}
            </button>
          </div>
        </div>
      ) : (
        <div className="feedback-section">
          <div className="your-response">
            <h4>Your Response:</h4>
            <p className="response-text">{response}</p>
          </div>

          {feedback.errors.length > 0 && (
            <div className="errors-section">
              <h4>Areas for Improvement:</h4>
              {feedback.errors.map((error, index) => (
                <div key={index} className="error-item">
                  <p><strong>Issue:</strong> {error.issue}</p>
                  <p><strong>What you wrote:</strong> <span className="error-text">{error.text}</span></p>
                  <p><strong>Better:</strong> <span className="correction-text">{error.correction}</span></p>
                  <p><strong>Explanation:</strong> {error.explanation}</p>
                </div>
              ))}
            </div>
          )}

          <div className="overall-feedback">
            <h4>Overall Feedback:</h4>
            <p>{feedback.overallFeedback}</p>
          </div>

          <button className="btn-primary" onClick={handleFinish}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

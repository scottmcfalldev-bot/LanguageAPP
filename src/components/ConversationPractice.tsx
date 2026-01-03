/**
 * AI Conversation Practice Component
 *
 * Real-time conversation with Claude API
 * Provides grammar corrections and adaptive difficulty
 */

import { useState, useRef, useEffect } from 'react';
import { Language, ConversationMessage } from '../types';

interface ConversationPracticeProps {
  language: Language;
  scenario: string;
  onComplete: (messageCount: number, corrections: number) => void;
  onExit: () => void;
}

export function ConversationPractice({
  language,
  scenario,
  onComplete,
}: ConversationPracticeProps) {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [corrections, setCorrections] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languageNames = {
    spanish: 'Spanish',
    japanese: 'Japanese',
    mandarin: 'Mandarin',
  };

  useEffect(() => {
    // Initial AI greeting
    const greeting = getInitialGreeting(language, scenario);
    setMessages([
      {
        role: 'assistant',
        content: greeting,
      },
    ]);
  }, [language, scenario]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getInitialGreeting = (lang: Language, scen: string): string => {
    const greetings = {
      spanish: `¡Hola! Let's practice ${scen}. Respond in Spanish, and I'll help you improve.`,
      japanese: `こんにちは! Let's practice ${scen}. Respond in Japanese, and I'll help you improve.`,
      mandarin: `你好! Let's practice ${scen}. Respond in Mandarin, and I'll help you improve.`,
    };
    return greetings[lang];
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ConversationMessage = {
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // TODO: Integrate with actual Claude API
    // For now, simulate AI response
    setTimeout(() => {
      const response = simulateAIResponse(input, language);
      setMessages(prev => [...prev, response]);

      if (response.correction) {
        setCorrections(prev => prev + 1);
      }

      setIsLoading(false);
    }, 1000);
  };

  const simulateAIResponse = (userInput: string, lang: Language): ConversationMessage => {
    // This is a placeholder - will be replaced with actual Claude API
    const hasError = Math.random() > 0.7; // Simulate occasional corrections

    if (hasError) {
      return {
        role: 'assistant',
        content: `Great effort! Let me help you improve that.`,
        correction: {
          issue: 'Grammar',
          explanation: 'This is where the Claude API will provide specific grammar feedback',
          correctedVersion: userInput,
        },
      };
    }

    return {
      role: 'assistant',
      content: `Good! ${getFollowUpPrompt(lang)}`,
    };
  };

  const getFollowUpPrompt = (lang: Language): string => {
    const prompts = {
      spanish: '¿Y tú?',
      japanese: 'あなたは？',
      mandarin: '你呢？',
    };
    return prompts[lang];
  };

  const handleFinish = () => {
    onComplete(messages.filter(m => m.role === 'user').length, corrections);
  };

  return (
    <div className="conversation-practice">
      <div className="conversation-header">
        <h3>{languageNames[language]} Conversation</h3>
        <p className="scenario">Scenario: {scenario}</p>
        <button className="btn-secondary" onClick={handleFinish}>
          Finish Session
        </button>
      </div>

      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-content">
              <p>{message.content}</p>
              {message.correction && (
                <div className="correction">
                  <strong>💡 Correction:</strong>
                  <p><strong>Issue:</strong> {message.correction.issue}</p>
                  <p><strong>Explanation:</strong> {message.correction.explanation}</p>
                  <p><strong>Better:</strong> {message.correction.correctedVersion}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            <div className="message-content loading">
              <span>Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder={`Type in ${languageNames[language]}...`}
          disabled={isLoading}
        />
        <button
          className="btn-primary"
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
        >
          Send
        </button>
      </div>

      <div className="conversation-stats">
        <p>Messages sent: {messages.filter(m => m.role === 'user').length}</p>
        <p>Corrections received: {corrections}</p>
      </div>
    </div>
  );
}

/**
 * Interlinear Gloss Data
 *
 * Shows character-by-character breakdown with mappings to English
 * Helps learners visualize language structure differences
 */

import { Language } from '../types';

export interface GlossSegment {
  original: string;      // The character/syllable in target language
  pronunciation: string; // Romanization (pinyin, romaji, etc.)
  meaning: string;       // Literal English meaning
}

export interface Gloss {
  id: string;
  language: Language;
  phrase: string;           // Full phrase in target language
  segments: GlossSegment[]; // Character-by-character breakdown
  literalTranslation: string; // Word-for-word English (often grammatically incorrect)
  naturalTranslation: string; // Natural English meaning
  notes?: string;            // Grammar notes, cultural context, etc.
}

/**
 * Spanish glosses - showing morphology and grammar structure
 */
export const spanishGlosses: Gloss[] = [
  {
    id: 'sp-1',
    language: 'spanish',
    phrase: 'Buenos días',
    segments: [
      { original: 'Buenos', pronunciation: 'BWEH-nos', meaning: 'good (masculine plural)' },
      { original: 'días', pronunciation: 'DEE-as', meaning: 'days' },
    ],
    literalTranslation: 'good days',
    naturalTranslation: 'Good morning',
    notes: 'Spanish uses plural "days" for greetings. Adjective "buenos" agrees with masculine plural noun "días".',
  },
  {
    id: 'sp-2',
    language: 'spanish',
    phrase: '¿Cómo estás?',
    segments: [
      { original: '¿Cómo', pronunciation: 'KO-mo', meaning: 'how' },
      { original: 'estás?', pronunciation: 'es-TAS', meaning: 'you-are (informal)' },
    ],
    literalTranslation: 'how are-you?',
    naturalTranslation: 'How are you?',
    notes: 'Verb "estar" (to be) conjugated for "tú" (informal you). Question marks on both sides in Spanish.',
  },
  {
    id: 'sp-3',
    language: 'spanish',
    phrase: 'Yo soy estudiante',
    segments: [
      { original: 'Yo', pronunciation: 'yo', meaning: 'I' },
      { original: 'soy', pronunciation: 'soy', meaning: 'am (permanent)' },
      { original: 'estudiante', pronunciation: 'es-too-DYAN-teh', meaning: 'student' },
    ],
    literalTranslation: 'I am student',
    naturalTranslation: 'I am a student',
    notes: '"Soy" is from "ser" (to be), used for permanent states/identity. Spanish often omits articles.',
  },
  {
    id: 'sp-4',
    language: 'spanish',
    phrase: 'Me gusta el café',
    segments: [
      { original: 'Me', pronunciation: 'meh', meaning: 'to-me' },
      { original: 'gusta', pronunciation: 'GOOS-tah', meaning: 'it-pleases' },
      { original: 'el', pronunciation: 'el', meaning: 'the (masculine)' },
      { original: 'café', pronunciation: 'kah-FEH', meaning: 'coffee' },
    ],
    literalTranslation: 'to-me it-pleases the coffee',
    naturalTranslation: 'I like coffee',
    notes: 'Spanish says "coffee pleases me" instead of "I like coffee". Different conceptual structure!',
  },
];

/**
 * Japanese glosses - showing kanji, hiragana, and grammar particles
 */
export const japaneseGlosses: Gloss[] = [
  {
    id: 'jp-1',
    language: 'japanese',
    phrase: '私は学生です',
    segments: [
      { original: '私', pronunciation: 'watashi', meaning: 'I' },
      { original: 'は', pronunciation: 'wa', meaning: '[topic marker]' },
      { original: '学生', pronunciation: 'gakusei', meaning: 'student' },
      { original: 'です', pronunciation: 'desu', meaning: '[polite copula]' },
    ],
    literalTranslation: 'I [topic] student [is]',
    naturalTranslation: 'I am a student',
    notes: '📖 Reading Direction: This uses modern horizontal writing (left→right). Traditional vertical Japanese reads top→bottom, with columns going right→left. | は (wa) marks the topic. です (desu) is the polite form of "to be". No articles in Japanese.',
  },
  {
    id: 'jp-2',
    language: 'japanese',
    phrase: '日本語を勉強します',
    segments: [
      { original: '日本語', pronunciation: 'nihongo', meaning: 'Japanese language' },
      { original: 'を', pronunciation: 'wo', meaning: '[direct object]' },
      { original: '勉強', pronunciation: 'benkyou', meaning: 'study' },
      { original: 'します', pronunciation: 'shimasu', meaning: 'do (polite)' },
    ],
    literalTranslation: 'Japanese-language [object] study do',
    naturalTranslation: 'I study Japanese',
    notes: 'を (wo) marks direct object. 勉強します = "do studying". No subject pronoun needed - context implies "I".',
  },
  {
    id: 'jp-3',
    language: 'japanese',
    phrase: 'これは本です',
    segments: [
      { original: 'これ', pronunciation: 'kore', meaning: 'this' },
      { original: 'は', pronunciation: 'wa', meaning: '[topic]' },
      { original: '本', pronunciation: 'hon', meaning: 'book' },
      { original: 'です', pronunciation: 'desu', meaning: '[is]' },
    ],
    literalTranslation: 'this [topic] book [is]',
    naturalTranslation: 'This is a book',
    notes: 'Topic-comment structure: "As for this, (it is a) book".',
  },
  {
    id: 'jp-4',
    language: 'japanese',
    phrase: '東京に行きます',
    segments: [
      { original: '東京', pronunciation: 'Tokyo', meaning: 'Tokyo' },
      { original: 'に', pronunciation: 'ni', meaning: '[direction to]' },
      { original: '行き', pronunciation: 'iki', meaning: 'go' },
      { original: 'ます', pronunciation: 'masu', meaning: '[polite present]' },
    ],
    literalTranslation: 'Tokyo [to] go [polite]',
    naturalTranslation: 'I go to Tokyo / I will go to Tokyo',
    notes: 'に (ni) indicates direction/destination. Same form for present and future - context determines.',
  },
];

/**
 * Mandarin glosses - showing character meanings and tonal system
 */
export const mandarinGlosses: Gloss[] = [
  {
    id: 'cn-1',
    language: 'mandarin',
    phrase: '我是学生',
    segments: [
      { original: '我', pronunciation: 'wǒ', meaning: 'I' },
      { original: '是', pronunciation: 'shì', meaning: 'am/is/are' },
      { original: '学生', pronunciation: 'xuéshēng', meaning: 'student' },
    ],
    literalTranslation: 'I am student',
    naturalTranslation: 'I am a student',
    notes: '是 (shì) is the copula "to be". 学生 is two characters: 学 (study/learn) + 生 (life/person).',
  },
  {
    id: 'cn-2',
    language: 'mandarin',
    phrase: '我喜欢喝咖啡',
    segments: [
      { original: '我', pronunciation: 'wǒ', meaning: 'I' },
      { original: '喜欢', pronunciation: 'xǐhuan', meaning: 'like' },
      { original: '喝', pronunciation: 'hē', meaning: 'drink' },
      { original: '咖啡', pronunciation: 'kāfēi', meaning: 'coffee' },
    ],
    literalTranslation: 'I like drink coffee',
    naturalTranslation: 'I like to drink coffee',
    notes: 'Chinese uses verb串 (chaining). 喜欢喝 = "like drink" (no "to"). 咖啡 is phonetic: kā-fēi = "coffee".',
  },
  {
    id: 'cn-3',
    language: 'mandarin',
    phrase: '你好吗？',
    segments: [
      { original: '你', pronunciation: 'nǐ', meaning: 'you' },
      { original: '好', pronunciation: 'hǎo', meaning: 'good/well' },
      { original: '吗？', pronunciation: 'ma?', meaning: '[question particle]' },
    ],
    literalTranslation: 'you good [question]?',
    naturalTranslation: 'How are you?',
    notes: '吗 (ma) turns statements into yes/no questions. Literally asking "You good?"',
  },
  {
    id: 'cn-4',
    language: 'mandarin',
    phrase: '我想去中国',
    segments: [
      { original: '我', pronunciation: 'wǒ', meaning: 'I' },
      { original: '想', pronunciation: 'xiǎng', meaning: 'want/think' },
      { original: '去', pronunciation: 'qù', meaning: 'go' },
      { original: '中国', pronunciation: 'Zhōngguó', meaning: 'China' },
    ],
    literalTranslation: 'I want go China',
    naturalTranslation: 'I want to go to China',
    notes: '中国 literally means "Middle Kingdom". Verb串: 想去 = "want go" (no "to"). No preposition needed.',
  },
  {
    id: 'cn-5',
    language: 'mandarin',
    phrase: '这是我的书',
    segments: [
      { original: '这', pronunciation: 'zhè', meaning: 'this' },
      { original: '是', pronunciation: 'shì', meaning: 'is' },
      { original: '我', pronunciation: 'wǒ', meaning: 'I/me' },
      { original: '的', pronunciation: 'de', meaning: '[possessive]' },
      { original: '书', pronunciation: 'shū', meaning: 'book' },
    ],
    literalTranslation: 'this is I [possessive] book',
    naturalTranslation: 'This is my book',
    notes: '的 (de) is the possessive particle. 我的 = "my". Word order: possessor + 的 + possessed.',
  },
];

/**
 * Get all glosses for a specific language
 */
export function getGlossesByLanguage(language: Language): Gloss[] {
  switch (language) {
    case 'spanish':
      return spanishGlosses;
    case 'japanese':
      return japaneseGlosses;
    case 'mandarin':
      return mandarinGlosses;
  }
}

/**
 * Get a random gloss for a language
 */
export function getRandomGloss(language: Language): Gloss {
  const glosses = getGlossesByLanguage(language);
  return glosses[Math.floor(Math.random() * glosses.length)];
}

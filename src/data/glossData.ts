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
  context?: string;      // Grammatical function and why it's used
  phonetic?: string;     // English-approximation pronunciation guide
  tone?: 1 | 2 | 3 | 4;  // Mandarin tone (1=flat, 2=rising, 3=dipping, 4=falling)
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
      {
        original: 'Buenos',
        pronunciation: 'BWEH-nos',
        meaning: 'good (masculine plural)',
        context: 'Adjective that must agree in gender (masculine) and number (plural) with the noun it modifies. Base form is "bueno".'
      },
      {
        original: 'días',
        pronunciation: 'DEE-as',
        meaning: 'days',
        context: 'Masculine plural noun. Spanish greetings literally say "good days/afternoons/nights" instead of just "good morning/afternoon/evening".'
      },
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
      {
        original: 'Me',
        pronunciation: 'meh',
        meaning: 'to-me',
        context: 'Indirect object pronoun. Indicates who receives the action. Comes BEFORE the verb in Spanish (unlike English).'
      },
      {
        original: 'gusta',
        pronunciation: 'GOOS-tah',
        meaning: 'it-pleases',
        context: 'Verb "gustar" (to please). Conjugated for 3rd person singular because "café" is the subject doing the pleasing. NOT "I like"!'
      },
      {
        original: 'el',
        pronunciation: 'el',
        meaning: 'the (masculine)',
        context: 'Definite article. Must match noun gender. "Café" is masculine, so we use "el" not "la".'
      },
      {
        original: 'café',
        pronunciation: 'kah-FEH',
        meaning: 'coffee',
        context: 'Masculine singular noun. This is the SUBJECT of the sentence - coffee is doing the pleasing!'
      },
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
      {
        original: '私',
        pronunciation: 'watashi',
        meaning: 'I',
        context: 'Personal pronoun (first person). Can be omitted in casual speech when context is clear.'
      },
      {
        original: 'は',
        pronunciation: 'wa',
        meaning: '[topic marker]',
        context: 'Particle that marks the topic of the sentence. Says "As for [私], ..." Sets up what you\'re talking about. Written は but pronounced "wa".'
      },
      {
        original: '学生',
        pronunciation: 'gakusei',
        meaning: 'student',
        context: 'Noun. Two kanji: 学 (study/learning) + 生 (person/life) = "study person".'
      },
      {
        original: 'です',
        pronunciation: 'desu',
        meaning: '[is]',
        context: 'Copula verb (links subject to description). Polite form of "to be". Makes the sentence formal. Casual equivalent is だ (da).'
      },
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
      {
        original: '我',
        pronunciation: 'wǒ',
        phonetic: 'WUH',
        tone: 3,
        meaning: 'I',
        context: 'Personal pronoun (1st person singular). Subject of the sentence. Can be omitted when context is clear.'
      },
      {
        original: '是',
        pronunciation: 'shì',
        phonetic: 'SHIR',
        tone: 4,
        meaning: 'am/is/are',
        context: 'Copula verb meaning "to be". Does NOT change form for different subjects - same for I/you/he/we/they. No conjugation!'
      },
      {
        original: '学生',
        pronunciation: 'xuéshēng',
        phonetic: 'shweh-SHUNG',
        tone: 2,
        meaning: 'student',
        context: 'Noun made of 2 characters: 学 (study/learning) + 生 (person/life) = "study person". Common character-building pattern.'
      },
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
      {
        original: '我',
        pronunciation: 'wǒ',
        phonetic: 'WUH',
        tone: 3,
        meaning: 'I',
        context: 'Personal pronoun. Subject of the sentence.'
      },
      {
        original: '喜欢',
        pronunciation: 'xǐhuan',
        phonetic: 'shee-HWAN',
        tone: 3,
        meaning: 'like',
        context: 'Verb meaning "to like/enjoy". Can be followed directly by another verb (no "to" needed). This is verb chaining!'
      },
      {
        original: '喝',
        pronunciation: 'hē',
        phonetic: 'HUH',
        tone: 1,
        meaning: 'drink',
        context: 'Verb meaning "to drink". Directly follows 喜欢 without needing "to" (unlike English "to drink"). Verb串 (chaining) pattern.'
      },
      {
        original: '咖啡',
        pronunciation: 'kāfēi',
        phonetic: 'kah-FAY',
        tone: 1,
        meaning: 'coffee',
        context: 'Noun. Phonetic transliteration: 咖 (kā) + 啡 (fēi) = "kāfēi" sounds like "coffee". Characters chosen for sound, not meaning.'
      },
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
      {
        original: '你',
        pronunciation: 'nǐ',
        phonetic: 'NEE',
        tone: 3,
        meaning: 'you',
        context: 'Personal pronoun (2nd person singular). Subject of the sentence.'
      },
      {
        original: '好',
        pronunciation: 'hǎo',
        phonetic: 'HOW',
        tone: 3,
        meaning: 'good/well',
        context: 'Adjective/stative verb meaning "good/fine/well". Can act as both adjective and verb in Chinese.'
      },
      {
        original: '吗？',
        pronunciation: 'ma?',
        phonetic: 'MAH?',
        tone: 1,
        meaning: '[question particle]',
        context: 'Question particle that turns statements into yes/no questions. Always comes at the end. No change to word order needed!'
      },
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
      {
        original: '我',
        pronunciation: 'wǒ',
        phonetic: 'WUH',
        tone: 3,
        meaning: 'I',
        context: 'Personal pronoun. Subject.'
      },
      {
        original: '想',
        pronunciation: 'xiǎng',
        phonetic: 'shee-AHNG',
        tone: 3,
        meaning: 'want/think',
        context: 'Verb meaning "to want/wish/think". Like 喜欢, can be followed directly by another verb. Verb chaining!'
      },
      {
        original: '去',
        pronunciation: 'qù',
        phonetic: 'chyoo',
        tone: 4,
        meaning: 'go',
        context: 'Verb "to go". Follows 想 directly (no "to"). Direction verbs don\'t need prepositions before destinations.'
      },
      {
        original: '中国',
        pronunciation: 'Zhōngguó',
        phonetic: 'JONG-gwoh',
        tone: 1,
        meaning: 'China',
        context: 'Proper noun. Literally "Middle Kingdom": 中 (middle/center) + 国 (country/kingdom). China\'s traditional name for itself!'
      },
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
      {
        original: '这',
        pronunciation: 'zhè',
        phonetic: 'JYEH',
        tone: 4,
        meaning: 'this',
        context: 'Demonstrative pronoun. Subject of the sentence. Points to something nearby.'
      },
      {
        original: '是',
        pronunciation: 'shì',
        phonetic: 'SHIR',
        tone: 4,
        meaning: 'is',
        context: 'Copula "to be". Same form for all subjects (no conjugation).'
      },
      {
        original: '我',
        pronunciation: 'wǒ',
        phonetic: 'WUH',
        tone: 3,
        meaning: 'I/me',
        context: 'Personal pronoun. Here used as possessor before 的.'
      },
      {
        original: '的',
        pronunciation: 'de',
        phonetic: 'DUH',
        tone: 1,
        meaning: '[possessive]',
        context: 'Possessive particle. Links possessor to possessed. Like English "\'s" but comes AFTER the possessor: 我的 = "my/mine".'
      },
      {
        original: '书',
        pronunciation: 'shū',
        phonetic: 'SHOO',
        tone: 1,
        meaning: 'book',
        context: 'Noun. The thing being possessed. Word order: possessor + 的 + possessed.'
      },
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

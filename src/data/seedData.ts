/**
 * Seed Data for PolyPath
 *
 * Initial vocabulary for Spanish, Japanese, and Mandarin
 * Organized by frequency and usefulness
 */

import { createBidirectionalCards } from '../lib/sm2';
import { Card } from '../types';

/**
 * Generate initial vocabulary cards for all languages
 */
export function getSeedCards(): Card[] {
  const cards: Card[] = [];

  // Spanish - Most common verbs and nouns (Category I language)
  const spanishVocab = [
    ['Hello', 'Hola'],
    ['Goodbye', 'Adiós'],
    ['Thank you', 'Gracias'],
    ['Please', 'Por favor'],
    ['Yes', 'Sí'],
    ['No', 'No'],
    ['I am', 'Yo soy'],
    ['You are', 'Tú eres'],
    ['He/She is', 'Él/Ella es'],
    ['We are', 'Nosotros somos'],
    ['To speak', 'Hablar'],
    ['To eat', 'Comer'],
    ['To drink', 'Beber'],
    ['To go', 'Ir'],
    ['To want', 'Querer'],
    ['To have', 'Tener'],
    ['To do/make', 'Hacer'],
    ['Water', 'Agua'],
    ['Food', 'Comida'],
    ['House', 'Casa'],
    ['Friend', 'Amigo/Amiga'],
    ['Family', 'Familia'],
    ['Day', 'Día'],
    ['Night', 'Noche'],
    ['Good morning', 'Buenos días'],
    ['Good afternoon', 'Buenas tardes'],
    ['Good night', 'Buenas noches'],
    ['How are you?', '¿Cómo estás?'],
    ['I\'m fine', 'Estoy bien'],
    ['Excuse me', 'Disculpe'],
    ['I don\'t understand', 'No entiendo'],
    ['Do you speak English?', '¿Hablas inglés?'],
    ['Where is...?', '¿Dónde está...?'],
    ['How much?', '¿Cuánto cuesta?'],
    ['One', 'Uno'],
    ['Two', 'Dos'],
    ['Three', 'Tres'],
    ['Four', 'Cuatro'],
    ['Five', 'Cinco'],
    ['Today', 'Hoy'],
    ['Tomorrow', 'Mañana'],
    ['Yesterday', 'Ayer'],
  ];

  let cardId = 0;
  spanishVocab.forEach(([english, spanish]) => {
    const [forward, reverse] = createBidirectionalCards(
      `spanish-${cardId++}`,
      'spanish',
      english,
      spanish
    );
    cards.push(forward, reverse);
  });

  // Japanese - Hiragana basics + common phrases
  const japaneseVocab = [
    ['Hello', 'こんにちは (konnichiwa)'],
    ['Good morning', 'おはよう (ohayou)'],
    ['Good evening', 'こんばんは (konbanwa)'],
    ['Goodbye', 'さようなら (sayounara)'],
    ['Thank you', 'ありがとう (arigatou)'],
    ['Thank you very much', 'ありがとうございます (arigatou gozaimasu)'],
    ['Yes', 'はい (hai)'],
    ['No', 'いいえ (iie)'],
    ['Excuse me', 'すみません (sumimasen)'],
    ['I\'m sorry', 'ごめんなさい (gomen nasai)'],
    ['I am', '私は (watashi wa)'],
    ['You are', 'あなたは (anata wa)'],
    ['This', 'これ (kore)'],
    ['That', 'それ (sore)'],
    ['What?', '何？ (nani?)'],
    ['Who?', '誰？ (dare?)'],
    ['Where?', 'どこ？ (doko?)'],
    ['When?', 'いつ？ (itsu?)'],
    ['Why?', 'なぜ？ (naze?)'],
    ['How?', 'どう？ (dou?)'],
    ['Water', '水 (mizu)'],
    ['Food', '食べ物 (tabemono)'],
    ['House', '家 (ie)'],
    ['Friend', '友達 (tomodachi)'],
    ['Family', '家族 (kazoku)'],
    ['To eat', '食べる (taberu)'],
    ['To drink', '飲む (nomu)'],
    ['To go', '行く (iku)'],
    ['To come', '来る (kuru)'],
    ['To see', '見る (miru)'],
    ['To speak', '話す (hanasu)'],
    ['To understand', '分かる (wakaru)'],
    ['I don\'t understand', '分かりません (wakarimasen)'],
    ['Do you speak English?', '英語を話しますか？ (eigo wo hanashimasu ka?)'],
    ['One', '一 (ichi)'],
    ['Two', '二 (ni)'],
    ['Three', '三 (san)'],
    ['Four', '四 (yon/shi)'],
    ['Five', '五 (go)'],
    ['Six', '六 (roku)'],
    ['Seven', '七 (nana/shichi)'],
    ['Eight', '八 (hachi)'],
    ['Nine', '九 (kyuu/ku)'],
    ['Ten', '十 (juu)'],
  ];

  japaneseVocab.forEach(([english, japanese]) => {
    const [forward, reverse] = createBidirectionalCards(
      `japanese-${cardId++}`,
      'japanese',
      english,
      japanese
    );
    cards.push(forward, reverse);
  });

  // Mandarin - Pinyin + Characters
  const mandarinVocab = [
    ['Hello', '你好 (nǐ hǎo)'],
    ['Good morning', '早上好 (zǎoshang hǎo)'],
    ['Goodbye', '再见 (zàijiàn)'],
    ['Thank you', '谢谢 (xièxie)'],
    ['You\'re welcome', '不客气 (bú kèqi)'],
    ['Yes', '是 (shì)'],
    ['No', '不是 (bú shì)'],
    ['Excuse me', '对不起 (duìbuqǐ)'],
    ['Sorry', '抱歉 (bàoqiàn)'],
    ['Please', '请 (qǐng)'],
    ['I am', '我是 (wǒ shì)'],
    ['You are', '你是 (nǐ shì)'],
    ['He/She is', '他/她是 (tā shì)'],
    ['We are', '我们是 (wǒmen shì)'],
    ['This', '这 (zhè)'],
    ['That', '那 (nà)'],
    ['What?', '什么？ (shénme?)'],
    ['Who?', '谁？ (shéi?)'],
    ['Where?', '哪里？ (nǎlǐ?)'],
    ['When?', '什么时候？ (shénme shíhou?)'],
    ['Why?', '为什么？ (wèishénme?)'],
    ['How?', '怎么？ (zěnme?)'],
    ['Water', '水 (shuǐ)'],
    ['Food', '食物 (shíwù)'],
    ['Rice', '米饭 (mǐfàn)'],
    ['House', '房子 (fángzi)'],
    ['Friend', '朋友 (péngyou)'],
    ['Family', '家人 (jiārén)'],
    ['To eat', '吃 (chī)'],
    ['To drink', '喝 (hē)'],
    ['To go', '去 (qù)'],
    ['To come', '来 (lái)'],
    ['To see', '看 (kàn)'],
    ['To speak', '说 (shuō)'],
    ['To understand', '懂 (dǒng)'],
    ['I don\'t understand', '我不懂 (wǒ bù dǒng)'],
    ['Do you speak English?', '你会说英语吗？ (nǐ huì shuō yīngyǔ ma?)'],
    ['One', '一 (yī)'],
    ['Two', '二 (èr)'],
    ['Three', '三 (sān)'],
    ['Four', '四 (sì)'],
    ['Five', '五 (wǔ)'],
    ['Six', '六 (liù)'],
    ['Seven', '七 (qī)'],
    ['Eight', '八 (bā)'],
    ['Nine', '九 (jiǔ)'],
    ['Ten', '十 (shí)'],
  ];

  mandarinVocab.forEach(([english, mandarin]) => {
    const [forward, reverse] = createBidirectionalCards(
      `mandarin-${cardId++}`,
      'mandarin',
      english,
      mandarin
    );
    cards.push(forward, reverse);
  });

  return cards;
}

/**
 * Initialize app with seed data if no cards exist
 */
export function initializeSeedData(existingCards: Card[]): Card[] {
  if (existingCards.length > 0) {
    return existingCards;
  }
  return getSeedCards();
}

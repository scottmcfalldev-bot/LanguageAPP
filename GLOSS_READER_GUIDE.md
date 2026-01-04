# Interlinear Gloss Reader - Visual Guide

## What Is This?

The **Gloss Reader** is a character-by-character breakdown tool that shows you **how different languages construct meaning**. It's called "interlinear glossing" in linguistics - the same technique used in academic language research.

---

## Why This Is Powerful

Most language apps teach you **what** words mean. This shows you **HOW** languages think differently.

**Example:** English says "I like coffee"
- **Spanish says:** "to-me it-pleases the coffee" (Me gusta el café)
- **Japanese says:** "I [topic] coffee [object] like do" (私はコーヒーが好きです)
- **Mandarin says:** "I like drink coffee" (我喜欢喝咖啡)

Understanding these structural differences is the key to fluency.

---

## Visual Layout

Here's what you'll see in the app:

### 1. Original Phrase (Large Display)
```
我喜欢喝咖啡
```

### 2. Character-by-Character Breakdown (Interlinear Gloss)
```
┌─────────┬─────────┬─────────┬─────────┐
│    我    │   喜欢   │    喝    │   咖啡   │
│   wǒ    │ xǐhuan  │    hē   │  kāfēi  │
│    I    │   like  │  drink  │ coffee  │
└─────────┴─────────┴─────────┴─────────┘
```

Each column shows:
- **Top:** Target language character/word
- **Middle:** Pronunciation (pinyin, romaji, etc.)
- **Bottom:** Literal English meaning

### 3. Translations
**Literal (word-for-word):**
> "I like drink coffee"

**Natural English:**
> "I like to drink coffee"

### 4. Grammar Notes
> Chinese uses verb chaining. 喜欢喝 = "like drink" (no "to"). 咖啡 is phonetic: kā-fēi = "coffee".

---

## Examples Across All Three Languages

### Spanish Example

**Original:** Me gusta el café

**Breakdown:**
```
┌─────────┬─────────┬─────────┬─────────┐
│   Me    │  gusta  │   el    │  café   │
│   meh   │ GOOS-tah│   el    │ kah-FEH │
│  to-me  │it-pleases│ the (m) │ coffee  │
└─────────┴─────────┴─────────┴─────────┘
```

**Literal:** "to-me it-pleases the coffee"
**Natural:** "I like coffee"

**Why this matters:** Spanish conceptualizes "liking" as something "pleasing you" rather than you "liking it". This is why the grammar is reversed!

---

### Japanese Example

**Original:** 私は学生です

**Breakdown:**
```
┌─────────┬─────────┬─────────┬─────────┐
│   私    │    は    │  学生   │  です   │
│watashi │   wa    │ gakusei │  desu   │
│   I     │ [topic] │ student │ [is]    │
└─────────┴─────────┴─────────┴─────────┘
```

**Literal:** "I [topic] student [is]"
**Natural:** "I am a student"

**Why this matters:** Japanese uses topic markers (は) instead of subjects. It's saying "As for me, (I am a) student" - topic-comment structure, not subject-verb.

---

### Mandarin Example

**Original:** 你好吗？

**Breakdown:**
```
┌─────────┬─────────┬─────────┐
│   你    │    好    │   吗？   │
│   nǐ    │   hǎo   │   ma?   │
│  you    │  good   │ [question]│
└─────────┴─────────┴─────────┘
```

**Literal:** "you good [question]?"
**Natural:** "How are you?"

**Why this matters:** Mandarin doesn't have a word for "how" in this context. It literally asks "You good?" and the 吗 particle turns it into a question.

---

## How to Use the Gloss Reader

### In Your Daily Session

After completing your SRS vocabulary review:

1. **See the original phrase** - Try to understand it first
2. **Click "Show Breakdown"** - Reveals the interlinear gloss
3. **Hover over each column** - Visual highlighting helps you track mappings
4. **Read the literal translation** - Often grammatically incorrect in English, but shows the LOGIC of the language
5. **Compare to natural translation** - See how we'd actually say it
6. **Read the grammar notes** - Understand WHY the structure is different

### Current Content

**Spanish:** 4 glosses
- Basic greetings and structure
- Verb conjugation (ser vs estar)
- Inverted "gustar" construction
- Adjective agreement

**Japanese:** 4 glosses
- Topic markers and particles
- SOV (Subject-Object-Verb) structure
- Kanji + hiragana combinations
- Polite forms (です/ます)

**Mandarin:** 5 glosses
- Character composition (学生 = study + life)
- Verb chaining (想去 = want go)
- Question particles (吗)
- Possessive structure (我的)

---

## Reading Direction

**All three languages read left-to-right in modern usage:**
- ✅ Spanish: Always left-to-right
- ✅ Japanese: Modern Japanese reads left-to-right (horizontal writing)
- ✅ Mandarin: Modern Mandarin reads left-to-right

**Note:** Classical Chinese and traditional Japanese vertical writing go right-to-left, top-to-bottom, but this app uses modern conventions.

---

## The Science Behind Glossing

This technique comes from linguistics research:

1. **Interlinear glossing** is the standard in academic papers about language structure
2. Shows **morpheme-by-morpheme** breakdown (smallest units of meaning)
3. Reveals **grammatical particles** (like Japanese は or Mandarin 的)
4. Exposes **different conceptual structures** between languages

**Research shows:** Understanding structural differences (not just memorizing words) leads to faster fluency and better comprehension.

---

## Pro Tips

### For Spanish Learners
- Pay attention to **adjective agreement** (buenos vs buenas)
- Notice **two forms of "to be"** (ser vs estar)
- Understand **inverted constructions** (me gusta = "it pleases me")

### For Japanese Learners
- Focus on **particles** (は、を、に、が) - they're the grammar!
- Remember **verb comes last** (Subject-Object-Verb)
- See how **kanji combines** to make new words (日本 = sun + origin = Japan)

### For Mandarin Learners
- Study **character components** (many share meanings/sounds)
- Learn **measure words** structure
- Understand **verb stacking** (no infinitive "to")
- Notice **particles at the end** (吗, 了, 呢)

---

## Adding Your Own Glosses

Want to add more examples? Edit `src/data/glossData.ts`:

```typescript
{
  id: 'your-id',
  language: 'spanish', // or 'japanese' or 'mandarin'
  phrase: 'Full phrase in target language',
  segments: [
    {
      original: 'Word',
      pronunciation: 'pronunciation',
      meaning: 'literal meaning'
    },
    // ... more segments
  ],
  literalTranslation: 'word-for-word English',
  naturalTranslation: 'natural English meaning',
  notes: 'Grammar explanation here'
}
```

---

## Why This Beats Translation Apps

**Google Translate gives you:**
> 我喜欢喝咖啡 → "I like to drink coffee"

**PolyPath shows you:**
```
我      喜欢     喝      咖啡
wǒ     xǐhuan   hē     kāfēi
I      like   drink  coffee

Chinese doesn't use "to" before verbs!
喜欢喝 = "like drink" (verb chaining)
```

One teaches you **translation**. The other teaches you **how to think in the language**.

---

**This is the feature that makes PolyPath fundamentally different from every other language app.**

You're not just memorizing - you're understanding the **architecture of language itself**.

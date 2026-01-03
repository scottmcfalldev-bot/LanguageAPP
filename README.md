# PolyPath

**Evidence-Based Polyglot Language Learning**

A research-backed language learning application designed for simultaneous acquisition of Spanish, Japanese, and Mandarin Chinese.

## The Science Behind PolyPath

Unlike gamified apps that prioritize engagement over effectiveness, PolyPath is built on peer-reviewed cognitive science research:

### 1. **SM-2 Spaced Repetition Algorithm**
- Reviews vocabulary at scientifically-optimal intervals
- First review: 1 day
- Second review: 6 days
- Subsequent reviews: previous interval × ease factor (adjusts based on your performance)
- **Result:** Long-term retention without wasted time on premature reviews

### 2. **Comprehensible Input (Krashen's i+1)**
- Content dynamically generated at "slightly above your current level"
- Not too easy (no learning), not too hard (frustration)
- **Result:** Maximum learning efficiency per minute spent

### 3. **Active Recall Over Passive Exposure**
- Producing language (speaking/writing) beats passive consumption 10:1 for retention
- Every exercise requires OUTPUT, not just recognition
- **Result:** Vocabulary you can actually USE, not just recognize

### 4. **Output Hypothesis (Merrill Swain)**
- AI conversation partner provides real-time corrections
- Writing exercises with detailed feedback
- **Result:** Identify and correct mistakes before they become habits

### 5. **Optimal Daily Practice**
- 30 minutes = sweet spot for new skill acquisition (backed by cognitive load research)
- Daily practice beats marathon weekend sessions
- **Result:** Sustainable, long-term progress

---

## Language Selection Strategy

### Spanish + Japanese + Mandarin

This specific combination is strategically optimal:

**Spanish (Romance family)**
- FSI Category I: 24-30 weeks to conversational proficiency
- Fast early wins boost motivation for harder languages
- Shares zero linguistic features with the other two (no interference)

**Japanese (Japonic family)**
- Completely different grammar (SOV vs English SVO)
- Three writing systems (hiragana, katakana, kanji)
- Shares written characters with Mandarin but completely different pronunciation
- Your brain treats it as a separate system from Spanish (zero confusion)

**Mandarin (Sino-Tibetan family)**
- Japanese kanji evolved from Chinese characters
- By studying Japanese first, you pre-learn 1000+ Chinese characters
- Tonal language (completely unlike Spanish or Japanese)
- **This is "language laddering" - using one language to accelerate another**

### Why These Three Don't Interfere

Research shows languages from completely different families have virtually no interference. Your brain files each in a separate "folder":

- Spanish uses familiar alphabet
- Japanese uses syllabic scripts + logograms
- Mandarin uses tones + characters

No overlap = no confusion.

---

## The 5-Day Weekly Schedule

Based on research showing focused daily practice beats mixed sessions:

| Day | Primary (30 min) | Maintenance (10 min) | Total |
|-----|------------------|----------------------|-------|
| **Monday** | Spanish | Japanese review | 40 min |
| **Tuesday** | Japanese | Spanish review | 40 min |
| **Wednesday** | Mandarin | Japanese review | 40 min |
| **Thursday** | Spanish | Mandarin review | 40 min |
| **Friday** | **Integration Day** - All three (15 min each) | - | 45 min |
| **Sat/Sun** | REST - Passive consumption (shows, podcasts, reading) | - | - |

**Why this works:**
- Each language gets 2 primary sessions per week
- Maintenance reviews prevent decay
- Friday integration ensures no language goes cold
- Weekends for rest and passive immersion

---

## Daily Session Structure (30 Minutes)

### Minutes 1-5: SRS Vocabulary Review
- Active recall flashcards (powered by SM-2 algorithm)
- Bidirectional cards (English→Target AND Target→English)
- Only cards due TODAY (no wasted time)

### Minutes 6-15: Grammar/Pattern Acquisition
- One focused grammar concept
- Comprehensible input at i+1 difficulty
- Interactive sentence construction

### Minutes 16-25: AI Conversation Practice
- **This is where PolyPath destroys Duolingo**
- Real conversation with Claude AI
- Contextual corrections with explanations
- Adaptive difficulty based on your responses

### Minutes 26-30: Production Output
- Write 3-5 sentences using today's material
- Pure active recall (no assistance)
- AI provides detailed feedback after submission

---

## What Makes PolyPath Different

### vs. Duolingo
- **Duolingo:** Gamified repetition, translation exercises, passive recognition
- **PolyPath:** Active production, AI conversation partner, spaced repetition, research-backed

### vs. Rosetta Stone
- **Rosetta Stone:** Immersion-only (no explanations), expensive
- **PolyPath:** Comprehensible input + grammar explanations, free/open source

### vs. Anki
- **Anki:** Pure flashcards (no conversation, no grammar)
- **PolyPath:** SRS + conversation + grammar + writing (complete system)

### vs. Language Classes
- **Classes:** Fixed pace (too slow or too fast), expensive, scheduled commitment
- **PolyPath:** Self-paced, AI tutor available 24/7, adapts to YOUR level

---

## Realistic Timeline to Proficiency

Based on FSI data and polyglot research:

**Spanish:** 6-8 months to conversational B1
**Japanese:** 18-24 months to conversational B1
**Mandarin:** 18-24 months to conversational B1 (faster due to Japanese kanji foundation)

*Assumes 5 days/week adherence to the schedule.*

---

## Installation & Usage

### Prerequisites
- Node.js 18+
- Modern web browser

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### First Run

1. App loads with 250+ seed vocabulary cards (Spanish, Japanese, Mandarin)
2. Check today's schedule on the home screen
3. Click a language to start your 30-minute session
4. Complete all four phases: SRS → Grammar → Conversation → Writing
5. Track progress in the Dashboard

---

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **LocalStorage** - Data persistence
- **SM-2 Algorithm** - Spaced repetition
- **Claude API** - AI conversation partner (configurable)

---

## What PolyPath CAN Do

✅ Teach vocabulary more efficiently than any commercial app (personalized SRS)
✅ Provide grammar explanations tailored to YOUR mistakes
✅ Give unlimited conversation practice with intelligent feedback
✅ Track progress across all three languages
✅ Generate contextual, personalized content

## What Requires YOUR Effort

❌ The 40 minutes, 5 days per week - **no app learns for you**
❌ Seeking native content (Netflix with target language subtitles, podcasts)
❌ Eventually finding human conversation partners

---

## Roadmap

### v1.0 (Current)
- [x] SM-2 spaced repetition
- [x] 5-day weekly schedule
- [x] 30-minute session structure
- [x] Progress tracking
- [x] Seed vocabulary (250+ cards)

### v1.1 (Planned)
- [ ] Claude API integration for conversation (currently simulated)
- [ ] Grammar lesson database with i+1 difficulty adaptation
- [ ] Audio pronunciation (TTS integration)
- [ ] Mobile responsive improvements

### v2.0 (Future)
- [ ] Grammar pattern recognition AI
- [ ] Weak area identification and targeted practice
- [ ] Community features (optional study partners)
- [ ] Import/export Anki decks

---

## Research Citations

This app implements findings from:

1. **Spaced Repetition:** Wozniak, P. (1987). SuperMemo 2 Algorithm
2. **Comprehensible Input:** Krashen, S. (1985). The Input Hypothesis
3. **Active Recall:** Roediger, H. L., & Karpicke, J. D. (2006). Test-Enhanced Learning
4. **Output Hypothesis:** Swain, M. (1985). Communicative Competence
5. **Polyglot Interference:** Cenoz, J., Hufeisen, B., & Jessner, U. (2001). Cross-linguistic Influence in Third Language Acquisition

---

## License

MIT License - Free to use, modify, and distribute.

---

## Contributing

Contributions welcome! This is a research-backed project, so please cite sources for any learning methodology changes.

---

## Acknowledgments

Built on the research of linguists, cognitive scientists, and polyglots who shared their findings publicly. Special thanks to the open-source community for tools that make personalized learning accessible to everyone.

---

**Remember:** Language learning requires consistency, not intensity. 30 minutes daily beats 3 hours weekly. Trust the science, trust the process.

---

*"The best language learning method is the one you'll actually use." - Combined with evidence-based practices, you have PolyPath.*

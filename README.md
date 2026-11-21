# SEG Academy – Unified Multi-Brand AI QR Review Generator

> A mobile-first, AI-powered multi-business review generation platform under the parent company **SEG Academy**, unifying five specialized brands through **one centralized reception QR code**.

---

## 1. Brand Hierarchy

```
SEG ACADEMY (Parent Brand)
│
├── SEG Academy
│   └── Stock Market & Financial Education
│
├── Career Dhara
│   └── Career Counselling & Admission Guidance
│
├── Techogies
│   └── IT Education & Technical Training
│
├── SHORAI
│   └── AI, Robotics & STEM Education
│
└── I2S – Imagination to Software
    └── Custom Software, AI Automation & Digital Marketing
```

---

## 2. Main Customer Journey

1. **Scan Reception QR Code**: A single centralized QR code is placed at the SEG Academy reception desk.
2. **Unified Landing Page**: The mobile-responsive portal displays all five specialized brands under SEG Academy.
3. **Select Brand**: Customer taps the brand they interacted with.
4. **Interactive Multi-Step Questionnaire**:
   - Tailored questions for each brand.
   - Intelligent MCQ cards, multi-select chips, and interactive star ratings.
   - **I2S Dynamic Question Engine**: Questions dynamically expand based on the services selected by the client (Website Development, SaaS, WhatsApp Automation, AI Agents, SEO, etc.).
5. **AI Review Generation**:
   - Synthesizes authentic, natural-language human reviews based on verified customer answers.
   - Enforces strict Google Review integrity policies (no false claims of profits or guaranteed admissions).
   - Generates in **English**, **Hindi**, or **Hinglish**.
   - Supports regeneration of phrasing variations.
6. **Edit, Copy & Google Reviews**:
   - Editable review textarea.
   - One-tap copy to clipboard with celebration feedback.
   - Continues to the brand's dedicated Google Review profile.

---

## 3. Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 + Custom Corporate Design Theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **QR Engine**: `qrcode.react` (SVG high-resolution generation with center branding)
- **Visual Analytics**: Recharts (Bar & Pie charts for reception statistics)
- **Confetti**: Canvas-confetti

---

## 4. Project Structure

```
seg-qr-review/
├── public/
│   └── brands/                  # Official brand logos and marks
│       ├── seg-academy-logo.png
│       ├── seg-mark.png
│       ├── careerdhara-logo.png
│       ├── techogies-logo.png
│       ├── shorai-logo.png
│       └── i2s-logo.png
├── src/
│   ├── brands/
│   │   ├── brandConfig.ts       # Central multi-brand registry & Google review URLs
│   │   ├── segAcademy.ts        # SEG Academy trading questionnaire
│   │   ├── careerDhara.ts       # Career Dhara counselling questionnaire
│   │   ├── techogies.ts         # Techogies IT training questionnaire
│   │   ├── shorai.ts            # SHORAI STEM & robotics questionnaire
│   │   └── i2s.ts               # I2S dynamic agency questionnaire engine
│   ├── components/
│   │   ├── BrandCard.tsx        # High-impact brand card with visual theme
│   │   ├── BrandHeader.tsx      # SEG Academy header with step counter
│   │   ├── GoogleReviewModal.tsx # Google review instructions & demo modal
│   │   ├── LanguageSelector.tsx # EN / HI / Hinglish selector
│   │   ├── MCQOptions.tsx       # Touch-friendly single & multi-select chips
│   │   ├── ProgressBar.tsx      # Animated step progress bar
│   │   ├── QuestionCard.tsx     # Animated question container
│   │   └── StarRating.tsx       # Interactive 1–5 star rating
│   ├── pages/
│   │   ├── LandingPage.tsx      # Unified parent company landing page
│   │   ├── ReviewFlow.tsx       # Multi-step questionnaire with dynamic routing
│   │   ├── ReviewResult.tsx     # AI review editor, languages, copy & Google review
│   │   ├── QRCodePage.tsx       # Centralized reception counter tent QR preview
│   │   └── Dashboard.tsx        # Frontend admin & analytics preview
│   ├── services/
│   │   ├── geminiService.ts     # Google Gemini API backend architecture abstraction
│   │   ├── reviewGenerator.ts   # Rule-based natural review generator (EN/HI/Hinglish)
│   │   └── storageService.ts    # LocalStorage draft persistence & submission logging
│   ├── types/
│   │   ├── brand.ts             # Brand configuration and theme types
│   │   └── review.ts            # Questionnaire and submission models
│   ├── App.tsx                  # Main application orchestrator & deep-link router
│   ├── index.css                # Tailwind CSS & custom design tokens
│   └── main.tsx                 # Entrypoint
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 5. Google Review URL Configuration

All Google Review links are centrally managed in `src/brands/brandConfig.ts`.

Replace the placeholders with live Google Business Profile Place IDs:
- **SEG Academy**: `https://g.page/r/YOUR_SEG_PLACE_ID/review`
- **Career Dhara**: `https://g.page/r/YOUR_CAREER_DHARA_PLACE_ID/review`
- **Techogies**: `https://g.page/r/YOUR_TECHOGIES_PLACE_ID/review`
- **SHORAI**: `https://g.page/r/YOUR_SHORAI_PLACE_ID/review`
- **I2S**: `https://g.page/r/YOUR_I2S_PLACE_ID/review`

When `isConfiguredGoogleUrl: false`, the app gracefully displays a demo preview modal with instructions so users are never redirected to broken URLs.

---

## 6. Future Google Gemini Backend Architecture

In production, frontend submissions can be forwarded to a secure backend endpoint (e.g. `/api/generate-review` or Supabase Edge Function) that invokes Google Gemini 2.5 Flash / Gemini 3.8 Flash using `@google/genai`:

```typescript
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: promptWithStrictGuardrails,
  config: { temperature: 0.7 }
});
```

*Note: Never expose Gemini API keys in client-side bundles.*

---

## 7. Running the Application

```bash
# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

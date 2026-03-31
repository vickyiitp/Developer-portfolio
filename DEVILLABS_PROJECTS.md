# Devil Labs: Project Catalog (Categorized)

## Proposed Data Structure & Types

```tsx
export type ProjectCategory = 
  | "Landing Pages" 
  | "Full Stack Websites" 
  | "Automation Tools" 
  | "AI Tools" 
  | "Utilities Tools" 
  | "Others";

export interface DevilLabsProject {
  id: string;             
  name: string;           
  description: string;    
  language: string;       
  tags: string[];         
  category: ProjectCategory; // Added category
  github_url: string;     
  live_demo: string | null; 
}
```

---

## Processed & Categorized Projects

### 📁 Landing Pages

- **Developer Portfolio — Devil Labs** (`Developer-portfolio`) — Next.js 16, 3D UI, Portfolio
- **Prop View Demo** (`Prop--View--Demo`) — Real Estate, Showcase
- **MenuCraft** (`Menu-Craft-demo`) — Restaurant SaaS, Landing Page
- **Fit-Launch** (`Fit-launch-demo`) — Fitness, Landing Page
- **Cosmic Genesis** (`Cosmic-Genesis`) — Interactive Web, Space Explorer
- **Indigo Lens Services** (`indigo-lens-demo`) — 3D Effects, UI Agency

### 📁 Full Stack Websites

- **SplitMate** (`Spilt-Pro-demo`) — Next.js, Finance, UPI
- **Hisaab** (`hisaab`) — Next.js, DB Storage
- **EduStream App** (`-EduStream-Classes-app-for-cochin`) — EdTech, Streaming

### 📁 Automation Tools

- **Invoice Flow Automation** (`Invoice-Flow-Automation-tool`) — Automation, Invoicing
- **SocialQueue Engine** (`Soical-Queue-Automation-Tool`) — Social Media, Automation
- **WhatsApp Bulk Messenger** (`WhatsappBulk-automation-tools`) — WhatsApp API, Bulk Messaging

### 📁 AI Tools

- **Resume Architect AI** (`resume-ai`) — AI Service, Resume Builder
- **ShivaTri Venture OS** (`ShivaTri`) — Gemini AI, Startup Engine
- **Cupid's Whisper AI** (`Valentine-Day-Gift`) — Generative AI, Interactive Web
- **Sovereign-AI Green Tracker** (`Sovereign-AI-Green-Tracker`) — AI Auditor, Sustainability
- **Ghost-Agent Intelligence** (`vicky-ghost-agent`) — Gemini 2.5, Stealth Agent
- **CyberAI Inspector** (`CyberAI-Inspector-`) — Cybersecurity, AI Tooling
- **NoDepression AI** (`NoDepression-AI`) — AI Chatbot, Mental Health
- **DevilFintech AI Evaluator** (`devilfintech-ai`) — FinServ, Gemini AI

### 📁 Utilities Tools

- **Bio-Hub** (`Bio-Hub-Demo`) — Link Management, Creator Tools
- **QR Menu Gen** (`QR-Menu-Generator-Demo`) — PDF Processing, QR Code
- **DevScript Hub** (`DevScript`) — PWA, Utility Hub
- **Video Downloader** (`video_downloader_app`) — Python, Utility
- **MindSpark Hub 100** (`100Games`) — Gaming Hub, Puzzles
- **Precision Timer App** (`timer-stopwatch-app`) — Utility, Timer
- **TypeX 2025** (`typeX-vickyiitp`) — Education, Typing

### 📁 Others

- **OS Building** (`os-building`) — C++, Architecture
- **Capstone Projects** (`Capstone`) — HTML, College Project
- **GitHub Profile Config** (`vickyiitp`) — Markdown, Config


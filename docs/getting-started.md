# 🚀 React Atlas - Getting Started

Welcome to **React Atlas**!

React Atlas is an architecture intelligence platform that analyzes React applications and transforms them into interactive architecture graphs.

Whether you're exploring an unfamiliar codebase, reviewing project architecture, or identifying dependency issues, React Atlas helps you understand React projects in minutes.

---

# ✨ Features

React Atlas provides powerful architecture analysis capabilities.

## Project Analysis

- React Component Detection
- JSX Component Relationship Extraction
- Import Analysis
- Dependency Analysis
- Route Discovery
- Circular Dependency Detection
- Architecture Health Analysis

---

## Visualization

- Interactive Architecture Graph
- Component Relationship Navigation
- MiniMap
- Searchable Components
- Route Dashboard
- Architecture Insights

---

## Repository Analysis

- ZIP Project Upload
- Public GitHub Repository Analysis
- Automatic Repository Cleanup

---

## Intelligence

- Architecture Health Score
- Root Component Detection
- Leaf Component Detection
- Dead Component Detection
- Most Imported Components
- Route Summary
- Circular Dependency Detection

---

# 📁 Repository Structure

```text
react-atlas/
│
├── apps/
│   └── web/
│       ├── app/
│       ├── components/
│       ├── hooks/
│       └── styles/
│
├── packages/
│   ├── parser-engine/
│   └── api-server/
│
├── docs/
│   ├── getting-started.md
│   └── releases/
│
└── README.md
```

---

# 📋 Prerequisites

Before running React Atlas, ensure you have:

- Node.js 20+
- npm 10+
- Git

Verify your installation:

```bash
node -v
npm -v
git --version
```

---

# ⚙️ Installation

Clone the repository.

```bash
git clone https://github.com/mondalasit/react-atlas.git
cd react-atlas
```

---

## Install Parser Engine

```bash
cd packages/parser-engine
npm install
```

---

## Install API Server

```bash
cd ../api-server
npm install
```

---

## Install Web Application

```bash
cd ../../apps/web
npm install
```

---

# ▶️ Running React Atlas

## Start the API Server

```bash
cd packages/api-server
npm run dev
```

Server:

```text
http://localhost:4000
```

---

## Start the Web Application

```bash
cd apps/web
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🚀 Using React Atlas

## Analyze a ZIP Project

1. Open React Atlas.
2. Upload a React project ZIP file.
3. Click **Upload & Analyze**.
4. Explore the generated architecture graph.

---

## Analyze a GitHub Repository

1. Open React Atlas.
2. Paste a public GitHub repository URL.
3. Click **Analyze Repository**.
4. Explore the generated architecture dashboard.

Example repositories:

```text
https://github.com/facebook/react
https://github.com/vercel/next.js
```

---

# 🔍 Analysis Pipeline

```text
               React Project
                     │
      ┌──────────────┴──────────────┐
      │                             │
 ZIP Upload                 GitHub Repository
      │                             │
      └──────────────┬──────────────┘
                     │
             Project Scanner
                     │
           React Component Detection
                     │
            JSX Relationship Parser
                     │
             Import & Dependency Analysis
                     │
             Route Discovery Engine
                     │
        Circular Dependency Detection
                     │
           Architecture Intelligence
                     │
         Interactive Dashboard & Graph
```

---

# 📊 Dashboard Overview

After analysis, React Atlas provides:

- Interactive Architecture Graph
- Architecture Health Score
- Summary Dashboard
- Route Discovery
- Architecture Insights
- Circular Dependencies
- Component Intelligence

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Flow

## Backend

- Express.js
- TypeScript
- Multer

## Analysis Engine

- Babel Parser
- TypeScript AST
- Custom Graph Builder

---

# 📂 Generated Analysis

React Atlas generates:

- Component Graph
- Component Metadata
- Import Relationships
- Route Information
- Circular Dependency Report
- Architecture Metrics
- Health Score

---

# 🧪 Tested With

React Atlas has been tested with projects built using:

- React
- Next.js
- Vite
- TypeScript
- JavaScript

---

# 🐞 Troubleshooting

## API Server Not Running

Ensure the backend is started:

```bash
cd packages/api-server
npm run dev
```

---

## Frontend Cannot Connect

Verify the API server is running on:

```text
http://localhost:4000
```

---

## GitHub Analysis Fails

Check that:

- Git is installed
- Repository is public
- Internet connection is available

---

# 📚 Documentation

Additional documentation can be found in:

```text
docs/
├── getting-started.md
└── releases/
```

---

# 🚀 Roadmap

## v1.4 — Architecture Intelligence+

- Component Details Panel
- Dependency Explorer
- Route Graph Visualization
- Architecture Metrics
- Component Search
- Impact Analysis

---

## v1.5 — State Intelligence

- React Context Analysis
- Redux Analysis
- Zustand Analysis
- State Flow Visualization

---

## v2.0 — AI Architecture Assistant

- AI Architecture Reports
- Refactoring Suggestions
- Dependency Explanations
- Architecture Smell Detection
- Performance Recommendations

---

# 📦 Current Release

```text
Version : v1.3.0

Codename : Route Intelligence Release

Status : Stable
```

---

Happy Exploring! 🚀
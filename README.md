# React Atlas

> **Open-source architecture visualization toolkit for React applications.**

Analyze, visualize, and understand React codebases in minutes.

React Atlas transforms React projects into interactive architecture graphs, helping developers explore components, routes, dependencies, and overall application architecture without manually navigating hundreds of files.

---

## ✨ Features

- 🕸 Interactive Architecture Graph
- 🧩 Component Intelligence
- 🛣 Automatic Route Discovery
- 🔄 Circular Dependency Detection
- ❤️ Architecture Health Analysis
- 📊 Architecture Metrics
- 🌐 GitHub Repository Analysis
- 📦 ZIP Project Analysis
- 📤 JSON Export
- ⚡ Fast AST-based Parser

---

## 📸 Screenshots

> Screenshots and demo GIFs will be added soon.

- Dashboard
- Architecture Graph
- Route Intelligence
- Component Details
- Architecture Insights

---

## 🚀 Why React Atlas?

Modern React applications quickly become difficult to understand.

React Atlas automatically analyzes your project and provides:

- Component relationships
- Dependency graphs
- Route visualization
- Circular dependency detection
- Architecture metrics
- Project health analysis

Whether you're onboarding to a new codebase, reviewing architecture, or maintaining a large application, React Atlas helps you understand your project faster.

---

# Features

## 📦 Project Analysis

Analyze React projects using either:

- ZIP Upload
- Public GitHub Repository

Supported projects:

- React
- TypeScript React
- JavaScript React
- Functional Components
- Arrow Function Components

---

## 🌐 GitHub Repository Analysis

Analyze public GitHub repositories directly.

Workflow

```text
GitHub Repository
        │
        ▼
Clone Repository
        │
        ▼
Parser Engine
        │
        ▼
Architecture Analysis
        │
        ▼
Interactive Dashboard
```

Features

- Automatic cloning
- Instant analysis
- Automatic cleanup
- No ZIP download required

---

## 📂 ZIP Analysis

Upload any React project as a ZIP file.

Features

- Automatic extraction
- Project parsing
- Architecture generation
- Interactive visualization

---

## 🕸 Architecture Visualization

Powered by React Flow.

Features

- Interactive Graph
- Component Relationships
- Parent-Child Navigation
- Search
- MiniMap
- Zoom Controls
- Dependency Navigation

---

## 🧩 Component Intelligence

Inspect every component.

Displays:

- Component Name
- Component Type
- File Path
- Imports
- Child Components
- Relationships

---

## 🛣 Route Intelligence

Automatically discover routes.

Includes

- Static Routes
- Dynamic Routes
- Route Dashboard
- Route Metrics
- Route Summary

---

## ❤️ Architecture Intelligence

Generate project insights automatically.

Metrics

- Total Components
- Relationships
- Root Components
- Leaf Components
- Dead Components
- Most Imported Components
- Circular Dependencies
- Architecture Health Score

---

## 📤 Export

Export analysis as

- JSON
- Graph Metadata
- Architecture Metrics

---

# Architecture

```text
                  React Project
                        │
        ┌───────────────┴───────────────┐
        │                               │
   ZIP Upload                  GitHub Repository
        │                               │
        └───────────────┬───────────────┘
                        │
                  Parser Engine
                        │
                 Graph Builder
                        │
               Analysis Engine
                        │
            Architecture Dashboard
```

---

# Repository Structure

```text
react-atlas/
│
├── apps/
│   └── web/
│
├── packages/
│   ├── parser-engine/
│   └── api-server/
│
├── docs/
│
└── README.md
```

---

# Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Flow

### Backend

- Express.js
- TypeScript
- Multer

### Analysis

- Babel Parser
- TypeScript AST
- Custom Graph Builder

---

# Installation

Clone the repository.

```bash
git clone https://github.com/mondalasit/react-atlas.git

cd react-atlas
```

Install dependencies.

```bash
cd packages/parser-engine
npm install

cd ../api-server
npm install

cd ../../apps/web
npm install
```

---

# Running React Atlas

Start the API server.

```bash
cd packages/api-server
npm run dev
```

Start the web application.

```bash
cd apps/web
npm run dev
```

Open:

```
http://localhost:3000
```

---

# Roadmap

## v1.4 — Architecture Intelligence

- Component Details Panel
- Dependency Explorer
- Impact Analysis
- Architecture Metrics
- Component Search
- Advanced Filtering

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
- Performance Insights
- Plugin Ecosystem
- VS Code Extension
- CLI

---

# Documentation

Project documentation is available in the `docs/` directory.

Release notes are available in:

```
docs/releases/
```

---

# Contributing

Contributions are welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

Please read **CONTRIBUTING.md** before submitting a pull request.

---

# License

This project is licensed under the MIT License.

---

# Author

**Asit Mondal**

GitHub: https://github.com/mondalasit

---

# Support

If React Atlas helps you, consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- 🤝 Contributing

Every contribution helps improve React Atlas for the community.

---

<div align="center">

### Build better React architectures with React Atlas 🚀

</div>
# React Atlas v1.0

Visualize, understand, and analyze any React codebase in minutes.

React Atlas transforms React projects into interactive architecture graphs, helping developers understand component relationships, project structure, and application flow without manually tracing files.

---

## Features

### Project Analysis

* Scan React projects automatically
* Parse JavaScript and TypeScript React components
* Detect functional and arrow-function components
* Extract JSX component relationships
* Analyze imports and dependencies
* Build component hierarchy graphs

### Architecture Visualization

* Interactive graph visualization powered by React Flow
* Component-to-component relationship mapping
* Parent-child component hierarchy
* Architecture exploration through visual graphs

### ZIP Upload Analysis

* Upload React projects as ZIP files
* Automatic extraction and analysis
* No manual configuration required
* Instant architecture generation

### API-Driven Architecture

* REST API for project analysis
* Scalable backend architecture
* Extensible parser engine

---

## Architecture

React Atlas consists of three main parts:

```text
React Project
      ↓
Parser Engine
      ↓
Graph Builder
      ↓
API Server
      ↓
Web Interface
      ↓
Interactive Architecture Graph
```

### Repository Structure

```text
react-atlas
│
├── apps
│   └── web
│
├── packages
│   ├── parser-engine
│   └── api-server
│
└── docs
```

---

## Tech Stack

Frontend:

* Next.js
* React
* TypeScript
* React Flow

Backend:

* Express.js
* TypeScript
* Multer
* Adm-Zip

Analysis Engine:

* Babel Parser
* AST Traversal
* Custom Graph Builder

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/react-atlas.git
cd react-atlas
```

Install dependencies:

```bash
cd packages/parser-engine
npm install

cd ../api-server
npm install

cd ../../apps/web
npm install
```

---

## Running React Atlas

### Start API Server

```bash
cd packages/api-server
npm run dev
```

Server:

```text
http://localhost:4000
```

### Start Web Application

```bash
cd apps/web
npm run dev
```

Application:

```text
http://localhost:3000
```

---

## Usage

1. Open React Atlas
2. Upload a React project ZIP file
3. Click Upload & Analyze
4. Explore the generated architecture graph

---

## Current Capabilities

React Atlas v1.0 can:

* Detect React components
* Extract JSX component usage
* Analyze imports
* Build component graphs
* Visualize project architecture
* Process uploaded ZIP projects

---

## Roadmap

### v1.1

* Route Analysis
* React Router support
* Next.js App Router support

### v1.2

* Context Analysis
* Redux Analysis
* Zustand Analysis

### v1.3

* Hook Dependency Graphs
* State Flow Visualization

### v2.0

* AI Architecture Insights
* Architectural Smell Detection
* Performance Recommendations
* Refactoring Suggestions

---

## License

MIT License

---

Built with ❤️ using React, TypeScript, AST Analysis, and Graph Visualization.

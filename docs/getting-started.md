# React Atlas - Getting Started

React Atlas is a developer intelligence platform for React applications.

It analyzes React source code and generates interactive architecture visualizations.

---

## Features

Current features:

* Project Scanner
* React Component Detection
* JSX Child Component Extraction
* Import Analysis
* Component Relationship Filtering
* Graph Builder
* React Flow Visualization

---

## Repository Structure

react-atlas/

├── apps/
│   └── web/
│
├── packages/
│   └── parser-engine/
│
├── docs/
│
└── README.md

---

## Prerequisites

* Node.js 20+
* npm 10+

Verify installation:

```bash
node -v
npm -v
```

---

## Install Dependencies

Parser Engine:

```bash
cd packages/parser-engine
npm install
```

Frontend:

```bash
cd apps/web
npm install
```

---

## Run Parser Engine

```bash
cd packages/parser-engine

npx ts-node test.ts
```

Output:

* Components
* Imports
* JSX Children
* Real Component Relationships
* Graph JSON

---

## Run Web Application

```bash
cd apps/web

npm run dev
```

Open:

http://localhost:3000

You should see the React Flow graph visualization.

---

## Current Workflow

React Project
↓
Project Scanner
↓
Component Detection
↓
Child Component Extraction
↓
Import Analysis
↓
Relationship Filtering
↓
Graph Builder
↓
React Flow Visualization

---

## Roadmap

Upcoming features:

* API Integration
* Project Upload
* Route Analysis
* Context Analysis
* Hook Analysis
* Runtime Analysis
* AI Architecture Insights

---

## Status

Current Version:

v0.1.0

React Atlas can visualize component relationships using React Flow and generate architecture graphs from analyzed React source code.

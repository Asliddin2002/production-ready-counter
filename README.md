# ⚡ Production-Ready Counter

A modern production-ready React starter template, designed to teach best practices around:

✅ Testing (Vitest + RTL)

✅ Test Coverage

✅ Linting (ESLint)

✅ Formatting (Prettier)

✅ Git Hooks (Husky + lint-staged)

✅ GitHub Actions CI Pipeline

✅ API Mocking

✅ Windowed Rendering (react-virtuoso)

✅ TypeScript

✅ Docker Support

This project goes beyond the default Vite template by demonstrating real-world project quality tools with a small but functional UI.

## 🚀 Features

### 🧪 Testing

- Vitest test runner

- React Testing Library

- Test coverage reports

- API mocking

- Component tests for:
  - Counter UI

  - Post fetching

  - Virtualized list rendering

### 🧹 Code Quality

- ESLint with React + TypeScript rules

- Prettier (auto-formatting)

- Husky pre-commit hooks

- lint-staged for staged formatting

- Type-checking script (tsc --noEmit)

### 🔄 CI / CD Pipeline

- GitHub Actions workflow that runs on every push:

- Install deps

- Run ESLint

- Run type-checking

- Run tests

- Run build

### 🐋 Docker Support

Production-ready Dockerfile using multi-stage build:

- Stage 1: Build Vite app

- Stage 2: Serve via Nginx

## 📦 Installation

Clone the project:

```bash
git clone https://github.com/Asliddin2002/production-ready-counter.git
cd production-ready-counter
```

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Generate coverage:

```bash
npm run coverage
```

## 💡 Why this project exists?

- To simulate a production-grade environment in a simple React starter template — suitable for:

- Learning best practices

- Onboarding junior devs

- Creating templates for future apps

- Interview preparation

- Practicing testing & CI

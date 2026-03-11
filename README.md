# MBTI Assessment Platform

This is a modern web application built with [Next.js](https://nextjs.org) (App Router), React, [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It offers a beautifully designed, responsive MBTI personality assessment experience.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Workflows

We use modern tooling to ensure code quality and consistency.

### Code Formatting and Linting

This project uses **Prettier** and **ESLint** to format code securely. We also enforce code quality hooks via **Husky** and **lint-staged**, which automatically format code before you commit.

To format code manually across the whole project:

```bash
npm run format
```

To run lint checks:

```bash
npm run lint
```

### Automated Testing

This project incorporates **Jest** alongside **React Testing Library** for automated testing.

To run the test suite:

```bash
npm run test
```

To run the test suite in watch mode (ideal during active development):

```bash
npm run test:watch
```

## Production Build

To build the static application and verify there are no TypeScript errors:

```bash
npm run build
```

The output can then be started with `npm run start`.

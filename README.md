# Klang App

This is a Next.js project created as a test for a job application at **Klang Games**.

## Overview

This application demonstrates the use of Next.js with the App Router, along with various modern web development tools and practices. It includes:

- **Server-Side Rendering (SSR)**
- **Incremental Static Regeneration (ISR)**
- **API Routes**
- **Comprehensive Testing** with Jest and Playwright
- **Styling** with Tailwind CSS and Heroicons

## Features

- **Next.js 14** with the App Router
- **TypeScript** for static type checking
- **Tailwind CSS** for utility-first CSS styling
- **Heroicons** for beautiful icons
- **Server-Side Rendering (SSR)** and **Incremental Static Regeneration (ISR)**
- **API Routes** for serverless functions
- **Unit Testing** with Jest and React Testing Library
- **End-to-End Testing** with Playwright
- **Code Linting** with ESLint
- **Code Formatting** with Prettier
- **Pre-commit Hooks** with Husky and lint-staged

## Getting Started

### Prerequisites

- **Node.js** (version >= 20.0.0)
- **npm**, **yarn**, or **pnpm**

### Installation

**Clone the repository:**

> git clone https://github.com/yourusername/klang-app.git

> cd klang-app

### Install dependencies:

**Using npm**
> npm install

**Using yarn**
> yarn install

**Using pnpm**
> pnpm install

### Running the Development Server

**Using npm**
> npm run dev

**Using yarn**
> yarn dev

**Using pnpm**
> pnpm dev

Open http://localhost:3000 with your browser to see the application.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

### Building for Production
**Build the application:**

> npm run build

**Start the production server:**

> npm run start

### Linting and Formatting
**Run ESLint to check for linting errors:**

> npm run lint

**Format code with Prettier:**

> npm run format

## Testing

### Unit and Integration Tests with Jest

**Run all tests:**

> npm run test

### End-to-End Tests with Playwright

**Run E2E tests:**

> npm run test:e2e

### Pre-commit Hooks
This project uses Husky and lint-staged to automatically lint and format code before commits.

### Project Structure
- app/: Contains Next.js App Router pages.
- components/: Reusable React components.
- public/: Static assets like images and fonts.
- styles/: Global styles and Tailwind CSS configurations.
- __tests__/: Unit and integration tests.
- e2e/: End-to-end tests with Playwright.

### Package Information
Key dependencies and devDependencies from package.json:

**Dependencies**
- next: ^14.2.13
- react: ^18.3.1
- react-dom: ^18.3.1
- @heroicons/react: ^2.1.5
- DevDependencies
- TypeScript: ^5.6.2
- Jest: ^29.7.0
- @testing-library/react: ^16.0.1
- @testing-library/jest-dom: ^6.5.0
- @playwright/test: ^1.47.1
- ESLint: ^8.57.1
- Prettier: ^3.3.3
- Tailwind CSS: ^3.4.1
- Husky: ^9.1.6
- lint-staged: ^15.2.10
For the full list of dependencies, refer to the package.json file.

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.

Contact
If you have any questions or feedback, feel free to contact me at [bryanottho@gmail.com].
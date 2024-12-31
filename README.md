# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## TypeScript Paths Configuration

This repository uses TypeScript paths to simplify module resolution and imports. The paths are configured in the `tsconfig.json` files of the respective apps and packages.

For example, in the `apps/client/tsconfig.app.json` file, the paths configuration looks like this:

```json
"paths": {
  "@/*": ["src/*"]
}
```

This allows you to import modules using the `@` alias instead of relative paths. For instance, you can import a module from the `src` directory like this:

```typescript
import { trpc } from "@/utils";
```

## How to Run the App

To run the app, follow these steps:

1. Install dependencies:

```sh
pnpm install
```

2. Start the development server for the client app:

```sh
cd apps/client
pnpm dev
```

3. Start the development server for the server app:

```sh
cd apps/server
pnpm dev
```

## Repository Structure

This repository is structured as a monorepo using Turborepo. It contains the following directories:

- `apps/client`: The client-side application built with React and Vite.
- `apps/server`: The server-side application built with Express and tRPC.
- `packages`: Shared packages and utilities used by both the client and server apps.

### Client App

The client app is a React application bootstrapped with Vite. It uses React Query for data fetching and state management, and tRPC for type-safe API communication with the server.

### Server App

The server app is an Express application that uses tRPC for type-safe API endpoints. It also includes middleware for handling cookies, CORS, and environment variables.

### Shared Packages

The `packages` directory contains shared packages and utilities that are used by both the client and server apps. This includes TypeScript configurations, ESLint configurations, and other shared code.

## Turbo Repo

This repository uses Turborepo to manage the monorepo structure and handle tasks such as building, linting, and running the development servers. Turborepo provides efficient task scheduling and caching, making it easier to work with large monorepos.

To learn more about Turborepo, visit the [official documentation](https://turbo.build/repo/docs).

## Conclusion

This repository provides a robust setup for developing a full-stack application using React, Vite, Express, and tRPC. By leveraging Turborepo, it ensures efficient task management and caching, making development smoother and more efficient.


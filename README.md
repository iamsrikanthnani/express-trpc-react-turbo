# Express-trpc-react-turbo starter

This repository uses Turborepo to manage the monorepo structure and handle tasks such as building, linting, and running the development servers. Turborepo provides efficient task scheduling and caching, making it easier to work with large monorepos.

To learn more about Turborepo, visit the [official documentation](https://turbo.build/repo/docs).

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
2. to run all(from root)

```sh
pnpm run dev
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




## Conclusion

This repository provides a robust setup for developing a full-stack application using React, Vite, Express, and tRPC. By leveraging Turborepo, it ensures efficient task management and caching, making development smoother and more efficient.


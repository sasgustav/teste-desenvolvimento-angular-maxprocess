# Angular JWT Auth Challenge Improvements

This repository contains a simple Angular application used for the MaxProcess technical test. The original project provided basic authentication, a chart page and a user list. This fork includes some small improvements to showcase better structure and practices.

## Setup

```bash
npm install
npm start
```
The repository now includes the standard Angular configuration files such as `package.json`, `tsconfig` and `polyfills.ts` required to run the application.

## Implemented Improvements

- **Environment configuration**: added `environment.ts` and `environment.prod.ts` to centralise API url management.
- **Production mode bootstrap**: `main.ts` now enables production mode when building for production.
- **Token usage**: `AuthService` consumes the API base URL from the environment files.
- **AuthGuard**: checks JWT expiration before granting access to protected routes.

These changes aim to make the project easier to maintain and slightly more secure.

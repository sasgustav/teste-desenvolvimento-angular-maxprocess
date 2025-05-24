# Angular JWT Auth Challenge Improvements

This repository contains a simple Angular application used for the MaxProcess technical test. The original project provided basic authentication, a chart page and a user list. This fork includes some small improvements to showcase better structure and practices. Since the environment doesn't include `chart.js`, the dashboard now displays a simple table instead of a bar chart.

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

## Additional Analysis

The base project already demonstrated a straightforward JWT authentication flow using an interceptor and route protection. However all component templates were inline and API calls were mixed inside components.

### Suggested Improvements
- Extract API requests into services for better separation of concerns.
- Handle token expiration and 401 errors globally.
- Provide basic navigation and logout functionality.
- Use external templates and styles to keep components clean.

### What Was Implemented
- Created `UserService` encapsulating user API access.
- Added logout method and global error handling in `TokenInterceptor`.
- Introduced navigation header with logout button in `AppComponent`.
- Converted components to use their own HTML and CSS files.
- Enabled animations module required by PrimeNG.

These changes make the example closer to a real world Angular application and easier to extend.

# Fluent UI v9 Examples

This repo is an example gallery for building React + TypeScript pages and layouts with [Microsoft Fluent UI v9](https://react.fluentui.dev/) (`@fluentui/react-components`).

The project is intentionally organized so each example lives in its own source file and can be browsed quickly from both the app UI and the repository.



## Features

- Multi-page example gallery with separate page/layout modules.
- Lazy-loaded example pages to reduce initial bundle size.
- Built-in example navigation and theme controls (brand + light/dark toggle).
- Sidebar grouping by category (Forms, Dashboards, Navigation).
- Source-friendly UX: each example includes direct links and one-click source-path copy.
- URL hash navigation (`#/login-page`, etc.) for easy sharing.
- **6 distinct brand themes**, each with both a light and dark `Theme` built via `createLightTheme` / `createDarkTheme`:
  | Theme | Mood | File |
  |---|---|---|
  | Ocean Blue | Cool / trustworthy | [src/themes/oceanBlueTheme.ts](src/themes/oceanBlueTheme.ts) |
  | Sunset Ember | Warm / vibrant | [src/themes/sunsetEmberTheme.ts](src/themes/sunsetEmberTheme.ts) |
  | Forest Sage | Natural / grounded | [src/themes/forestSageTheme.ts](src/themes/forestSageTheme.ts) |
  | Corporate Slate | Neutral / muted | [src/themes/corporateSlateTheme.ts](src/themes/corporateSlateTheme.ts) |
  | Royal Violet | Bold / premium | [src/themes/royalVioletTheme.ts](src/themes/royalVioletTheme.ts) |
  | Midnight Aurora | Dark-first cyan-teal | [src/themes/midnightAuroraTheme.ts](src/themes/midnightAuroraTheme.ts) |
- Theme switcher in the top bar. Themes that prefer dark (e.g. Midnight Aurora) auto-switch the mode on selection via `defaultModeFor`.

## Getting started

Requires Node.js 18+.

```powershell
npm install
npm run dev
```

Open the URL printed by Vite (default <http://localhost:5173>).

### Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) and produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
src/
  main.tsx                             # React entry, mounts <App />
  App.tsx                              # Theme state + hash page selection + app shell wiring
  components/
    ExamplesShell.tsx                  # Shared gallery layout (category nav + source links + copy action)
  examples/
    index.ts                           # Example registry and default page id
    types.ts                           # ExampleDefinition type
    login/
      LoginPageExample.tsx             # Login layout example
    dashboard/
      DashboardCardsExample.tsx        # Dashboard card layout example
    settings/
      AccountSettingsExample.tsx       # Settings form layout example
  themes/
    index.ts                           # themeRegistry + ThemeKey/Mode + defaultModeFor
    oceanBlueTheme.ts                  # BrandVariants + light/dark Theme
    sunsetEmberTheme.ts
    forestSageTheme.ts
    corporateSlateTheme.ts
    royalVioletTheme.ts
    midnightAuroraTheme.ts
```

## How navigation works

The app uses hash-based navigation without adding routing dependencies.

- Selecting an example updates the URL to `#/example-id`.
- Reloading or sharing the URL opens the same example.
- Unknown hashes fall back to the default example.

## How the theming works

Each theme file defines a complete `BrandVariants` palette (keys `10` → `160`, light → dark) and exports two `Theme` objects:

```ts
import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from '@fluentui/react-components';

export const oceanBlueBrand: BrandVariants = {
  10: '#020A14',
  // ...
  160: '#F3F8FE',
};

export const oceanBlueLightTheme: Theme = createLightTheme(oceanBlueBrand);
export const oceanBlueDarkTheme: Theme = createDarkTheme(oceanBlueBrand);
```

Wrap your app with a single `FluentProvider` and pass the chosen `Theme`:

```tsx
import { FluentProvider } from '@fluentui/react-components';
import { oceanBlueLightTheme } from './themes/oceanBlueTheme';

export const App = () => (
  <FluentProvider theme={oceanBlueLightTheme}>
    <YourApp />
  </FluentProvider>
);
```

### Adding a new theme

1. Create `src/themes/myBrandTheme.ts` exporting a `BrandVariants` and the two `Theme` objects.
2. Register it in [src/themes/index.ts](src/themes/index.ts):
   - Add a `ThemeKey` union member.
   - Add an entry to `themeRegistry` with `label`, `light`, and `dark`.
   - Add an entry to `defaultModeFor` indicating the preferred default mode.

The dropdown in [src/App.tsx](src/App.tsx) is data-driven off `themeRegistry`, so the new theme appears automatically.

## Adding a new example page

1. Create a new example component under `src/examples/<category>/<Name>Example.tsx`.
2. Export/register it in [src/examples/index.ts](src/examples/index.ts) with:
  - `id` (used for hash URL)
  - `category` (used for sidebar grouping)
  - `title`
  - `summary`
  - `component`
  - `sourceFiles` (paths to display in the source links panel)
3. The gallery nav and page rendering update automatically from the registry.

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite 5** for dev server and build
- **@fluentui/react-components** v9 — only the modern v9 surface is used; no v8 APIs (`initializeIcons`, `ThemeProvider`, `loadTheme`, etc.).
- **@fluentui/react-icons** for icons used in buttons, the theme toggle, etc.

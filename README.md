# Fluent UI v9 Examples

I created this project because while I work at Microsoft, I never explored Fluent UI - recently on a personal project I decided to create a small Vite + React + TypeScript playground that showcases [Microsoft Fluent UI v9](https://react.fluentui.dev/) (`@fluentui/react-components`) with a set of custom **`BrandVariants`** themes and a live theme switcher.

I created 6 distinct themes, each with a light and dark mode, to demonstrate how you can build your own branded themes with the `createLightTheme` / `createDarkTheme` utilities. The single-page app also includes a showcase of most common Fluent UI components (buttons, inputs, cards, badges, dialog, toaster, table, accordion, message bars, progress, skeleton, and more) to see how they look in each theme.



## Features

- Single-page **component showcase** covering most common Fluent UI v9 primitives — buttons, inputs, selection, cards, badges, dialog, toaster, table, accordion, message bars, progress, skeleton, and more.
- **6 distinct brand themes**, each with both a light and dark `Theme` built via `createLightTheme` / `createDarkTheme`:
  | Theme | Mood | File |
  |---|---|---|
  | Ocean Blue | Cool / trustworthy | [src/themes/oceanBlueTheme.ts](src/themes/oceanBlueTheme.ts) |
  | Sunset Ember | Warm / vibrant | [src/themes/sunsetEmberTheme.ts](src/themes/sunsetEmberTheme.ts) |
  | Forest Sage | Natural / grounded | [src/themes/forestSageTheme.ts](src/themes/forestSageTheme.ts) |
  | Corporate Slate | Neutral / muted | [src/themes/corporateSlateTheme.ts](src/themes/corporateSlateTheme.ts) |
  | Royal Violet | Bold / premium | [src/themes/royalVioletTheme.ts](src/themes/royalVioletTheme.ts) |
  | Midnight Aurora | Dark-first cyan-teal | [src/themes/midnightAuroraTheme.ts](src/themes/midnightAuroraTheme.ts) |
- **Theme switcher** in the sticky header — pick a brand from the dropdown and toggle light/dark with the sun/moon button. Themes that prefer dark (e.g. Midnight Aurora) auto-switch the mode on selection via `defaultModeFor`.

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
  main.tsx                     # React entry, mounts <App />
  App.tsx                      # Showcase page + theme switcher
  themes/
    index.ts                   # themeRegistry + ThemeKey/Mode + defaultModeFor
    oceanBlueTheme.ts          # BrandVariants + light/dark Theme
    sunsetEmberTheme.ts
    forestSageTheme.ts
    corporateSlateTheme.ts
    royalVioletTheme.ts
    midnightAuroraTheme.ts
```

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

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite 5** for dev server and build
- **@fluentui/react-components** v9 — only the modern v9 surface is used; no v8 APIs (`initializeIcons`, `ThemeProvider`, `loadTheme`, etc.).
- **@fluentui/react-icons** for icons used in buttons, the theme toggle, etc.

// ============================================================================
// Theme 1: Ocean Blue
// Best-fit use case: Enterprise SaaS dashboards, fintech, and productivity apps
// that need a trustworthy, calm, and professional cool-toned brand.
// ============================================================================
import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
  FluentProvider,
} from '@fluentui/react-components';

export const oceanBlueBrand: BrandVariants = {
  10: '#020A14',
  20: '#0A1A2F',
  30: '#0F2A4F',
  40: '#143A6E',
  50: '#194A8E',
  60: '#1F5BAD',
  70: '#266DCC',
  80: '#3680DC',
  90: '#5093E3',
  100: '#6BA6E9',
  110: '#86B8EE',
  120: '#A1CAF3',
  130: '#BCDCF7',
  140: '#D2E7FA',
  150: '#E5F1FC',
  160: '#F3F8FE',
};

export const oceanBlueLightTheme: Theme = createLightTheme(oceanBlueBrand);
export const oceanBlueDarkTheme: Theme = createDarkTheme(oceanBlueBrand);

// Usage:
//
// import { FluentProvider } from '@fluentui/react-components';
// import { oceanBlueLightTheme } from './themes/oceanBlueTheme';
//
// export const App = () => (
//   <FluentProvider theme={oceanBlueLightTheme}>
//     <YourApp />
//   </FluentProvider>
// );

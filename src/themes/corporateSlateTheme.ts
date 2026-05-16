// ============================================================================
// Theme 4: Corporate Slate
// Best-fit use case: Legal, financial, government, and B2B admin portals that
// want a muted, neutral, no-nonsense professional gray-blue identity.
// ============================================================================
import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from '@fluentui/react-components';

export const corporateSlateBrand: BrandVariants = {
  10: '#07090B',
  20: '#121519',
  30: '#1C2128',
  40: '#262D36',
  50: '#313945',
  60: '#3C4654',
  70: '#475263',
  80: '#535F72',
  90: '#677386',
  100: '#7C8898',
  110: '#929CAB',
  120: '#A8B1BD',
  130: '#BEC5CF',
  140: '#D3D8DF',
  150: '#E4E7EC',
  160: '#F2F4F6',
};

export const corporateSlateLightTheme: Theme = createLightTheme(corporateSlateBrand);
export const corporateSlateDarkTheme: Theme = createDarkTheme(corporateSlateBrand);

// Usage:
//
// import { FluentProvider } from '@fluentui/react-components';
// import { corporateSlateLightTheme } from './themes/corporateSlateTheme';
//
// export const App = () => (
//   <FluentProvider theme={corporateSlateLightTheme}>
//     <YourApp />
//   </FluentProvider>
// );

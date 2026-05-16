// ============================================================================
// Theme 5: Royal Violet
// Best-fit use case: Creative platforms, gaming, entertainment, premium AI
// products, and modern consumer brands wanting a bold, vibrant purple identity.
// ============================================================================
import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from '@fluentui/react-components';

export const royalVioletBrand: BrandVariants = {
  10: '#0E0418',
  20: '#1C0A30',
  30: '#2A1049',
  40: '#391762',
  50: '#481E7B',
  60: '#582595',
  70: '#682DB0',
  80: '#7A3BC4',
  90: '#8E54CE',
  100: '#A06DD7',
  110: '#B286DF',
  120: '#C39FE6',
  130: '#D4B8EE',
  140: '#E2CEF3',
  150: '#EEE0F8',
  160: '#F8F1FC',
};

export const royalVioletLightTheme: Theme = createLightTheme(royalVioletBrand);
export const royalVioletDarkTheme: Theme = createDarkTheme(royalVioletBrand);

// Usage:
//
// import { FluentProvider } from '@fluentui/react-components';
// import { royalVioletDarkTheme } from './themes/royalVioletTheme';
//
// export const App = () => (
//   <FluentProvider theme={royalVioletDarkTheme}>
//     <YourApp />
//   </FluentProvider>
// );

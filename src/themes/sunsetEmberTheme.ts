// ============================================================================
// Theme 2: Sunset Ember
// Best-fit use case: Consumer lifestyle apps, food & beverage, creative tools,
// and warm energetic brands that want a vibrant orange-red identity.
// ============================================================================
import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from '@fluentui/react-components';

export const sunsetEmberBrand: BrandVariants = {
  10: '#1A0500',
  20: '#330A00',
  30: '#4D1300',
  40: '#661D00',
  50: '#802700',
  60: '#993300',
  70: '#B33F00',
  80: '#CC4D08',
  90: '#E25E1A',
  100: '#EE7536',
  110: '#F38C54',
  120: '#F7A372',
  130: '#FABA94',
  140: '#FCD0B5',
  150: '#FDE3D1',
  160: '#FEF2E8',
};

export const sunsetEmberLightTheme: Theme = createLightTheme(sunsetEmberBrand);
export const sunsetEmberDarkTheme: Theme = createDarkTheme(sunsetEmberBrand);

// Usage:
//
// import { FluentProvider } from '@fluentui/react-components';
// import { sunsetEmberDarkTheme } from './themes/sunsetEmberTheme';
//
// export const App = () => (
//   <FluentProvider theme={sunsetEmberDarkTheme}>
//     <YourApp />
//   </FluentProvider>
// );

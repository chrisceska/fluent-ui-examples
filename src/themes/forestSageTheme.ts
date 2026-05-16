// ============================================================================
// Theme 3: Forest Sage
// Best-fit use case: Health, wellness, sustainability, and environmental
// products that need an organic, grounded, natural green palette.
// ============================================================================
import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from '@fluentui/react-components';

export const forestSageBrand: BrandVariants = {
  10: '#040A06',
  20: '#0C1A10',
  30: '#142B1A',
  40: '#1D3D25',
  50: '#264F31',
  60: '#30613D',
  70: '#3B7449',
  80: '#478757',
  90: '#5C9A6B',
  100: '#73AC81',
  110: '#8BBE97',
  120: '#A4CFAE',
  130: '#BDDFC5',
  140: '#D3EAD8',
  150: '#E5F3E8',
  160: '#F3F9F4',
};

export const forestSageLightTheme: Theme = createLightTheme(forestSageBrand);
export const forestSageDarkTheme: Theme = createDarkTheme(forestSageBrand);

// Usage:
//
// import { FluentProvider } from '@fluentui/react-components';
// import { forestSageLightTheme } from './themes/forestSageTheme';
//
// export const App = () => (
//   <FluentProvider theme={forestSageLightTheme}>
//     <YourApp />
//   </FluentProvider>
// );

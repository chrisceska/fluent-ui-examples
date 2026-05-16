// ============================================================================
// Theme 6: Midnight Aurora
// Best-fit use case: Dark-first products — developer tools, code editors,
// streaming/media apps, and AI consoles — where a luminous cyan-teal accent
// pops cleanly on near-black surfaces.
// ============================================================================
import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from '@fluentui/react-components';

export const midnightAuroraBrand: BrandVariants = {
  10: '#001014',
  20: '#002028',
  30: '#00313D',
  40: '#004252',
  50: '#005468',
  60: '#00677E',
  70: '#007B95',
  80: '#0090AB',
  90: '#1AA5BF',
  100: '#3EB8CF',
  110: '#62CADD',
  120: '#86DAE8',
  130: '#A8E6F0',
  140: '#C6EFF6',
  150: '#DFF6FA',
  160: '#F0FBFD',
};

export const midnightAuroraLightTheme: Theme = createLightTheme(midnightAuroraBrand);
export const midnightAuroraDarkTheme: Theme = createDarkTheme(midnightAuroraBrand);

// Usage (dark-first):
//
// import { FluentProvider } from '@fluentui/react-components';
// import { midnightAuroraDarkTheme } from './themes/midnightAuroraTheme';
//
// export const App = () => (
//   <FluentProvider theme={midnightAuroraDarkTheme}>
//     <YourApp />
//   </FluentProvider>
// );

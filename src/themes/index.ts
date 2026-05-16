import { Theme } from '@fluentui/react-components';
import {
  oceanBlueLightTheme,
  oceanBlueDarkTheme,
} from './oceanBlueTheme';
import {
  sunsetEmberLightTheme,
  sunsetEmberDarkTheme,
} from './sunsetEmberTheme';
import {
  forestSageLightTheme,
  forestSageDarkTheme,
} from './forestSageTheme';
import {
  corporateSlateLightTheme,
  corporateSlateDarkTheme,
} from './corporateSlateTheme';
import {
  royalVioletLightTheme,
  royalVioletDarkTheme,
} from './royalVioletTheme';
import {
  midnightAuroraLightTheme,
  midnightAuroraDarkTheme,
} from './midnightAuroraTheme';

export type ThemeKey =
  | 'oceanBlue'
  | 'sunsetEmber'
  | 'forestSage'
  | 'corporateSlate'
  | 'royalViolet'
  | 'midnightAurora';

export type Mode = 'light' | 'dark';

export const themeRegistry: Record<
  ThemeKey,
  { label: string; light: Theme; dark: Theme }
> = {
  oceanBlue: {
    label: 'Ocean Blue',
    light: oceanBlueLightTheme,
    dark: oceanBlueDarkTheme,
  },
  sunsetEmber: {
    label: 'Sunset Ember',
    light: sunsetEmberLightTheme,
    dark: sunsetEmberDarkTheme,
  },
  forestSage: {
    label: 'Forest Sage',
    light: forestSageLightTheme,
    dark: forestSageDarkTheme,
  },
  corporateSlate: {
    label: 'Corporate Slate',
    light: corporateSlateLightTheme,
    dark: corporateSlateDarkTheme,
  },
  royalViolet: {
    label: 'Royal Violet',
    light: royalVioletLightTheme,
    dark: royalVioletDarkTheme,
  },
  midnightAurora: {
    label: 'Midnight Aurora',
    light: midnightAuroraLightTheme,
    dark: midnightAuroraDarkTheme,
  },
};

export const defaultModeFor: Record<ThemeKey, Mode> = {
  oceanBlue: 'light',
  sunsetEmber: 'light',
  forestSage: 'light',
  corporateSlate: 'light',
  royalViolet: 'light',
  midnightAurora: 'dark',
};

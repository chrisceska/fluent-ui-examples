import { useEffect, useMemo, useState } from 'react';
import {
  Button,
  FluentProvider,
  Dropdown,
  Option,
  ToggleButton,
  makeStyles,
  shorthands,
  tokens,
  Title3,
  Caption1,
} from '@fluentui/react-components';
import { WeatherMoonRegular, WeatherSunnyRegular } from '@fluentui/react-icons';

import { ExamplesShell } from './components/ExamplesShell';
import { defaultExampleId, examples } from './examples';
import { defaultModeFor, Mode, themeRegistry, ThemeKey } from './themes';

const useStyles = makeStyles({
  skipLink: {
    position: 'absolute',
    top: tokens.spacingVerticalM,
    left: tokens.spacingHorizontalM,
    zIndex: 1,
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalS),
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorBrandForeground1,
    ...shorthands.border(tokens.strokeWidthThin, 'solid', tokens.colorBrandStroke1),
    transform: 'translateY(-200%)',
    ':focus-visible': {
      transform: 'translateY(0)',
    },
  },
  app: {
    minHeight: '100vh',
    ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalXXL),
    backgroundColor: tokens.colorNeutralBackground2,
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
  },
  topBar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    columnGap: tokens.spacingHorizontalM,
    rowGap: tokens.spacingVerticalS,
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalL),
    borderRadius: tokens.borderRadiusLarge,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
  },
  topBarInfo: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXXS,
  },
  topBarControls: {
    display: 'flex',
    alignItems: 'center',
    columnGap: tokens.spacingHorizontalM,
    rowGap: tokens.spacingVerticalS,
    flexWrap: 'wrap',
  },
  themeDropdown: {
    minWidth: '180px',
  },
  subtleText: {
    color: tokens.colorNeutralForeground2,
  },
});

const githubBaseUrl = 'https://github.com/chrisceska/fluent-ui-examples/blob/master/';

const readExampleIdFromHash = () => {
  const raw = window.location.hash.replace('#/', '').trim();
  const exists = examples.some((example) => example.id === raw);

  return exists ? raw : defaultExampleId;
};

export const App = () => {
  const styles = useStyles();
  const [themeKey, setThemeKey] = useState<ThemeKey>('oceanBlue');
  const [mode, setMode] = useState<Mode>(defaultModeFor.oceanBlue);
  const [selectedExampleId, setSelectedExampleId] = useState<string>(readExampleIdFromHash);

  const theme = mode === 'light' ? themeRegistry[themeKey].light : themeRegistry[themeKey].dark;

  useEffect(() => {
    const onHashChange = () => setSelectedExampleId(readExampleIdFromHash());

    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectedExample = useMemo(
    () => examples.find((example) => example.id === selectedExampleId) ?? examples[0],
    [selectedExampleId],
  );

  const onThemeChange = (nextTheme: ThemeKey) => {
    setThemeKey(nextTheme);
    setMode(defaultModeFor[nextTheme]);
  };

  const onSelectExample = (exampleId: string) => {
    setSelectedExampleId(exampleId);
    window.location.hash = `/${exampleId}`;
  };

  return (
    <FluentProvider theme={theme}>
      <div className={styles.app}>
        <Button className={styles.skipLink} as="a" href="#example-content" appearance="subtle">
          Skip to example content
        </Button>

        <header className={styles.topBar}>
          <div className={styles.topBarInfo}>
            <Title3>Fluent UI v9 Example Gallery</Title3>
            <Caption1 className={styles.subtleText}>
              Page: {selectedExample.title} · Theme: {themeRegistry[themeKey].label} ({mode})
            </Caption1>
          </div>

          <div className={styles.topBarControls}>
            <Dropdown
              className={styles.themeDropdown}
              value={themeRegistry[themeKey].label}
              selectedOptions={[themeKey]}
              onOptionSelect={(_, data) => {
                if (data.optionValue) {
                  onThemeChange(data.optionValue as ThemeKey);
                }
              }}
            >
              {(Object.keys(themeRegistry) as ThemeKey[]).map((key) => (
                <Option key={key} value={key}>
                  {themeRegistry[key].label}
                </Option>
              ))}
            </Dropdown>

            <ToggleButton
              appearance="subtle"
              icon={mode === 'light' ? <WeatherMoonRegular /> : <WeatherSunnyRegular />}
              checked={mode === 'dark'}
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            >
              {mode === 'light' ? 'Dark mode' : 'Light mode'}
            </ToggleButton>

            <Button appearance="secondary" as="a" href="https://github.com/chrisceska/fluent-ui-examples" target="_blank">
              Repository
            </Button>
          </div>
        </header>

        <ExamplesShell
          examples={examples}
          selectedExampleId={selectedExampleId}
          onSelectExample={onSelectExample}
          githubBaseUrl={githubBaseUrl}
        />
      </div>
    </FluentProvider>
  );
};

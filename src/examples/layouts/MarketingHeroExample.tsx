import {
  Body1,
  Button,
  Card,
  makeStyles,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { ArrowRightRegular, PlayRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalL,
    '@media (min-width: 56rem)': {
      gridTemplateColumns: '2fr 1fr',
    },
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
  },
  actions: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalM,
    rowGap: tokens.spacingVerticalS,
    flexWrap: 'wrap',
  },
  sidePanel: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export const MarketingHeroExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <Card className={styles.hero}>
        <Title2>Build polished internal apps faster</Title2>
        <Body1 className={styles.muted}>
          This hero layout pairs a strong message with clear call-to-action buttons and supporting
          context.
        </Body1>
        <div className={styles.actions}>
          <Button appearance="primary" icon={<ArrowRightRegular />}>Start trial</Button>
          <Button appearance="secondary" icon={<PlayRegular />}>Watch demo</Button>
        </div>
      </Card>

      <Card className={styles.sidePanel}>
        <Body1>Trusted by 120+ product teams</Body1>
        <Body1 className={styles.muted}>Deploy in minutes with reusable layout blocks and theming presets.</Body1>
      </Card>
    </section>
  );
};

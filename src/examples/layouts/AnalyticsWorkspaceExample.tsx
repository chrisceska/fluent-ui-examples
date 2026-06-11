import {
  Badge,
  Body1,
  Card,
  Divider,
  makeStyles,
  tokens,
  Title3,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
  },
  topGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
    gap: tokens.spacingHorizontalM,
  },
  statsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export const AnalyticsWorkspaceExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <div className={styles.topGrid}>
        <Card className={styles.panel}>
          <div className={styles.statsRow}>
            <Body1>Visitors</Body1>
            <Badge appearance="filled">+8%</Badge>
          </div>
          <Title3>42,180</Title3>
        </Card>
        <Card className={styles.panel}>
          <div className={styles.statsRow}>
            <Body1>Conversions</Body1>
            <Badge appearance="tint">Stable</Badge>
          </div>
          <Title3>2,940</Title3>
        </Card>
        <Card className={styles.panel}>
          <div className={styles.statsRow}>
            <Body1>Revenue</Body1>
            <Badge appearance="filled">+14%</Badge>
          </div>
          <Title3>$318K</Title3>
        </Card>
      </div>

      <Card className={styles.panel}>
        <Title3>Trend analysis</Title3>
        <Divider />
        <Body1 className={styles.muted}>
          Reserve this area for line charts, cohort tables, or forecasting widgets.
        </Body1>
      </Card>
    </section>
  );
};

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
  topRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
    gap: tokens.spacingHorizontalM,
  },
  module: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const CommandCenterExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <div className={styles.topRow}>
        <Card className={styles.module}>
          <div className={styles.row}>
            <Body1>Alerts</Body1>
            <Badge appearance="filled">4 active</Badge>
          </div>
          <Title3>Service health</Title3>
        </Card>
        <Card className={styles.module}>
          <div className={styles.row}>
            <Body1>Queues</Body1>
            <Badge appearance="tint">Nominal</Badge>
          </div>
          <Title3>Background jobs</Title3>
        </Card>
      </div>

      <Card className={styles.module}>
        <Title3>Live timeline</Title3>
        <Divider />
        <Body1>09:12 - Deployment validated in west region.</Body1>
        <Body1>09:27 - Incident triage opened for API latency spike.</Body1>
        <Body1>09:35 - Autoscaling policy adjusted and stabilized.</Body1>
      </Card>
    </section>
  );
};

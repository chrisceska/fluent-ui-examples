import {
  Avatar,
  Badge,
  Body1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Divider,
  makeStyles,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { ArrowSyncRegular, CalendarMonthRegular, OpenRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalM,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: tokens.spacingHorizontalL,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

const metrics = [
  { title: 'Active projects', value: '24', trend: '+4 this week' },
  { title: 'Pending reviews', value: '9', trend: '-2 today' },
  { title: 'Open incidents', value: '3', trend: 'No change' },
];

export const DashboardCardsExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <div className={styles.heading}>
        <div>
          <Title2>Team dashboard</Title2>
          <Body1 className={styles.muted}>A compact overview layout with responsive cards.</Body1>
        </div>
        <Button icon={<ArrowSyncRegular />}>Refresh</Button>
      </div>

      <Divider />

      <div className={styles.grid}>
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader
              image={<Avatar name={metric.title} color="brand" />}
              header={<Body1>{metric.title}</Body1>}
              description={<Badge appearance="tint">Live</Badge>}
            />
            <div className={styles.cardContent}>
              <Title2>{metric.value}</Title2>
              <Body1 className={styles.muted}>{metric.trend}</Body1>
            </div>
            <CardFooter>
              <div className={styles.footerRow}>
                <Button appearance="subtle" icon={<CalendarMonthRegular />}>
                  Schedule
                </Button>
                <Button appearance="primary" icon={<OpenRegular />}>
                  Open
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

import {
  Avatar,
  Body1,
  Card,
  Divider,
  makeStyles,
  tokens,
  Title3,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalL,
    '@media (min-width: 56rem)': {
      gridTemplateColumns: '1fr 2fr',
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    columnGap: tokens.spacingHorizontalS,
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export const ListDetailPaneExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <Card className={styles.list}>
        <Title3>Conversations</Title3>
        <Divider />
        <div className={styles.row}>
          <Avatar name="Jamie" />
          <Body1>Design review handoff</Body1>
        </div>
        <div className={styles.row}>
          <Avatar name="Taylor" />
          <Body1>Ops deployment notes</Body1>
        </div>
        <div className={styles.row}>
          <Avatar name="Jordan" />
          <Body1>Q3 planning follow-up</Body1>
        </div>
      </Card>

      <Card className={styles.detail}>
        <Title3>Message details</Title3>
        <Body1 className={styles.muted}>From: Taylor C. · 9:41 AM</Body1>
        <Divider />
        <Body1>
          Use this pattern when people need quick scanning on the left and rich details on the
          right, such as messaging, notifications, or records management.
        </Body1>
      </Card>
    </section>
  );
};

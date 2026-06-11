import {
  Avatar,
  Body1,
  Button,
  Card,
  Divider,
  makeStyles,
  tokens,
  Title3,
} from '@fluentui/react-components';
import { EditRegular, MailRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalL,
    '@media (min-width: 56rem)': {
      gridTemplateColumns: '1fr 2fr',
    },
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
    alignItems: 'flex-start',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
  actions: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalS,
    rowGap: tokens.spacingVerticalS,
    flexWrap: 'wrap',
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export const ProfileHubExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <Card className={styles.profileCard}>
        <Avatar name="Alex Rivera" size={64} />
        <Title3>Alex Rivera</Title3>
        <Body1 className={styles.muted}>Principal Product Designer</Body1>
        <Button appearance="secondary" icon={<EditRegular />}>Edit profile</Button>
      </Card>

      <Card className={styles.details}>
        <Title3>Profile overview</Title3>
        <Divider />
        <Body1>
          This structure keeps identity details and quick actions in a narrow rail while centralizing
          profile content in a wider main area.
        </Body1>
        <div className={styles.actions}>
          <Button appearance="subtle" icon={<MailRegular />}>Message</Button>
          <Button appearance="subtle">View activity</Button>
          <Button appearance="subtle">Permissions</Button>
        </div>
      </Card>
    </section>
  );
};

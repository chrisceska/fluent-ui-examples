import {
  Body1,
  Button,
  Card,
  Divider,
  Field,
  Input,
  makeStyles,
  tokens,
  Title3,
} from '@fluentui/react-components';
import { SearchRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalL,
    '@media (min-width: 56rem)': {
      gridTemplateColumns: '2fr 1fr',
    },
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },
  articles: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXS,
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export const SupportPortalExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <Card className={styles.left}>
        <Title3>Help center</Title3>
        <Field label="Search knowledge base">
          <Input placeholder="Search articles" contentBefore={<SearchRegular aria-hidden="true" />} />
        </Field>
        <Divider />
        <div className={styles.articles}>
          <Button appearance="subtle">Reset multi-factor authentication</Button>
          <Button appearance="subtle">Configure SSO with Entra ID</Button>
          <Button appearance="subtle">Troubleshoot deployment permissions</Button>
        </div>
      </Card>

      <Card className={styles.right}>
        <Title3>Contact support</Title3>
        <Body1 className={styles.muted}>Live response within two business hours for premium plans.</Body1>
        <Button appearance="primary">Open ticket</Button>
      </Card>
    </section>
  );
};

import { FormEvent, useState } from 'react';
import {
  Badge,
  Body1,
  Body1Strong,
  Button,
  Caption1,
  Card,
  Field,
  Input,
  Link,
  makeStyles,
  shorthands,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { ArrowRightRegular, LockClosedRegular, PersonRegular, ShieldCheckmarkRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 3fr)',
    gap: tokens.spacingHorizontalL,
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    ...shorthands.padding(tokens.spacingVerticalXL, tokens.spacingHorizontalXL),
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorNeutralForeground1,
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    position: 'relative',
    overflow: 'hidden',
  },
  panelMuted: {
    color: tokens.colorNeutralForeground2,
  },
  panelBackgroundIcon: {
    position: 'absolute',
    insetBlockEnd: tokens.spacingVerticalXL,
    insetInlineEnd: tokens.spacingHorizontalXL,
    fontSize: tokens.fontSizeHero1000,
    lineHeight: tokens.lineHeightHero1000,
    color: tokens.colorNeutralForeground3,
    opacity: 0.2,
    pointerEvents: 'none',
  },
  formCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    ...shorthands.padding(tokens.spacingVerticalXL, tokens.spacingHorizontalXL),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalM,
    flexWrap: 'wrap',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    flexWrap: 'wrap',
  },
});

export const LoginSplitBrandExample = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('login-split-brand-submit', { email, passwordLength: password.length });
  };

  return (
    <section className={styles.root}>
      <aside className={styles.panel}>
        <ShieldCheckmarkRegular aria-hidden="true" className={styles.panelBackgroundIcon} />
        <Badge appearance="filled" color="danger" icon={<ShieldCheckmarkRegular aria-hidden="true" />}>
          Trusted Workspace Access
        </Badge>
        <Title2>Orbit Control</Title2>
        <Body1 className={styles.panelMuted}>
          Centralized sign-in for finance, operations, and reporting teams with secure session continuity.
        </Body1>
        <Body1Strong>99.99% secure session availability this quarter</Body1Strong>
      </aside>

      <Card className={styles.formCard}>
        <header>
          <Title2>Sign in</Title2>
          <Caption1>Use your team credentials to continue.</Caption1>
        </header>

        <form className={styles.form} onSubmit={onSubmit}>
          <Field label="Work email" required>
            <Input
              type="email"
              value={email}
              onChange={(_, data) => setEmail(data.value)}
              contentBefore={<PersonRegular aria-hidden="true" />}
              placeholder="name@orbitcontrol.com"
            />
          </Field>

          <Field label="Password" required>
            <Input
              type="password"
              value={password}
              onChange={(_, data) => setPassword(data.value)}
              contentBefore={<LockClosedRegular aria-hidden="true" />}
              placeholder="Enter your password"
            />
          </Field>

          <div className={styles.metaRow}>
            <Link href="#">Forgot password?</Link>
            <Link href="#">Need account approval?</Link>
          </div>

          <Button type="submit" appearance="primary" icon={<ArrowRightRegular />}>
            Continue to dashboard
          </Button>
        </form>

        <footer className={styles.footer}>
          <Caption1>
            New to Orbit? <Link href="#">Request access</Link>
          </Caption1>
        </footer>
      </Card>
    </section>
  );
};

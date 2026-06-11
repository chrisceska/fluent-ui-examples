import { FormEvent, useState } from 'react';
import {
  Body1,
  Button,
  Caption1,
  Checkbox,
  Divider,
  Field,
  Input,
  Link,
  makeStyles,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { ArrowRightRegular, LockClosedRegular, PersonRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXS,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: tokens.spacingHorizontalM,
    flexWrap: 'wrap',
  },
  submitButton: {
    minWidth: '150px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  mutedText: {
    color: tokens.colorNeutralForeground2,
  },
});

export const LoginPageExample = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Placeholder behavior for demo scenarios.
    console.log('login-submit', {
      email,
      passwordLength: password.length,
      rememberMe,
    });
  };

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Title2>Welcome back</Title2>
        <Body1>Sign in to continue to your workspace.</Body1>
      </header>

      <Divider />

      <form className={styles.form} onSubmit={onSubmit}>
        <Field label="Email address" required>
          <Input
            type="email"
            value={email}
            onChange={(_, data) => setEmail(data.value)}
            contentBefore={<PersonRegular aria-hidden="true" />}
            placeholder="name@company.com"
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

        <div className={styles.actions}>
          <Checkbox
            label="Remember me"
            checked={rememberMe}
            onChange={(_, data) => setRememberMe(!!data.checked)}
          />
          <Link href="#">Forgot password?</Link>
        </div>

        <Button
          type="submit"
          appearance="primary"
          icon={<ArrowRightRegular />}
          className={styles.submitButton}
        >
          Sign in
        </Button>
      </form>

      <Divider />

      <footer className={styles.footer}>
        <Caption1 className={styles.mutedText}>
          New here? <Link href="#">Create an account</Link>
        </Caption1>
      </footer>
    </section>
  );
};

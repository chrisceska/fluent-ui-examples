import { FormEvent, useState } from 'react';
import {
  Body1,
  Button,
  Card,
  CardHeader,
  Field,
  Input,
  Link,
  makeStyles,
  shorthands,
  Tab,
  TabList,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { KeyRegular, LockClosedRegular, PhoneRegular, PersonRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '36rem',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    ...shorthands.padding(tokens.spacingVerticalXL, tokens.spacingHorizontalXL),
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalM,
  },
  secondaryButton: {
    justifyContent: 'flex-start',
  },
});

export const LoginPasskeyTabsExample = () => {
  const styles = useStyles();
  const [method, setMethod] = useState<'password' | 'passkey'>('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPasswordSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('login-passkey-tabs-password-submit', { email, passwordLength: password.length });
  };

  const onPasskeySubmit = () => {
    console.log('login-passkey-tabs-passkey-submit', { email });
  };

  return (
    <section className={styles.root}>
      <Card className={styles.card}>
        <CardHeader
          header={<Title2>Adaptive sign-in</Title2>}
          description={<Body1>Use password or hardware-backed passkey from the same entry point.</Body1>}
        />

        <TabList
          selectedValue={method}
          onTabSelect={(_, data) => setMethod((data.value as 'password' | 'passkey') ?? 'password')}
        >
          <Tab value="password" icon={<LockClosedRegular aria-hidden="true" />}>
            Password
          </Tab>
          <Tab value="passkey" icon={<KeyRegular aria-hidden="true" />}>
            Passkey
          </Tab>
        </TabList>

        {method === 'password' ? (
          <form className={styles.body} onSubmit={onPasswordSubmit}>
            <Field label="Email" required>
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
              <Link href="#">Forgot password?</Link>
              <Button type="submit" appearance="primary">
                Sign in with password
              </Button>
            </div>
          </form>
        ) : (
          <div className={styles.body}>
            <Field label="Email" required>
              <Input
                type="email"
                value={email}
                onChange={(_, data) => setEmail(data.value)}
                contentBefore={<PersonRegular aria-hidden="true" />}
                placeholder="name@company.com"
              />
            </Field>

            <Button appearance="primary" icon={<KeyRegular />} onClick={onPasskeySubmit}>
              Continue with passkey
            </Button>
            <Button appearance="subtle" icon={<PhoneRegular />} className={styles.secondaryButton}>
              Use mobile authenticator
            </Button>
          </div>
        )}
      </Card>
    </section>
  );
};

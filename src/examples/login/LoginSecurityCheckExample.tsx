import { FormEvent, useState } from 'react';
import {
  Badge,
  Body1,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Field,
  Input,
  Link,
  makeStyles,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  Radio,
  RadioGroup,
  shorthands,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { LockClosedRegular, PersonRegular, ShieldTaskRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '40rem',
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
  row: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: tokens.spacingHorizontalM,
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    flexWrap: 'wrap',
  },
  assuranceBadge: {
    whiteSpace: 'nowrap',
    width: 'max-content',
    alignSelf: 'flex-start',
  },
});

export const LoginSecurityCheckExample = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [trustedDevice, setTrustedDevice] = useState(false);
  const [verification, setVerification] = useState<'sms' | 'authenticator'>('authenticator');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('login-security-check-submit', {
      email,
      passwordLength: password.length,
      trustedDevice,
      verification,
    });
  };

  return (
    <section className={styles.root}>
      <Card className={styles.card}>
        <CardHeader
          header={<Title2>Security-first sign-in</Title2>}
          description={<Body1>Start your session with layered verification controls.</Body1>}
          action={
            <Badge className={styles.assuranceBadge} icon={<ShieldTaskRegular aria-hidden="true" />}>
              High assurance
            </Badge>
          }
        />

        <MessageBar intent="info">
          <MessageBarBody>
            <MessageBarTitle>Step-up challenge enabled</MessageBarTitle>
            Sessions from new devices require a second verification method.
          </MessageBarBody>
        </MessageBar>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.row}>
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
          </div>

          <Field label="Preferred secondary verification" required>
            <RadioGroup
              layout="horizontal"
              value={verification}
              onChange={(_, data) => setVerification((data.value as 'sms' | 'authenticator') ?? 'authenticator')}
            >
              <Radio value="authenticator" label="Authenticator app" />
              <Radio value="sms" label="SMS code" />
            </RadioGroup>
          </Field>

          <Checkbox
            label="Trust this device for 30 days"
            checked={trustedDevice}
            onChange={(_, data) => setTrustedDevice(!!data.checked)}
          />

          <Button type="submit" appearance="primary">
            Continue securely
          </Button>
        </form>

        <div className={styles.links}>
          <Link href="#">Recovery options</Link>
          <Link href="#">Can’t access your second factor?</Link>
        </div>
      </Card>
    </section>
  );
};

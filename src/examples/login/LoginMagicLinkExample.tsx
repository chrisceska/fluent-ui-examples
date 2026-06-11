import { FormEvent, useState } from 'react';
import {
  Body1,
  Button,
  Card,
  Field,
  Input,
  Link,
  makeStyles,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  shorthands,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { MailRegular, PersonRegular, SendRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '34rem',
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
  linkRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalM,
  },
});

export const LoginMagicLinkExample = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLinkSent(true);
    console.log('login-magic-link-submit', { email });
  };

  return (
    <section className={styles.root}>
      <Card className={styles.card}>
        <header>
          <Title2>Magic link sign-in</Title2>
          <Body1>Passwordless access with a one-time secure link sent to your inbox.</Body1>
        </header>

        {linkSent ? (
          <MessageBar intent="success">
            <MessageBarBody>
              <MessageBarTitle>Check your email</MessageBarTitle>
              We sent a sign-in link to {email}. The link expires shortly for security.
            </MessageBarBody>
          </MessageBar>
        ) : null}

        <form className={styles.form} onSubmit={onSubmit}>
          <Field label="Email" required>
            <Input
              type="email"
              value={email}
              onChange={(_, data) => setEmail(data.value)}
              contentBefore={<PersonRegular aria-hidden="true" />}
              placeholder="name@company.com"
            />
          </Field>

          <Button type="submit" appearance="primary" icon={<SendRegular />}>
            Send secure link
          </Button>
        </form>

        <div className={styles.linkRow}>
          <Button appearance="subtle" icon={<MailRegular />}>
            Resend link
          </Button>
          <Link href="#">Use password instead</Link>
        </div>
      </Card>
    </section>
  );
};

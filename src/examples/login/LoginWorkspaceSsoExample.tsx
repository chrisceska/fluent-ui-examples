import { FormEvent, useMemo, useState } from 'react';
import {
  Avatar,
  Badge,
  Body1,
  Button,
  Card,
  Caption1,
  Divider,
  Field,
  Input,
  Link,
  makeStyles,
  Select,
  shorthands,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { BuildingRegular, PersonRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '48rem',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    ...shorthands.padding(tokens.spacingVerticalXL, tokens.spacingHorizontalXL),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: tokens.spacingHorizontalM,
  },
  fullRow: {
    gridColumn: '1 / -1',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalM,
    flexWrap: 'wrap',
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

const WORKSPACES = ['Northwind Analytics', 'Contoso Retail', 'Fabrikam Field Ops'];

export const LoginWorkspaceSsoExample = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [workspace, setWorkspace] = useState(WORKSPACES[0]);

  const domainHint = useMemo(() => {
    const normalized = workspace.toLowerCase().split(' ').join('');
    return `${normalized}.example.com`;
  }, [workspace]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('login-workspace-sso-submit', { email, workspace });
  };

  return (
    <section className={styles.root}>
      <Card className={styles.card}>
        <header className={styles.header}>
          <Avatar name="Workspace" color="brand" icon={<BuildingRegular aria-hidden="true" />} />
          <div className={styles.headerText}>
            <Title2>Workspace sign-in</Title2>
            <Body1 className={styles.muted}>Choose your workspace and continue with organization SSO.</Body1>
          </div>
        </header>

        <Divider />

        <form className={styles.form} onSubmit={onSubmit}>
          <Field label="Workspace" required>
            <Select value={workspace} onChange={(_, data) => setWorkspace(data.value)}>
              {WORKSPACES.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Work email" required>
            <Input
              type="email"
              value={email}
              onChange={(_, data) => setEmail(data.value)}
              contentBefore={<PersonRegular aria-hidden="true" />}
              placeholder={`name@${domainHint}`}
            />
          </Field>

          <div className={styles.fullRow}>
            <Badge appearance="tint" color="informative">
              Domain hint: {domainHint}
            </Badge>
          </div>

          <div className={styles.fullRow}>
            <Button appearance="primary" type="submit">
              Continue with SSO
            </Button>
          </div>
        </form>

        <footer className={styles.footer}>
          <Caption1>
            Need partner access? <Link href="#">Use guest sign-in</Link>
          </Caption1>
          <Link href="#">Contact IT support</Link>
        </footer>
      </Card>
    </section>
  );
};

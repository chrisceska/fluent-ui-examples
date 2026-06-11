import { useState } from 'react';
import {
  Body1,
  Button,
  Divider,
  Field,
  Input,
  Radio,
  RadioGroup,
  Switch,
  makeStyles,
  tokens,
  Title2,
} from '@fluentui/react-components';
import { SaveRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: tokens.spacingHorizontalL,
  },
  stacked: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export const AccountSettingsExample = () => {
  const styles = useStyles();
  const [name, setName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex@contoso.com');
  const [marketing, setMarketing] = useState(false);

  return (
    <section className={styles.root}>
      <div>
        <Title2>Account settings</Title2>
        <Body1 className={styles.muted}>A form-first settings layout with grouped controls.</Body1>
      </div>

      <Divider />

      <div className={styles.form}>
        <Field label="Display name">
          <Input value={name} onChange={(_, data) => setName(data.value)} />
        </Field>

        <Field label="Email">
          <Input type="email" value={email} onChange={(_, data) => setEmail(data.value)} />
        </Field>

        <div className={styles.stacked}>
          <Field label="Plan">
            <RadioGroup defaultValue="pro" layout="horizontal">
              <Radio value="starter" label="Starter" />
              <Radio value="pro" label="Pro" />
              <Radio value="enterprise" label="Enterprise" />
            </RadioGroup>
          </Field>

          <Switch
            label="Receive product updates"
            checked={marketing}
            onChange={(_, data) => setMarketing(!!data.checked)}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <Button appearance="primary" icon={<SaveRegular />}>
          Save changes
        </Button>
      </div>
    </section>
  );
};

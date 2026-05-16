import { useState } from 'react';
import {
  FluentProvider,
  makeStyles,
  shorthands,
  tokens,
  // Layout / typography
  Title1,
  Title3,
  Subtitle2,
  Body1,
  Caption1,
  Divider,
  // Inputs
  Button,
  ToggleButton,
  CompoundButton,
  MenuButton,
  Input,
  Textarea,
  Dropdown,
  Option,
  Combobox,
  Checkbox,
  Switch,
  RadioGroup,
  Radio,
  Slider,
  SpinButton,
  Field,
  Label,
  // Selection
  Tab,
  TabList,
  // Display
  Avatar,
  Badge,
  CounterBadge,
  PresenceBadge,
  Persona,
  Image,
  Card,
  CardHeader,
  CardFooter,
  CardPreview,
  Link,
  Spinner,
  ProgressBar,
  Tooltip,
  // Menu
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  // Accordion
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  // Dialog
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  DialogActions,
  // Toast
  Toaster,
  useToastController,
  useId,
  Toast,
  ToastTitle,
  ToastBody,
  // Table
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  // MessageBar
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  MessageBarActions,
  // Skeleton
  Skeleton,
  SkeletonItem,
  Rating,
} from '@fluentui/react-components';

import {
  HeartRegular,
  ShareRegular,
  SettingsRegular,
  AddRegular,
  EditRegular,
  DeleteRegular,
  WeatherSunnyRegular,
  WeatherMoonRegular,
} from '@fluentui/react-icons';

import { themeRegistry, ThemeKey, Mode, defaultModeFor } from './themes';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground2,
    color: tokens.colorNeutralForeground1,
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: '12px',
    columnGap: '16px',
    ...shorthands.padding('16px', '24px'),
    backgroundColor: tokens.colorBrandBackground2,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  headerControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  main: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '20px',
    ...shorthands.padding('24px'),
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    ...shorthands.padding('20px'),
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    boxShadow: tokens.shadow4,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  swatchRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gap: '4px',
  },
  swatch: {
    height: '28px',
    borderRadius: tokens.borderRadiusSmall,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});

export const App = () => {
  const styles = useStyles();
  const [themeKey, setThemeKey] = useState<ThemeKey>('oceanBlue');
  const [mode, setMode] = useState<Mode>('light');

  const handleThemeChange = (k: ThemeKey) => {
    setThemeKey(k);
    setMode(defaultModeFor[k]);
  };
  const entry = themeRegistry[themeKey];
  const theme = mode === 'light' ? entry.light : entry.dark;

  return (
    <FluentProvider theme={theme}>
      <Showcase
        themeKey={themeKey}
        mode={mode}
        onThemeChange={handleThemeChange}
        onModeChange={setMode}
        styles={styles}
      />
    </FluentProvider>
  );
};

interface ShowcaseProps {
  themeKey: ThemeKey;
  mode: Mode;
  onThemeChange: (k: ThemeKey) => void;
  onModeChange: (m: Mode) => void;
  styles: ReturnType<typeof useStyles>;
}

const Showcase = ({
  themeKey,
  mode,
  onThemeChange,
  onModeChange,
  styles,
}: ShowcaseProps) => {
  const toasterId = useId('toaster');
  const { dispatchToast } = useToastController(toasterId);

  const notify = () =>
    dispatchToast(
      <Toast>
        <ToastTitle>Theme applied</ToastTitle>
        <ToastBody>{themeRegistry[themeKey].label} ({mode})</ToastBody>
      </Toast>,
      { intent: 'success' },
    );

  return (
    <div className={styles.app}>
      <Toaster toasterId={toasterId} />

      {/* Header / theme switcher */}
      <header className={styles.header}>
        <div className={styles.col} style={{ gap: 2 }}>
          <Title3>Fluent UI v9 Component Showcase</Title3>
          <Caption1>
            Current theme: {themeRegistry[themeKey].label} — {mode}
          </Caption1>
        </div>

        <div className={styles.headerControls}>
          <Label htmlFor="theme-dropdown">Theme</Label>
          <Dropdown
            id="theme-dropdown"
            style={{ minWidth: 180 }}
            value={themeRegistry[themeKey].label}
            selectedOptions={[themeKey]}
            onOptionSelect={(_, data) =>
              data.optionValue && onThemeChange(data.optionValue as ThemeKey)
            }
          >
            {(Object.keys(themeRegistry) as ThemeKey[]).map((k) => (
              <Option key={k} value={k}>
                {themeRegistry[k].label}
              </Option>
            ))}
          </Dropdown>

          <ToggleButton
            appearance="subtle"
            icon={mode === 'light' ? <WeatherMoonRegular /> : <WeatherSunnyRegular />}
            checked={mode === 'dark'}
            onClick={() => onModeChange(mode === 'light' ? 'dark' : 'light')}
          >
            {mode === 'light' ? 'Dark mode' : 'Light mode'}
          </ToggleButton>

          <Button appearance="primary" onClick={notify}>
            Notify
          </Button>
        </div>
      </header>

      <main className={styles.main}>
        {/* Typography */}
        <section className={styles.section}>
          <Subtitle2>Typography</Subtitle2>
          <Title1>Title 1</Title1>
          <Title3>Title 3</Title3>
          <Subtitle2>Subtitle 2</Subtitle2>
          <Body1>
            Body1 — the quick brown fox jumps over the lazy dog.{' '}
            <Link href="#">Inline link</Link>.
          </Body1>
          <Caption1>Caption1 — small annotation text.</Caption1>
          <Divider />
          <div className={styles.swatchRow}>
            {[
              tokens.colorBrandBackground,
              tokens.colorBrandBackground2,
              tokens.colorBrandBackgroundHover,
              tokens.colorBrandForeground1,
              tokens.colorBrandForeground2,
              tokens.colorBrandForegroundLink,
              tokens.colorNeutralBackground3,
              tokens.colorNeutralBackground4,
            ].map((c, i) => (
              <div
                key={i}
                className={styles.swatch}
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className={styles.section}>
          <Subtitle2>Buttons</Subtitle2>
          <div className={styles.row}>
            <Button appearance="primary">Primary</Button>
            <Button appearance="secondary">Secondary</Button>
            <Button appearance="outline">Outline</Button>
            <Button appearance="subtle">Subtle</Button>
            <Button appearance="transparent">Transparent</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className={styles.row}>
            <Button icon={<AddRegular />}>Add</Button>
            <Button icon={<EditRegular />} appearance="primary">
              Edit
            </Button>
            <Button icon={<DeleteRegular />} appearance="outline">
              Delete
            </Button>
            <Tooltip content="Like" relationship="label">
              <Button icon={<HeartRegular />} appearance="subtle" />
            </Tooltip>
            <Tooltip content="Share" relationship="label">
              <Button icon={<ShareRegular />} appearance="subtle" />
            </Tooltip>
          </div>
          <div className={styles.row}>
            <CompoundButton
              icon={<SettingsRegular />}
              secondaryContent="Customize the experience"
            >
              Settings
            </CompoundButton>
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuButton appearance="primary">Menu</MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>New file</MenuItem>
                  <MenuItem>Open…</MenuItem>
                  <MenuItem>Save as…</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>
        </section>

        {/* Inputs */}
        <section className={styles.section}>
          <Subtitle2>Form inputs</Subtitle2>
          <Field label="Name" hint="Your full name">
            <Input placeholder="Ada Lovelace" />
          </Field>
          <Field label="Bio">
            <Textarea placeholder="A short description…" />
          </Field>
          <Field label="Country">
            <Combobox placeholder="Select a country">
              <Option>Australia</Option>
              <Option>Canada</Option>
              <Option>Japan</Option>
              <Option>United Kingdom</Option>
              <Option>United States</Option>
            </Combobox>
          </Field>
          <Field label="Quantity">
            <SpinButton defaultValue={3} min={0} max={10} />
          </Field>
          <Field label="Volume">
            <Slider defaultValue={40} />
          </Field>
        </section>

        {/* Selection */}
        <section className={styles.section}>
          <Subtitle2>Selection</Subtitle2>
          <div className={styles.col}>
            <Label>Plan</Label>
            <RadioGroup defaultValue="pro" layout="horizontal">
              <Radio value="free" label="Free" />
              <Radio value="pro" label="Pro" />
              <Radio value="enterprise" label="Enterprise" />
            </RadioGroup>
          </div>
          <div className={styles.row}>
            <Checkbox label="Subscribe to newsletter" defaultChecked />
            <Checkbox label="Enable beta features" />
          </div>
          <Switch label="Push notifications" defaultChecked />
          <div className={styles.col}>
            <Label>Rate this</Label>
            <Rating defaultValue={4} />
          </div>
        </section>

        {/* Tabs */}
        <section className={styles.section}>
          <Subtitle2>Tabs</Subtitle2>
          <TabList defaultSelectedValue="overview">
            <Tab value="overview">Overview</Tab>
            <Tab value="activity">Activity</Tab>
            <Tab value="settings">Settings</Tab>
          </TabList>
          <Body1>Tab content rendered here based on the selected tab.</Body1>
        </section>

        {/* People / badges */}
        <section className={styles.section}>
          <Subtitle2>People & badges</Subtitle2>
          <div className={styles.row}>
            <Avatar name="Kat Larsson" />
            <Avatar name="Daisy Phillips" badge={{ status: 'available' }} />
            <Avatar name="Mona Kane" color="brand" />
            <Avatar name="Ben Walters" color="colorful" />
          </div>
          <Persona
            name="Kat Larsson"
            secondaryText="Senior Designer"
            presence={{ status: 'available' }}
            avatar={{ color: 'brand' }}
          />
          <div className={styles.row}>
            <Badge appearance="filled">Filled</Badge>
            <Badge appearance="outline">Outline</Badge>
            <Badge appearance="tint">Tint</Badge>
            <Badge appearance="ghost">Ghost</Badge>
            <CounterBadge count={5} />
            <CounterBadge count={42} appearance="filled" color="danger" />
            <PresenceBadge status="busy" />
            <PresenceBadge status="away" />
          </div>
        </section>

        {/* Card */}
        <section className={styles.section}>
          <Subtitle2>Card</Subtitle2>
          <Card>
            <CardPreview>
              <div
                style={{
                  height: 120,
                  background: `linear-gradient(135deg, ${tokens.colorBrandBackground}, ${tokens.colorBrandBackground2})`,
                }}
              />
            </CardPreview>
            <CardHeader
              image={<Avatar name="Project Helios" color="brand" />}
              header={<Body1><b>Project Helios</b></Body1>}
              description={<Caption1>Updated 2 hours ago</Caption1>}
            />
            <Body1>
              A short description of the card contents goes here, demonstrating
              how Card composes with other Fluent UI primitives.
            </Body1>
            <CardFooter>
              <Button appearance="primary" icon={<HeartRegular />}>
                Like
              </Button>
              <Button icon={<ShareRegular />}>Share</Button>
            </CardFooter>
          </Card>
        </section>

        {/* Progress / state */}
        <section className={styles.section}>
          <Subtitle2>Progress & state</Subtitle2>
          <Field label="Uploading">
            <ProgressBar value={0.65} />
          </Field>
          <Field label="Indeterminate">
            <ProgressBar />
          </Field>
          <div className={styles.row}>
            <Spinner size="tiny" />
            <Spinner size="small" />
            <Spinner size="medium" label="Loading…" />
          </div>
          <Skeleton>
            <div className={styles.col}>
              <SkeletonItem shape="circle" size={36} />
              <SkeletonItem size={16} />
              <SkeletonItem size={16} style={{ width: '60%' }} />
            </div>
          </Skeleton>
        </section>

        {/* Messages */}
        <section className={styles.section}>
          <Subtitle2>Message bars</Subtitle2>
          {(['info', 'success', 'warning', 'error'] as const).map((intent) => (
            <MessageBar key={intent} intent={intent}>
              <MessageBarBody>
                <MessageBarTitle>{intent.toUpperCase()}</MessageBarTitle>
                This is a {intent} message.
              </MessageBarBody>
              <MessageBarActions>
                <Button size="small">Action</Button>
              </MessageBarActions>
            </MessageBar>
          ))}
        </section>

        {/* Accordion */}
        <section className={styles.section}>
          <Subtitle2>Accordion</Subtitle2>
          <Accordion defaultOpenItems={['1']} collapsible>
            <AccordionItem value="1">
              <AccordionHeader>Getting started</AccordionHeader>
              <AccordionPanel>
                <Body1>
                  Install <code>@fluentui/react-components</code> and wrap your
                  app with <code>FluentProvider</code>.
                </Body1>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionHeader>Theming</AccordionHeader>
              <AccordionPanel>
                <Body1>
                  Use <code>createLightTheme</code> /{' '}
                  <code>createDarkTheme</code> with <code>BrandVariants</code>.
                </Body1>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionHeader>Components</AccordionHeader>
              <AccordionPanel>
                <Body1>Browse all components on this page.</Body1>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Dialog */}
        <section className={styles.section}>
          <Subtitle2>Dialog</Subtitle2>
          <Dialog>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="primary">Open dialog</Button>
            </DialogTrigger>
            <DialogSurface>
              <DialogBody>
                <DialogTitle>Confirm action</DialogTitle>
                <DialogContent>
                  Are you sure you want to apply the{' '}
                  <b>{themeRegistry[themeKey].label}</b> theme?
                </DialogContent>
                <DialogActions>
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">Cancel</Button>
                  </DialogTrigger>
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="primary">Confirm</Button>
                  </DialogTrigger>
                </DialogActions>
              </DialogBody>
            </DialogSurface>
          </Dialog>
        </section>

        {/* Table */}
        <section className={styles.section} style={{ gridColumn: '1 / -1' }}>
          <Subtitle2>Table</Subtitle2>
          <Table arial-label="Sample table">
            <TableHeader>
              <TableRow>
                <TableHeaderCell>User</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'Kat Larsson', role: 'Designer', status: 'available' },
                { name: 'Daisy Phillips', role: 'Engineer', status: 'busy' },
                { name: 'Mona Kane', role: 'PM', status: 'away' },
                { name: 'Ben Walters', role: 'Engineer', status: 'offline' },
              ].map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Persona
                      name={row.name}
                      avatar={{ color: 'colorful' }}
                      presence={{ status: row.status as any }}
                    />
                  </TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>
                    <Badge appearance="tint">{row.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="small" icon={<EditRegular />}>
                      Edit
                    </Button>{' '}
                    <Button size="small" icon={<DeleteRegular />}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Image */}
        <section className={styles.section}>
          <Subtitle2>Image</Subtitle2>
          <Image
            shape="rounded"
            fit="cover"
            src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/image.png"
            alt="Placeholder"
            height={140}
            width="100%"
          />
        </section>
      </main>
    </div>
  );
};

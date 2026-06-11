import { useState } from 'react';

import {
  Body1,
  Card,
  Divider,
  makeStyles,
  tokens,
  Title3,
  TabList,
  Tab,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalL,
    '@media (min-width: 56rem)': {
      gridTemplateColumns: '1fr 3fr',
    },
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXS,
  },
  article: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export const DocumentationSidebarExample = () => {
  const styles = useStyles();
  const [selected, setSelected] = useState('getting-started');

  const sections: { id: string; title: string; body: string }[] = [
    {
      id: 'getting-started',
      title: 'Getting started',
      body: 'Introductory guidance for getting started with layout primitives and tokens.',
    },
    {
      id: 'theming',
      title: 'Theming',
      body: 'How tokens and theme shaping enable consistent design across components.',
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      body: 'Use predictable heading structure and visible landmarks for users of assistive technology.',
    },
    {
      id: 'migration',
      title: 'Migration guide',
      body: 'Notes and tips for migrating from earlier Fluent versions or other design systems.',
    },
  ];

  return (
    <section className={styles.root}>
      <Card>
        <Title3>Docs navigation</Title3>
        <Divider />
        <TabList
          className={styles.nav}
          selectedValue={selected}
          onTabSelect={(_, data) => {
            if (typeof data.value === 'string') {
              setSelected(data.value);
            }
          }}
        >
          {sections.map((s) => (
            <Tab key={s.id} value={s.id}>
              {s.title}
            </Tab>
          ))}
        </TabList>
      </Card>

      <Card className={styles.article}>
        <Title3>{sections.find((s) => s.id === selected)?.title ?? sections[0].title}</Title3>
        <Body1 className={styles.muted}>{sections.find((s) => s.id === selected)?.body}</Body1>
        <Divider />
        <Body1>
          This layout works well for documentation sites and knowledge bases where left-side
          section anchors and right-side reading flow should stay visible together.
        </Body1>
      </Card>
    </section>
  );
};

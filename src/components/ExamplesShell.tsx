import { Suspense, useState } from 'react';
import {
  Body1,
  Button,
  Caption1,
  Card,
  Divider,
  Link,
  makeStyles,
  Spinner,
  shorthands,
  tokens,
  Title3,
} from '@fluentui/react-components';
import { CodeRegular, CopyRegular } from '@fluentui/react-icons';

import { ExampleDefinition } from '../examples/types';
import { ExamplesNav } from './ExamplesNav';

const useStyles = makeStyles({
  page: {
    backgroundColor: tokens.colorNeutralBackground2,
    color: tokens.colorNeutralForeground1,
    width: '100%',
  },
  frame: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gap: tokens.spacingHorizontalXXL,
    alignItems: 'start',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
    position: 'sticky',
    top: tokens.spacingVerticalL,
    maxHeight: `calc(100vh - ${tokens.spacingVerticalXXL})`,
    overflowY: 'auto',
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
    '@media (max-width: 900px)': {
      position: 'static',
      maxHeight: 'none',
      overflowY: 'visible',
    },
  },
  sourceRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalS,
  },
  sourceLink: {
    display: 'inline-flex',
    alignItems: 'center',
    columnGap: tokens.spacingHorizontalXS,
    overflowWrap: 'anywhere',
  },
  copyButton: {
    flexShrink: 0,
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '240px',
  },
  sourceList: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXS,
  },
  content: {
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    rowGap: tokens.spacingVerticalL,
  },
  exampleHost: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
    alignItems: 'stretch',
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXS,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

interface ExamplesShellProps {
  examples: ExampleDefinition[];
  selectedExampleId: string;
  onSelectExample: (id: string) => void;
  githubBaseUrl: string;
}

export const ExamplesShell = ({
  examples,
  selectedExampleId,
  onSelectExample,
  githubBaseUrl,
}: ExamplesShellProps) => {
  const styles = useStyles();
  const [copyFeedback, setCopyFeedback] = useState<string>('');

  const selected = examples.find((example) => example.id === selectedExampleId) ?? examples[0];
  const ExampleComponent = selected.component;
  const headingId = `example-heading-${selected.id}`;

  const copySourcePath = async (sourceFile: string) => {
    await navigator.clipboard.writeText(sourceFile);
    setCopyFeedback(`Copied: ${sourceFile}`);
    window.setTimeout(() => {
      setCopyFeedback((current) => (current === `Copied: ${sourceFile}` ? '' : current));
    }, 1200);
  };

  return (
    <main className={styles.page} id="example-content" tabIndex={-1}>
      <div className={styles.frame}>
        <aside aria-label="Example navigation and source files">
          <Card className={styles.sidebar}>
            <div className={styles.heading}>
              <Title3>Examples</Title3>
              <Caption1 className={styles.muted}>
                Open one page at a time and inspect its source file directly.
              </Caption1>
            </div>

            <Divider />

            <ExamplesNav
              examples={examples}
              selectedExampleId={selected.id}
              onSelectExample={onSelectExample}
            />

            <Divider />

            <div className={styles.sourceList}>
              <Body1>Source files</Body1>
              {selected.sourceFiles.map((sourceFile) => {
                const copyLabel = `Copy source path for ${sourceFile}`;

                return (
                  <div key={sourceFile} className={styles.sourceRow}>
                    <Link
                      className={styles.sourceLink}
                      href={`${githubBaseUrl}${sourceFile}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CodeRegular aria-hidden="true" />
                      {sourceFile}
                    </Link>

                    <Button
                      className={styles.copyButton}
                      size="small"
                      appearance="subtle"
                      icon={<CopyRegular />}
                      aria-label={copyLabel}
                      onClick={() => {
                        void copySourcePath(sourceFile);
                      }}
                    />
                  </div>
                );
              })}
              {copyFeedback ? (
                <Caption1 className={styles.muted} role="status" aria-live="polite">
                  {copyFeedback}
                </Caption1>
              ) : null}
            </div>
          </Card>
        </aside>

        <section aria-labelledby={headingId}>
          <Card className={styles.content}>
            <header className={styles.heading}>
              <Title3 id={headingId}>{selected.title}</Title3>
              <Body1 className={styles.muted}>{selected.summary}</Body1>
            </header>

            <Divider />

            <Suspense
              fallback={
                <div className={styles.loading}>
                  <Spinner label="Loading example" />
                </div>
              }
            >
              <div className={styles.exampleHost}>
                <ExampleComponent />
              </div>
            </Suspense>
          </Card>
        </section>
      </div>
    </main>
  );
};

import { useMemo } from 'react';
import { Button, Caption1, makeStyles, tokens } from '@fluentui/react-components';

import { ExampleDefinition } from '../examples/types';

const useStyles = makeStyles({
  navList: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },
  categoryGroup: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXS,
  },
  categoryTitle: {
    color: tokens.colorNeutralForeground3,
    textTransform: 'uppercase',
    letterSpacing: tokens.spacingHorizontalXXS,
  },
  navButton: {
    justifyContent: 'flex-start',
  },
});

interface ExamplesNavProps {
  examples: ExampleDefinition[];
  selectedExampleId: string;
  onSelectExample: (id: string) => void;
}

export const ExamplesNav = ({
  examples,
  selectedExampleId,
  onSelectExample,
}: ExamplesNavProps) => {
  const styles = useStyles();

  const groupedExamples = useMemo(() => {
    const groups = new Map<string, ExampleDefinition[]>();

    examples.forEach((example) => {
      const current = groups.get(example.category) ?? [];
      current.push(example);
      groups.set(example.category, current);
    });

    return Array.from(groups.entries());
  }, [examples]);

  return (
    <nav className={styles.navList} aria-label="Example pages">
      {groupedExamples.map(([category, categoryExamples], categoryIndex) => (
        <section
          key={category}
          className={styles.categoryGroup}
          aria-labelledby={`examples-category-${categoryIndex}`}
        >
          <Caption1 id={`examples-category-${categoryIndex}`} className={styles.categoryTitle}>
            {category}
          </Caption1>
          {categoryExamples.map((example) => (
            <Button
              key={example.id}
              className={styles.navButton}
              as="a"
              href={`#/${example.id}`}
              aria-current={selectedExampleId === example.id ? 'page' : undefined}
              appearance={selectedExampleId === example.id ? 'primary' : 'subtle'}
              onClick={() => onSelectExample(example.id)}
            >
              {example.title}
            </Button>
          ))}
        </section>
      ))}
    </nav>
  );
};
import {
  Body1,
  Button,
  Card,
  Divider,
  makeStyles,
  tokens,
  Title3,
} from '@fluentui/react-components';
import { AddRegular, DocumentRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalL,
    '@media (min-width: 48rem)': {
      gridTemplateColumns: '1fr 2fr',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },
  fileList: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXS,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export const SplitPaneWorkspaceExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <Card className={styles.column}>
        <Title3>Project files</Title3>
        <Divider />
        <div className={styles.fileList}>
          <Button appearance="subtle" icon={<DocumentRegular />}>Quarterly-plan.docx</Button>
          <Button appearance="subtle" icon={<DocumentRegular />}>Launch-checklist.md</Button>
          <Button appearance="subtle" icon={<DocumentRegular />}>Roadmap-notes.txt</Button>
          <Button appearance="subtle" icon={<AddRegular />}>Create file</Button>
        </div>
      </Card>

      <Card className={styles.column}>
        <Title3>Editor pane</Title3>
        <Body1 className={styles.muted}>Use this layout for tools that combine navigation and focused content editing.</Body1>
        <Divider />
        <Body1>
          A split-pane workspace helps users keep context while moving quickly between records,
          documents, or tasks.
        </Body1>
      </Card>
    </section>
  );
};

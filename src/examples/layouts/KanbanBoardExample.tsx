import {
  Badge,
  Body1,
  Card,
  makeStyles,
  tokens,
  Title3,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
    gap: tokens.spacingHorizontalM,
  },
  lane: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
  laneHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  task: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalXXS,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

const lanes = [
  { title: 'Backlog', tasks: ['Design QA checklist', 'Refine onboarding copy'] },
  { title: 'In Progress', tasks: ['Implement profile card', 'Review icon sizing'] },
  { title: 'Done', tasks: ['Publish sprint notes', 'Merge accessibility fixes'] },
];

export const KanbanBoardExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      {lanes.map((lane) => (
        <Card key={lane.title} className={styles.lane}>
          <div className={styles.laneHeader}>
            <Title3>{lane.title}</Title3>
            <Badge appearance="tint">{lane.tasks.length}</Badge>
          </div>
          {lane.tasks.map((task) => (
            <Card key={task} className={styles.task}>
              <Body1>{task}</Body1>
              <Body1 className={styles.muted}>Assigned to product team</Body1>
            </Card>
          ))}
        </Card>
      ))}
    </section>
  );
};

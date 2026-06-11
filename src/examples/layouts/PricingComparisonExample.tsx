import {
  Badge,
  Body1,
  Button,
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
  tier: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

const tiers = [
  { name: 'Starter', price: '$19', badge: 'Individuals' },
  { name: 'Pro', price: '$49', badge: 'Teams' },
  { name: 'Enterprise', price: 'Custom', badge: 'Scale' },
];

export const PricingComparisonExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      {tiers.map((tier) => (
        <Card key={tier.name} className={styles.tier}>
          <Badge appearance="tint">{tier.badge}</Badge>
          <Title3>{tier.name}</Title3>
          <Title3>{tier.price}</Title3>
          <Body1 className={styles.muted}>Feature-rich plan optimized for collaboration and growth.</Body1>
          <Button appearance={tier.name === 'Pro' ? 'primary' : 'secondary'}>Choose plan</Button>
        </Card>
      ))}
    </section>
  );
};

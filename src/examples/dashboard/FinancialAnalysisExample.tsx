import {
  Badge,
  Body1,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Text,
  tokens,
  Title2,
  Title3,
} from "@fluentui/react-components";
import {
  DonutChart,
  VerticalBarChart,
  type ChartProps,
  type VerticalBarChartDataPoint,
} from "@fluentui/react-charts";
import {
  ArrowTrendingRegular,
  BuildingBankRegular,
  DataPieRegular,
  DocumentTextRegular,
  MoneyRegular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalL,
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalM,
  },
  mutedText: {
    color: tokens.colorNeutralForeground2,
  },
  topGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
  metricBody: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalXS,
  },
  metricValue: {
    fontSize: tokens.fontSizeHero700,
    lineHeight: tokens.lineHeightHero700,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  chartGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: tokens.spacingHorizontalL,
  },
  chartCardBody: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalM,
  },
  chartSurface: {
    minHeight: "300px",
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingHorizontalS,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  actions: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
  },
});

const trendData: VerticalBarChartDataPoint[] = [
  { x: "Jan", y: 1.8, xAxisCalloutData: "Jan", yAxisCalloutData: "$1.8M" },
  { x: "Feb", y: 2.0, xAxisCalloutData: "Feb", yAxisCalloutData: "$2.0M" },
  { x: "Mar", y: 2.2, xAxisCalloutData: "Mar", yAxisCalloutData: "$2.2M" },
  { x: "Apr", y: 2.5, xAxisCalloutData: "Apr", yAxisCalloutData: "$2.5M" },
  { x: "May", y: 2.7, xAxisCalloutData: "May", yAxisCalloutData: "$2.7M" },
  { x: "Jun", y: 2.9, xAxisCalloutData: "Jun", yAxisCalloutData: "$2.9M" },
];

const budgetAllocationData: ChartProps = {
  chartData: [
    { legend: "Operating", data: 43, color: tokens.colorBrandBackground2 },
    {
      legend: "Growth",
      data: 30,
      color: tokens.colorPaletteDarkOrangeBackground2,
    },
    {
      legend: "Reserves",
      data: 27,
      color: tokens.colorPaletteGreenBackground3,
    },
  ],
};

export const FinancialAnalysisExample = () => {
  const styles = useStyles();

  return (
    <section className={styles.root} aria-label="Financial analysis dashboard">
      <header className={styles.header}>
        <div>
          <Title2>Financial analysis</Title2>
          <Body1 className={styles.mutedText}>
            Portfolio health, monthly revenue trend, and budget allocation
            insights.
          </Body1>
        </div>
        <div className={styles.actions}>
          <Button icon={<DocumentTextRegular />}>Export report</Button>
          <Button appearance="primary" icon={<ArrowTrendingRegular />}>
            Forecast
          </Button>
        </div>
      </header>

      <div className={styles.topGrid}>
        <Card>
          <CardHeader
            image={<MoneyRegular aria-hidden="true" />}
            header={<Body1>Total revenue</Body1>}
            description={<Badge appearance="tint">+9.2% QoQ</Badge>}
          />
          <div className={styles.metricBody}>
            <Text className={styles.metricValue}>$14.1M</Text>
            <Body1 className={styles.mutedText}>
              Includes subscriptions and services.
            </Body1>
          </div>
        </Card>

        <Card>
          <CardHeader
            image={<BuildingBankRegular aria-hidden="true" />}
            header={<Body1>Operating margin</Body1>}
            description={<Badge appearance="filled">Stable</Badge>}
          />
          <div className={styles.metricBody}>
            <Text className={styles.metricValue}>28.4%</Text>
            <Body1 className={styles.mutedText}>
              Above target by 1.8 percentage points.
            </Body1>
          </div>
        </Card>

        <Card>
          <CardHeader
            image={<DataPieRegular aria-hidden="true" />}
            header={<Body1>Liquidity ratio</Body1>}
            description={<Badge appearance="ghost">Healthy</Badge>}
          />
          <div className={styles.metricBody}>
            <Text className={styles.metricValue}>2.34</Text>
            <Body1 className={styles.mutedText}>
              Current assets versus current liabilities.
            </Body1>
          </div>
        </Card>
      </div>

      <Divider />

      <div className={styles.chartGrid}>
        <Card>
          <CardHeader
            image={<ArrowTrendingRegular aria-hidden="true" />}
            header={<Title3>Revenue trend</Title3>}
            description={
              <Body1 className={styles.mutedText}>First half performance</Body1>
            }
          />
          <div className={styles.chartCardBody}>
            <div className={styles.chartSurface}>
              <VerticalBarChart
                data={trendData}
                chartTitle="Revenue trend"
                hideLegend
                hideTooltip={false}
                yAxisTitle="Revenue ($M)"
                xAxisTitle="Month"
                barWidth={24}
                colors={[tokens.colorBrandBackground2]}
                culture="en-US"
                height={280}
              />
            </div>
            <Body1 className={styles.mutedText}>
              Trend indicates consistent month-over-month growth with
              acceleration after Q1.
            </Body1>
          </div>
        </Card>

        <Card>
          <CardHeader
            image={<DataPieRegular aria-hidden="true" />}
            header={<Title3>Budget allocation</Title3>}
            description={
              <Body1 className={styles.mutedText}>Current quarter</Body1>
            }
          />
          <div className={styles.chartCardBody}>
            <div className={styles.chartSurface}>
              <DonutChart
                data={budgetAllocationData}
                valueInsideDonut="$6.3M"
                innerRadius={58}
                showLabelsInPercent
                hideLegend={false}
                hideTooltip={false}
                culture="en-US"
                height={280}
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

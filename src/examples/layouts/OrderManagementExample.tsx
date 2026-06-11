import { useState } from 'react';

import {
  Avatar,
  Badge,
  Body1,
  Body2,
  Button,
  Card,
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  Divider,
  makeStyles,
  SortDirection,
  TableCellLayout,
  TableColumnId,
  tokens,
  Title3,
} from '@fluentui/react-components';
import {
  CheckmarkCircleRegular,
  ClockRegular,
  ErrorCircleRegular,
  MoreHorizontalRegular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalL,
  },
  gridWrapper: {
    overflowX: 'auto',
  },
  dataGrid: {
    minWidth: '44rem',
  },
  headerCell: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  orderId: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorBrandForeground1,
  },
  statusContent: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
  statusIconSuccess: {
    color: tokens.colorStatusSuccessForeground1,
  },
  statusIconWarning: {
    color: tokens.colorStatusWarningForeground3,
  },
  statusIconError: {
    color: tokens.colorStatusDangerForeground1,
  },
  actionCell: {
    textAlign: 'right',
  },
});

interface Order {
  id: string;
  customer: string;
  amount: string;
  status: 'completed' | 'processing' | 'failed';
  date: string;
}

const orders: Order[] = [
  { id: 'ORD-2024-0001', customer: 'Acme Corp', amount: '$12,450.00', status: 'completed', date: 'May 18' },
  { id: 'ORD-2024-0002', customer: 'TechStart Inc', amount: '$8,920.50', status: 'processing', date: 'May 20' },
  { id: 'ORD-2024-0003', customer: 'Global Solutions', amount: '$15,680.00', status: 'completed', date: 'May 19' },
  { id: 'ORD-2024-0004', customer: 'Digital Ventures', amount: '$3,240.75', status: 'failed', date: 'May 20' },
  { id: 'ORD-2024-0005', customer: 'Cloud Services Ltd', amount: '$22,100.00', status: 'completed', date: 'May 17' },
  { id: 'ORD-2024-0006', customer: 'Innovation Hub', amount: '$5,850.25', status: 'processing', date: 'May 21' },
];

const getStatusBadge = (status: Order['status']) => {
  switch (status) {
    case 'completed':
      return <Badge appearance="filled" color="success" size="small">Completed</Badge>;
    case 'processing':
      return <Badge appearance="tint" color="warning" size="small">Processing</Badge>;
    case 'failed':
      return <Badge appearance="filled" color="danger" size="small">Failed</Badge>;
  }
};

const getStatusIcon = (status: Order['status'], className: string) => {
  switch (status) {
    case 'completed':
      return <CheckmarkCircleRegular aria-hidden="true" className={className} />;
    case 'processing':
      return <ClockRegular aria-hidden="true" className={className} />;
    case 'failed':
      return <ErrorCircleRegular aria-hidden="true" className={className} />;
  }
};

export const OrderManagementExample = () => {
  const styles = useStyles();
  const [sortState, setSortState] = useState<{
    sortColumn: TableColumnId | undefined;
    sortDirection: SortDirection;
  }>({ sortColumn: undefined, sortDirection: 'ascending' });

  const columns = [
    createTableColumn<Order>({
      columnId: 'id',
      compare: (a, b) => a.id.localeCompare(b.id),
      renderHeaderCell: () => 'Order ID',
      renderCell: (order) => <Body1 className={styles.orderId}>{order.id}</Body1>,
    }),
    createTableColumn<Order>({
      columnId: 'customer',
      compare: (a, b) => a.customer.localeCompare(b.customer),
      renderHeaderCell: () => 'Customer',
      renderCell: (order) => (
        <TableCellLayout
          media={<Avatar name={order.customer} size={32} color="gold" />}
          description={<Body2 className={styles.muted}>{order.date}</Body2>}
        >
          <Body1>{order.customer}</Body1>
        </TableCellLayout>
      ),
    }),
    createTableColumn<Order>({
      columnId: 'amount',
      compare: (a, b) =>
        parseFloat(a.amount.replace(/[^0-9.-]+/g, '')) -
        parseFloat(b.amount.replace(/[^0-9.-]+/g, '')),
      renderHeaderCell: () => 'Amount',
      renderCell: (order) => <Body1>{order.amount}</Body1>,
    }),
    createTableColumn<Order>({
      columnId: 'status',
      compare: (a, b) => {
        const priority = { completed: 0, processing: 1, failed: 2 } as const;
        return priority[a.status] - priority[b.status];
      },
      renderHeaderCell: () => 'Status',
      renderCell: (order) => {
        const statusIconClassName =
          order.status === 'completed'
            ? styles.statusIconSuccess
            : order.status === 'processing'
              ? styles.statusIconWarning
              : styles.statusIconError;

        return (
          <div className={styles.statusContent}>
            {getStatusIcon(order.status, statusIconClassName)}
            {getStatusBadge(order.status)}
          </div>
        );
      },
    }),
    createTableColumn<Order>({
      columnId: 'actions',
      renderHeaderCell: () => <span className={styles.muted}>Actions</span>,
      renderCell: (order) => (
        <div className={styles.actionCell}>
          <Button
            appearance="subtle"
            size="small"
            icon={<MoreHorizontalRegular />}
            aria-label={`More actions for ${order.id}`}
          />
        </div>
      ),
    }),
  ];

  return (
    <section className={styles.root}>
      <Card>
        <div className={styles.cardContent}>
          <div className={styles.header}>
            <Title3>Recent Orders</Title3>
            <Button appearance="primary">New Order</Button>
          </div>
          <Divider />

          <div className={styles.gridWrapper}>
            <DataGrid
              className={styles.dataGrid}
              items={orders}
              columns={columns}
              sortable
              sortState={sortState}
              onSortChange={(_e, state) => setSortState(state)}
              getRowId={(order) => order.id}
              focusMode="composite"
              aria-label="Recent orders data"
            >
              <DataGridHeader>
                <DataGridRow<Order>>
                  {({ renderHeaderCell }) => (
                    <DataGridHeaderCell className={styles.headerCell}>{renderHeaderCell()}</DataGridHeaderCell>
                  )}
                </DataGridRow>
              </DataGridHeader>
              <DataGridBody<Order>>
                {({ item, rowId }) => (
                  <DataGridRow<Order> key={rowId}>
                    {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
                  </DataGridRow>
                )}
              </DataGridBody>
            </DataGrid>
          </div>

          <Divider />
          <Button appearance="subtle">View all orders</Button>
        </div>
      </Card>
    </section>
  );
};

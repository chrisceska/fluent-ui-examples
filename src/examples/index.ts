import { lazy } from 'react';
import { ExampleDefinition } from './types';

const LoginPageExample = lazy(async () => {
  const module = await import('./login/LoginPageExample');

  return { default: module.LoginPageExample };
});

const LoginSplitBrandExample = lazy(async () => {
  const module = await import('./login/LoginSplitBrandExample');

  return { default: module.LoginSplitBrandExample };
});

const LoginWorkspaceSsoExample = lazy(async () => {
  const module = await import('./login/LoginWorkspaceSsoExample');

  return { default: module.LoginWorkspaceSsoExample };
});

const LoginPasskeyTabsExample = lazy(async () => {
  const module = await import('./login/LoginPasskeyTabsExample');

  return { default: module.LoginPasskeyTabsExample };
});

const LoginMagicLinkExample = lazy(async () => {
  const module = await import('./login/LoginMagicLinkExample');

  return { default: module.LoginMagicLinkExample };
});

const LoginSecurityCheckExample = lazy(async () => {
  const module = await import('./login/LoginSecurityCheckExample');

  return { default: module.LoginSecurityCheckExample };
});

const DashboardCardsExample = lazy(async () => {
  const module = await import('./dashboard/DashboardCardsExample');

  return { default: module.DashboardCardsExample };
});

const FinancialAnalysisExample = lazy(async () => {
  const module = await import('./dashboard/FinancialAnalysisExample');

  return { default: module.FinancialAnalysisExample };
});

const AccountSettingsExample = lazy(async () => {
  const module = await import('./settings/AccountSettingsExample');

  return { default: module.AccountSettingsExample };
});

const SplitPaneWorkspaceExample = lazy(async () => {
  const module = await import('./layouts/SplitPaneWorkspaceExample');

  return { default: module.SplitPaneWorkspaceExample };
});

const AnalyticsWorkspaceExample = lazy(async () => {
  const module = await import('./layouts/AnalyticsWorkspaceExample');

  return { default: module.AnalyticsWorkspaceExample };
});

const KanbanBoardExample = lazy(async () => {
  const module = await import('./layouts/KanbanBoardExample');

  return { default: module.KanbanBoardExample };
});

const DocumentationSidebarExample = lazy(async () => {
  const module = await import('./layouts/DocumentationSidebarExample');

  return { default: module.DocumentationSidebarExample };
});

const ListDetailPaneExample = lazy(async () => {
  const module = await import('./layouts/ListDetailPaneExample');

  return { default: module.ListDetailPaneExample };
});

const MarketingHeroExample = lazy(async () => {
  const module = await import('./layouts/MarketingHeroExample');

  return { default: module.MarketingHeroExample };
});

const ProfileHubExample = lazy(async () => {
  const module = await import('./layouts/ProfileHubExample');

  return { default: module.ProfileHubExample };
});

const CommandCenterExample = lazy(async () => {
  const module = await import('./layouts/CommandCenterExample');

  return { default: module.CommandCenterExample };
});

const PricingComparisonExample = lazy(async () => {
  const module = await import('./layouts/PricingComparisonExample');

  return { default: module.PricingComparisonExample };
});

const SupportPortalExample = lazy(async () => {
  const module = await import('./layouts/SupportPortalExample');

  return { default: module.SupportPortalExample };
});

const OrderManagementExample = lazy(async () => {
  const module = await import('./layouts/OrderManagementExample');

  return { default: module.OrderManagementExample };
});

export const examples: ExampleDefinition[] = [
  {
    id: 'login-page',
    category: 'Forms',
    title: 'Login Page',
    summary: 'Form-focused authentication layout with clear hierarchy.',
    component: LoginPageExample,
    sourceFiles: ['src/examples/login/LoginPageExample.tsx'],
  },
  {
    id: 'login-split-brand',
    category: 'Forms',
    title: 'Login Split Brand',
    summary: 'Two-panel login with a branded trust surface and focused form.',
    component: LoginSplitBrandExample,
    sourceFiles: ['src/examples/login/LoginSplitBrandExample.tsx'],
  },
  {
    id: 'login-workspace-sso',
    category: 'Forms',
    title: 'Login Workspace SSO',
    summary: 'Workspace-first organization sign-in with domain-aware email hints.',
    component: LoginWorkspaceSsoExample,
    sourceFiles: ['src/examples/login/LoginWorkspaceSsoExample.tsx'],
  },
  {
    id: 'login-passkey-tabs',
    category: 'Forms',
    title: 'Login Passkey Tabs',
    summary: 'Adaptive authentication using password and passkey tabs.',
    component: LoginPasskeyTabsExample,
    sourceFiles: ['src/examples/login/LoginPasskeyTabsExample.tsx'],
  },
  {
    id: 'login-magic-link',
    category: 'Forms',
    title: 'Login Magic Link',
    summary: 'Passwordless email-link flow with inline delivery status feedback.',
    component: LoginMagicLinkExample,
    sourceFiles: ['src/examples/login/LoginMagicLinkExample.tsx'],
  },
  {
    id: 'login-security-check',
    category: 'Forms',
    title: 'Login Security Check',
    summary: 'Credential entry with second-factor preference and trusted-device control.',
    component: LoginSecurityCheckExample,
    sourceFiles: ['src/examples/login/LoginSecurityCheckExample.tsx'],
  },
  {
    id: 'dashboard-cards',
    category: 'Dashboards',
    title: 'Dashboard Cards',
    summary: 'Responsive metric cards with compact action areas.',
    component: DashboardCardsExample,
    sourceFiles: ['src/examples/dashboard/DashboardCardsExample.tsx'],
  },
  {
    id: 'financial-analysis',
    category: 'Dashboards',
    title: 'Financial Analysis',
    summary: 'Finance KPIs with trend and allocation chart visuals.',
    component: FinancialAnalysisExample,
    sourceFiles: ['src/examples/dashboard/FinancialAnalysisExample.tsx'],
  },
  {
    id: 'account-settings',
    category: 'Navigation',
    title: 'Account Settings',
    summary: 'Editable settings view using grouped form controls.',
    component: AccountSettingsExample,
    sourceFiles: ['src/examples/settings/AccountSettingsExample.tsx'],
  },
  {
    id: 'split-pane-workspace',
    category: 'Layouts',
    title: 'Split Pane Workspace',
    summary: 'Two-pane navigation and editor layout for productivity apps.',
    component: SplitPaneWorkspaceExample,
    sourceFiles: ['src/examples/layouts/SplitPaneWorkspaceExample.tsx'],
  },
  {
    id: 'analytics-workspace',
    category: 'Layouts',
    title: 'Analytics Workspace',
    summary: 'KPI-first analytics composition with expandable trend panel.',
    component: AnalyticsWorkspaceExample,
    sourceFiles: ['src/examples/layouts/AnalyticsWorkspaceExample.tsx'],
  },
  {
    id: 'kanban-board',
    category: 'Layouts',
    title: 'Kanban Board',
    summary: 'Multi-column task board layout with status lanes.',
    component: KanbanBoardExample,
    sourceFiles: ['src/examples/layouts/KanbanBoardExample.tsx'],
  },
  {
    id: 'documentation-sidebar',
    category: 'Layouts',
    title: 'Documentation Sidebar',
    summary: 'Sidebar-driven content layout for docs and reference pages.',
    component: DocumentationSidebarExample,
    sourceFiles: ['src/examples/layouts/DocumentationSidebarExample.tsx'],
  },
  {
    id: 'list-detail-pane',
    category: 'Layouts',
    title: 'List Detail Pane',
    summary: 'Master-detail arrangement for communication and record views.',
    component: ListDetailPaneExample,
    sourceFiles: ['src/examples/layouts/ListDetailPaneExample.tsx'],
  },
  {
    id: 'marketing-hero',
    category: 'Layouts',
    title: 'Marketing Hero',
    summary: 'Hero-led conversion layout with supporting side messaging.',
    component: MarketingHeroExample,
    sourceFiles: ['src/examples/layouts/MarketingHeroExample.tsx'],
  },
  {
    id: 'profile-hub',
    category: 'Layouts',
    title: 'Profile Hub',
    summary: 'Identity rail plus content region for profile-centric apps.',
    component: ProfileHubExample,
    sourceFiles: ['src/examples/layouts/ProfileHubExample.tsx'],
  },
  {
    id: 'command-center',
    category: 'Layouts',
    title: 'Command Center',
    summary: 'Operational monitoring layout with modules and live events.',
    component: CommandCenterExample,
    sourceFiles: ['src/examples/layouts/CommandCenterExample.tsx'],
  },
  {
    id: 'pricing-comparison',
    category: 'Layouts',
    title: 'Pricing Comparison',
    summary: 'Plan comparison cards for commercial and subscription pages.',
    component: PricingComparisonExample,
    sourceFiles: ['src/examples/layouts/PricingComparisonExample.tsx'],
  },
  {
    id: 'support-portal',
    category: 'Layouts',
    title: 'Support Portal',
    summary: 'Help center and support escalation split for customer portals.',
    component: SupportPortalExample,
    sourceFiles: ['src/examples/layouts/SupportPortalExample.tsx'],
  },
  {
    id: 'order-management',
    category: 'Layouts',
    title: 'Order Management',
    summary: 'Data grid with order details, status indicators, and action controls.',
    component: OrderManagementExample,
    sourceFiles: ['src/examples/layouts/OrderManagementExample.tsx'],
  },
];

export const defaultExampleId = examples[0].id;

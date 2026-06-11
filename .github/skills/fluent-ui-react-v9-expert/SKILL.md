---
name: fluent-ui-react-v9-expert
description: 'Build, refactor, and review Fluent UI React v9 web applications with production-grade architecture, theming, accessibility, and performance. Use for Fluent UI v9 component design, token-based theme systems, responsive layouts, interaction patterns, and quality validation in React + TypeScript apps.'
argument-hint: 'Describe the feature, page, or component goal and any design constraints.'
user-invocable: true
disable-model-invocation: false
---

# Fluent UI React v9 Expert

Create and evolve high-quality React + TypeScript web applications using Fluent UI v9 with strong UX, accessibility, maintainability, and performance.

## When to Use
- You are building or refactoring a React app that uses `@fluentui/react-components`.
- You need consistent iconography using `@fluentui/react-icons` for actions, status, and navigation cues.
- You need a new page, complex component, or design system update using Fluent UI v9.
- You want consistent theming through Fluent design tokens and reusable component patterns.
- You are reviewing code for Fluent UI correctness, accessibility, and behavior regressions.
- You want proactive redesign options, not only strict preservation of existing visuals.

## Expected Inputs
- Feature or UX goal.
- Target files or area of the app.
- Constraints: browser support, accessibility requirements, responsiveness, performance goals.
- Theme direction: existing theme to preserve or a new variation to introduce.

## Procedure
1. Establish context and constraints.
2. Design component architecture and state model.
3. Implement UI with Fluent UI v9 primitives and composition patterns.
4. Integrate theming and token usage.
5. Validate accessibility and interaction behaviors.
6. Verify performance and run checks.
7. Summarize changes and list follow-up options.

## Detailed Workflow

### 1) Establish Context
- Identify whether work is net-new UI, extension of existing UI, or refactor.
- Detect established patterns in the codebase and preserve naming/style conventions.
- Confirm where the change belongs: app shell, route-level page, shared component, or theme file.

Decision points:
- If requirements are open-ended, propose 1-2 bold but practical redesign directions before implementation.
- If design system patterns already exist, align with them unless a redesign direction is explicitly selected.
- If requirements conflict with existing structure, prefer incremental changes over broad rewrites.

### 2) Plan Architecture
- Define component boundaries: container vs presentational responsibilities.
- Choose state strategy: local state, lifted state, context, or memoized derived state.
- Prefer clear, typed props and small composable components.

Decision points:
- If state touches multiple distant components, use context or a shared state boundary.
- If a component exceeds a single responsibility, split it before adding new behaviors.

### 3) Implement with Fluent UI v9
- Use Fluent primitives (`Button`, `Card`, `Input`, `Dialog`, `TabList`, etc.) before custom HTML controls.
- Use `@fluentui/react-icons` for UI iconography rather than mixed external icon sets.
- Use `makeStyles` and `tokens` for styling consistency.
- Keep semantic markup and predictable interaction flow.
- Build responsive layouts with flexible containers and spacing tokens.

Decision points:
- If a Fluent component supports the behavior natively, use it instead of custom logic.
- If an icon is decorative, hide it from assistive tech; if informative, ensure accessible labeling is present.
- If custom styling is required, apply minimal overrides and keep token alignment.

### 4) Apply Theme Strategy
- Reuse existing theme modules when present.
- Add or adjust theme variants only when there is a concrete UX requirement.
- Keep color, spacing, radius, typography, and motion coherent through token usage.

Decision points:
- If introducing a new theme, ensure all key surfaces and interaction states remain legible.
- If a style change is one-off, prefer local style token usage over adding a new global theme.

### 5) Validate Accessibility
- Confirm keyboard navigation order and focus visibility.
- Verify labels, aria attributes, and semantic roles where needed.
- Ensure contrast and readable typography at common viewport sizes.
- Check interactive elements for expected behavior with keyboard and pointer.

Decision points:
- If an interaction is not keyboard reachable, redesign before merging.
- If semantics are unclear, prefer explicit aria labeling with concise names.

### 6) Verify Quality and Performance
- Run project checks (typecheck/build/tests/lint where available).
- Inspect for avoidable re-renders and expensive computations.
- Remove dead code and stale styles introduced during iteration.

Decision points:
- If checks fail due to local change, fix before finalizing.
- If failures are unrelated, report them explicitly with scope notes.

### 7) Finalize Delivery
- Provide a concise summary of what changed and why.
- List impacted files and notable implementation choices.
- Suggest natural next steps (tests, polish, rollout, cleanup) when useful.

## Quality Criteria (Completion Checks)
- Fluent UI v9 components are used correctly and consistently.
- Icon usage is consistent through `@fluentui/react-icons` with accessible semantics.
- TypeScript types are strict, readable, and aligned with component APIs.
- Theme token usage is consistent and avoids hard-coded style drift.
- Keyboard, focus, labels, and contrast meet practical accessibility expectations.
- The change compiles and does not introduce obvious regressions.
- The solution either preserves existing design language or intentionally applies a selected redesign direction.

## Output Contract
- A working implementation with minimal, scoped edits.
- A short implementation summary with rationale.
- Any unresolved risks, assumptions, or follow-up tasks clearly listed.

## Fluent UI v9 Resources
- [Fluent UI React v9 Documentation](https://react.fluentui.dev/)

# Fluent UI React v9 Components

> **Package:** `@fluentui/react-components`  
> **Docs:** [react.fluentui.dev](https://react.fluentui.dev)  
> **Install:** `npm install @fluentui/react-components`

All components are imported from `@fluentui/react-components` unless otherwise noted.

---

## Setup

```tsx
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

export default function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      {/* your app */}
    </FluentProvider>
  );
}
```

**Available themes:** `webLightTheme` · `webDarkTheme` · `teamsLightTheme` · `teamsDarkTheme`

---

## Surfaces & Layout

### Accordion
Collapsible sections for grouping related content.

```tsx
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@fluentui/react-components';
```

| Sub-component | Description |
|---|---|
| `Accordion` | Root container |
| `AccordionItem` | Single collapsible item |
| `AccordionHeader` | Clickable header/trigger |
| `AccordionPanel` | Collapsible content panel |

---

### Card
Container for related information and actions.

```tsx
import { Card, CardHeader, CardFooter, CardPreview } from '@fluentui/react-components';
```

| Sub-component | Description |
|---|---|
| `Card` | Root container |
| `CardHeader` | Header with title, description, and action |
| `CardFooter` | Footer area for actions |
| `CardPreview` | Visual preview area (images, media) |

---

### Drawer
A panel that slides in from the edge of the screen.

```tsx
import {
  DrawerBody, DrawerHeader, DrawerHeaderTitle, DrawerHeaderNavigation,
  InlineDrawer, OverlayDrawer
} from '@fluentui/react-components';
```

| Sub-component | Description |
|---|---|
| `OverlayDrawer` | Drawer that overlays content with a backdrop |
| `InlineDrawer` | Drawer that pushes adjacent content |
| `DrawerBody` | Scrollable body content |
| `DrawerHeader` | Header area |
| `DrawerHeaderTitle` | Title and optional close action |
| `DrawerHeaderNavigation` | Navigation area within the header |

---

### Divider
A horizontal or vertical visual separator.

```tsx
import { Divider } from '@fluentui/react-components';
```

---

### Portal
Renders children into a different DOM node.

```tsx
import { Portal } from '@fluentui/react-components';
```

---

## Buttons

### Button
Triggers a single action or event.

```tsx
import { Button, CompoundButton, SplitButton, MenuButton, ToggleButton } from '@fluentui/react-components';
```

| Component | Description |
|---|---|
| `Button` | Standard button |
| `CompoundButton` | Button with a secondary line of text |
| `SplitButton` | Button with a separate dropdown trigger |
| `MenuButton` | Button that opens a menu |
| `ToggleButton` | Button with a checked/unchecked state |

**Appearances:** `primary` · `secondary` · `outline` · `subtle` · `transparent`

---

## Inputs & Forms

### Checkbox
Lets people select one or more options from a group.

```tsx
import { Checkbox } from '@fluentui/react-components';
```

---

### Combobox & Dropdown
Combobox allows freeform text entry with suggestions; Dropdown is select-only.

```tsx
import { Combobox, Dropdown, Option, OptionGroup } from '@fluentui/react-components';
```

| Component | Description |
|---|---|
| `Combobox` | Editable input with a dropdown list |
| `Dropdown` | Select-only dropdown list |
| `Option` | Individual selectable item |
| `OptionGroup` | Groups of options with a label |

---

### Field
Provides a label, validation message, and hint for a form control.

```tsx
import { Field } from '@fluentui/react-components';
```

---

### Input
Short single-line text entry.

```tsx
import { Input } from '@fluentui/react-components';
```

---

### Radio & RadioGroup
Lets people select one option from a group.

```tsx
import { Radio, RadioGroup } from '@fluentui/react-components';
```

---

### SearchBox
A text input optimized for search with a built-in search icon.

```tsx
import { SearchBox } from '@fluentui/react-components';
```

---

### Select
Native `<select>` element styled with Fluent UI.

```tsx
import { Select } from '@fluentui/react-components';
```

---

### Slider
Lets people select a value from a range by dragging a thumb.

```tsx
import { Slider } from '@fluentui/react-components';
```

---

### SpinButton
Numeric input with increment/decrement controls.

```tsx
import { SpinButton } from '@fluentui/react-components';
```

---

### Switch
A toggle switch for a binary on/off state.

```tsx
import { Switch } from '@fluentui/react-components';
```

---

### Textarea
Multi-line text input.

```tsx
import { Textarea } from '@fluentui/react-components';
```

---

## Data Display

### Avatar
Represents a person or group with an image, initials, or icon.

```tsx
import { Avatar, AvatarGroup, AvatarGroupItem, AvatarGroupPopover } from '@fluentui/react-components';
```

| Component | Description |
|---|---|
| `Avatar` | Single person/group avatar |
| `AvatarGroup` | A stack or pile of multiple avatars |
| `AvatarGroupItem` | Individual item within an `AvatarGroup` |
| `AvatarGroupPopover` | Overflow popover for `AvatarGroup` |

---

### Badge
A small visual indicator for status, count, or description.

```tsx
import { Badge, CounterBadge, PresenceBadge } from '@fluentui/react-components';
```

| Component | Description |
|---|---|
| `Badge` | Generic badge with text or icon |
| `CounterBadge` | Badge displaying a numeric count |
| `PresenceBadge` | Badge indicating online/away/busy status |

---

### Breadcrumb
Hierarchical navigation path.

```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider } from '@fluentui/react-components';
```

---

### Image
Renders an image with Fluent styles.

```tsx
import { Image } from '@fluentui/react-components';
```

---

### List
A vertical stack of repeated items.

```tsx
import { List, ListItem } from '@fluentui/react-components';
```

---

### Persona
A representation of a person with name, secondary text, presence, and avatar.

```tsx
import { Persona } from '@fluentui/react-components';
```

---

### ProgressBar
Indicates the progress of a task.

```tsx
import { ProgressBar } from '@fluentui/react-components';
```

---

### Skeleton
Placeholder loading state that mimics the shape of content.

```tsx
import { Skeleton, SkeletonItem } from '@fluentui/react-components';
```

---

### Table & DataGrid
Displays tabular data.

```tsx
import {
  Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell,
  TableCellLayout, TableCellActions, TableSelectionCell,
  DataGrid, DataGridHeader, DataGridHeaderCell, DataGridBody,
  DataGridRow, DataGridCell
} from '@fluentui/react-components';
```

| Component | Description |
|---|---|
| `Table` | Primitive table — full manual control |
| `DataGrid` | Feature-rich table with sorting, selection, virtualization |

---

### Text
Typography component following Fluent design system guidelines.

```tsx
import { Text, Body1, Body2, Caption1, Caption2, Subtitle1, Subtitle2, Title1, Title2, Title3, Display, LargeTitle } from '@fluentui/react-components';
```

---

### Tree
Hierarchical list of items that can be expanded/collapsed.

```tsx
import { Tree, TreeItem, TreeItemLayout, TreeItemPersonaLayout, FlatTree, FlatTreeItem } from '@fluentui/react-components';
```

---

## Overlays & Floating UI

### Dialog
A modal window requiring user acknowledgment.

```tsx
import { Dialog, DialogTrigger, DialogSurface, DialogTitle, DialogBody, DialogActions, DialogContent } from '@fluentui/react-components';
```

---

### Menu
A hidden list of options revealed by a trigger.

```tsx
import {
  Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, MenuItemCheckbox,
  MenuItemRadio, MenuGroup, MenuGroupHeader, MenuDivider, MenuButton
} from '@fluentui/react-components';
```

---

### MessageBar
An inline notification for important surface-level information.

```tsx
import { MessageBar, MessageBarTitle, MessageBarBody, MessageBarActions, MessageBarGroup } from '@fluentui/react-components';
```

**Intents:** `info` · `success` · `warning` · `error`

---

### Popover
A small non-modal floating surface with contextual information.

```tsx
import { Popover, PopoverTrigger, PopoverSurface } from '@fluentui/react-components';
```

---

### Toast & Toaster
A brief notification that appears temporarily.

```tsx
import {
  Toaster, Toast, ToastTitle, ToastBody, ToastFooter, ToastTrigger,
  useToastController, useId
} from '@fluentui/react-components';
```

---

### Tooltip
Supplemental information shown on hover/focus near a target element.

```tsx
import { Tooltip } from '@fluentui/react-components';
```

---

## Navigation

### Link
Interactive text for navigation within an app or to an external URL.

```tsx
import { Link } from '@fluentui/react-components';
```

---

### Nav (NavigationBar)
Primary navigation list for moving through main sections of an app.

```tsx
import { Nav, NavItem, NavSubItem, NavSubItemGroup, NavCategory, NavCategoryItem, NavDivider, NavDrawer, NavDrawerBody, NavDrawerHeader, NavSectionHeader, NavItem } from '@fluentui/react-components';
```

---

### TabList & Tabs
Navigates between related content sections.

```tsx
import { TabList, Tab } from '@fluentui/react-components';
```

---

### Toolbar
Access to frequently used actions related to the current view.

```tsx
import { Toolbar, ToolbarButton, ToolbarToggleButton, ToolbarDivider, ToolbarGroup, ToolbarRadioButton, ToolbarRadioGroup } from '@fluentui/react-components';
```

---

## Pickers

### ColorPicker
Selects a color from a palette or spectrum.

```tsx
import {
  ColorPicker, ColorArea, ColorSlider, ColorSpectrum, AlphaSlider
} from '@fluentui/react-components';
```

---

### SwatchPicker
Selects a color or pattern from a predefined swatch grid.

```tsx
import {
  SwatchPicker, ColorSwatch, ImageSwatch, EmptySwatch,
  SwatchPickerRow
} from '@fluentui/react-components';
```

---

### TagPicker
Selects multiple items displayed as tags from a dropdown list.

```tsx
import {
  TagPicker, TagPickerList, TagPickerInput, TagPickerControl,
  TagPickerGroup, TagPickerOption, TagPickerOptionGroup
} from '@fluentui/react-components';
```

---

### Tag & TagGroup
Displays selected items or metadata as compact chips.

```tsx
import { Tag, InteractionTag, InteractionTagPrimary, InteractionTagSecondary, TagGroup } from '@fluentui/react-components';
```

---

### Carousel
Cycles through a set of content panels.

```tsx
import {
  Carousel, CarouselCard, CarouselNav, CarouselNavButton, CarouselNavContainer,
  CarouselSlider, CarouselButton, CarouselViewport
} from '@fluentui/react-components';
```

---

## Compat / Migration Components

These components provide v8-compatible APIs within the v9 ecosystem.

| Component | Package |
|---|---|
| `Calendar` | `@fluentui/react-calendar-compat` |
| `DatePicker` | `@fluentui/react-datepicker-compat` |
| `ColorPicker` (v8 API) | `@fluentui/react-colorpicker-compat` |

---

## Preview / Unstable Components

Imported from `@fluentui/react-components/unstable`. APIs may change.

| Component | Description |
|---|---|
| `Alert` | Inline alert message (preview) |
| `Virtualizer` | Efficient rendering of large lists (preview) |
| `VirtualizerScrollView` | Virtualizer with built-in scroll container |
| `VirtualizerScrollViewDynamic` | Virtualizer for dynamic item heights |

```tsx
import { Alert, Virtualizer } from '@fluentui/react-components/unstable';
```

---

## Provider & Theming

| Export | Description |
|---|---|
| `FluentProvider` | Root provider — required wrapper for all v9 components |
| `webLightTheme` | Default light theme for web |
| `webDarkTheme` | Default dark theme for web |
| `teamsLightTheme` | Microsoft Teams light theme |
| `teamsDarkTheme` | Microsoft Teams dark theme |
| `createLightTheme(brand)` | Creates a custom light theme from brand tokens |
| `createDarkTheme(brand)` | Creates a custom dark theme from brand tokens |
| `tokens` | Object of all design token CSS variables |

---

## Icons

Fluent UI v9 uses `@fluentui/react-icons` (a separate package).

```bash
npm install @fluentui/react-icons
```

```tsx
import { AddRegular, AddFilled, bundleIcon } from '@fluentui/react-icons';

const AddIcon = bundleIcon(AddFilled, AddRegular);
```

Icons follow the naming convention: `{Name}{Style}` where Style is `Regular`, `Filled`, or `Color`.  
Full icon catalog: [fluenticons.co](https://fluenticons.co)

---

## Utilities & Hooks

| Utility | Description |
|---|---|
| `makeStyles` | Creates atomic CSS-in-JS styles with Griffel |
| `mergeClasses` | Merges Griffel class names |
| `shorthands` | CSS shorthand helpers (padding, margin, border, etc.) |
| `useId` | Generates a stable unique ID for accessibility |
| `useArrowNavigationGroup` | Arrow key navigation within a container |
| `useFocusVisible` | Tracks keyboard vs pointer focus |
| `useModalAttributes` | ARIA attributes for modal components |
| `useRestoreFocusTarget` | Restores focus after a component closes |
| `useToastController` | Programmatically dispatch toasts |

---

## Quick Reference: All Stable Components

| Component | Import Name(s) |
|---|---|
| Accordion | `Accordion`, `AccordionHeader`, `AccordionItem`, `AccordionPanel` |
| Avatar | `Avatar`, `AvatarGroup`, `AvatarGroupItem`, `AvatarGroupPopover` |
| Badge | `Badge`, `CounterBadge`, `PresenceBadge` |
| Breadcrumb | `Breadcrumb`, `BreadcrumbButton`, `BreadcrumbDivider`, `BreadcrumbItem` |
| Button | `Button`, `CompoundButton`, `MenuButton`, `SplitButton`, `ToggleButton` |
| Card | `Card`, `CardFooter`, `CardHeader`, `CardPreview` |
| Carousel | `Carousel`, `CarouselButton`, `CarouselCard`, `CarouselNav`, `CarouselSlider` |
| Checkbox | `Checkbox` |
| Color Picker | `AlphaSlider`, `ColorArea`, `ColorPicker`, `ColorSlider`, `ColorSpectrum` |
| Combobox | `Combobox`, `Option`, `OptionGroup` |
| DataGrid | `DataGrid`, `DataGridBody`, `DataGridCell`, `DataGridHeader`, `DataGridHeaderCell`, `DataGridRow` |
| Dialog | `Dialog`, `DialogActions`, `DialogBody`, `DialogContent`, `DialogSurface`, `DialogTitle`, `DialogTrigger` |
| Divider | `Divider` |
| Drawer | `DrawerBody`, `DrawerHeader`, `DrawerHeaderTitle`, `InlineDrawer`, `OverlayDrawer` |
| Dropdown | `Dropdown`, `Option`, `OptionGroup` |
| Field | `Field` |
| Image | `Image` |
| Input | `Input` |
| Label | `Label` |
| Link | `Link` |
| List | `List`, `ListItem` |
| Menu | `Menu`, `MenuDivider`, `MenuGroup`, `MenuGroupHeader`, `MenuItem`, `MenuItemCheckbox`, `MenuItemRadio`, `MenuList`, `MenuPopover`, `MenuTrigger` |
| MessageBar | `MessageBar`, `MessageBarActions`, `MessageBarBody`, `MessageBarGroup`, `MessageBarTitle` |
| Nav | `Nav`, `NavCategory`, `NavCategoryItem`, `NavDivider`, `NavDrawer`, `NavDrawerBody`, `NavDrawerHeader`, `NavItem`, `NavSectionHeader`, `NavSubItem`, `NavSubItemGroup` |
| Persona | `Persona` |
| Popover | `Popover`, `PopoverSurface`, `PopoverTrigger` |
| Portal | `Portal` |
| ProgressBar | `ProgressBar` |
| Radio | `Radio`, `RadioGroup` |
| SearchBox | `SearchBox` |
| Select | `Select` |
| Skeleton | `Skeleton`, `SkeletonItem` |
| Slider | `Slider` |
| SpinButton | `SpinButton` |
| Swatch Picker | `ColorSwatch`, `EmptySwatch`, `ImageSwatch`, `SwatchPicker`, `SwatchPickerRow` |
| Switch | `Switch` |
| Table | `Table`, `TableBody`, `TableCell`, `TableCellActions`, `TableCellLayout`, `TableHeader`, `TableHeaderCell`, `TableRow`, `TableSelectionCell` |
| TabList | `Tab`, `TabList` |
| Tag | `InteractionTag`, `InteractionTagPrimary`, `InteractionTagSecondary`, `Tag`, `TagGroup` |
| Tag Picker | `TagPicker`, `TagPickerControl`, `TagPickerGroup`, `TagPickerInput`, `TagPickerList`, `TagPickerOption`, `TagPickerOptionGroup` |
| Text | `Body1`, `Body2`, `Caption1`, `Caption2`, `Display`, `LargeTitle`, `Subtitle1`, `Subtitle2`, `Text`, `Title1`, `Title2`, `Title3` |
| Textarea | `Textarea` |
| Toast | `Toast`, `ToastBody`, `ToastFooter`, `ToastTitle`, `ToastTrigger`, `Toaster` |
| Toolbar | `Toolbar`, `ToolbarButton`, `ToolbarDivider`, `ToolbarGroup`, `ToolbarRadioButton`, `ToolbarRadioGroup`, `ToolbarToggleButton` |
| Tooltip | `Tooltip` |
| Tree | `FlatTree`, `FlatTreeItem`, `Tree`, `TreeItem`, `TreeItemLayout`, `TreeItemPersonaLayout` |


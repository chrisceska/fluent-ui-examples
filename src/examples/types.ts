import { ComponentType, LazyExoticComponent } from 'react';

export interface ExampleDefinition {
  id: string;
  category: string;
  title: string;
  summary: string;
  component: LazyExoticComponent<ComponentType>;
  sourceFiles: string[];
}

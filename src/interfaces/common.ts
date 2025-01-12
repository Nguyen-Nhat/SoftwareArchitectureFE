import React from 'react';

export interface IRoute {
  exact?: boolean;
  path: string;
  name: string;
  title?: string;
  icon?: React.ComponentType<{ className?: string }>;
  component?: React.ElementType;
  children: string[];
}

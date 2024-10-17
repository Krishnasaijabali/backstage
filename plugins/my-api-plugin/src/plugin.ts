import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const myApiPluginPlugin = createPlugin({
  id: 'my-api-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const MyApiPluginPage = myApiPluginPlugin.provide(
  createRoutableExtension({
    name: 'MyApiPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

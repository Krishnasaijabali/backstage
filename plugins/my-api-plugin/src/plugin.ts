import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

// Step 1: Define the plugin
export const myApiPluginPlugin = createPlugin({
  id: 'my-api-plugin',
  routes: {
    root: rootRouteRef,  // Define route reference
  },
});

// Step 2: Define the routable extension (UI page component)
export const MyApiPluginPage = myApiPluginPlugin.provide(
  createRoutableExtension({
    name: 'MyApiPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),  // Lazy-load the ExampleComponent
    mountPoint: rootRouteRef,  // Mount component at this route
  }),
);

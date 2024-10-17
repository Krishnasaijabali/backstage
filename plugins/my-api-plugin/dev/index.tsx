import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { myApiPluginPlugin, MyApiPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(myApiPluginPlugin)
  .addPage({
    element: <MyApiPluginPage />,
    title: 'Root Page',
    path: '/my-api-plugin',
  })
  .render();

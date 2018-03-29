import React from 'react';

import TemplateMobx from '../src/template-mobx/index.jsx';
import TemplateRedux from '../src/template-redux/index.jsx';
import SampleDataTable from '../src/sample-data-table/index.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('template', module)
  .add('mobx', () => <TemplateMobx />)
  .add('redux', () => <TemplateRedux />);

storiesOf('sample', module)
  .add('data-table',()=> <SampleDataTable />);

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import 'semantic-ui-css/semantic.min.css';
import MainLayout from '../components/MainLayout';
import MainNavigation from '../components/MainNavigation';
import SecondaryNavigation from '../components/SecondaryNavigation';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('My Components', module)
  .add('MainLayout', () => (
    <MainLayout />
  ))
  .add('MainNavigation', () => (
    <MainNavigation />
  ))
  .add('SecondaryNavigation', () => (
    <SecondaryNavigation />
  ));

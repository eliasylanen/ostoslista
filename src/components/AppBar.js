import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import React from 'react';
import FloatingActionButtonExampleSimple from './FloatingButton'

import ActionButtonContainer from './ActionButtons';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarContainer = (props) => (
  <AppBar
    style={{verticalAlign: 'middle'}}
    title="Ostoslista"
    showMenuIconButton={false}
    iconElementRight={<ActionButtonContainer profile={props.profile} />}
  />
);

export default AppBarContainer;


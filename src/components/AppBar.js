import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import React from 'react';
import ActionButtonContainer from './ActionButtons';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarContainer = (props) => (
  <AppBar
    style={{verticalAlign: 'middle', boxShadow: 'none'}}
    title="Ostoslista"
    showMenuIconButton={false}
    iconElementRight={<ActionButtonContainer profile={props.profile} />}
    iconStyleRight={{marginRight: 0}}
  />
);

export default AppBarContainer;


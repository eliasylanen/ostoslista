import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import React from 'react';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Ostoslista"
    showMenuIconButton={false}
    iconElementRight={<FontIcon className="material-icons">home</FontIcon>}
  />
);

export default AppBarExampleIcon;


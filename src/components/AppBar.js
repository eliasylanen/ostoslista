import AppBar from 'material-ui/AppBar';
import React from 'react';
import ActionButtonContainer from './ActionButtons';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarContainer = (props) => (
  <AppBar
    style={{verticalAlign: 'middle', boxShadow: 'none', backgroundColor: '#00796b'}}
    title="Ostoslista"
    showMenuIconButton={false}
    iconElementRight={<ActionButtonContainer profile={props.profile} />}
    iconStyleRight={{margin: '.5rem 0'}}
  />
);

export default AppBarContainer;


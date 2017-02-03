import AppBar from 'material-ui/AppBar';
import { IndexLink } from 'react-router';
import React from 'react';
import "./AppBar.css"

import ActionButtonContainer from './ActionButtons';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarContainer = (props) => (
  <AppBar
    style={{verticalAlign: 'middle', boxShadow: 'none', backgroundColor: '#00796b'}}
    title={<IndexLink to="/" style={{color: '#F5F5F5', textDecoration: 'none'}}>Ostoslista</IndexLink>}
    showMenuIconButton={false}
    iconElementRight={<ActionButtonContainer profile={props.profile} />}
    iconStyleRight={{margin: '.5rem 0', textAlign: 'right'}}
  />
);

export default AppBarContainer;


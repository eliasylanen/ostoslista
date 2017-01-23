import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import {logout} from '../auth.js';

import AppBarButtonContainer from './AppBarButtonContainer';
import FloatingActionButtonExampleSimple from './FloatingButton';
import {grey50} from 'material-ui/styles/colors';
import FloatingActionButtonExampleSimple from './FloatingButton';

const styles = {
  profile: {
    cursor: 'initial'
  },
  avatar: {
    borderRadius: '25px'
  }
}
import './ActionButtons.css';

function logged(props) {
  if (!localStorage.getItem('profile')) return <h2>Login</h2>;
  return location.pathname.includes('/lists')
  ? <div> 
      <IconMenu
        iconButtonElement={<img src={props.profile.picture} alt={props.profile.nickname} style={styles.avatar} />}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        listStyle={{textAlign: 'center'}}
      >
        <MenuItem primaryText="Custom width" />
      </IconMenu>
      <AppBarButtonContainer />
    </div>
  : <div> 
      <IconMenu
        iconButtonElement={<img src={props.profile.picture} alt={props.profile.nickname} style={styles.avatar} />}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        listStyle={{textAlign: 'center'}}
      >
        <MenuItem disabled primaryText={props.profile.name } style={styles.profile} />
        <MenuItem onClick={logout}><FlatButton label="Log out" /></MenuItem>
      </IconMenu>
      <AppBarButtonContainer />
    </div>;
}

const ActionButtonContainer = (props) => (
  logged(props.profile)
);

export default ActionButtonContainer;
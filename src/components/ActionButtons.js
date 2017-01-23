import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import {logout} from '../auth.js';

import AppBarButtonContainer from './AppBarButtonContainer';
import FloatingActionButtonExampleSimple from './FloatingButton';
import {grey50} from 'material-ui/styles/colors';

import './ActionButtons.css';

function logged(props) {
  if (!localStorage.getItem('profile')) return <h2>Login</h2>;
  return location.pathname.includes('/lists')
  ? <div> 
      <IconMenu
        iconButtonElement={<img src={props.profile.picture} alt={props.profile.nickname} style={{borderRadius: '25px'}} />}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        listStyle={{textAlign: 'center'}}
      >
        <MenuItem disabled primaryText={props.profile.name} />
        <MenuItem onClick={logout}><FlatButton label="Log out" /></MenuItem>
      </IconMenu>
      <FloatingActionButtonExampleSimple />
    </div>
  : <div> 
      <IconMenu
        iconButtonElement={<img src={props.profile.picture} alt={props.profile.nickname} style={{borderRadius: '25px'}} />}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        listStyle={{textAlign: 'center'}}
      >
        <MenuItem disabled primaryText={props.profile.name} />
        <MenuItem onClick={logout}><FlatButton label="Log out" /></MenuItem>
      </IconMenu>
      <AppBarButtonContainer />
    </div>;
}

const ActionButtonContainer = (props) => (
  logged(props.profile)
);

export default ActionButtonContainer;
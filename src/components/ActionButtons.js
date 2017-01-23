import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import FloatingActionButtonExampleSimple from './FloatingButton';
import AppBarButtonContainer from './AppBarButtonContainer';
import './ActionButtons.css';
import {grey50} from 'material-ui/styles/colors';

const styles = {
  profile: {
    color: 'white'
  },
  avatar: {
    borderRadius: '25px'
  }
}

function logged(props) {
  if (!localStorage.getItem('profile')) return <h2>Login</h2>;
  return location.pathname.includes('/lists')
  ? <div> 
      {/*props.profile.name*/}
      <DropDownMenu
        value={<img src={props.profile.picture} alt={props.profile.nickname} style={{borderRadius: '25px'}} />}
      >
        <MenuItem primaryText="Custom width" />
      </DropDownMenu>
      <FloatingActionButtonExampleSimple />
    </div>
  : <div> 
      {/*props.profile.name*/} 
      <img src={props.profile.picture} alt={props.profile.nickname} style={{borderRadius: '25px'}} />
      <AppBarButtonContainer />
    </div>;
}

const ActionButtonContainer = (props) => (
  logged(props.profile)
);

export default ActionButtonContainer;
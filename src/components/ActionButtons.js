import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import {login, logout} from '../auth.js';

import AppBarButtonContainer from './AppBarButtonContainer';

const styles = {
  logout: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  profile: {
    cursor: 'initial'
  },
  avatar: {
    borderRadius: '30px',
    cursor: 'pointer',
  }
}
import './ActionButtons.css';

function logged(props) {
  return !localStorage.getItem('profile')
    ? <RaisedButton label="Kirjaudu sisään" onClick={login} style={{marginTop: 4}} />
    : location.pathname.includes('/lists')
      ? <div> 
          <IconMenu
            iconButtonElement={<img src={props.profile.picture} alt={props.profile.nickname} style={styles.avatar} />}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            listStyle={{textAlign: 'center'}}
          >
            <MenuItem disabled primaryText={props.profile.name} style={styles.profile} />
            <MenuItem onClick={logout}><FlatButton label="Kirjaudu ulos" hoverColor="none" /></MenuItem>
          </IconMenu>
          <AppBarButtonContainer />
        </div>
      : <div> 
          <IconMenu
            iconButtonElement={<img src={props.profile.picture} alt={props.profile.nickname} style={styles.avatar} />}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            listStyle={{textAlign: 'center'}}
          >
            <MenuItem disabled primaryText={props.profile.name } style={styles.profile} />
            <MenuItem onClick={logout}><FlatButton label="Kirjaudu ulos" hoverColor="none" /></MenuItem>
          </IconMenu>
        </div>
    ;
}

const ActionButtonContainer = (props) => (
  logged(props.profile)
);

ActionButtonContainer.propTypes = {
  profile: React.PropTypes.object,
}

export default ActionButtonContainer;
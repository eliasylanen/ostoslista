import React from 'react';
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
  ? <div style={styles.profile}>
      {props.profile.name}
      <img src={props.profile.picture} alt={props.profile.nickname} style={styles.avatar} />
      <FloatingActionButtonExampleSimple />
    </div>
  : <div style={styles.profile}> 
      {props.profile.name} 
      <img src={props.profile.picture} alt={props.profile.nickname} style={styles.avatar} />
      <AppBarButtonContainer />
    </div>;
}

const ActionButtonContainer = (props) => (
  logged(props.profile)
);

export default ActionButtonContainer;
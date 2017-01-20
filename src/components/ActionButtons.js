import React from 'react';
import FloatingActionButtonExampleSimple from './FloatingButton';
import DeleteList from './DeleteList';
import SaveList from './SaveList';
import AddPerson from './AddPerson';
import AppBarButtonContainer from './AppBarButtonContainer';
import './ActionButtons.css';

function logged(props) {
  if (!localStorage.getItem('profile')) return <h2>Login</h2>;
  return location.pathname.includes('/lists')
  ? <div> 
      {props.profile.name}
      <img src={props.profile.picture} alt={props.profile.nickname} style={{borderRadius: '25px'}} />
      <FloatingActionButtonExampleSimple />
    </div>
  : <div> 
      {props.profile.name} 
      <img src={props.profile.picture} alt={props.profile.nickname} style={{borderRadius: '25px'}} />
      <AppBarButtonContainer />
    </div>;
}

const ActionButtonContainer = (props) => (
  logged(props.profile)
);

export default ActionButtonContainer;
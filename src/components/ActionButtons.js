import React from 'react';

import './ActionButtons.css';

function logged(props) {
  if (!localStorage.getItem('profile')) return <h2>Login</h2>;
  return location.pathname.includes('/lists')
  ? <div><img src={props.profile.picture} alt={props.profile.nickname} /> {props.profile.name} - Lists</div>
  : <div><img src={props.profile.picture} alt={props.profile.nickname} /> {props.profile.name} - Jotakin</div>;
}

const ActionButtonContainer = (props) => (
  logged(props.profile)
);

export default ActionButtonContainer;
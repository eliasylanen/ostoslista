import React from 'react';
import FloatingActionButtonExampleSimple from './FloatingButton';
import EditButton from './EditButton';
;
const ActionButtonContainer = () => (
  <div>
    {!localStorage.getItem('profile') && <h2>Login</h2>}
    {localStorage.getItem('profile') && location.pathname.includes('/lists') && <FloatingActionButtonExampleSimple />}
    {localStorage.getItem('profile') && !location.pathname.includes('/lists') && <EditButton />}
  </div>
);

export default ActionButtonContainer;
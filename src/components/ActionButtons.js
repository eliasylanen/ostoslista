import React from 'react';
import FloatingActionButtonExampleSimple from './FloatingButton';

const ActionButtonContainer = () => (
  <div>
    {!localStorage.getItem('profile') && <h2>Login</h2>}
    {localStorage.getItem('profile') && location.pathname.includes('/lists') && <FloatingActionButtonExampleSimple />}
    {localStorage.getItem('profile') && !location.pathname.includes('/lists') && <h2>Jotakin</h2>}
  </div>
);

export default ActionButtonContainer;
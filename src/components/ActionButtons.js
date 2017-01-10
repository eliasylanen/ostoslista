import React from 'react';

const ActionButtonContainer = () => (
  <div>
    {!localStorage.getItem('profile') && <h2>Login</h2>}
    {localStorage.getItem('profile') && location.pathname.includes('/lists') && <h2>Lists</h2>}
    {localStorage.getItem('profile') && !location.pathname.includes('/lists') && <h2>Jotakin</h2>}
  </div>
);

export default ActionButtonContainer;
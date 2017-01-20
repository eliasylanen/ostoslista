import React from 'react';
import DeleteList from './DeleteList';
import SaveList from './SaveList';
import AddPerson from './AddPerson';

const AppBarButtonContainer = (props) => (
  <div style={{marginTop: '15px', marginBottom: '15px'}}>
    <DeleteList />
    <SaveList />
    <AddPerson />
  </div>
);

export default AppBarButtonContainer;
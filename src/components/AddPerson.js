import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {grey50} from 'material-ui/styles/colors';

const AddPerson = () => (
  <FontIcon className="material-icons" color={grey50} style={{float: 'right', marginRight: '15px', cursor: 'pointer'}}>person_add </FontIcon>
);

export default AddPerson;
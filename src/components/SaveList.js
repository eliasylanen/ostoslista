import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {grey50} from 'material-ui/styles/colors';

const SaveList = () => (
  <FontIcon className="material-icons" color={grey50} style={{ fontSize: '35px', float: 'right', marginRight: '15px', cursor: 'pointer'}}>save</FontIcon>
);

export default SaveList;
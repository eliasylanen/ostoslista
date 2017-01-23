import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {grey50} from 'material-ui/styles/colors';

const DeleteList = () => (
  <FontIcon className="material-icons"color={grey50} style={{float: 'right', cursor: 'pointer'}}>delete</FontIcon>
);

export default DeleteList;
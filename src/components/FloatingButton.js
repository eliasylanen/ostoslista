import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import ContentClear from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';

const style = {
};

export default class DialogExampleModal extends React.Component {
  state = {
    open: false,
    position: 'absolute',
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Luo lista"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label={<ContentClear />}
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FloatingActionButton label="Modal Dialog" onTouchTap={this.handleOpen}  style={style} backgroundColor="#512da8">
            <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Luo uusi lista"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <TextField 
            hintText="Listan nimi"
          />
        </Dialog>
      </div>
    );
  }
}

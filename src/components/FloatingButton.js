import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

import { Link } from 'react-router';

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 24,
  },
  CancelButtonStyle: {
    color: '#d50000',
  },
  CreateListButtonStyle: {
    color: 'rgb(0, 150, 136)',
  },
  underlineStyle: {
    borderColor: 'rgb(0, 150, 136)',
  },
};

export default class DialogExampleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <Link to="/lists/asd"><FlatButton style ={styles.CreateListButtonStyle}
        label="Luo lista"
        primary={true}
      /></Link>,
      <FlatButton style ={styles.CancelButtonStyle}
        label="Peruuta"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FloatingActionButton label="Dialog" onTouchTap={this.handleOpen} backgroundColor="#512da8" style={styles.floatingButton}>
            <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Luo uusi lista"
          titleStyle = {{color: 'rgb(66, 66, 66)'}}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
  <TextField style={{width:'100%'}} underlineFocusStyle={styles.underlineStyle}
            hintText="Listan nimi"
          />
        </Dialog>
      </div>
    );
  }
}

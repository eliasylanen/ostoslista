import React from 'react';
import TextField from 'material-ui/TextField';

import Table from './Table';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import {grey500} from 'material-ui/styles/colors';
import {grey800} from 'material-ui/styles/colors';

const styles = {
  listName: {
    color: grey800,
  },
  icon: {
    marginLeft: 15,
  },
  sharedWithText: {
    fontSize: 12,
    marginLeft: 14,
    marginTop: 20,
    marginBottom: 13,
    paddingBottom: 9,
  },
}

export default class List extends React.Component {
  render() {
    return ( 
      <div>
        <h1>{this.props.params.listId}</h1>
        <TextField hintText="Hint Text" />
        <h2 style={styles.listName}>Listan nimi</h2>
        <p style={styles.sharedWithText}>Jaettu: 
          <span>Elias, Lasse, Susanna</span> 
          <ImageEdit color={grey500}  style={styles.icon} />
        </p>
        <Table>
        </Table>
      </div>
    );
  }
}

List.propTypes = {
  params: React.PropTypes.objectOf(React.PropTypes.string)
};
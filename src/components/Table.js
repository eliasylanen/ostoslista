import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import ContentClear from 'material-ui/svg-icons/content/clear';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';

const styles = {
  Table: {
    borderSpacing: 100, 
  },
  tableCellNarrow: {
    width: 28,
  },
  icon: {
    color: '#616161',
  },
  incrementIcons: {
    color: '#424242',
    width: 17,
    height: 17,
  },
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Kurjala',
    numberOfItems: '24',
    sum: '18,90',
  },
];

export default class TableExampleComplex extends React.Component {

  render() {
    return (
      <div>
        <Table style={styles.Table} >
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn tooltip="Poista" style={styles.tableCellNarrow}>Poista</TableHeaderColumn>
              <TableHeaderColumn tooltip="Tuote">Tuote</TableHeaderColumn>
              <TableHeaderColumn tooltip="Määrä">Määrä</TableHeaderColumn>
              <TableHeaderColumn tooltip="Yht.">Yht.</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} styles={styles.Table} >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn style={styles.tableCellNarrow}><ContentClear style={styles.icon}/></TableRowColumn>
                <TableRowColumn>{row.product}</TableRowColumn>
                <TableRowColumn style={{marginLeft: '2px'}}>{row.numberOfItems}<Add style={styles.incrementIcons} /><Remove style={styles.incrementIcons} /></TableRowColumn>
                <TableRowColumn>{row.sum}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

Table.propTypes = {
  filter: React.PropTypes.string,
}
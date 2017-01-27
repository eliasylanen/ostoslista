import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import ContentClear from 'material-ui/svg-icons/content/clear';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import Divider from 'material-ui/Divider';
import {grey900} from 'material-ui/styles/colors';
import {red900} from 'material-ui/styles/colors';

const styles = {
  tableHeader: {
    fontSize: 32,
    color: (244, 66, 86),
  },
  tableCell: {
    fontSize: 14,
  },
  tableCellAdjusted: {
    paddingLeft: 36,
    paddingRight: 0,
  },
  tableHeader: {
    fontSize: 16,
  },
  tableHeaderNarrow: {
    fontSize: 14,
    width: 18,
  },
  tableCellNarrow: {
    fontSize: 14,
    width: 18,
  },
  icon: {
    color: '#616161',
    width: 22,
    height: 22,
  },
  incrementIcons: {
    color: '#424242',
    width: 11,
    height: 11,
  },
  totalSum: {
    marginLeft: 5,
  },
  totalSumContainer: {
    marginLeft: -20,
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
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
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

function filterData(filter) {
  return tableData.filter(value => value.product.toLowerCase().includes(filter.toLowerCase()));
}

export default class TableExampleComplex extends React.Component {render() {
  const data = this.props.filter ? filterData(this.props.filter) : tableData

    return (
      <div>
        <Table
           fixedFooter={true}
           fixedHeader={true}
           height={300}
        >
          <TableHeader 
            adjustForCheckbox={false} 
            displaySelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Poista" style={styles.tableHeaderNarrow}>Poista</TableHeaderColumn>
              <TableHeaderColumn tooltip="Tuote" style={styles.tableHeader}>Tuote</TableHeaderColumn>
              <TableHeaderColumn tooltip="Määrä" style={styles.tableHeader}>Määrä</TableHeaderColumn>
              <TableHeaderColumn tooltip="Yht." style={styles.tableHeader}>Yht.</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} styles={styles.Table} >
            {data.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn style={styles.tableCellNarrow}><ContentClear style={styles.icon}/></TableRowColumn>
                <TableRowColumn style={styles.tableCell}>{row.product}</TableRowColumn>
                <TableRowColumn style={styles.tableCellAdjusted}>
                  {row.numberOfItems}
                  <Add style={styles.incrementIcons} />
                  <Remove style={styles.incrementIcons} />
                </TableRowColumn>
                <TableRowColumn style={styles.tableCellAdjusted}>{row.sum}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn style={styles.tableHeader}>
                <div style={styles.totalSumContainer}>
                  <span style={{fontWeight: "bold"}}>Yhteensä:</span>
                  <span style={styles.totalSum}>46,79€</span>
                </div>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn 
                colSpan="3" 
                style={{textAlign: 'center'}}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

Table.propTypes = {
  filter: React.PropTypes.string,
}
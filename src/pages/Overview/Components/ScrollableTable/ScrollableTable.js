import classNames from 'classnames';
import { get, sortBy } from 'lodash';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import { cryptoHeader } from '../../Overview.constants';
import styles from './ScrollableTable.css';

const TableCell = ({ value, cellKey }) => {
  if (cellKey.startsWith('quote')) {
    const cell = value.toFixed(2);
    if (cellKey === 'quote.USD.percent_change_24h') {
      return <td
        className={classNames(cell < 0 ? styles.low : styles.high, styles.currencyCell)}
        data-label={cryptoHeader[cellKey]}
      >$ {cell}</td>;
    }
    return <td
      data-label={cryptoHeader[cellKey]}
      className={styles.currencyCell}
    >$ {cell}</td>;
  }
  return <td
    data-label={cryptoHeader[cellKey]}
  >{value}</td>;
};

TableCell.defaultProps = {
  value: '',
  cellKey: '',
};

TableCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  cellKey: PropTypes.string,
};

const ScrollableTable = ({ cryptoList, records, searchKey }) => {
  const headerKeys = cryptoHeader ? Object.values(cryptoHeader) : [];
  const bodyKeys = cryptoHeader ? Object.keys(cryptoHeader) : [];
  return (
    <Fragment>
      <div className={styles.tableHeader}>
        <table className={styles.table}>
          <thead>
            <tr>{headerKeys.map(head => <th key={head}>{head}</th>)}</tr>
          </thead>
        </table>
      </div>
      <div className={styles.tableBody}>
        <table className={styles.table}>
          <tbody>
            {sortBy(cryptoList, ['cmc_rank'])
              .slice(0, records)
              .filter(crypto => crypto.name.toUpperCase().includes(searchKey.toUpperCase()))
              .map(crypto => <tr key={crypto.id}>
                {bodyKeys.map(cellKey =>
                  <TableCell key={cellKey} value={get(crypto, cellKey, '')} cellKey={cellKey} />,
                )}
              </tr>)}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

ScrollableTable.defaultProps = {
  cryptoList: [],
  records: 100,
  searchKey: '',
};

ScrollableTable.propTypes = {
  cryptoList: PropTypes.array,
  records: PropTypes.number,
  searchKey: PropTypes.string,
};

export default ScrollableTable;
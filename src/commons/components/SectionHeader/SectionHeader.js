import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeader.css';

const SectionHeader = ({ searchKey, updateRecordView, onSearchKeyChange, records, showFilter, title }) => (
  <div className={styles.header}>
    <h2 className={styles.header__title}>{title}</h2>
    {showFilter && <div className={styles.header__filters}>
      <input
        placeholder="Search for name..."
        className={styles.header__searchBox}
        type='search'
        value={searchKey}
        onChange={onSearchKeyChange}
      />
      <div className={styles.header__dropdown}>
        <span className={styles.header__dropdown__title}>Records: </span>
        <div className={styles.header__dropdown__inputWrapper}>
          <select
            className={styles.header__dropdown__input}
            onChange={updateRecordView}
            defaultValue={records}>
            {[100, 50, 10].map(val => <option
                key={val}
              >{val}</option>,
            )}
          </select>
        </div>
      </div>
    </div>}
  </div>
);

SectionHeader.defaultProps = {
  searchKey: '',
  title: '',
  updateRecordView: f => f,
  onSearchKeyChange: f => f,
  records: 100,
  showFilter: false,
};

SectionHeader.propTypes = {
  searchKey: PropTypes.string,
  title: PropTypes.string,
  updateRecordView: PropTypes.func,
  onSearchKeyChange: PropTypes.func,
  records: PropTypes.number,
  showFilter: PropTypes.bool,
};

export default SectionHeader;
import React from 'react';
import PropTypes from 'prop-types'
import styles from './CustomTooltip.css';

const CustomTooltip = ({ active = false, payload = [] }) => {
  if (active) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{payload[0].payload.name}</h3>
        {payload.map(data => <p key={data.name} className={styles.label}>
          <span className={styles.labelTitle}>{data.name}:</span>
          {data.payload[data.dataKey].toFixed(1)}
        </p>)}
      </div>
    );
  }
  return null;
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default CustomTooltip;
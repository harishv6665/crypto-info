import { debounce, get } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import SectionHeader from '../../commons/components/SectionHeader/SectionHeader';
import CustomTooltip from './components/CustomTooltip/CustomTooltip';
import styles from './Liquidity.css';

class Liquidity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartWidth: Liquidity.getChartWidth(),
      chartHeight: 400,
    };
    this.onWindowResize = debounce(this.onWindowResize.bind(this), 300);
  }

  static getChartWidth() {
    const width = window.innerWidth;
    return Math.max(width - width > 600 ? width - 60 : width - 40, 550);
  }

  static getChartData(data, records) {
    return data
      .slice(0, records)
      .map(crypto => ({
        name: get(crypto, 'name'),
        x: get(crypto, 'quote.USD.market_cap'),
        y: get(crypto, 'quote.USD.volume_24h'),
        z: get(crypto, 'quote.USD.percent_change_24h'),
      }))
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  onWindowResize() {
    this.setState({ chartWidth: Liquidity.getChartWidth() });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render() {
    const { cryptoList, records } = this.props;
    const { chartWidth, chartHeight } = this.state;
    return (
      <div className={styles.wrapper}>
        <SectionHeader title="Liquidity Analysis" />
        <div className={styles.chartWrapper}>
          <ScatterChart
            className={styles.chart}
            width={chartWidth}
            height={chartHeight}
            margin={{
              top: 50, right: 100, bottom: 30, left: 100,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="marketcap" />
            <YAxis type="number" dataKey="y" name="volume" />
            <ZAxis dataKey="z" range={[10, 400]} name='price change' />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
            <Scatter data={Liquidity.getChartData(cryptoList, records)} fill="#35A3D6" />
          </ScatterChart>
        </div>
      </div>
    );
  }
}

Liquidity.propTypes = {
  cryptoList: PropTypes.array,
  records: PropTypes.number,
};

Liquidity.defaultProps = {
  cryptoList: [],
  records: 100,
};

export default connect(state => ({
  cryptoList: state.crypto.cryptoList || [],
  records: state.crypto.viewLength || 100,
}))(Liquidity);
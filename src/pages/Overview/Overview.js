import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setRecordView } from '../../commons/actions/actions';
import ScrollableTable from './Components/ScrollableTable/ScrollableTable';
import SectionHeader from '../../commons/components/SectionHeader/SectionHeader';
import styles from './Overview.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
    };
    this.updateRecordView = this.updateRecordView.bind(this);
    this.onSearchKeyChange = this.onSearchKeyChange.bind(this);
  }

  updateRecordView(event) {
    this.props.dispatch(setRecordView(event.target.value));
  }

  onSearchKeyChange(event) {
    this.setState({ searchKey: event.target.value });
  }

  render() {
    const { cryptoList, records } = this.props;
    const { searchKey } = this.state;
    return (
      <div className={styles.wrapper}>
        <SectionHeader
          title="Market overview"
          searchKey={searchKey}
          records={records}
          onSearchKeyChange={this.onSearchKeyChange}
          updateRecordView={this.updateRecordView}
          showFilter
        />
        <div className={styles.container}>
          <ScrollableTable cryptoList={cryptoList} records={records} searchKey={searchKey} />
        </div>
      </div>
    );
  }
}

Overview.defaultProps = {
  cryptoList: [],
  records: 100,
  dispatch: f => f,
};

Overview.propTypes = {
  cryptoList: PropTypes.array,
  records: PropTypes.number,
  dispatch: PropTypes.func,
};

export default connect(state => ({
  cryptoList: state.crypto.cryptoList || [],
  records: state.crypto.viewLength || 100,
}))(Overview);

import { all } from 'redux-saga/effects';
import { getCryptoListAsyncWatcher } from './getCryptoList.saga';

export default function* rootSaga() {
  yield all([
    getCryptoListAsyncWatcher(),
  ])
}

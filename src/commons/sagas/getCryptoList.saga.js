import { put, takeLatest } from 'redux-saga/effects';
import { getCryptoListSuccess } from '../actions/actions';
import { ACTION_GET_CRYPTO_LIST } from '../constants/constants';

function* getCryptoListAsync() {
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100';
  const headers = {
    'X-CMC_PRO_API_KEY': '58913850-d11c-402f-8305-cffcd07d293b',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  const response = yield fetch(url, {
    headers,
    method: 'GET',
    credentials: 'include',
  })
    .then(res => res.json())
    .catch((err) => {
      /* eslint-disable */
      console.error('ERROR: ', err);
      return err;
    });
  yield put(getCryptoListSuccess(response.data));
}

export function* getCryptoListAsyncWatcher() {
  yield takeLatest(ACTION_GET_CRYPTO_LIST, getCryptoListAsync);
}

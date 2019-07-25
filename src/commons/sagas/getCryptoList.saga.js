import { put, takeLatest } from 'redux-saga/effects';
import { getCryptoListSuccess } from '../actions/actions';
import { ACTION_GET_CRYPTO_LIST } from '../constants/constants';

function* getCryptoListAsync() {
  try {
    let url = '/v1/cryptocurrency/listings/latest?start=1&limit=100';
    let options = {};
    if (process.env.NODE_ENV !== 'development') {
      url = 'https://pro-api.coinmarketcap.com' + url;
      options = { mode: 'no-cors' };
    }
    const headers = {
      'X-CMC_PRO_API_KEY': '58913850-d11c-402f-8305-cffcd07d293b',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    const response = yield fetch(url, {
      headers,
      method: 'GET',
      credentials: 'include',
      ...options
    })
      .then(res => res.json())
      .catch((err) => {
        return err;
      });
    if(!response.data) {
      throw "Error";
    }
    yield put(getCryptoListSuccess(response.data));
  } catch (e) {
    window.alert('Ooops! something went wrong. Please try again.')
  }
}

export function* getCryptoListAsyncWatcher() {
  yield takeLatest(ACTION_GET_CRYPTO_LIST, getCryptoListAsync);
}
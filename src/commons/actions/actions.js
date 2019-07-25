import {
  ACTION_SET_RECORD_VIEW,
  ACTION_GET_CRYPTO_LIST,
  ACTION_GET_CRYPTO_LIST_SUCCESS,
} from '../constants/constants';

export const getCryptoList = () => ({ type: ACTION_GET_CRYPTO_LIST });
export const getCryptoListSuccess = payload => ({ type: ACTION_GET_CRYPTO_LIST_SUCCESS, payload });

export const setRecordView = payload => ({ type: ACTION_SET_RECORD_VIEW, payload });
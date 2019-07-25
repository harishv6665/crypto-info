import { ACTION_GET_CRYPTO_LIST_SUCCESS, ACTION_SET_RECORD_VIEW } from '../constants/constants';

const initialState = {
  cryptoList: [],
  viewLength: 100,
};

const crypto = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_GET_CRYPTO_LIST_SUCCESS:
    return {
      ...state,
      cryptoList: action.payload,
    };
  case ACTION_SET_RECORD_VIEW:
    return {
      ...state,
      viewLength: action.payload
    };
  default:
    return state;
  }
};

export default crypto;

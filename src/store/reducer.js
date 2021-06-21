import * as actionTypes from './actions/actionTypes';

const initialState = {
  results: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS: {
      return {
        results: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;

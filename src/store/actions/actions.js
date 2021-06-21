import * as actionTypes from './actionTypes';

export const updateResults = (data) => {
  return {
    type: actionTypes.UPDATE_RESULTS,
    data: data,
  };
};

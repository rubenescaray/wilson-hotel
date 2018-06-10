import {
  FOOTER_FETCH_DATA
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FOOTER_FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import home from './homeReducer';
import footer from './footerReducer';

export default combineReducers({
  home, footer
});

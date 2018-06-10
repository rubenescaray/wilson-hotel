import firebase from 'firebase';

import {
  FOOTER_FETCH_DATA
} from './types';

export const footerLinks = () => {
  return (dispatch) => {
    firebase.database().ref('/Footer')
      .on('value', snapshot => {
        dispatch({
          type: FOOTER_FETCH_DATA,
          payload: snapshot.val()
        });
      });
  };
};

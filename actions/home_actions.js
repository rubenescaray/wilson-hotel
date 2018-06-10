import firebase from 'firebase';

import {
  INPUT_UPDATE,
  HOTEL_FETCH_DATA,
  EMAIL_FETCH_DATA,
  CANTIDAD_FETCH_DATA,
  TIPO_FETCH_DATA,
  HOME_INPUT_FIELDS_ADDED
} from './types';

export const inputToState = ({ prop, value }) => {
  return {
    type: INPUT_UPDATE,
    payload: { prop, value }
  };
};

export const fetchHotels = () => async dispatch => {
  await firebase.database().ref('/Hoteles')
    .on('value', snapshot => {
      dispatch({
        type: HOTEL_FETCH_DATA,
        payload: snapshot.val()
      });
    });
};

export const fetchHotelEmail = (selected) => async dispatch => {
  await firebase.database().ref(`/Correos/${selected}`)
    .on('value', snapshot => {
      dispatch({
        type: EMAIL_FETCH_DATA,
        payload: snapshot.val().email
      });
    });
};

export const fetchCantidad = () => async dispatch => {
  await firebase.database().ref('/Cantidades')
    .on('value', snapshot => {
      dispatch({
        type: CANTIDAD_FETCH_DATA,
        payload: snapshot.val()
      });
    });
};

export const fetchTipos = () => async dispatch => {
  await firebase.database().ref('/Tipos')
    .on('value', snapshot => {
      dispatch({
        type: TIPO_FETCH_DATA,
        payload: snapshot.val()
      });
    });
};
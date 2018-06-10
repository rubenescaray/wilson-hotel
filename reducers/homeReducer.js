import {
  INPUT_UPDATE,
  HOTEL_FETCH_DATA,
  EMAIL_FETCH_DATA,
  CANTIDAD_FETCH_DATA,
  TIPO_FETCH_DATA
} from '../actions/types';

const INITIAL_STATE = {
  hotelSelected: '',
  correoHotelSelected: '',
  dateInSelected: '',
  dateOutSelected: '',
  cantidadSelected: '',
  tipoSelected: '',
  hotels: '',
  cantidad: '',
  tipo: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case HOTEL_FETCH_DATA:
      return {
        ...state,
        hotels: action.payload,
      };
    case EMAIL_FETCH_DATA:
      return {
        ...state,
        correoHotelSelected: action.payload,
      };
    case CANTIDAD_FETCH_DATA:
      return {
        ...state,
        cantidad: action.payload,
      };
    case TIPO_FETCH_DATA:
      return {
        ...state,
        tipo: action.payload,
      };
    default:
      return { ...state };
  }
};

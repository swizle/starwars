/* eslint-disable default-param-last */
import {
  SET_CHARACTERS,
  SET_LOADING,
  SET_VEHICLES,
} from './actions';

const initialState = {
  characters: [],
  vehicles: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case SET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

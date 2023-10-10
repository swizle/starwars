import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';
export const SET_CHARACTERS = 'SET_CHARACTERS';
export const SET_VEHICLES = 'SET_VEHICLES';

export const setLoading = (action) => ({
  type: SET_LOADING,
  payload: action,
});

export const setCharacters = (action) => ({
  type: SET_CHARACTERS,
  payload: action,
});

export const setVehicles = (action) => ({
  type: SET_VEHICLES,
  payload: action,
});

export const getCharacters = (page) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    dispatch(setCharacters(response.data.results));
    dispatch(setLoading(false));
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};

export const getVehicles = (page) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`https://swapi.dev/api/vehicles/?page=${page}`);
    dispatch(setVehicles(response.data.results));
    dispatch(setLoading(false));
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};

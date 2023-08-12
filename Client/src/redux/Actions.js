import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./Types";
import axios from "axios";

const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message)
    }
  };
};

const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export { addFav, removeFav, filterCards, orderCards };

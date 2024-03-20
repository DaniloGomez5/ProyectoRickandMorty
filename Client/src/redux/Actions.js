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
      if (error.response && error.response.status === 400) {
        console.error('Character is already a favorite');
      } else {
        console.error(error);
      }
    }
  };
};


const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  console.log(`ID a eliminar: ${id}`);
  console.log(`Endpoint: ${endpoint}`);
  return async (dispatch) => {
    try {
      await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: id,
      });
    } catch (error) {
      console.error("Error al eliminar de favoritos:", error);
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

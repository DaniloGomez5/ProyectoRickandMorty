import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./Types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    /* case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      }; */
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
    /* case REMOVE_FAV:
      let copy = state.myFavorites.filter((character) => {
        return character.id !== parseInt(payload);
      });
      return {
        ...state,
        myFavorites: copy,
        allCharacters: copy,
      }; */
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
    case FILTER:
      let copy2 = [...state.allCharacters];
      let genderFilter = copy2.filter((character) => {
        return character.gender === payload;
      });
      return {
        ...state,
        myFavorites: genderFilter,
      };
    case ORDER:
      let copy3 = [...state.allCharacters];
      return {
        ...state,
        myFavorites: copy3.sort((a, b) => {
          return payload === "A" ? a.id - b.id : b.id - a.id;
        }),
      };
    default:
      return state;
  }
}

export default rootReducer;
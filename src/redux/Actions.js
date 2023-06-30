import { ADD_FAV, REMOVE_FAV } from "./Types";

const addFav = (characters) => {
    return {
        type: ADD_FAV,
        payload: characters
    }
}

const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export { addFav, removeFav}
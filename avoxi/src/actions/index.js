import axios from "axios";
export const FETCHTODO = "FETCHTODO";
export const ERROR = "ERROR";

export const searchTodo = search => {
  return dispatch => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=5379077d`)
      .then(response => {
        dispatch({ type: FETCHTODO, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, message: err.message });
      });
  };
};

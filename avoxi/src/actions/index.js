import axios from "axios";
export const FETCHTODO = "FETCHTODO";
export const ERROR = "ERROR";

export const searchTodo = search => {
  return dispatch => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=f86c0e32`)
      .then(response => {
        dispatch({ type: FETCHTODO, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, message: err.message });
      });
  };
};

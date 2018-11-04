import { FETCHTODO, ERROR } from "../actions";

const initialState = {
  movies: [],
  search: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHTODO:
      return {
        ...state,
        movies: [action.payload]
      };
    case ERROR:
      return {
        ...state,
        error: "Did not fetch"
      };
    default:
      return state;
  }
};

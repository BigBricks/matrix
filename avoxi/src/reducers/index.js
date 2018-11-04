import { FETCHTODO, ERROR } from "../actions";

export default (state, action) => {
  switch (action.type) {
    case FETCHTODO:
      return {
        ...state,
        movies: [...action.payload]
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

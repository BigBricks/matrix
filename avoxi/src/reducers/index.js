import { FETCHTODO, ERROR } from "../actions";

const initialState = {
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHTODO:
      if (action.payload.Search.response !== true) {
        return {
          ...state,
          movies: action.payload.Search
        };
      } else
        return {
          ...state,
          movies: [
            {
              Title: "Too Few or Too many movies found try again",
              Year: "Now",
              imdbID: "None",
              Type: "Nonexistent",
              Poster: "No Poster found"
            }
          ]
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

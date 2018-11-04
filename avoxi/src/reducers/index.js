import { FETCHTODO, ERROR } from "../actions";

const initialState = {
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHTODO:
      if (action.payload.Search) {
        return {
          ...state,
          movies: action.payload.Search
        };
      }
    case ERROR:
      return {
        ...state,
        error: "Did not fetch",
        movies: [
          {
            Title: action.payload.Error,
            Year: "N/A",
            imdbID: "N/A",
            Type: "N/A",
            Poster: "N/A"
          }
        ]
      };
    default:
      return state;
  }
};

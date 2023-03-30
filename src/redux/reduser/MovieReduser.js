import { AllMOVIS } from "../types/MoviesType";

const initalValue = {
  moviess: [],
  pageCount: 0,
};

export const moviesReduser = (state = initalValue, action) => {
  switch (action.type) {
    case AllMOVIS:
      return { moviess: action.data ,pageCount:action.pages };
    default:
      return state;
  }
};
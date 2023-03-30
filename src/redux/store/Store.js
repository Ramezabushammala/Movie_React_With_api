import { createStore ,applyMiddleware} from "redux";
import { moviesReduser } from "../reduser/MovieReduser";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

export const store = createStore(moviesReduser,
   applyMiddleware(thunk));

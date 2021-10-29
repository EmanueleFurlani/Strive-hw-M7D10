import { createStore } from "redux";
import cityReducer from "../reducers";

export const initialState = {
  city: {
    lat: "",
    lon: "",
    name: "",
  },
};

export const configureStore = createStore(
  cityReducer,
  initialState,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
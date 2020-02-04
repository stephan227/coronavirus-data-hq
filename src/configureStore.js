import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { bulkFetchData } from "./Actions/";
import rootReducer from "./Reducers";


export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch(bulkFetchData());
  return store;
}

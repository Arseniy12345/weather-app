import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cityReducer from "./city-reducer";
import forecastReducer from "./forecast-reducer";

const reducers = combineReducers({
  city: cityReducer,
  forecast: forecastReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;

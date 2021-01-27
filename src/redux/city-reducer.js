import { foundCity } from "../utilities/foundCity";

const SET_FOUND_CITY = "city/SET_FOUND_CITY";
const listCities = require("./cities-and-coordinates");

const initialState = {
  cities: listCities.citiesArray,
  foundСity: [""],
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOUND_CITY:
      return {
        ...state,
        foundCity: [...foundCity(state.cities, action.str)],
      };
    default:
      return state;
  }
};

export const setFoundCity = (str) => ({ type: SET_FOUND_CITY, str });

export default cityReducer;

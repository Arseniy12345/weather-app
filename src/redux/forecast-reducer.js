import {forecastAPI} from "../api/api";

const SET_CURRENT_FORECAST = "forecast/SET_CURRENT_FORECAST";
const SET_DAILY_FORECAST = "forecast/SET_DAILY_FORECAST";
const SET_NAME_CITY = "forecast/SET_NAME_CITY";
const SET_IS_ERROR = "forecast/SET_IS_ERROR";
const SET_IS_LOAD = "forecast/SET_IS_LOAD";
const SET_CACHE = "forecast/SET_CACHE";

const initialState = {
  currentForecast: {
    temp: null,
    feels_like: null,
    humidity: null,
    pressure: null,
    weather: [{ description: "null", icon: null }],
    wind_speed: null,
    wind_deg: null,
  },
  dailyForecast: {
    0: {
      weather: [{ description: "null", icon: null }],
      temp: { max: null, min: null },
    },
  },
  cache: {},
  nameCity: "",
  isError: false,
  isLoad: false,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_FORECAST:
      return {
        ...state,
        currentForecast: { ...action.forecast },
      };
    case SET_DAILY_FORECAST:
      return {
        ...state,
        dailyForecast: { ...action.forecast },
      };
    case SET_NAME_CITY:
      return {
        ...state,
        nameCity: action.nameCity,
      };
    case SET_IS_ERROR:
      return {
        ...state,
        isError: action.isError,
      };
    case SET_IS_LOAD:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case SET_CACHE: {
      let newCache = {};
      newCache[action.key] = { ...action.forecast };
      return {
        ...state,
        cache: Object.assign({}, state.cache, newCache),
      };
    }
    default:
      return state;
  }
};
const setCurrentForecast = (forecast) => ({
  type: SET_CURRENT_FORECAST,
  forecast,
});
const setDailyForecast = (forecast) => ({ type: SET_DAILY_FORECAST, forecast });
const setNameCity = (nameCity) => ({ type: SET_NAME_CITY, nameCity });
const setIsError = (isError) => ({ type: SET_IS_ERROR, isError });
const setIsLoad = (isLoad) => ({ type: SET_IS_LOAD, isLoad });
const setCache = (key, forecast) => ({ type: SET_CACHE, key, forecast });

export const getForecast = (nameCity) => (dispatch, getState) => {
  dispatch(setIsLoad(true));
  dispatch(setNameCity(nameCity));
  if (getState().forecast.cache[nameCity] !== undefined) {
    dispatch(setIsError(false));
    dispatch(setCurrentForecast(getState().forecast.cache[nameCity].current));
    dispatch(setDailyForecast(getState().forecast.cache[nameCity].daily));
    dispatch(setIsLoad(false));
  } else {
    forecastAPI
      .getForecast(
        getState().city.cities[nameCity].lat,
        getState().city.cities[nameCity].lon
      )
      .then((response) => {
        dispatch(setCache(nameCity, response.data));
        dispatch(setIsError(false));
        dispatch(setCurrentForecast(response.data.current));
        dispatch(setDailyForecast(response.data.daily));
        dispatch(setIsLoad(false));
      });
  }
};

export default forecastReducer;

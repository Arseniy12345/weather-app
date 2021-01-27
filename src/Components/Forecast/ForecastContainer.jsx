import React from "react";
import { connect } from "react-redux";
import Forecast from "./Forecast";
import {
  getTemp,
  getIconId,
  getDescriptionWeather,
  getFeelsTemp,
  getWindSpeed,
  getWindDeg,
  getHumidity,
  getPressure,
  getDailyForecast,
} from "../../redux/forecast-reselectors";

const mapStateToProps = (state) => ({
  nameCity: state.forecast.nameCity,
  temp: getTemp(state),
  iconId: getIconId(state),
  descriptionWeather: getDescriptionWeather(state),
  feelsTemp: getFeelsTemp(state),
  windSpeed: getWindSpeed(state),
  windDeg: getWindDeg(state),
  humidity: getHumidity(state),
  pressure: getPressure(state),
  dailyForecast: getDailyForecast(state),
  isError: state.forecast.isError,
  isLoad: state.forecast.isLoad,
});

const ForecastContainer = connect(mapStateToProps, {})(Forecast);

export default ForecastContainer;

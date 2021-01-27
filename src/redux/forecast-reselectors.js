import { createSelector } from "reselect";
import { getNumberMonth } from "../utilities/date-helper";

export const getTemp = (state) => {
  return Math.round(state.forecast.currentForecast.temp);
};

export const getIconId = (state) => {
  return state.forecast.currentForecast.weather[0].icon;
};

export const getDescriptionWeather = (state) => {
  let str =
    state.forecast.currentForecast.weather[0].description[0].toUpperCase() +
    state.forecast.currentForecast.weather[0].description.slice(1);
  return str;
};

export const getFeelsTemp = (state) => {
  return Math.round(state.forecast.currentForecast.feels_like);
};

export const getWindSpeed = (state) => {
  return Math.round(state.forecast.currentForecast.wind_speed);
};

export const getWindDeg = (state) => {
  const deg = state.forecast.currentForecast.wind_deg;
  if (deg < 25 || deg > 335) {
    return "С";
  } else if (deg < 65) {
    return "СВ";
  } else if (deg < 115) {
    return "В";
  } else if (deg < 155) {
    return "ЮВ";
  } else if (deg < 205) {
    return "Ю";
  } else if (deg < 245) {
    return "ЮЗ";
  } else if (deg < 295) {
    return "З";
  } else {
    return "СЗ";
  }
};

export const getHumidity = (state) => {
  return state.forecast.currentForecast.humidity;
};

export const getPressure = (state) => {
  return Math.round(0.75 * state.forecast.currentForecast.pressure);
};

const dailyForecastFromState = (state) => state.forecast.dailyForecast;

export const getDailyForecast = createSelector(
  dailyForecastFromState,
  (dailyForecast) => {
    if (Object.keys(dailyForecast).length === 1) {
      return [
        {
          weather: [{ description: null, icon: null }],
          temp: { max: null, min: null },
        },
      ];
    }
    const getDateMonth = getNumberMonth();
    let dailyForecastForUI = [];
    for (let i = 0; i < 5; i++) {
      let copyDailyForecast = {};
      const [dayName, dayNumberMonth] = getDateMonth();
      copyDailyForecast.dayName = dayName[0].toUpperCase() + dayName.slice(1);
      copyDailyForecast.dayNumberMonth = dayNumberMonth;
      copyDailyForecast.logoId = dailyForecast[i].weather[0].icon;
      copyDailyForecast.description =
        dailyForecast[i].weather[0].description[0].toUpperCase() +
        dailyForecast[i].weather[0].description.slice(1);
      copyDailyForecast.tempMax = Math.round(dailyForecast[i].temp.max);
      copyDailyForecast.tempMin = Math.round(dailyForecast[i].temp.min);
      dailyForecastForUI.push(copyDailyForecast);
    }
    return dailyForecastForUI;
  }
);

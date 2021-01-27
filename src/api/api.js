import axios from "axios";

const forecast = axios.create({baseURL: "https://api.openweathermap.org/data/2.5/"});

export const forecastAPI = {
  getForecast(lat, lon) {
    return forecast.get(`onecall?lat=${lat}&lon=${lon}&exclude=${"minutely,hourly,alerts"}&units=metric&appid=${"fa27cbfcb730a9000e68b209c47b9aa2"}&lang=${"ru"}`);
  },
};

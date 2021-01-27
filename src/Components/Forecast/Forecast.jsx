import React from "react";
import styles from "./Forecast.module.css";
import DailyForecast from "./DailyForecast"
import Preloader from "../Common/Preloader/Preloader"
import Wind from "../../assets/images/wind.svg"
import Humidity from "../../assets/images/humidity.svg"
import Pressure from "../../assets/images/pressure.svg"

const Forecast = (props) => {

  if (!props.temp && !props.isLoad) {
    return <div className={styles.infoError}>Введите город</div>
  }

  if(props.isError) {
    return <div className={styles.infoError}>По найденному городу не данных по прогнозу погоды</div>
  }

  if (props.isLoad) {
    return <Preloader />
  }

  return (
    <div className={styles.forecast}>
      <div className={styles.cityName}>
        <span>{props.nameCity}</span>
      </div>
      <div className={styles.temp}>
        <div className={styles.currentTemp}>{props.temp > 0 && "+"}{props.temp}°</div>
        <div className={styles.logo}>
          <img src={`http://openweathermap.org/img/wn/${props.iconId}@2x.png`} alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.infoForecast}>{props.descriptionWeather}<br/>Ощущается как {props.feelsTemp > 0 && "+"}{props.feelsTemp}°</p>
        </div>
      </div>
      <div className={styles.description}>
        <div><img className={styles.descriptionImages} src={Wind} /> Ветер {props.windSpeed} м/с, {props.windDeg}</div>
        <div><img className={styles.descriptionImages} src={Humidity} /> Влажность {props.humidity}%</div>
        <div><img className={styles.descriptionImages} src={Pressure} /> Давление {props.pressure} мм рт. ст.</div>
      </div>
      <div className={styles.dailyForecast}>
        {props.dailyForecast.map((dailyItem, index) => <DailyForecast key={index} dailyForecast={dailyItem}/>)}
      </div>
    </div>
  );
};

export default Forecast;

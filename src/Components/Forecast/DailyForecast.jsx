import React from "react";
import styles from "./Forecast.module.css";

const DailyForecast = ({dailyForecast: {logoId, description, tempMax, tempMin, dayNumberMonth, dayName}}) => {
  return (
    <div className={styles.dailyForecastItem}>
      <div><b>{dayName}</b></div>
      <div><b>{dayNumberMonth}</b></div>
      <img src={`http://openweathermap.org/img/wn/${logoId}@2x.png`} alt="" />
      <div>Днем {tempMax > 0 && "+"}{tempMax}°</div>
      <div>Ночью {tempMin > 0 && "+"}{tempMin}°</div>
      <div>{description}</div>
    </div>
  );
};

export default DailyForecast;

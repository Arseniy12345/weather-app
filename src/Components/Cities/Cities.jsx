import React, { useState } from "react";
import styles from "./Cities.module.css";

const Cities = (props) => {
  const [name, setName] = useState("");

  const isPressEnter = (e) => {
    const cityName = e.target.value;
    if (e.keyCode === 13) {
      for (let value of props.foundCity) {
        if (value.toLowerCase() === cityName.toLowerCase()) {
          props.getForecast(value);
        }
      }
    }
  };

  const onChangeCity = (e) => {
    const cityName = e.target.value;
    setName(cityName);
    props.setFoundCity(cityName);
  };

  const setForecast = (cityName) => {
    setName(cityName);
    props.getForecast(cityName);
  };

  return (
    <div className={styles.cityBlock}>
      <input
        type="text"
        className={styles.input}
        value={name}
        onChange={onChangeCity}
        onKeyDown={isPressEnter}
        placeholder="Введите название"
      />
      <div className={styles.foundCity}>
        {props.foundCity &&
          props.foundCity.map((city, index) => (
            <div key={index}>
              <div
                className={styles.cityName}
                onClick={() => setForecast(city)}
              >
                {city}
              </div>
              <hr className={styles.band} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cities;

import React from "react";
import preloaderSVG from "./../../../assets/images/Preloader.svg";
import styles from "./Preloader.module.css";

let Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloaderBlock}>
        <img className={styles.preloaderImage} src={preloaderSVG} alt="" />
      </div>
    </div>
  );
};

export default Preloader;

import React from "react";
import { connect } from "react-redux";
import Cities from "./Cities";
import {setFoundCity} from "../../redux/city-reducer"
import {getForecast} from "../../redux/forecast-reducer"

let mapStateToProps = (state) => {
  return {
    cities: state.city.cities,
    foundCity: state.city.foundCity,
  };
};

const CitiesContainer = connect(mapStateToProps, {setFoundCity, getForecast})(Cities);

export default CitiesContainer;

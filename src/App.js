import './App.css';
import ForecastContainer from "./Components/Forecast/ForecastContainer"
import CitiesContainer from "./Components/Cities/CitiesContainer"

function App() {
  return (
    <div className="app-wrapper">
      <CitiesContainer />
      <ForecastContainer />
    </div>
  );
}

export default App;

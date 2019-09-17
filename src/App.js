import React from "react";
import WeatherComp from './components/weather';
import "./App.css";


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <WeatherComp />
      </header>
    </div>
  );
}

export default App;

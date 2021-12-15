import './App.css';
import WeatherApp from "./WeatherApp"
import SourceCode from "./SourceCode"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="paris"/>
        <SourceCode />
      </div>
    </div>
  );
}


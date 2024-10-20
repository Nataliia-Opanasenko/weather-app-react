import logo from './logo.svg';
import './App.css';
import WeatherData from "./WeatherData";
import Footer from './Footer';
import axios from "axios";
import Header from './Header';


function App() {
  return (
    <div className="weather-app">
        <Header />
    
        <WeatherData />
        <Footer />
    </div>
  );
}

export default App;

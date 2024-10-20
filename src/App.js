import './App.css';
import WeatherData from "./WeatherData";
import Footer from './Footer';
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

import { useState } from 'react';
import './App.css';
import WeatherSearch from './components/WeatherSearch.jsx';
import WeatherDisplay from './components/WeatherDisplay.jsx';
import aurora from './assets/aurora.jpeg';
import { LuSun } from 'react-icons/lu';

function App() {
  const [weatherData, setWeatherData] = useState();

  const updateWeather = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${aurora})`,
          height: '100vh',
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            margin: '0',
            padding: '4rem 0 0 6rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#ffffff',
          }}
        >
          <div>
            <LuSun size={38} />
          </div>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: '600',
            }}
          >
            MoWeather
          </h1>
        </div>

        <div
          style={{
            paddingTop: '8rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            {/* Pass the updateWeather function as a callback for the WeatherSearch component to call and pass new weather data it fetched */}
            <WeatherSearch updateWeather={updateWeather} />
            <WeatherDisplay weatherData={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

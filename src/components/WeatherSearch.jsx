import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function WeatherSearch({ updateWeather }) {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const fetchData = async (event) => {
    event.preventDefault();
    if (!location) {
      alert('Please input a location');
      return;
    }
    try {
      // Fetch coordinates
      const coordResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
      );
      const coordData = await coordResponse.json();
      const { lat, lon, display_name } = coordData[0];
      const city = display_name.split(',').shift();
      const country = display_name.split(',').pop();

      // Fetch weather data
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();
      const { temperature } = weatherData.current_weather;

      updateWeather({ city, country, temperature });
    } catch (err) {
      console.log(err);
      alert('There was a problem finding that location');
    }
    setLocation('');
  };

  return (
    <>
      <form onSubmit={fetchData}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={location}
            onChange={handleChange}
            placeholder="Search"
            style={{
              padding: '.5rem 3rem',
              borderRadius: '10px',
              height: '2rem',
              width: '27rem',
              border: 'none',
              fontSize: '20px',
            }}
          ></input>
          <button type="submit" style={{ background: 'none', border: 'none' }}>
            <FaSearch
              size={18}
              style={{
                position: 'absolute',
                right: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'gray',
              }}
            />
          </button>
        </div>
      </form>
    </>
  );
}

export default WeatherSearch;

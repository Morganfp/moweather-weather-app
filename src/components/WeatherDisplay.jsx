import { FaThermometerQuarter } from 'react-icons/fa';
import { FaThermometerHalf } from 'react-icons/fa';
import { FaThermometerThreeQuarters } from 'react-icons/fa';

function WeatherDisplay({ weatherData }) {
  const { city, country, temperature } = weatherData || {};

  const getTempIcon = () => {
    if (temperature < 10) {
      return <FaThermometerQuarter size={35} />;
    }
    if (temperature >= 10 && temperature < 25) {
      return <FaThermometerHalf size={35} />;
    } else {
      return <FaThermometerThreeQuarters size={35} />;
    }
  };

  return (
    <>
      {weatherData ? (
        <div
          style={{
            backgroundColor: 'rgba(121, 121, 121, 0.5)',
            width: '10rem',
            padding: '2rem',
            borderRadius: '20px',
            marginTop: '10px',
            color: '#ffffff',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p
              style={{
                fontSize: '30px',
                fontWeight: '400',
                margin: '0 0 2px 0',
              }}
            >
              {city}
            </p>
            <p style={{ fontSize: '14px', margin: '0 0 20px 0' }}>{country}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {getTempIcon()}
              <p
                style={{
                  fontSize: '30px',
                  fontWeight: '400',
                  margin: 0,
                }}
              >
                {temperature}°c
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default WeatherDisplay;

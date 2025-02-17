# MoWeather

A weather app that allows users to search for locations and view the current weather, including temperature, city, and country. Built with React, this app fetches weather data from the Open-Meteo API and location data from OpenStreetMap.

<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/e3b5de4b-3982-4c46-9000-0c62dea03c0f" />

### Header

- **App Branding**: Simple header with the app logo and icon.
- **Search Bar**: Users can search for a location by name.
  - Uses `useState` for input management.
  - Fetches location data from OpenStreetMap and weather data from Open-Meteo.

### Weather Display

- **Weather Info**: Displays current weather for the searched location.
  - Shows city, country, temperature, and an appropriate temperature icon.
  - Conditional rendering based on weather data.

### Weather Icons

- **Temperature Icons**: Icons represent the current temperature:
  - Cold: Thermometer icon (below 10°C).
  - Mild: Half thermometer icon (10°C–25°C).
  - Hot: Full thermometer icon (above 25°C).

### Tech

- React
- JavaScript (ES6+)
- Hooks: `useState`, `useEffect`
- CSS
- Open-Meteo API
- OpenStreetMap API

## Future Enhancements

- Optimize for smaller screens
- Additional weather information such as real feel, precipitation, etc.
- Add a forecast feature for multiple days
- Add animations or transitions for a smoother experience

## Installation

1. Clone the repository
2. Install dependencies

- cd moweather-weather-app
- npm install

3. Start the development server:

- npm run dev

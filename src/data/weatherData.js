const weatherData = [
  {
    coord: { lon: -106.2005, lat: 31.8001 },
    weather: [
      { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
    ],
    base: 'stations',
    main: {
      temp: 95.56,
      feels_like: 91.89,
      temp_min: 93.49,
      temp_max: 96.46,
      pressure: 1014,
      humidity: 19,
    },
    visibility: 10000,
    wind: { speed: 5.75, deg: 250 },
    clouds: { all: 75 },
    dt: 1656803009,
    sys: {
      type: 1,
      id: 3974,
      country: 'US',
      sunrise: 1656763392,
      sunset: 1656814453,
    },
    timezone: -21600,
    id: 5521001,
    name: 'El Paso',
    cod: 200,
  },
];

export default weatherData;

const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_WEATHER':
      return {
        ...state,
        loading: false,
        temp: action.payload.main.temp,
        loc: action.payload.name,
        time: action.payload.dt,
        date: action.payload.dt,
        humidity: action.payload.main.humidity,
        cloudy: action.payload.clouds.all,
        winds: action.payload.wind.speed,
      };
    default:
      return state;
  }
};

export default weatherReducer;

import {
  STATUS_FORECAST_DATA,
  SET_FORECAST_DATA
} from "../Actions";

export default (
  state = {
    statusForecastData: null,
    forecastData: [],
  },
  action
) => {
  switch (action.type) {
    case STATUS_FORECAST_DATA:
      return {
        ...state,
        statusForecastData: action.statusForecastData
      };

    case SET_FORECAST_DATA:
      return {
        ...state,
        forecastData: action.forecastData,
        statusForecastData: 'complete'
      }
  
    default:
      return state;
  }
};

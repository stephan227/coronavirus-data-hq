import fetchDataSet from "../components/utils/FetchData"

export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const STATUS_FORECAST_DATA = "STATUS_FORECAST_DATA";


/** Set Status */
const setStatusForecastData = (statusForecastData) => {
  return {
    type: STATUS_FORECAST_DATA,
    statusForecastData
  }
}

/** Set Data */

const setForecastData = (forecastData) => {
  return {
    type: SET_FORECAST_DATA,
    forecastData
  };
};

/** Fetch Data */

export const fetchForecastData = () => async (dispatch, getState) => {
  dispatch(setStatusForecastData("pending"))

  const requestData = await fetchDataSet(`/api/actual-vs-forecast`);
  if (!requestData || requestData.err || !requestData.data) {
    dispatch(setStatusForecastData("errored"))
  } else {
    dispatch(setForecastData(requestData.data))
  }
}

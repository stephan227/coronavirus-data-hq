import {
  fetchGlobalStatsData,
  fetchSuspectedData,
  fetchDeathsEchartData,
  fetchInfectedEchartData,
  fetchSuspectedEchartData, 
  fetchForecastData} from "../Actions";

export const bulkFetchData = () => (dispatch, getState) => {
  dispatch(fetchGlobalStatsData())
  dispatch(fetchSuspectedData())
  dispatch(fetchDeathsEchartData())
  dispatch(fetchInfectedEchartData())
  dispatch(fetchSuspectedEchartData())
  dispatch(fetchForecastData())
}
import fetchDataSet from "../components/utils/FetchData";
import { CalculateMapData, CalculateTotals, CalculateTableData }  from '../components/utils/CalculateTotals';
import { ConvertDateToReadableFormat } from '../components/utils/FormatDate';

export const SET_GLOBAL_STATS_DATA = "SET_GLOBAL_STATS_DATA";
export const SET_STATUS_GLOBAL_STATS_DATA = "SET_STATUS_GLOBAL_STATS_DATA";

export const SET_SUSPECTED_DATA = "SET_SUSPECTED_DATA";
export const SET_SUSPECTED_STATUS = "SET_SUSPECTED_STATUS";
export const SET_LAST_UPDATED = "SET_LAST_UPDATED";

export const setLastUpdated = (lastUpdated) => (dispatch, getState) => {
  dispatch({
    type: SET_LAST_UPDATED,
    lastUpdated: ConvertDateToReadableFormat(lastUpdated)
  })
}

/** Global Stats Data */
const setGlobalStatsData = (virusTotals, map_data, table_data) => {
  return {
    type: SET_GLOBAL_STATS_DATA,
    total_cases: virusTotals.total_cases,
    total_deaths: virusTotals.total_deaths,
    total_serious: virusTotals.total_serious,
    total_critical: virusTotals.total_critical,
    mortality_rate: virusTotals.mortality_rate,
    map_data: map_data,
    table_data: table_data
  };
};

const setStatusGlobalStatsData = (globalStatsStatus) => {
  return {
    type: SET_STATUS_GLOBAL_STATS_DATA,
    globalStatsStatus
  }
}

export const fetchGlobalStatsData =  () => async (dispatch, getState) => {  
  dispatch(setStatusGlobalStatsData("pending"))
  const requestData = await fetchDataSet(`/api/global-stats`);

  if (!requestData || requestData.err || !requestData.data) {
    dispatch(setStatusGlobalStatsData("errored"))
  } else {
    const map_data = CalculateMapData(requestData.data);
    const table_data = CalculateTableData(requestData.data);
    const virusTotals = CalculateTotals(requestData.data);
    dispatch(setGlobalStatsData(virusTotals, map_data, table_data, requestData.insert_date))
    dispatch(setLastUpdated(requestData.insert_date))
  }

}


/** Suspected Stats Data */
const setSuspectedStatus = (suspectedStatus) => {
  return {
    type: SET_SUSPECTED_STATUS,
    suspectedStatus
  }
}
const setSuspectedData = (suspected) => {
  return {
    type: SET_SUSPECTED_DATA,
    suspected
  };
};

export const fetchSuspectedData = () => async (dispatch, getState) => {
  dispatch(setSuspectedStatus("pending"))

  const requestData = await fetchDataSet(`/api/suspected`);
  if (!requestData || requestData.err || !requestData.data) {
    dispatch(setStatusGlobalStatsData("errored"))
  } else {
    dispatch(setSuspectedData(requestData.data.suspected))
  }
}

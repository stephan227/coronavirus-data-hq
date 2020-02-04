import fetchDataSet from "../components/utils/FetchData"
import { setEchartAxisColor } from "../components/utils/ModifyEchartsData";

export const SET_SUSPECTED_STATUS = "SET_SUSPECTED_STATUS";

export const SET_SUSPECTED_ECHART = "SET_SUSPECTED_ECHART";
export const SET_INFECTED_ECHART = "SET_INFECTED_ECHART";
export const SET_DEATHS_ECHART = "SET_DEATHS_ECHART";
export const STATUS_SUSPECTED_ECHART = "STATUS_SUSPECTED_ECHART";
export const STATUS_INFECTED_ECHART = "STATUS_INFECTED_ECHART";
export const STATUS_DEATHS_ECHART = "STATUS_DEATHS_ECHART";



/** Set Status */
const setStatusSuspectedEchart = (statusSuspectedEchart) => {
  return {
    type: STATUS_SUSPECTED_ECHART,
    statusSuspectedEchart
  }
}

const setStatusInfectedEchart = (statusInfectedEchart) => {
  return {
    type: STATUS_INFECTED_ECHART,
    statusInfectedEchart
  }
}

const setStatusDeathsEchart = (statusDeathsEchart) => {
  return {
    type: STATUS_DEATHS_ECHART,
    statusDeathsEchart
  }
}

/** Set Data */
const setSuspectedEchartData = (data, axisColors) => {
  const modifiedEchartData = setEchartAxisColor(data, axisColors);
  return {
    type: SET_SUSPECTED_ECHART,
    suspectedEchart: modifiedEchartData
  };
};

const setInfectedEchartData = (data, axisColors) => {
  const modifiedEchartData = setEchartAxisColor(data, axisColors);
  return {
    type: SET_INFECTED_ECHART,
    infectedEchart: modifiedEchartData
  };
};

const setDeathsEchartData = (data, axisColors) => {
  const modifiedEchartData = setEchartAxisColor(data, axisColors);
  return {
    type: SET_DEATHS_ECHART,
    deathsEchart: modifiedEchartData
  };
};

/** Fetch Data */
export const fetchSuspectedEchartData = () => async (dispatch, getState) => {
  dispatch(setStatusSuspectedEchart("pending"))

  const requestData = await fetchDataSet(`/api/echart-suspected`);
  if (!requestData || requestData.err || !requestData.data) {
    dispatch(setStatusSuspectedEchart("errored"))
  } else {
    dispatch(setSuspectedEchartData(requestData.data, getState().theme.themeColor))
  }
}

export const fetchInfectedEchartData = () => async (dispatch, getState) => {
  dispatch(setStatusInfectedEchart("pending"))

  const requestData = await fetchDataSet(`/api/echart-confirmed`);
  if (!requestData || requestData.err || !requestData.data) {
    dispatch(setStatusInfectedEchart("errored"))
  } else {
    dispatch(setInfectedEchartData(requestData.data, getState().theme.themeColor))
  }
}


export const fetchDeathsEchartData = () => async (dispatch, getState) => {
  dispatch(setStatusDeathsEchart("pending"))

  const requestData = await fetchDataSet(`/api/echart-deaths`);
  if (!requestData || requestData.err || !requestData.data) {
    dispatch(setStatusDeathsEchart("errored"))
  } else {
    dispatch(setDeathsEchartData(requestData.data, getState().theme.themeColor))
  }
}

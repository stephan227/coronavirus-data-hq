import {
  SET_SUSPECTED_ECHART,
  SET_INFECTED_ECHART,
  SET_DEATHS_ECHART,
  STATUS_SUSPECTED_ECHART,
  STATUS_INFECTED_ECHART,
  STATUS_DEATHS_ECHART
} from "../Actions";

export default (
  state = {
    statusSuspectedEchart: null,
    statusInfectedEchart: null,
    statusDeathsEchart: null,

    suspectedEchart: {},
    infectedEchart: {},
    deathsEchart: {},
  },
  action
) => {
  switch (action.type) {
    case STATUS_SUSPECTED_ECHART:
      return {
        ...state,
        statusSuspectedEchart: action.statusSuspectedEchart
      };

    case STATUS_INFECTED_ECHART:
      return {
        ...state,
        statusInfectedEchart: action.statusInfectedEchart
      };

    case STATUS_DEATHS_ECHART:
      return {
        ...state,
        statusDeathsEchart: action.statusDeathsEchart
      };

    case SET_SUSPECTED_ECHART:
      return {
        ...state,
        suspectedEchart: action.suspectedEchart,
        statusSuspectedEchart: 'complete'
      }
    case SET_INFECTED_ECHART:
      return {
        ...state,
        infectedEchart: action.infectedEchart,
        statusInfectedEchart: 'complete'
      }
    case SET_DEATHS_ECHART:
      return {
        ...state,
        deathsEchart: action.deathsEchart,
        statusDeathsEchart: 'complete'
      }
  
    default:
      return state;
  }
};

import {
  SET_GLOBAL_STATS_DATA,
  SET_STATUS_GLOBAL_STATS_DATA,
  SET_SUSPECTED_DATA,
  SET_SUSPECTED_STATUS,
  SET_LAST_UPDATED
} from "../Actions";

export default (
  state = {
    suspected: null,
    total_cases: null,
    total_deaths: null,
    total_serious: null,
    total_critical: null,
    mortality_rate: null,

    map_data: [],

    table_data: [],
    
    globalStats: [],
    globalStatsStatus: false,

    lastUpdated: null
  },
  action
) => {
  switch (action.type) {
    case SET_STATUS_GLOBAL_STATS_DATA:
      return {
        ...state,
        globalStatsStatus: action.globalStatsStatus
      };

    // TODO: Break up into different calls per container
    case SET_GLOBAL_STATS_DATA:
      return {
        ...state,
        // Dashboard Card Container
        total_cases: action.total_cases,
        total_deaths: action.total_deaths,
        total_serious: action.total_serious,
        total_critical: action.total_critical,
        mortality_rate: action.mortality_rate,
        
        // Dashboard Map Container
        map_data: action.map_data,

        // Dashboard Table Container
        table_data: action.table_data,
        
        globalStatsStatus: action.globalStatsStatus
      }

    case SET_SUSPECTED_DATA:
      return {
        ...state,
        // Dashboard Card Container
        suspected: action.suspected
      }
    
    case SET_SUSPECTED_STATUS:
      return {
        ...state,
        suspectedStatus: action.suspectedStatus
      };
  
    case SET_LAST_UPDATED:
      return {
        ...state,
        lastUpdated: action.lastUpdated
      };
  
    default:
      return state;
  }
};

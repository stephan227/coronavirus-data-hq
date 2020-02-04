import { combineReducers } from "redux";
import dashboardData from "./dashboardData";
import echartsData from "./echartsData";
import theme from "./theme";
import forecastData from "./forecastData";

export default combineReducers({
  dashboardData,
  echartsData,
  theme,
  forecastData
});

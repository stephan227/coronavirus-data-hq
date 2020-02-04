import React from "react";
import { connect } from "react-redux";
import DashboardForecastTables from "../components/Dashboard/DashboardForecastTables";


function DashboardForecastTableContainer ({
    forecast_data
  }) {
  return (
    <DashboardForecastTables 
      forecast_data={forecast_data}
      />
  )
}

function mapStateToProps(state) {
  return {
    forecast_data: state.forecastData.forecastData
  };
}

export default connect(mapStateToProps, null)(DashboardForecastTableContainer);

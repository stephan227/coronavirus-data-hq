import React from "react";
import { connect } from "react-redux";
import DashboardForecastTables from "../components/Dashboard/DashboardForecastTables";


function DashboardForecastTableContainer ({
    forecast_data,
    statusForecastData
  }) {
  return (
    <DashboardForecastTables 
      forecast_data={forecast_data}
      statusForecastData={statusForecastData}
      />
  )
}

function mapStateToProps(state) {
  return {
    forecast_data: state.forecastData.forecastData,
    statusForecastData: state.forecastData.statusForecastData
  };
}

export default connect(mapStateToProps, null)(DashboardForecastTableContainer);

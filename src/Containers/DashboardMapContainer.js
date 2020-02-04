import React from "react";
import { connect } from "react-redux";
import DashboardMap from "../components/Dashboard/DashboardMap";


function DashboardMapContainer ({
  map_data,
  globalStatsStatus}) {
  return (
    <DashboardMap map_data={map_data} />
  )
}

function mapStateToProps(state) {
  return {
    map_data: state.dashboardData.map_data,
    globalStatsStatus: state.dashboardData.globalStatsStatus
  };
}

export default connect(mapStateToProps, null)(DashboardMapContainer);

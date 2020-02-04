import React from "react";
import { connect } from "react-redux";
import DashboardTitle from "../components/Dashboard/DashboardTitle";


function DashboardTitleContainer ({
  lastUpdated
  }) {
  return (
    <DashboardTitle lastUpdated={lastUpdated} />
  )
}

function mapStateToProps(state) {
  return {
    lastUpdated: state.dashboardData.lastUpdated
  };
}

export default connect(mapStateToProps, null)(DashboardTitleContainer);

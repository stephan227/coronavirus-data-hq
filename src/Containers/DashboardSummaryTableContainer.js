import React from "react";
import { connect } from "react-redux";
import DashboardSummaryTable from "../components/Dashboard/DashboardSummaryTable";


function DashboardSummaryTableContainer ({
  table_data,
  globalStatsStatus}) {
  return (
    <DashboardSummaryTable table_data={table_data} />
  )
}

function mapStateToProps(state) {
  return {
    table_data: state.dashboardData.table_data,
    globalStatsStatus: state.dashboardData.globalStatsStatus
  };
}

export default connect(mapStateToProps, null)(DashboardSummaryTableContainer);

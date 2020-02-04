import React from "react";
import { connect } from "react-redux";
import DashboardLineChart from "../components/Dashboard/DashboardLineChart";


function DashboardLineChartContainer ({
    suspectedEchart,
    infectedEchart,
    deathsEchart
  }) {
  return (
    <DashboardLineChart 
      echartsSuspectedForecast={suspectedEchart}
      echartsConfirmedForecast={infectedEchart}
      echartsDeathsForecast={deathsEchart}
      />
  )
}

function mapStateToProps(state) {
  return {
    suspectedEchart: state.echartsData.suspectedEchart,
    infectedEchart: state.echartsData.infectedEchart,
    deathsEchart: state.echartsData.deathsEchart
  };
}

export default connect(mapStateToProps, null)(DashboardLineChartContainer);

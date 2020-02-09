import React from "react";
import { connect } from "react-redux";
import DashboardLineChart from "../components/Dashboard/DashboardLineChart";


function DashboardLineChartContainer ({
    suspectedEchart,
    infectedEchart,
    deathsEchart,
    statusSuspectedEchart,
    statusInfectedEchart,
    statusDeathsEchart
  }) {
  return (
    <DashboardLineChart 
      echartsSuspectedForecast={suspectedEchart}
      echartsConfirmedForecast={infectedEchart}
      echartsDeathsForecast={deathsEchart}
      statusSuspectedEchart={statusSuspectedEchart}
      statusInfectedEchart={statusInfectedEchart}
      statusDeathsEchart={statusDeathsEchart}
      />
  )
}

function mapStateToProps(state) {
  return {
    suspectedEchart: state.echartsData.suspectedEchart,
    infectedEchart: state.echartsData.infectedEchart,
    deathsEchart: state.echartsData.deathsEchart,

    statusSuspectedEchart: state.echartsData.statusSuspectedEchart,
    statusInfectedEchart: state.echartsData.statusInfectedEchart,
    statusDeathsEchart: state.echartsData.statusDeathsEchart
  };
}

export default connect(mapStateToProps, null)(DashboardLineChartContainer);

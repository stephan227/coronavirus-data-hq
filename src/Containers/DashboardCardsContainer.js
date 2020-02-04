import React from "react";
import { connect } from "react-redux";
import DashboardCards from "../components/Dashboard/DashboardCards";


function DashboardCardsContainer ({
    suspected,
    total_cases,
    total_deaths,
    total_serious,
    total_critical,
    mortality_rate,
  }) {
  return (
    <DashboardCards    
      suspected={suspected}
      total_cases={total_cases}
      total_deaths={total_deaths}
      total_serious={total_serious}
      total_critical={total_critical}
      mortality_rate={mortality_rate}
    />
  )
}

function mapStateToProps(state) {
  return {
    dashboardData: state.dashboardData,
    suspected: state.dashboardData.suspected,
    total_cases: state.dashboardData.total_cases,
    total_deaths: state.dashboardData.total_deaths,
    total_serious: state.dashboardData.total_serious,
    total_critical: state.dashboardData.total_critical,
    mortality_rate: state.dashboardData.mortality_rate,
    globalStatsStatus: state.dashboardData.globalStatsStatus
  };
}

export default connect(mapStateToProps, null)(DashboardCardsContainer);

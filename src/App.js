import React from 'react';
import styled from 'styled-components';
import './App.css';
// import MapPolygons from './components/Leaflet/MapPolygons';
import DashboardMap from './components/Dashboard/DashboardMap';
import DashboardHeader from './components/Dashboard/DashboardHeader';
import DashboardLineChart from './components/Dashboard/DashboardLineChart';
import DashboardTable from './components/Dashboard/DashboardTable';

// import LineGraph from './components/Charts/LineGraph';

import WuhanVirusData from './data/wuhan-virus.json';

// import WuhanForecastData from './data/cases-forecast-vs-actual.json';
import DeathsForecast from './data/echartDeathsJSONData.json';
import ConfirmedForecast from './data/echartConfirmedJSONData.json';

const getSumByProperty = (data, property) => {
  return data.reduce((all, item, index) => {
    if (item[property]) {
      all = all + item[property];
    }
    return all;
  }, 0)
}

const total_cases = getSumByProperty(WuhanVirusData.data, 'cases');
const total_deaths = getSumByProperty(WuhanVirusData.data, 'deaths');
const total_serious = getSumByProperty(WuhanVirusData.data, 'serious');
const total_critical = getSumByProperty(WuhanVirusData.data, 'critical');
const map_data = WuhanVirusData.data;
const table_data = WuhanVirusData.data.reduce((all, item) => {
  if (all[item.country_name]) {
    all[item.country_name] = {
      cases: all[item.country_name].cases + item.cases,
      deaths: all[item.country_name].deaths + item.deaths,
      serious: all[item.country_name].serious + item.serious,
      critical: all[item.country_name].critical + item.critical,
    }
  } else {
    all[item.country_name] = {
      cases: item.cases,
      deaths: item.deaths,
      serious: item.serious,
      critical: item.critical,
    }
  }
  return all;
}, {});

const ChartContainer = styled.div`
padding: 0;
margin: 0;
list-style: none;

display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;

-webkit-flex-flow: row wrap;
`

function App() {
  return (
    <div>
      <DashboardHeader
        total_cases={total_cases}
        total_deaths={total_deaths}
        total_serious={total_serious}
        total_critical={total_critical}
        mortality_rate={60}
      />
      <DashboardMap 
        map_data={map_data}
      />
      <ChartContainer>
        <DashboardLineChart 
          title={'Actual Infected vs. Forecast'}
          chart_data={ConfirmedForecast}/>
        
        <DashboardLineChart
          title={'Actual Deaths vs. Forecast'}
          chart_data={DeathsForecast}/>
      </ChartContainer>

      <DashboardTable 
        table_data={table_data}
      />
    </div>
  );
}

export default App;

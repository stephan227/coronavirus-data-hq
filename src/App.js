import React, {useState, useEffect} from 'react';
import { ThemeProvider } from "styled-components";
import lightTheme from "./components/Theme/light";
import darkTheme from "./components/Theme/dark";

import axios from 'axios';

import './App.css';

import DashboardMap from './components/Dashboard/DashboardMap';
import DashboardHeader from './components/Dashboard/DashboardCards';
import DashboardLineChart from './components/Dashboard/DashboardLineChart';
import DashboardSummaryTable from './components/Dashboard/DashboardSummaryTable';
import DashboardTitle from './components/Dashboard/DashboardTitle';
import DashboardFooter from './components/Dashboard/DashboardFooter';
import DashboardPredictionTables from './components/Dashboard/DashboardPredictionTables';
import DashboardNotableEventsMap from './components/Dashboard/DashboardNotableEventsMap';

import { ConvertDateToReadableFormat } from './components/utils/FormatDate';
import { CalculateMapData, CalculateTotals, CalculateTableData }  from './components/utils/CalculateTotals';

import Container from "./components/Container/Container";

function useDataFetchEffect(query, dataProps) {  
  const [data, setData] = useState({data: dataProps})

  const fetchQuery =`${query}`
  useEffect(() => {
    axios(
        fetchQuery
      ).then(result => {
        setData(result.data)
      })
    
  }, [fetchQuery]);

  return data;
}

const setEchartAxisColor = (echartData, color) => {
  if (!echartData) {
    return {}
  }
  if (echartData.legend) {
    if (echartData.legend.textStyle) {
      echartData.legend.textStyle.color = color;
    } else {
      echartData.legend = {textStyle: {color: color}}
    }  
  } else {
    echartData.legend = {textStyle: {color: color}}
  }

  if (echartData.yAxis) {
    echartData.yAxis.axisLabel = {color};
  } else {
    echartData.yAxis = {axisLabel: {color}}
  }
  if (echartData.xAxis) {
    echartData.xAxis.axisLabel = {color};
  } else {
    echartData.xAxis = {axisLabel: {color}}
  }
  return echartData;
}

function App({theme}) {
  // const s3URL = 'https://coronarovirus-api.s773.now.sh/api'
  const s3URL = '/api'
  const ConfirmedForecast = useDataFetchEffect(`${s3URL}/echart-confirmed`, {});
  const DeathsForecast = useDataFetchEffect(`${s3URL}/echart-deaths`, {});
  const WuhanVirusData = useDataFetchEffect(`${s3URL}/global-stats`, []);
  const prediction_data = useDataFetchEffect(`${s3URL}/actual-vs-forecast`, []);
  const suspected = useDataFetchEffect(`${s3URL}/suspected`, {});
  const SuspectedForecast = useDataFetchEffect(`${s3URL}/echart-suspected`, {});
  
  console.log('theme', theme)
  const isDarkMode = true;
  let axisColors = 'black';
  if (isDarkMode) {
    axisColors = 'white'
  }
  const confirmedEchartData = setEchartAxisColor(ConfirmedForecast.data, axisColors)
  const deathEchartData = setEchartAxisColor(DeathsForecast.data, axisColors)
  const suspected_echart_data = setEchartAxisColor(SuspectedForecast.data, axisColors)

  const map_data = CalculateMapData(WuhanVirusData.data);
  const table_data = CalculateTableData(WuhanVirusData.data);
  const virusTotals = CalculateTotals(WuhanVirusData.data);

  const {total_cases, total_deaths, total_serious, total_critical, mortality_rate} = virusTotals;
  const last_updated = ConvertDateToReadableFormat (WuhanVirusData.insert_date);

  
  return (
    <ThemeProvider  theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <DashboardTitle/>

        <DashboardHeader
          suspected={suspected.data}
          total_cases={total_cases}
          total_deaths={total_deaths}
          total_serious={total_serious}
          total_critical={total_critical}
          mortality_rate={mortality_rate}
        />

        <DashboardMap map_data={map_data}/>
        
        <DashboardNotableEventsMap />

        <DashboardLineChart 
            ConfirmedForecast={confirmedEchartData}
            DeathsForecast={deathEchartData} 
            suspected_echart_data={suspected_echart_data} 
            />

        <DashboardPredictionTables prediction_data={prediction_data.data}/>

        <DashboardSummaryTable table_data={table_data}/>
        <DashboardFooter last_updated={last_updated}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;

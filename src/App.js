import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

import DashboardMap from './components/Dashboard/DashboardMap';
import DashboardHeader from './components/Dashboard/DashboardCards';
import DashboardLineChart from './components/Dashboard/DashboardLineChart';
import DashboardSummaryTable from './components/Dashboard/DashboardSummaryTable';
import DashboardTitle from './components/Dashboard/DashboardTitle';
import DashboardFooter from './components/Dashboard/DashboardFooter';
import DashboardPredictionTables from './components/Dashboard/DashboardPredictionTables';
import DashboardSuspectedCasesMap from './components/Dashboard/DashboardSuspectedCasesMap';

import { ConvertDateToReadableFormat } from './components/utils/FormatDate';
import { CalculateMapData, CalculateTotals, CalculateTableData }  from './components/utils/CalculateTotals';


function useDataFetchEffect(query, data_prop=[]) {  
  const [data, setData] = useState(data_prop)

  useEffect(() => {
    axios(
        query
      ).then(result => {
        setData(result.data)
      })
    
  }, [query]);

  return data;
}

function App() {
  // const ConfirmedForecast = useDataFetchEffect('/test_data/echart-confirmed-data.json', {})
  // const DeathsForecast = useDataFetchEffect('/test_data/echart-deaths-data.json', {})
  // const WuhanVirusData = useDataFetchEffect('/test_data/wuhan-virus.json', [])
  // const LastUpdated = useDataFetchEffect('/test_data/last-updated.json', {})
  const s3URL = 'https://coronavirus-e5c5.kxcdn.com'
  // const s3URL = 'https://data-hq.sfo2.digitaloceanspaces.com'
  const ConfirmedForecast = useDataFetchEffect(`${s3URL}/echart-confirmed-data.json`, {});
  const DeathsForecast = useDataFetchEffect(`${s3URL}/echart-deaths-data.json`, {});
  const WuhanVirusData = useDataFetchEffect(`${s3URL}/wuhan-virus.json`, []);
  const LastUpdated = useDataFetchEffect(`${s3URL}/last-updated.json`, {});
  const prediction_data = useDataFetchEffect(`${s3URL}/actual-vs-forecast-data.json`, []);
  
  const map_data = CalculateMapData(WuhanVirusData);
  const table_data = CalculateTableData(WuhanVirusData);
  const virusTotals = CalculateTotals(WuhanVirusData);

  const {total_cases, total_deaths, total_serious, total_critical, mortality_rate} = virusTotals;
  const last_updated = ConvertDateToReadableFormat (LastUpdated.last_updated);
  return (
    <div>
      <DashboardTitle/>

      <DashboardHeader
        total_cases={total_cases}
        total_deaths={total_deaths}
        total_serious={total_serious}
        total_critical={total_critical}
        mortality_rate={mortality_rate}
      />

      <DashboardMap map_data={map_data}/>
      <DashboardSuspectedCasesMap />
      <DashboardLineChart 
          ConfirmedForecast={ConfirmedForecast}
          DeathsForecast={DeathsForecast} />

      <DashboardPredictionTables prediction_data={prediction_data}/>

      <DashboardSummaryTable table_data={table_data}/>
      <DashboardFooter last_updated={last_updated}/>
    </div>
  );
}

export default App;

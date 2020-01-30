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


function useDataFetchEffect(query, dataProps) {  
  const [data, setData] = useState({data: dataProps})

  // // Reset Cache every hour
  // // TODO: Replace with API and DB 
  // const currentDate = new Date()
  // const utcTimestamp = (currentDate.getTime() + currentDate.getTimezoneOffset()*60*1000);
  // const hourTimeStamp = Math.floor(((utcTimestamp/1000)/60)/60)
  
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

function App() {
  // const s3URL = 'https://coronarovirus-api.s773.now.sh/api'
  const s3URL = '/api'
  const ConfirmedForecast = useDataFetchEffect(`${s3URL}/echart-confirmed`, {});
  const DeathsForecast = useDataFetchEffect(`${s3URL}/echart-deaths`, {});
  const WuhanVirusData = useDataFetchEffect(`${s3URL}/global-stats`, []);
  const LastUpdated = {} //useDataFetchEffect(`${s3URL}/last-updated.json`, {});
  const prediction_data = useDataFetchEffect(`${s3URL}/actual-vs-forecast`, []);
  
  const map_data = CalculateMapData(WuhanVirusData.data);
  const table_data = CalculateTableData(WuhanVirusData.data);
  const virusTotals = CalculateTotals(WuhanVirusData.data);

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
          ConfirmedForecast={ConfirmedForecast.data}
          DeathsForecast={DeathsForecast.data} />

      <DashboardPredictionTables prediction_data={prediction_data.data}/>

      <DashboardSummaryTable table_data={table_data}/>
      <DashboardFooter last_updated={last_updated}/>
    </div>
  );
}

export default App;

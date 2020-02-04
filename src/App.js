import React from 'react';
import { ThemeProvider } from "styled-components";
import lightTheme from "./components/Theme/light";
import darkTheme from "./components/Theme/dark";

import './App.css';

import DashboardCardsContainer from './Containers/DashboardCardsContainer';
import DashboardMapContainer from './Containers/DashboardMapContainer';
import DashboardSummaryTableContainer from './Containers/DashboardSummaryTableContainer';
import DashboardLineChartContainer from './Containers/DashboardLineChartContainer';
import DashboardForecastTableContainer from './Containers/DashboardForecastTableContainer';
import DashboardTitleContainer from './Containers/DashboardTitleContainer'

import DashboardNotableEventsMap from './components/Dashboard/DashboardNotableEventsMap';

import Container from "./components/StyledComponents/Container";

function App({theme}) {
  const isDarkMode = true;
  
  return (
    <ThemeProvider  theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <DashboardTitleContainer/>

        <DashboardCardsContainer/>

        <DashboardMapContainer />
        
        <DashboardNotableEventsMap />

        <DashboardLineChartContainer />

        <DashboardForecastTableContainer />

        <DashboardSummaryTableContainer />

      </Container>
    </ThemeProvider>
  );
}

export default App;

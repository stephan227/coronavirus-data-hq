import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import EchartLineChart from "../Charts/EchartLineChart";

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

const DashboardContainer = styled.div`
  flex-grow: 1; 
  justify-content: center;
`

const ChartTitle = styled.div`
  font-weight: 600;
`
function DashboardLineChart ({echartsConfirmedForecast, echartsDeathsForecast, echartsSuspectedForecast}) {
  return (
    <ChartContainer>
      <DashboardContainer>
        <Card>
          <ChartTitle>
            Suspected vs. Forecast
          </ChartTitle>
          <div>
            <EchartLineChart 
              option={echartsSuspectedForecast}
            />
          </div>
        </Card>
      </DashboardContainer>
      <DashboardContainer>
        <Card>
          <ChartTitle>
            Infected vs. Forecast
          </ChartTitle>
          <div>
            <EchartLineChart 
              option={echartsConfirmedForecast}
            />
          </div>
        </Card>
      </DashboardContainer>
      <DashboardContainer>
        <Card>
          <ChartTitle>
            Deaths vs. Forecast
          </ChartTitle>
          <div>
            <EchartLineChart 
              option={echartsDeathsForecast}
            />
          </div>
        </Card>
      </DashboardContainer>
    </ChartContainer>

  )
}

export default DashboardLineChart;
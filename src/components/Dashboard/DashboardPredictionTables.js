import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import PredictionTable from "../Tables/PredictionTable";

const DashboardContainer = styled.div`
  flex-grow: 1; 
  justify-content: center;
`

const ChartTitle = styled.div`
  font-weight: 600;
  padding-bottom: 7px;
`

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

const PredictionTableContainer = styled.div`
  justify-content: center;
  display: flex;
`
function DashboardPredictionTables ({prediction_data}) {
  return (
    <ChartContainer>
      <DashboardContainer>
        <Card>
          <ChartTitle>
            Forecast
          </ChartTitle>
          <PredictionTableContainer>
            <PredictionTable 
              prediction_data={prediction_data}
              forecast_property_name="confirmed_forecast"
              actual_property_name="deaths_forecast"
              suspected_property_name="confirmed_forecast"
            />
          </PredictionTableContainer>
        </Card>
      </DashboardContainer>

      <DashboardContainer>
        <Card>
          <ChartTitle>
            Actual
          </ChartTitle>
          <PredictionTableContainer>
            <PredictionTable 
              prediction_data={prediction_data}
              forecast_property_name="confirmed_actual"
              actual_property_name="deaths_actual"
              suspected_property_name="suspected_actual"
            />
          </PredictionTableContainer>
        </Card>
      </DashboardContainer>
    </ChartContainer>

  )
}

export default DashboardPredictionTables;
import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import EchartLineChart from "../Charts/EchartLineChart";

const DashboardContainer = styled.div`
  flex-grow: 1; 
  justify-content: center;
`

const ChartTitle = styled.div`
  font-weight: 600;
`
function DashboardLineChart ({chart_data, title}) {
  return (
    <DashboardContainer>
      <Card>
        <ChartTitle>
          {title}
        </ChartTitle>
        <div>
          <EchartLineChart 
            option={chart_data}
          />
        </div>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardLineChart;
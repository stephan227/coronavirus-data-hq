import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import SuspectedCasesMap from "../Leaflet/SuspectedCasesMap";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ChartTitle = styled.div`
  font-weight: 600;
  padding-bottom: 12px;
`

function DashboardNotableEventsMap () {
  return (
    <DashboardContainer>
      <Card>
        <ChartTitle>
          Suspected Cases and Notable Events
        </ChartTitle>
        <div>
          <SuspectedCasesMap />
        </div>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardNotableEventsMap;
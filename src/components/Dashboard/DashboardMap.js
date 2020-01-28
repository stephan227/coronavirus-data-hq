import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import MapPolygons from "../Leaflet/MapPolygons";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function DashboardBody ({map_data}) {
  return (
    <DashboardContainer>
      <Card>
        <div>
          <MapPolygons map_data={map_data} />
        </div>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardBody;
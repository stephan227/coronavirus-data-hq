import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import { Virus } from "../Icons";
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardTitleItem = styled.div`
  align-self: center;
  padding: 0px 5px;
  font-weight: 600;
`


const CardTitle = styled.div`
  // display: flex;
  // justify-content: flex-start;
`

function DashboardTitle () {  
  return (
    <DashboardContainer>
      <Card blockStyle={{padding: '15px 10px'}}>
        <CardTitle>
            <CardTitleItem>
              <Virus />
            </CardTitleItem>
            <CardTitleItem>
              Coronavirus Tracker
            </CardTitleItem>

        </CardTitle>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardTitle;
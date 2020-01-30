import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import { Aid, Biohazard, Skull, Critical, KDRatio } from "../Icons";
import { HexColors } from "../constants";
import Suspect from "../Icons/Suspect";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardChildren = styled.div`
  font-size: 1.5em;
`
const CardTitle = styled.div`
  display: inline-block;
`

function DashboardCards ({
    suspected,
    total_cases,
    total_deaths,
    total_serious,
    total_critical,
    mortality_rate }) {
  return (
    <DashboardContainer>
      <Card color={HexColors.infected} 
        >
        <CardTitle>
          <div>
            <Biohazard />
          </div>  
          <CardChildren>
            {total_cases}
          </CardChildren>
          <div>
            Infected
          </div>
        </CardTitle>
      </Card>

      <Card color={HexColors.serious} >
        <CardTitle>
          <div>
            <Aid />
          </div>
          <CardChildren>
            {total_serious}
          </CardChildren>
          <div>
            Serious
          </div>
        </CardTitle>
      </Card>
      
      <Card color={HexColors.critical} >
        <CardTitle>
          <div>
            <Critical />
          </div>
          <CardChildren>
            {total_critical}
          </CardChildren>
          <div>
            Critical
          </div>
        </CardTitle>
      </Card>
      
      <Card color={HexColors.deaths} >
        <CardTitle>
          <div>
            <Skull />
          </div>
          <CardChildren>
            {total_deaths}
          </CardChildren>
          <div>
            Dead
          </div>
        </CardTitle>
      </Card>

      <Card color={'lightgray'}>
        <CardTitle>
          <div>
            <KDRatio />
          </div>
          <CardChildren>
            {mortality_rate} %
          </CardChildren>
          <div>
            Death Rate
          </div>
        </CardTitle>
      </Card>
      <Card color={"#e9e9e9"}>
        <CardTitle>
          <div>
            <Suspect />
          </div>
          <CardChildren>
            {suspected.suspected}
          </CardChildren>
          <div>
            Suspected
          </div>
        </CardTitle>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardCards;
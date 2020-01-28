import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import { Aid, Biohazard, Skull, Critical, KDRatio } from "../Icons";
import {HexColors, Colors} from "../constants";

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

function DashboardHeader ({
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
            <Biohazard fill={Colors.infected} />
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
            <Aid stroke={Colors.serious}/>
          </div>
          <CardChildren>
            {total_serious}
          </CardChildren>
          <div>
            Serious
          </div>
        </CardTitle>
      </Card>
      
      <Card color={HexColors.critical} 
        >
        <CardTitle>
          <div>
            <Critical fill={Colors.critical} />
          </div>
          <CardChildren>
            {total_critical}
          </CardChildren>
          <div>
            Critical
          </div>
        </CardTitle>
      </Card>
      

      <Card color={HexColors.deaths} 
        >
        <CardTitle>
          <div>
            <Skull fill={Colors.deaths}/>
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
          <div>
            K/D Ratio
          </div>
        </CardTitle>
        <CardChildren>
          {mortality_rate}%
        </CardChildren>
      </Card>

    </DashboardContainer>
  )
}

export default DashboardHeader;
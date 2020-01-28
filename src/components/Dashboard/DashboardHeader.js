import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import { Aid, Biohazard, Skull, Critical, KDRatio } from "../Icons";
import {HexColors} from "../constants";

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
      <Card color={HexColors.infected} >
        <CardTitle>
          <div>
            <Biohazard />
          </div>
          <div>
            Infected
          </div>
        </CardTitle>        
        <CardChildren>
          {total_cases}
        </CardChildren>
      </Card>

      <Card color={HexColors.serious} >
        <CardTitle>
          <div>
            <Aid />
          </div>
          <div>
            Serious
          </div>
        </CardTitle>        
        <CardChildren>
          {total_serious}
        </CardChildren>
      </Card>
      
      <Card color={HexColors.critical} >
        <CardTitle>
          <div>
            <Critical />
          </div>
          <div>
            Critical
          </div>
        </CardTitle>        
        <CardChildren>
          {total_critical}
        </CardChildren>
      </Card>
      

      <Card color={HexColors.deaths} >
        <CardTitle>
          <div>
            <Skull />
          </div>
          <div>
            Dead
          </div>
        </CardTitle>
        <CardChildren>
          {total_deaths}
        </CardChildren>
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
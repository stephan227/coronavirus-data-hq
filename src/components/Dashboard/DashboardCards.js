import React from "react";
import styled, { withTheme } from "styled-components";
import Card from "../Cards/Card";
import { Aid, Biohazard, Skull, Critical, KDRatio } from "../Icons";
import Suspect from "../Icons/Suspect";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardValues = styled.div`
  font-size: 1.5em;
`
const CardContents = styled.div`
  display: inline-block;
  font-weight: 500;
`

function ItemCard({Icon, color, title, values}) {
  return (
    <Card color={color} >
      <CardContents>
        <div> 
          {Icon}
        </div>
        <CardValues style={{color: color}}>
          {values}
        </CardValues>
        <div style={{color: color}}>
          {title}
        </div>
      </CardContents>
    </Card>
  )
}
function DashboardCards ({
    suspected,
    total_cases,
    total_deaths,
    total_serious,
    total_critical,
    mortality_rate,
    theme
  }) {
  return (
    <DashboardContainer>
      <ItemCard
        Icon={<Biohazard fill={theme.colors.infectedIcon}/>}
        color={theme.colors.infectedIcon}
        title={'Infected'}
        values={total_cases} />

      <ItemCard
        Icon={<Aid stroke={theme.colors.seriousIcon}/>}
        color={theme.colors.seriousIcon}
        title={'Serious'}
        values={total_serious} />

      <ItemCard
        Icon={<Critical fill={theme.colors.seriousIcon}/>}
        color={theme.colors.seriousIcon}
        title={'Critical'}
        values={total_critical} />

      
      <ItemCard
        Icon={<Skull fill={theme.colors.deathsIcon}/>}
        color={theme.colors.deathsIcon}
        title={'Dead'}
        values={total_deaths} />

      <ItemCard
        Icon={<KDRatio fill={theme.colors.deathRateIcon}/>}
        color={theme.colors.deathRateIcon}
        title={'Death Rate'}
        values={`${mortality_rate} %`} />

      <ItemCard
        Icon={<Suspect fill={theme.colors.suspectedIcon}/>}
        color={theme.colors.suspectedIcon}
        title={'Suspected'}
        values={suspected} />

    </DashboardContainer>
  )
}

export default withTheme(DashboardCards);
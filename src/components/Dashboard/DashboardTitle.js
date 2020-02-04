import React from "react";
import styled, {withTheme} from "styled-components";
import Card from "../Cards/Card";
import { Virus } from "../Icons";
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardItem = styled.div`
  align-self: center;
  padding: 0px 5px;
  font-weight: 600;
`


const CardContent = styled.div`
  display: flex;
  justify-content: left;
`


const LastUpdatedCardItem = styled.div`
  font-size: .8em;
  color: #696969;
  font-weight: 400;
  text-align: left;
`

const CardTitleText = styled.div`
  text-align: left;
`

function DashboardTitle ({theme, lastUpdated}) {  
  return (
    <DashboardContainer>
      <Card blockStyle={{padding: '15px 10px'}}>
        <CardContent>
            <CardItem>
              <Virus fill={theme.colors.virusIcon} />
            </CardItem>
            <CardItem>
              <CardTitleText>
                Coronavirus Tracker
              </CardTitleText>
              <LastUpdatedCardItem>
                {lastUpdated && 
                  <>
                    {lastUpdated} (Updated Hourly)
                  </>
                }
              </LastUpdatedCardItem>
            </CardItem>
        </CardContent>
      </Card>
    </DashboardContainer>
  )
}

export default withTheme(DashboardTitle);
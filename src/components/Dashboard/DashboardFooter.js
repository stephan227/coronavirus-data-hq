import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardTitleItem = styled.div`
  align-self: center;
  padding: 0px 5px;
  font-weight: 600;
`


const CardItemRight = styled(CardTitleItem)`
  font-size: .8em;
  color: #696969;
  font-weight: 400;
`

const CardTitle = styled.div`
`

function DashboardFooter ({last_updated}) {  
  return (
    <DashboardContainer>
      <Card blockStyle={{padding: '15px 10px'}}>
        <CardTitle>
            <CardItemRight>
              Last Updated: {last_updated}
            </CardItemRight>
        </CardTitle>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardFooter;
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

const CardItem = styled(CardTitleItem)`
  font-size: .8em;
  color: #696969;
  font-weight: 400;
`

const CardTitle = styled.div``

const FooterLink = styled.a``

function DashboardFooter ({last_updated}) {  
  return (
    <DashboardContainer>
      <Card blockStyle={{padding: '15px 10px'}}>
        <CardTitle>
            <CardItem>
              Last Updated: {last_updated}
            </CardItem>
            <CardItem>
              <FooterLink rel="noopener" target="_blank" href={`https://github.com/stephan227/coronavirus-data-hq`}>
                Github
              </FooterLink>
            </CardItem>
        </CardTitle>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardFooter;
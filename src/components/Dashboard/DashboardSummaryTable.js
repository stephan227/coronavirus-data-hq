import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import styled from "styled-components";
import Card from "../Cards/Card";
// import {Colors} from "../constants"

const DashboardContainer = styled.div`
  flex-grow: 1; 
  justify-content: center;
`

const ChartTitle = styled.div`
  font-weight: 600;
  padding-bottom: 15px;
`

const CreateTableFromData = (table_data) => {
  const new_table = [];
  for (var item in table_data) {
    new_table.push(
      <Tr key={item}>
        <Td style={{fontWeight: 800, fontSize: '1.1em'}}>{item}</Td>
        <Td style={{fontWeight: 400, fontSize: '.9em'}}>{table_data[item].cases}</Td>
        <Td style={{fontWeight: 400, fontSize: '.9em'}}>{table_data[item].serious}</Td>
        <Td style={{fontWeight: 400, fontSize: '.9em'}}>{table_data[item].critical}</Td>
        <Td style={{fontWeight: 400, fontSize: '.9em'}}>{table_data[item].recovered}</Td>
        <Td style={{fontWeight: 400, fontSize: '.9em'}}>{table_data[item].deaths}</Td>
      </Tr>
    )
  }
  return new_table
}


function DashboardSummaryTable ({table_data}) {
  return (
    <DashboardContainer>
      <Card>
        <ChartTitle>
          Summary
        </ChartTitle>
        <div>
          <Table>
            <Thead>
              <Tr>
                <Th style={{fontWeight: 800}}>Country</Th>
                <Th style={{fontWeight: 400}}>Infected</Th>
                <Th style={{fontWeight: 400}}>Serious</Th>
                <Th style={{fontWeight: 400}}>Critical</Th>
                <Th style={{fontWeight: 400}}>Recovered</Th>
                <Th style={{fontWeight: 400}}>Dead</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                CreateTableFromData(table_data)
              }
            </Tbody>
          </Table>
        </div>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardSummaryTable;
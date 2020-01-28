import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";

const DashboardContainer = styled.div`
  flex-grow: 1; 
  justify-content: center;
`

const ChartTitle = styled.div`
  font-weight: 600;
`

const CreateTableFromData = (table_data) => {
  const new_table = [];
  for (var item in table_data) {
    new_table.push(
      <tr key={item}>
        <td>{item}</td>
        <td>{table_data[item].cases}</td>
        <td>{table_data[item].serious}</td>
        <td>{table_data[item].critical}</td>
        <td>{table_data[item].deaths}</td>
      </tr>
    )
  }
  return new_table
}
function DashboardTable ({table_data}) {
  console.log(table_data)
  return (
    <DashboardContainer>
      <Card>
        <ChartTitle>
          Summary
        </ChartTitle>
        <div>
        <table style={{"width":"100%"}}>
          <thead>
          <tr>
            <th>Country</th>
            <th>Infected</th>
            <th>Serious</th>
            <th>Critical</th>
            <th>Dead</th>
          </tr>
          </thead>
          <tbody>
            {
              CreateTableFromData(table_data)
              // for (var )
            //   table_data.map(item => (
            //   <tr>
            //     <td>{item.country_name}</td>
            //     <td>{item.cases}</td>
            //     <td>{item.serious}</td>
            //     <td>{item.critical}</td>
            //     <td>{item.deaths}</td>
            //   </tr>
            // ))
            }
          </tbody>
        </table>
        </div>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardTable;
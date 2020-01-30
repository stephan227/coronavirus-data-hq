import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 200px;
`
const TableHeader = styled.thead``

const TableHeading = styled.th`
  font-size: .9em;
  padding: 3px 10px;
`
const TableRow = styled.tr`
  height: 18px; 
  ${props => {
    if (props.isToday) {
      return `background-color: #dceef4;`
    } else {
      return ``;
    }
  }}
`

const TableRowHeader = styled(TableRow)`
border-bottom: solid 1px black;
`
const TableBody = styled.tbody`
  font-size: .8em;
`
const TableCell = styled.td`
  padding: 2px 10px;
  text-align: right;
`
const FirstTableCell = styled.td`
  text-align: left;
`

const isToday = (dateToCheck) => {
  try {
    const parsedDateToCheck = new Date(dateToCheck);
    const today = new Date()
    return (
      parsedDateToCheck.getDate() === today.getDate() &&
      parsedDateToCheck.getMonth() === today.getMonth() &&
      parsedDateToCheck.getFullYear() === today.getFullYear()
    )
  } catch (e) {
    return false;
  }
}


function PredictionTable ({
  prediction_data,
  forecast_property_name,
  actual_property_name
}) {
  return (
    <Table>
      <TableHeader>
        <TableRowHeader>
          <TableHeading>
            Date
          </TableHeading>
          <TableHeading>
            Infected
          </TableHeading>
          <TableHeading>
            Deaths
          </TableHeading>
        </TableRowHeader>
      </TableHeader>
      <TableBody>
        {
          prediction_data.map((item) => {
            return (
              <TableRow isToday={isToday(item.date)} key={`${forecast_property_name}${item.date}`}>
                <FirstTableCell>
                  {item.date}
                </FirstTableCell>
                <TableCell>
                  {item[forecast_property_name]}
                </TableCell>
                <TableCell>
                  {item[actual_property_name]}
                </TableCell>
            </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

export default PredictionTable;
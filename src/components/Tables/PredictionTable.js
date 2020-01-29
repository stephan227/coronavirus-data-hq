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
const TableRow = styled.tr``

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

              <TableRow key={`${forecast_property_name}${item.date}`}>
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
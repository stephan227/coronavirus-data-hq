import React from "react";
import styled from "styled-components";
import NumberFormat from 'react-number-format';

const Table = styled.table`
  
`
const TableHeader = styled.thead``

const TableHeading = styled.th`
  font-size: .9em;
  padding: 3px 10px;
`
const TableRow = styled.tr`
  height: 16px !important; 
  border: none !important;
  border-top: none !important;
  ${props => {
    if (props.isToday) {
      return `background-color: ${props.theme.colors.currentDateRowHighlight}`
    } else {
      return ``;
    }
  }}
`

const TableRowHeader = styled(TableRow)`
  border: none !important;
  border-top: none !important;
`
const TableBody = styled.tbody`
  font-size: .8em;
`
const TableCell = styled.td`
  padding: 0px 10px;
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


function ForecastTable ({
  forecast_data,
  forecast_property_name,
  actual_property_name,
  suspected_property_name
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
          <TableHeading>
            Suspected
          </TableHeading>
        </TableRowHeader>
      </TableHeader>
      <TableBody>
        {
          forecast_data.map((item) => {
            return (
              <TableRow isToday={isToday(item.date)} key={`${forecast_property_name}${item.date}`}>
                <FirstTableCell>
                  {item.date}
                </FirstTableCell>
                <TableCell>
                  <NumberFormat value={item[forecast_property_name]} displayType={'text'} thousandSeparator={true} />
                </TableCell>
                <TableCell>
                  <NumberFormat value={item[actual_property_name]} displayType={'text'} thousandSeparator={true} />
                </TableCell>
                <TableCell>
                  <NumberFormat value={item[suspected_property_name]} displayType={'text'} thousandSeparator={true} />
                </TableCell>
            </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

export default ForecastTable;
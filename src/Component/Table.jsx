import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({data}) {
  return (
    <TableContainer style={{marginTop:"20px",maxHeight: '300px', overflowY: 'auto',}} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PARAMETER (UNIT)</StyledTableCell>
            <StyledTableCell align="right">RANGE</StyledTableCell>
            <StyledTableCell align="center">ENTERED VALUE</StyledTableCell>
            <StyledTableCell align="right">ASSESSMENT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.parameter==="turbidityValue"?`${row.parameter} (NTU)`:row?.parameter==="TDSValue"?row?.parameter:`${row?.parameter} (mg/l)`}
              </StyledTableCell>
              <StyledTableCell align="right">{row.range}</StyledTableCell>
              <StyledTableCell align="center">{row.value}</StyledTableCell>
              <StyledTableCell
                style={{ color: row.assessment === "Low" || row.assessment === "Critical" ? "red" : "green" }}
                align="right">
                {row.assessment}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

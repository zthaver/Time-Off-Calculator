// represents the main app

import React from "react";
import Container from "@mui/material/Container";
import { Table, Typography, Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MainApp = (props) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h2" textAlign="center">
        Welcome to Time off Calculator
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">PTO</TableCell>
                <TableCell align="right">Sick Days</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.username}</TableCell>
                  <TableCell align="right">{row.pto}</TableCell>
                  <TableCell align="right">{row.sickDays}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

// create the data to put into the table
// returns and obj
const createData = (username, pto, sickDays) => {
  return { username, pto, sickDays };
};

const rows = [createData("plooft", "2", "3")];

export default MainApp;

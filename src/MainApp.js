// represents the main app

import React from "react";
import Container from "@mui/material/Container";
import { Table, Typography } from "@mui/material";

const MainApp = (props) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h2" textAlign="center">
        Welcome to Time off Calculator
      </Typography>
      <Table></Table>
    </Container>
  );
};

export default MainApp;

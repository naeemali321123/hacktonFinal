import React from "react";
import "./TodoApp.scss";
import Navbar from "../../features/navbar/Navbar";
import Todos from "../../features/todos/Todos";

import { Grid, Hidden } from "@mui/material";
import LeftBar from "../../features/leftBar/LeftBar";
import RightBar from "../../features/rightBar/RightBar";

export default function TodoApp() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={2.85}>
            <LeftBar />
          </Grid>
        </Hidden>
        <Grid item md={6.3}>
          <Todos />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={2.85}>
            <RightBar />
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
}

import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./Home.module.css";

const HomeTemplate = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    className={styles.Home}
  >
    <p>Home</p>
  </Grid>
);

export default HomeTemplate;

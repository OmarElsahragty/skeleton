import React from "react";
import { PropTypes } from "prop-types";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import styles from "./BodyNav.module.css";

const BodyNav = ({ className = "", itemClassName = "", routes }) => (
  <Grid container item xs={12} className={className}>
    <Grid
      item
      xs={12}
      container
      className={`${styles.BodyNav} pb-15 px-20`}
      justifyContent="space-evenly"
    >
      {routes.map((link) => (
        <Grid item key={link.name}>
          <NavLink
            exact
            to={link.path}
            className={`${styles.item} ${itemClassName}`}
            activeClassName={styles.activeItem}
          >
            {link.name}
          </NavLink>
        </Grid>
      ))}
    </Grid>
  </Grid>
);
BodyNav.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  routes: PropTypes.instanceOf(Object).isRequired,
};
export default BodyNav;

import React from "react";
import { PropTypes } from "prop-types";
import { Grid } from "@material-ui/core";
import { Icon } from "../../Atoms";

const LabelIcon = ({
  src,
  text,
  secondText,
  children,
  iconCol = "auto",
  labelCol = "auto",
  className,
  classes,
}) => (
  <Grid container alignItems="center" wrap="nowrap" className={className}>
    <Grid item xs={iconCol}>
      <Icon src={src} className={classes?.icon} />
    </Grid>
    <Grid item xs={labelCol}>
      <p className={classes?.text}>{text}</p>
      {secondText && <p className={classes?.secondText}>{secondText}</p>}

      {children}
    </Grid>
  </Grid>
);
LabelIcon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
  secondText: PropTypes.string,
  iconCol: PropTypes.number,
  labelCol: PropTypes.number,
  classes: PropTypes.instanceOf(Object),
  children: PropTypes.element,
};
export default LabelIcon;

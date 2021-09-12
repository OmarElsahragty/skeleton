import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({
  text = "",
  variant = "contained",
  color = "primary",
  children = null,
  onClickAction,
  ...props
}) => (
  <Button
    onClick={onClickAction}
    classes={{ root: styles.primaryBtn, disabled: styles.disabledButton }}
    variant={variant}
    color={color}
    {...props}
  >
    {children || text}
  </Button>
);

PrimaryButton.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
  onClickAction: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
};
export default PrimaryButton;

import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({
  text = "",
  variant = "contained",
  color = "secondary",
  children = null,
  onClickAction,
  ...props
}) => (
  <Button
    onClick={onClickAction}
    classes={{ root: styles.secondaryBtn, disabled: styles.disabledButton }}
    variant={variant}
    color={color}
    {...props}
  >
    {children || text}
  </Button>
);

SecondaryButton.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
  onClickAction: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
};
export default SecondaryButton;

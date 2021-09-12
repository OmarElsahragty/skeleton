import React from "react";
import { PropTypes } from "prop-types";

import styles from "./LabelUp.module.css";

const LabelUp = ({ className = "", htmlFor, text }) => (
  <label htmlFor={htmlFor} className={`${styles.LabelUp} ${className}`}>
    {text}
  </label>
);

LabelUp.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LabelUp;

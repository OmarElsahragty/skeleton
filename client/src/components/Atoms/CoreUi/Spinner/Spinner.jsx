import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import PropTypes from "prop-types";

const Spinner = ({
  width = 5,
  height = 10,
  radius = 2,
  margin = 2,
  loading,
}) => (
  <ClimbingBoxLoader
    height={height}
    width={width}
    raduis={radius}
    margin={margin}
    color="#EA6115"
    loading={loading}
  />
);

Spinner.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
  margin: PropTypes.number,
  loading: PropTypes.bool.isRequired,
};

export default Spinner;

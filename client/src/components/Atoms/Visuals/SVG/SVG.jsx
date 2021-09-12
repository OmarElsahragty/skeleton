import React from "react";
import { PropTypes } from "prop-types";

const SVG = ({
  src,
  width,
  height,
  className = "",
  children,
  onClickAction = null,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={src?.ViewBox}
    className={className}
    onClick={onClickAction}
    {...props}
    dangerouslySetInnerHTML={{ __html: src?.Path }}
  />
);

SVG.propTypes = {
  src: PropTypes.instanceOf(Object),
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  onClickAction: PropTypes.func,
};

export default SVG;

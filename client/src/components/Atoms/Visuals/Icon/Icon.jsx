import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Visual = styled.img`
  width: ${(props) => props?.styleObject?.fixedWeight};
  height: ${(props) => props?.styleObject?.fixedHeight};
  max-height: ${(props) => props?.styleObject?.maxHeight};
  cursor: ${(props) =>
    props?.styleObject?.cursor || (props?.onClick && "pointer")};
`;

const Icon = ({
  src,
  className = "",
  styleObject,
  onClickAction = null,
  ...props
}) => (
  <Visual
    {...props}
    src={src}
    styleObject={styleObject}
    className={`img-fluid ${className}`}
    alt="icon"
    onClick={onClickAction}
  />
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  styleObject: PropTypes.instanceOf(Object),
  onClickAction: PropTypes.func,
};

export default Icon;

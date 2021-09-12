import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Visual = styled.div`
  width: ${(props) => props?.styleObject?.fixedWeight || "100%"};
  height: ${(props) => props?.styleObject?.fixedHeight || "100%"};
  cursor: ${(props) =>
    props?.styleObject?.cursor || (props?.onClick && "pointer")};
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Image = ({
  children,
  className = "",
  onClickAction = null,
  ...props
}) => (
  <Visual {...props} className={className} onClick={onClickAction}>
    {children}
  </Visual>
);

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  styleObject: PropTypes.instanceOf(Object),
  onClickAction: PropTypes.func,
};

export default Image;

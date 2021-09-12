import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ClickableComponent = styled.div`
  cursor: pointer;
  width: min-content;
  height: min-content;
`;

const Clickable = ({
  className = "",
  children = null,
  onClickAction = null,
  ...props
}) => (
  <ClickableComponent className={className} onClick={onClickAction} {...props}>
    {children}
  </ClickableComponent>
);

Clickable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClickAction: PropTypes.func.isRequired,
};
export default Clickable;

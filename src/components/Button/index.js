import styled from "styled-components";
import React from "react";

const Button = (props) => {
  return <StyledButton type={props.buttonType}></StyledButton>;
};

const StyledButton = styled.input`
  text-align: center;
  width: 200px;
  height: 70px;
  position: relative;
  transform: translate(-50%, 50px);
  background: #e94f34;
  border-radius: 11px;
  left: 50%;
  font-size: 19px;
  color: white;
  line-height: 70px;
  border: none;
`;

export default Button;

import styled from "styled-components";
import React from "react";

const InputText = (props) => {
  return (
    <StyledInput
      type={props.typeInput}
      placeholder={props.placeholderInput}
      value={props.valueInput}
      onChange={props.onChangeInput}
      required="required"
      style={
        props.valueInput != ""
          ? { borderColor: "green" }
          : { borderColor: "#7C8484" }
      }
    ></StyledInput>
  );
};

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid;
  height: 48px;
  border-top: none;
  border-left: none;
  border-right: none;
`;

export default InputText;

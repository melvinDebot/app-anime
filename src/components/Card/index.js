import styled from "styled-components";
import React from "react";

const Card = (props) => {
  return (
    <StyledCard style={{ backgroundColor: props.background }}>
      <StyledH3>{props.text}</StyledH3>
      <StyledImg src={props.img} alt=""></StyledImg>
      <StyledDescription>{props.description}</StyledDescription>
      <StyledButton onClick={props.onClick}>
        {props.textButton ? "remove from favorite" : "add to favorite"}
      </StyledButton>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 19px;
  margin: 20px 0px;
  display: flex;
  justify-content: space-evently;
  flex-direction: column;
`;

const StyledH3 = styled.div`
  font-size: 30px;
  font-weight: 600px;
  color: white;
  text-align: center;
  margin: 20px 0px;
`;

const StyledDescription = styled.div`
  width: 95%;
  margin-left: 10px;
  margin-top: 3em;
  color: white;
`;

const StyledImg = styled.img`
  width: 40%;
  position: relative;

  left: 50%;
  transform: translate(-50%, 0%);
`;

const StyledButton = styled.button`
  width: 49%;
  height: 40px;
  border-radius: 8px;
  border: none;
  left: 50%;
  transform: translate(-50%, 10px);
  position: relative;
`;

export default Card;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import trousers from "../images/trousers.png";
export const Trousers = () => {
  return (
    <Wrapper>
      <Print></Print>
      <Img src={trousers} width="500px" height="500px" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Img = styled.img`
  position: absolute;
  z-index: 3;
  height: 500px;
  margin-top: -100px;
`;

const Print = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: -100px;
  width: 500px;
  height: 500px;
  background: red;
`;

export default Trousers;

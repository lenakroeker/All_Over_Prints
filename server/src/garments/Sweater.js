import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import sweater from "../images/sweater.png";

export const Sweater = () => {
  return (
    <Wrapper>
      <Print></Print>
      <Img src={sweater} width="450px" height="450px" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Img = styled.img`
  position: absolute;
  z-index: 3;
  margin-top: -80px;
  margin-left: 30px;
`;

const Print = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: -80px;
  margin-left: 30px;

  width: 450px;
  height: 450px;
  background: red;
`;

export default Sweater;

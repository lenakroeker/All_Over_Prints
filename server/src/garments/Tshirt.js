import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import tshirt from "../images/tshirt.png";

export const Tshirt = () => {
  return (
    <Wrapper>
      <Print></Print>
      <Img src={tshirt} width="400px" height="400px" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Img = styled.img`
  position: absolute;
  z-index: 3;

  margin-top: -80px;
  margin-left: 60px;
`;

const Print = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: -80px;
  margin-left: 60px;
  width: 400px;
  height: 400px;
  background: red;
`;

export default Tshirt;

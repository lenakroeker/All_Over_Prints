import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Wrapper>
      <HeadLink exact to="/tshirt">
        T-SHIRT
      </HeadLink>
      <HeadLink exact to="/trousers">
        TROUSERS
      </HeadLink>
      <HeadLink exact to="/buttondown">
        BUTTONDOWN
      </HeadLink>
      <HeadLink exact to="/dress">
        DRESS
      </HeadLink>
      <HeadLink exact to="/skirt">
        SKIRT
      </HeadLink>
      <HeadLink exact to="/sweater">
        SWEATER
      </HeadLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200px;
  padding: 30px;
  justify-content: center;
  width: 100%;
`;

const HeadLink = styled(NavLink)`
  margin: 30px;
  color: black;
  transition: 1s ease-in-out;
  text-decoration: none;
  &:hover {
    filter: blur(2px);
  }
`;

export default Header;

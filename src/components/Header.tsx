"use client";

import React from "react";
import styled from "styled-components";

const HeaderFrame = styled.div`
  width: 100%;
  height: 100px;
  color: black;
  background-color: #ffffff;
`;

const Header: React.FC = () => {
  return (
    <HeaderFrame>
      <h1>Header</h1>
    </HeaderFrame>
  );
};

export default Header;

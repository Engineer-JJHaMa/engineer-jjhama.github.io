"use client";

import React from "react";
import styled from "styled-components";

const HeaderFrame = styled.div`
  width: 1024px;
  height: 64px;
  margin: 0 auto;

  color: white;
  background-color: #000000;

  display: flex;
`;

const BlogTitle = styled.div`
  height: auto;

  font-size: 30px;
  font-weight: bold;

  align-self: center;
  vertical-align: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderFrame>
      <BlogTitle>Hama&apos;s Playground!</BlogTitle>
    </HeaderFrame>
  );
};

export default Header;

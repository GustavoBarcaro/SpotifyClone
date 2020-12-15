import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginNavBarContainer = styled.div`
  margin: 0;
  height: 76px;
  width: 100%;
  padding: 5px;
  background-color: black;
`;

const LoginNavBar = () => {
  return <LoginNavBarContainer></LoginNavBarContainer>;
};

export default LoginNavBar;

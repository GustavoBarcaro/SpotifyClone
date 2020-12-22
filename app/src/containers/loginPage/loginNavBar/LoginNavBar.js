import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button  from "@material-ui/core/Button"
import { StylesProvider } from "@material-ui/core/styles"

import useWindowWidth from "../../../hooks/useWindowWidth";

import SpotifyLogoDesktop from "../../../assets/Spotify-Logo.wine.svg"

const LoginNavBarContainer = styled.div`
  display: flex;
  margin: 0;
  height: 76px;
  width: 100%;
  padding: 5px;
  justify-content: space-between;
  align-items: row;
`;

const StyledButton = styled(Button)`
  position: relative;
  top: 10px;
  width: 160px;
  height: 45px;
  background-color: rgb(10, 169, 10);
  margin-right: 25px;
  border-radius: 20px;
  font-weight: bold;
  &:hover{
    background-color: rgb(238, 234, 234);
    transform:scale(1.1,1.1);
    -webkit-transform:scale(1.1,1.1);
    -moz-transform:scale(1.1,1.1);
  }
`;

const LoginNavBar = () => {
  const LogoWidth = useWindowWidth() <= 397 ? "150px" : "200px";
  
  const Logo = styled.img`
    width: ${LogoWidth};
    margin-left: 20px;
  `;
 
  return (
    <div>
      <LoginNavBarContainer>
        <Logo src={SpotifyLogoDesktop} />
        <StylesProvider injectFirst>
          <StyledButton>Log in</StyledButton>
        </StylesProvider>
      </LoginNavBarContainer>
      
    </div>
  );
};

export default LoginNavBar;

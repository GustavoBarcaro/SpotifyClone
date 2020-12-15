import React from "react";
import styled from "styled-components";

import useWindowWidth from "../../hooks/useWindowWidth";
import LoginNavBar from "./loginNavBar/LoginNavBar";

import backgroundDesktop from "../../assets/background-desktop.png";
import backgroundMobile from "../../assets/background-mobile.jpg";

const LoadingPageContainer = styled.div`
  margin: 0;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const LoginPage = () => {
  const imageUrl =
    useWindowWidth() >= 768 ? backgroundDesktop : backgroundMobile;

  return (
    <LoadingPageContainer url={imageUrl}>
      <LoginNavBar />
    </LoadingPageContainer>
  );
};

export default LoginPage;

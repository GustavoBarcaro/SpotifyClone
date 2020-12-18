import React, { useEffect } from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next"

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
  let browserLang = window.navigator.userLanguage || window.navigator.language;
  let modifiedLang = [];
  const {t, i18n} = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(browserLang)
  }, [browserLang, i18n])

  if (browserLang.length > 3){
    modifiedLang = browserLang.split("")
    modifiedLang.splice(2)
    browserLang = modifiedLang.join("")
  }

  const textStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "white"
  }
  
  const imageUrl =
    useWindowWidth() >= 768 ? backgroundDesktop : backgroundMobile;

  return (
    <LoadingPageContainer url={imageUrl}>
      <LoginNavBar />
      <h2 style={textStyle}>{t("Millions of songs to choose from")}</h2>
      <h2 style={textStyle}>{t("Free on Spotify")}</h2>
    </LoadingPageContainer>
  );
};

export default LoginPage;

import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button"; 
import { StylesProvider } from '@material-ui/core/styles';

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
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.tamanho <= 444 ? null : "row-reverse"};
  justify-content: ${props => props.tamanho <= 444 ? "center" : null};
`;

const TextContainer = styled.div`
  position: relative;
  text-align: center;
  color: black;
  font-family: sans-serif;
  top: ${props => props.tamanho <= 444 ? "-5%" : "-6.6%"};
  margin-right: ${props => props.tamanho <= 444 ? null : "20px;"};
  border-radius: 30px;
  width: 800px;
  height: 320px;
`

const Text = styled.h2`
  color: white;
  text-align: center;
  font-size: ${props => props.tamanho <= 444 ? "30px" : "47px"};
  font-weight: 600;
  margin-right: ${props => props.tamanho <= 444 ? null : "20px;"};
`

const ButtonLogIn = styled(Button)`
  position: relative;
  top: 10px;
  background-color: rgb(9, 196, 9);
  border-radius: 20px;
  width: ${props => props.tamanho <= 444 ? "200px" : "300px"};
  height: 40px;
  font-size: 20px;
  
  &:hover{
    background-color: white;
    color: black;
    transform:scale(1.1,1.1);
    -webkit-transform:scale(1.1,1.1);
    -moz-transform:scale(1.1,1.1);
  }
`

const LoginPage = () => {
  const imageUrl =
    useWindowWidth() >= 768 ? backgroundDesktop : backgroundMobile;
  
  const sizeScreen = useWindowWidth();

  return (
    <LoadingPageContainer url={imageUrl} tamanho={sizeScreen}>
      <LoginNavBar />
        <TextContainer tamanho={sizeScreen}>
          <Text style={{marginBottom: "-20px"}} tamanho={sizeScreen}>Milhões de músicas a sua escolha</Text>
          <Text tamanho={sizeScreen}>Grátis no spotify</Text>
          <StylesProvider injectFirst>
            <ButtonLogIn tamanho={sizeScreen} variant="contained" color="primary">Log In</ButtonLogIn>
          </StylesProvider>
        </TextContainer> 
    </LoadingPageContainer>
  );
};

export default LoginPage;
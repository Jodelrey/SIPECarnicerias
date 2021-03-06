import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInRight, fadeInLeft, fadeInUp } from "react-animations";
import logo from "../imgs/Logolimpiosf.png";

const Container = styled.section`
  background-image: url("../imgs/HomeImage.jpeg");
  background-size: cover;
  background-position: 0% 20%;
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  @media (max-width: 450px) {
    /* height: calc(82vh - 140px); */
  }
`;
const Title = styled.h1`
  font-family: "Bitter", Verdana, Geneva, Tahoma, serif;
  color: #f7f6e7;
  font-size: 60px;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 40px;
  }
`;

const SeparatedTitle = styled.div``;
const FlexContainer = styled.div`
  margin-top: 50px;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLogo = styled.img`
  height: 165px;

  @media (max-width: 450px) {
    height: 110px;
  }
`;

const Texto = styled.p`
  font-size: 20px;
  font-style: italic;
  color: #f7f6e7;
  padding-top: 15px;

  @media (max-width: 890px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 15px;
    margin-bottom: 0;
  }
`;

const fadeInRightAnimation = keyframes`${fadeInRight}`;

const FadeInRightDiv = styled.div`
  animation: 1s ${fadeInRightAnimation};
`;

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const FadeInLeftDiv = styled.div`
  animation: 1s ${fadeInLeftAnimation};
`;

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 1s ${fadeInUpAnimation};
`;

const TextContainer = styled.div``;

const Home = () => {
  return (
    <Container>
      <FlexContainer>
        <TextContainer>
          <FadeInLeftDiv>
            <Title>
              <SeparatedTitle>SIPE</SeparatedTitle>
              <SeparatedTitle>Carnicerías</SeparatedTitle>
            </Title>
          </FadeInLeftDiv>
          <FadeInUpDiv>
            <Texto>Reparto a domicilio, venta por mayor y menor</Texto>
          </FadeInUpDiv>
        </TextContainer>
        <FadeInRightDiv>
          <StyledLogo src={logo} />
        </FadeInRightDiv>
      </FlexContainer>
    </Container>
  );
};

export default Home;

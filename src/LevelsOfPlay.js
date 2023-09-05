import React from "react";
import styled from "styled-components";
import LevelsOfPlayIcon from "./assets/LevelsOfPlayFull.svg";

export const LevelsOfPlay = () => {
  return (
    <Container id='levels_of_play'>
      <ContentContainer>
        {/* <HeaderText>Levels of Play</HeaderText>
        <SubHeaderText>
          our app offers a dynamic journey that caters to traders of all levels
          of expertise.
        </SubHeaderText> */}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #231f2d;
  height: 720px;
  background-image: url(${LevelsOfPlayIcon});
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 1258px;
  margin-top: 149px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Chivo;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 74px; /* 154.167% */
  margin-top: 54px;
`;

const SubHeaderText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

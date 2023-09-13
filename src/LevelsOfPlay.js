import React from "react";
import styled from "styled-components";
import LevelsOfPlayIcon from "./assets/levels_bg.png";

export const LevelsOfPlay = () => {
  return (
    <Container id='levels_of_play'>
      <ContentContainer>
        <HeaderText>Levels of Play</HeaderText>
        <SubHeaderText>
          our app offers a dynamic journey that caters to traders of all levels
          of expertise.
        </SubHeaderText>
        <div style={{display:'flex',marginTop:'50px'}}>

        <SubHeaderText>
          1.Beginner
        </SubHeaderText>
        <SubHeaderText>
          {" "}:{" "}
        </SubHeaderText>
        <SubHeaderText>
         This contest level is designed for users to test their skills of stock selection and learn from their mistakes by reviewing to there peers
        </SubHeaderText>
        </div>
        <div style={{display:'flex',marginTop:'30px',marginBottom:'30px'}}>

        <SubHeaderText>
          2.Amateur
        </SubHeaderText>
        <SubHeaderText>
          {" "}:{" "}
        </SubHeaderText>
        <SubHeaderText>
        This contest level is designed for users to test their skills of actual portfolio creation which involves not only selecting the right stock but also allocating right amount of stock quanity.
        </SubHeaderText>
        </div>
        <div style={{display:'flex',marginBottom:'50px'}}>

        <SubHeaderText>
          3.Expert
        </SubHeaderText>
        <SubHeaderText>
          {" "}:{" "}
        </SubHeaderText>
        <SubHeaderText>
        Enter into the thrilling world of Fantasy sports, a strategy-based online sports game wherein you can create a virtual team of real players playing in real life matches. Create your team to win points based on all the players' performance in a live game.
        </SubHeaderText>
        </div>

      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #231f2d;
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
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

import React from "react";
import styled from "styled-components";
import LevelsOfPlayIcon from "./assets/levels_bg.png";

export const LevelsOfPlay = () => {
  return (
    <Container id='levels_of_play'>
      <ContentContainer>
        <div style={{display:'flex',flexDirection:'column'}}>

        <HeaderText>Levels of Play</HeaderText>
        <SubHeaderText>
          Our app offers a dynamic journey that caters to traders of all levels
          of expertise.
        </SubHeaderText>
        </div>

        <div style={{marginTop:'30px'}}>

        <SubHeaderText style={{fontSize:'32px'}}>
          Beginner
        </SubHeaderText>
        </div>

      
        <SubHeaderText>
         This contest level is designed for users to test their skills of stock selection and learn from their mistakes by reviewing to there peers
        </SubHeaderText>
        <div style={{marginTop:'30px'}} >

        <SubHeaderText style={{fontSize:'32px'}}>
          Amateur
        </SubHeaderText>
        </div>

        <SubHeaderText>
        This contest level is designed for users to test their skills of actual portfolio creation which involves not only selecting the right stock but also allocating right amount of stock quanity.
        </SubHeaderText>
        <div style={{marginTop:'30px'}} >

        <SubHeaderText style={{fontSize:'32px'}}>
          Expert
        </SubHeaderText>
        </div>

        <SubHeaderText>
        Enter into the thrilling world of Fantasy sports, a strategy-based online sports game wherein you can create a virtual team of real players playing in real life matches. Create your team to win points based on all the players' performance in a live game.
        </SubHeaderText>

      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #231f2d;
  background-image: url(${LevelsOfPlayIcon});
  padding: 30px 0;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  flex-direction: column;
  align-items: center;
`;


const HeaderText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Chivo;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 74px; /* 154.167% */
`;

const SubHeaderText = styled.div`
  color: #fff;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

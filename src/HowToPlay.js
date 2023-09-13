import React from "react";
import styled from "styled-components";
import HowToPlayBg from "./assets/HowToPlayBg.svg";
import HowToPlayScreenshot1 from "./assets/HowToPlayScreenshot1.svg";
import HowToPlayScreenshot2 from "./assets/HowToPlayScreenshot2.svg";
import HowToPlayScreenshot3 from "./assets/HowToPlayScreenshot3.svg";

const HowToPlay = () => {
  return (
    <Container id='how_to_play'>
      <ContentContainer>
        <TextContainer>
          <HeaderText>How to play</HeaderText>
          <SubHeaderText>
            Enter into the thrilling world of Gamified Stock Market, a
            strategy-based stock market game wherein you can create a virtual
            portfolio from real stock market. Create your portfolio based on
            your preferences of being bull or bear for your portfolio and win
            real rewards and cash.
          </SubHeaderText>
        </TextContainer>
        <ScreenshotArray>
          <ScreenShotContainer>
            <ScreenShotText>Select a contest</ScreenShotText>
            <ScreenShotImage src={HowToPlayScreenshot1} />
          </ScreenShotContainer>
          <ScreenShotContainer>
            <ScreenShotText>Create stockcase</ScreenShotText>
            <ScreenShotImage src={HowToPlayScreenshot2} />
          </ScreenShotContainer>
          <ScreenShotContainer>
            <ScreenShotText>Join contest</ScreenShotText>
            <ScreenShotImage src={HowToPlayScreenshot3} />
          </ScreenShotContainer>
        </ScreenshotArray>
        {/* <YoutubeVideoContainer>
          <YouTubeVideo src={`https://www.youtube.com/embed/34Na4j8AVgA`} />
        </YoutubeVideoContainer> */}
      </ContentContainer>
    </Container>
  );
};

export default HowToPlay;

const Container = styled.div`
  background: #eceeed;
  background-image: url(${HowToPlayBg});
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const HeaderText = styled.span`
  color: #343434;
  text-align: center;
  font-family: Chivo;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 74px; /* 154.167% */
  margin-top: 92px;
`;

const SubHeaderText = styled.span`
  color: #242424;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  width: 917px;
`;

const ScreenshotArray = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 72px;
`;

const ScreenShotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScreenShotText = styled.span`
  text-align: center;
  font-family: Chivo;
  font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: 36px; /* 128.571% */
  background: linear-gradient(140deg, #95389e 0%, #9001ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ScreenShotImage = styled.img`
  height: 720px;
  width: 348.75px;
`;

const YoutubeVideoContainer = styled.div`
  width: 815px;
  height: 463px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #dce0de;
  margin-top: 77.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const YouTubeVideo = styled.iframe`
  width: 799px;
  height: 447px;
  flex-shrink: 0;
  border-radius: 15px;

`;

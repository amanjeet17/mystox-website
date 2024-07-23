import React from "react";
import styled from "styled-components";
import HowToPlayBg from "./assets/HowToPlayBg.svg";
import HowToPlayScreenshot1 from "./assets/HowToPlayScreenshot1.svg";
import HowToPlayScreenshot2 from "./assets/HowToPlayScreenshot2.svg";
import HowToPlayScreenshot3 from "./assets/HowToPlayScreenshot3.svg";

const HowToPlay = () => {
  const isMobile = window.innerWidth<500
  return (
  <section>
    <div className="container">
    <div className="row">
    <h1 className="level-heading">Levels of Play</h1>

      <div class="col-sm-6 col-xs-12 row " data-aos="zoom-in" data-aos-delay="200">
        <div class="col-lg-12   hero-img" data-aos="zoom-in" data-aos-delay="200" style={{position:'relative'}}>
        <img src={require('./assets/lop_1.png')} class="absolute toggle-image1"  alt="" width={'100%'}/>
        <img src={require('./assets/lop_2.png')} class="absolute toggle-image2"  alt="" width={'100%'} />
        <img src={require('./assets/lop_3.png')} class="absolute toggle-image3"  alt="" width={'100%'} />
        </div>
      </div>
      <div class="row col-sm-6  col-xs-12 ms-1 level-explainaition" data-aos="zoom-in" data-aos-delay="200" >
        <div className="toggle-image1 op-1 level">
          <h3 className="level-name">Beginner Level</h3>
          <div className="level-info">This contest level is designed for users to test their skills of stock selection and learn from their mistakes by reviewing to their peers</div>
        </div>
        <div className="toggle-image2 op-1 level">
          <h3 className="level-name">Amateur Level</h3>
          <div className="level-info">No stock can have a value allocation greater than 25% of the purse amount. Additionally, players are required to utilise at least 95% of the purse amount while creating their stock portfolio.</div>
        </div>
        <div className="toggle-image3 op-1 level">
          <h3 className="level-name">Expert Level</h3>
          <div className="level-info">It is buying and selling of financial instruments in order to make a profit. These instruments range from a variety of assets that are assigned a financial value that can go up or down – and you can trade on the direction they’ll take.</div>
        </div>
      </div>
      </div>
      </div>

    </section>
  );
};

export default HowToPlay;

const Container = styled.div`
  background: #eceeed;
  background-image: url(${HowToPlayBg});
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const HeaderText = styled.div`
  color: #343434;
  text-align: center;
  font-family: Chivo;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 74px; /* 154.167% */
  margin-top: 92px;
`;

const SubHeaderText = styled.div`
  color: #242424;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  width: 100%
`;

const ScreenshotArray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
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
  width: ${props=>props.isMobile ?'100%' :'815px'};
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
  width: ${props=>props.isMobile ?'100%' :'800px'};
  height: 447px;
  flex-shrink: 0;
  border-radius: 15px;

`;

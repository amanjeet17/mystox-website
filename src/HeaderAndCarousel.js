import React, { useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselBG from "./assets/CarouselBG.svg";
import PlayNowButtonImg from "./assets/PlayNowButton.svg";
import Carousel1 from "./assets/Carousel1.svg";
import Carousel2 from "./assets/Carousel2.svg";
import Carousel3 from "./assets/Carousel3.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
const HeaderAndCarousel = () => {
  const isMobile = window.innerWidth<500

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log("scrollcalled", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onPlayDownload = ()=>{
    console.log('onPlayDownload')
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
     if (userAgent.includes("iPhone") || userAgent.includes("Mac")) {
      window.open(
        "https://apps.apple.com/in/app/mystox-fantasy-stock-gaming/id1668213556",
        '_blank' // <- This is what makes it open in a new window.
      )
   } else {
    window.open(
      "https://play.google.com/store/apps/details?id=com.mystox",
      '_blank' // <- This is what makes it open in a new window.
    )
   }
  }
  useEffect(()=>{
    // onPlayDownload()
  },[])

  return (
    <Container id="home">
      <ContentContainer>
        <TopNavContainer isMobile={isMobile}>
          <MainHeaderText>Mystox</MainHeaderText>
          <HeaderButtonBox isMobile={isMobile}>
            <SecondaryHeaderText
              onClick={() => {
                scrollToSection("home");
              }}
            >
              Home
            </SecondaryHeaderText>
            <SecondaryHeaderText
              onClick={() => {
                scrollToSection("about");
              }}
            >
              About
            </SecondaryHeaderText>
            <SecondaryHeaderText
              onClick={() => {
                scrollToSection("levels_of_play");
              }}
            >
              Levels of play
            </SecondaryHeaderText>
            <SecondaryHeaderText
              onClick={() => {
                scrollToSection("how_to_play");
              }}
            >
              How to play?
            </SecondaryHeaderText>
            <SecondaryHeaderText
              onClick={() => {
                scrollToSection("contact_us");
              }}
            >
              Contact us
            </SecondaryHeaderText>
            <PlayNowButton src={PlayNowButtonImg} onClick={onPlayDownload} alt="Play Now" />
          </HeaderButtonBox>
        </TopNavContainer>
      </ContentContainer>

      <div>
        <Carousel
          autoPlay
          showIndicators={false}
          onChange={(...a) => console.log("onChange", a)}
          onClickItem={onPlayDownload}
          onClickThumb={(...a) => console.log("onClickThumb", a)}
          swipeable
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src={Carousel1}  />
          </div>
          <div>
            <img src={Carousel2} />
          </div>
          <div>
            <img src={Carousel3} />
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default HeaderAndCarousel;

const Container = styled.div`
  background: #170038;
  /* background-image: url(${CarouselBG}); */
`;

const ContentContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 5;
`;

const TopNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${props=>props.isMobile ?0:'30px'};
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
`;

const MainHeaderText = styled.span`
  color: #fff;
  font-family: "Chivo";
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 127.5%; /* 28.05px */
  letter-spacing: -0.66px;
`;

const HeaderButtonBox = styled.div`
  display: ${props=>props.isMobile ? 'none':'flex'};
  flex-direction: row;
`;

const SecondaryHeaderText = styled.span`
  color: #fff;
  font-family: "Chivo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 32px;
`;

const PlayNowButton = styled.img`
  margin-top: -16px;
  cursore:pointer;
`;

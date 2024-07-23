import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CarouselBG from "./assets/CarouselBG.svg";

export default function RefundPolicy(){
    const navigate =  useNavigate()
    return(
        <>
        <Container id="home">
      <ContentContainer>

        <TopNavContainer>
          <MainHeaderText onClick={() => {
                navigate("/");
              }}>Mystox</MainHeaderText>
          <HeaderButtonBox>
            <SecondaryHeaderText
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </SecondaryHeaderText>
            <SecondaryHeaderText
              onClick={() => {
                navigate("/");
              }}
            >
              About
            </SecondaryHeaderText>
            <SecondaryHeaderText
              onClick={() => {
                navigate("/");
              }}
            >
              Levels of play
            </SecondaryHeaderText>
            <SecondaryHeaderText
              onClick={() => {
                navigate("/");
              }}
            >
              Contact us
            </SecondaryHeaderText>
          </HeaderButtonBox>
        </TopNavContainer>
        </ContentContainer>

        </Container >
         <div className="container">
         <h3>Our business policy does not include refunds or cancellations, and as we do not offer shipping services, a shipping policy is unnecessary. These updates will be reflected on our website within two business days.</h3>

         </div>

        </>
    )
}

const Container = styled.div`
  background: #170038;
  height: 90px;
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
  padding-top: 36px;
  margin: 0 auto;
  overflow: hidden;
  width: 1258px;
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
  display: flex;
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
`;
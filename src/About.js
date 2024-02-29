import React from "react";
import styled from "styled-components";
import ShieldCheck from "./assets/ShieldCheck.svg";
import CustomerSupport from "./assets/CustomerSupport.svg";
import DailyWinCashIcon from "./assets/DailyWinCashIcon.svg";
import EasyWithdrawalIcon from "./assets/EasyWithdrawalIcon.svg";
import ReferAndEarnIcon from "./assets/ReferAndEarnIcon.svg";
import GetFantasyStocksIcon from "./assets/GetFantasyStocksIcon.svg";
import EarnOnEachReferralIcon from "./assets/EarnOnEachReferralIcon.svg";
import LearnRealStockMarketIcon from "./assets/LearnRealStockMarketIcon.svg";
import PlayRiskFreeIcon from "./assets/PlayRiskFreeIcon.svg";
import EarningWithoutInvestingIcon from "./assets/EarningWithoutInvestingIcon.svg";
import FunAndEntertainmentIcon from "./assets/FunAndEntertainmentIcon.svg";

export const About = () => {
  const isMobile = window.innerWidth<500
  return(
    <div className="about-info">
      <div className="container">
        <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column align-items-center">
        <div className="info-box">
            <img src={GetFantasyStocksIcon} width="100%" />
        </div>  
            <div className="info-text">Fantasy Portfolio</div>
        </div>  
        <div className="d-flex flex-column align-items-center ">
            <div className="info-box">
            <img src={EarnOnEachReferralIcon} width="100%" />
            </div>

            <div className="info-text">Earn Real</div>
        </div> 
        <div className="d-flex flex-column align-items-center">
            <div className="info-box">
            <img src={LearnRealStockMarketIcon}  width="100%" />
            </div>
            <div className="info-text">Risk Free</div>
        </div>  
        <div className="d-flex flex-column align-items-center">
        <div className="info-box">
        <img src={FunAndEntertainmentIcon} width="100%" />
            </div>
            <div className="info-text">Refer & Earn</div>
        </div>  
        {/* {[1,2,3,4].map((el)=>{
          return(
            <div className="d-flex flex-column ">
                <img src={LearnRealStockMarketIcon} />
              <div className="info-text">Refer & Earn</div>
            </div>
          )
        })} */}
      </div>
      </div>

    </div>
  )
  return (
    <Container id="about">
      <ContentContainer>
        <FeaturesContainer style={{display:"none"}}>
          <FeatureBox>
            <FeatureImageContainer>
              <FeatureImage src={ShieldCheck} />
            </FeatureImageContainer>
            <FeatureText>
              Secure <FeatureTextGradient>100%</FeatureTextGradient> trusted
            </FeatureText>
          </FeatureBox>
          <FeatureBox>
            <FeatureImageContainer>
              <FeatureImage src={CustomerSupport} />
            </FeatureImageContainer>
            <FeatureText>Customer Support</FeatureText>
          </FeatureBox>
          <FeatureBox>
            <FeatureImageContainer>
              <FeatureImage src={DailyWinCashIcon} />
            </FeatureImageContainer>
            <FeatureText>
              Daily Win <FeatureTextGradient>Cash</FeatureTextGradient>
            </FeatureText>
          </FeatureBox>
          <FeatureBox>
            <FeatureImageContainer>
              <FeatureImage src={EasyWithdrawalIcon} />
            </FeatureImageContainer>
            <FeatureText>Easy Withdrawals</FeatureText>
          </FeatureBox>
          <FeatureBox>
            <FeatureImageContainer>
              <FeatureImage src={ReferAndEarnIcon} />
            </FeatureImageContainer>
            <FeatureText>
              Refer & <br />
              Earn
            </FeatureText>
          </FeatureBox>
        </FeaturesContainer>
        <div style={{margin:'50px 0'}}>

        <PrimaryHeaderText>
          India’s one of the best trading gaming App
        </PrimaryHeaderText>
        <SecondaryHeaderText>
          Learn and experience the stock market like never before
        </SecondaryHeaderText>
        </div>

        <HighlightsContainer>
          <HighlightOuterBox isMobile={isMobile}>
            <HighlightInnerBox>
              <HighlightContentBox>
                <GradientIconContainer>
                  <HighlightIcon src={GetFantasyStocksIcon} />
                </GradientIconContainer>
                <HighlightHeading>Experience fantasy Trading</HighlightHeading>
                <HighlightText>
                  Unlock the world of endless possibilities with our fantasy
                  stocks, where you can trade, strategize, and experience.
                </HighlightText>
              </HighlightContentBox>
            </HighlightInnerBox>
          </HighlightOuterBox>
          <HighlightOuterBox isMobile={isMobile}>
            <HighlightInnerBox>
              <HighlightContentBox>
                <GradientIconContainer>
                  <HighlightIcon src={EarnOnEachReferralIcon} />
                </GradientIconContainer>
                <HighlightHeading>Earn on each referral</HighlightHeading>
                <HighlightText>
                  Refer friends and earn money with every successful referral,
                  making your journey with us even more rewarding.
                </HighlightText>
              </HighlightContentBox>
            </HighlightInnerBox>
          </HighlightOuterBox>
          <HighlightOuterBox isMobile={isMobile}>
            <HighlightInnerBox>
              <HighlightContentBox>
                <GradientIconContainer>
                  <HighlightIcon src={LearnRealStockMarketIcon} />
                </GradientIconContainer>
                <HighlightHeading>Craft Winning Portfolio</HighlightHeading>
                <HighlightText>
                Your journey to victory begins here. Skillfully assemble portfolios that outshine the competition.
                </HighlightText>
              </HighlightContentBox>
            </HighlightInnerBox>
          </HighlightOuterBox>
          <HighlightOuterBox isMobile={isMobile}>
            <HighlightInnerBox>
              <HighlightContentBox>
                <GradientIconContainer>
                  <HighlightIcon src={PlayRiskFreeIcon} />
                </GradientIconContainer>
                <HighlightHeading>Risk Free Trading</HighlightHeading>
                <HighlightText>
                Dive into trading without financial risk. Test your strategies and enjoy the thrill of trading without losing a penny.
                </HighlightText>
              </HighlightContentBox>
            </HighlightInnerBox>
          </HighlightOuterBox>
          <HighlightOuterBox isMobile={isMobile}>
            <HighlightInnerBox>
              <HighlightContentBox>
                <GradientIconContainer>
                  <HighlightIcon src={EarningWithoutInvestingIcon} />
                </GradientIconContainer>
                <HighlightHeading>Live Markets, Virtual Portfolios, Genuine Rewards</HighlightHeading>
                <HighlightText>
                Engage in real market scenarios and convert your virtual portfolio skills into genuine rewards.
                </HighlightText>
              </HighlightContentBox>
            </HighlightInnerBox>
          </HighlightOuterBox>
          <HighlightOuterBox isMobile={isMobile}>
            <HighlightInnerBox>
              <HighlightContentBox>
                <GradientIconContainer>
                  <HighlightIcon src={FunAndEntertainmentIcon} />
                </GradientIconContainer>
                <HighlightHeading>Turn Fantasy Into Reality </HighlightHeading>
                <HighlightText>
                Refine your trading skills on our platform and apply them confidently to succeed in the real market.
                </HighlightText>
              </HighlightContentBox>
            </HighlightInnerBox>
          </HighlightOuterBox>
        </HighlightsContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
`;

const ContentContainer = styled.div`

`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const FeatureImageContainer = styled.div`
  height: 90px;
  width: 90px;
  border: 2px solid #e4e4e4;
  border-radius: 45px;

  /* Flexbox styles to center the image */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const FeatureImage = styled.img`
  height: 42px;
  width: 42px;
`;

const FeatureText = styled.div`
  color: #343434;
  text-align: center;
  font-family: "Chivo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  width: 105px;
  margin-top: 10px;
`;

const FeatureTextGradient = styled.span`
  background: linear-gradient(153deg, #ff7d3f 0%, #9809f9 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Chivo";
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
`;

const PrimaryHeaderText = styled.div`
  color: #343434;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 74px;
`;

const SecondaryHeaderText = styled.div`
  color: #343434;
  text-align: center;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

const HighlightsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
`;

const HighlightOuterBox = styled.div`
  padding:10px;
  border-radius: 14px;
  background-color: #f6f6f6;
  margin: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: ${props => props.isMobile ? '100%': '25%'};
`;

const HighlightInnerBox = styled.div`
  width: 100%;
  min-height: 270px;
  background-color: #fff;
  border-radius: 14px;
`;

const HighlightContentBox = styled.div`
  flex-direction: column;
  display: flex;
  padding: 24px;
`;

const GradientIconContainer = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 39px;
  flex-shrink: 0;
  background: linear-gradient(
    127deg,
    #ff8100 29.31%,
    #e233f1 66.2%,
    #8f00ff 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HighlightHeading = styled.span`
  color: #343434;
  font-family: "Chivo";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 145.455% */
  margin-top: 16px;
`;

const HighlightText = styled.span`
  color: rgba(52, 52, 52, 0.85);
  font-family: "Chivo";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  margin-top: 8px;
`;

const HighlightIcon = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

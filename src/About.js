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
      <h1 className="about-heading">India’s upcoming Stock-market Fantasy Gaming App </h1>
      <h3 className="subheading">Trade, Learn, Experience and Earn without any losses</h3>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-sm-4">
            <div className="container-card">
              <div className="main-card">
              <img src={require('./assets/about_1.png')}  />
              <div className="card-heading">Get Fantasy stocks</div>
              <div className="card-text">Unlock the world of endless possibilities with our fantasy stocks, where you can trade, strategize, and experience.</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-card">
              <div className="main-card">
              <img src={require('./assets/about_2.png')}  />
              <div className="card-heading">Earn on each referral</div>
              <div className="card-text">Refer friends and earn money with every successful referral, making your journey with us even more rewarding.</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-card">
              <div className="main-card">
              <img src={require('./assets/about_3.png')}  />
              <div className="card-heading">Learn Real stock market</div>
              <div className="card-text">Embark on an exciting journey of learning the real stock market while playing our engaging game.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-sm-4">
            <div className="container-card">
              <div className="main-card">
              <img src={require('./assets/about_4.png')}  />
              <div className="card-heading">Play risk free</div>
              <div className="card-text">Trading fearlessly with our risk-free trading app, where you can learn, experiment, and perfect your strategies.</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-card">
              <div className="main-card">
              <img src={require('./assets/about_5.png')}  />
              <div className="card-heading">Earning without investing</div>
              <div className="card-text">Zero investment required through our app, where you can learn, trade, and thrive without spending a penny.</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-card">
              <div className="main-card">
              <img src={require('./assets/about_6.png')}  />
              <div className="card-heading">Fun & Entertainment </div>
              <div className="card-text">Endless entertainment with our intriguing trading app, which features exhilarating and market exploration!</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
  
  
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

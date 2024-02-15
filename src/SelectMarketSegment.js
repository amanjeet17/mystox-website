import React from "react";
import styled from "styled-components";
import SegmentImageBanner from "./assets/SegmentImageBanner.svg";

const SelectMarketSegment = () => {
  const isMobile = window.innerWidth<500
  return (
    <Container>
      <HeaderText>Select Market Segment</HeaderText>
      <SubHeaderText>
        Identify a market segment to stand out in a competitive market.
      </SubHeaderText>
      <HighlightsContainer>

      <HighlightOuterBox isMobile={isMobile}>
        <HighlightInnerBox>
          <HighlightContentBox>
            <HighlightHeading>Equity</HighlightHeading>
            <HighlightText>
            It is a place where stocks and shares of companies are traded. The equities that are traded in an equity market are either over the counter or at stock exchanges. Often called as stock market or share market, an equity market allows sellers and buyers to deal in equity or shares in the same platform.
            </HighlightText>
          </HighlightContentBox>
        </HighlightInnerBox>
      </HighlightOuterBox>
      <HighlightOuterBox isMobile={isMobile}>
        <HighlightInnerBox>
          <HighlightContentBox>
            <HighlightHeading>Commodity</HighlightHeading>
            <HighlightText>
            A market that trades in the primary economic sector rather than manufactured products, such as cocoa, fruit and sugar. Hard commodities are mined, such as gold and oil. Futures contracts are the oldest way of investing in commodities.
            </HighlightText>
          </HighlightContentBox>
        </HighlightInnerBox>
      </HighlightOuterBox>
      </HighlightsContainer>

    </Container>
  );
};

export default SelectMarketSegment;

const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
`;

const HeaderText = styled.div`
  color: #343434;
  text-align: center;
  font-family: Chivo;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 74px; /* 154.167% */
  margin-top: 86px;
`;

const SubHeaderText = styled.div`
  color: #343434;
  text-align: center;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  margin-bottom:20px;
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

const HighlightHeading = styled.span`
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

const HighlightText = styled.span`
  color: rgba(52, 52, 52, 0.85);
  font-family: "Chivo";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  margin-top: 8px;
`;


const HighlightsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;

`;
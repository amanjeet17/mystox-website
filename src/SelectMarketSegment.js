import React from "react";
import styled from "styled-components";
import SegmentImageBanner from "./assets/SegmentImageBanner.svg";

const SelectMarketSegment = () => {
  return (
    <Container>
      <HeaderText>Select Market Segment</HeaderText>
      <SubHeaderText>
        Identify a market segment to stand out in a competitive market.
      </SubHeaderText>
      <SegmentImage src={SegmentImageBanner} />
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
`;

const HeaderText = styled.span`
  color: #343434;
  text-align: center;
  font-family: Chivo;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 74px; /* 154.167% */
  margin-top: 86px;
`;

const SubHeaderText = styled.span`
  color: #343434;
  text-align: center;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

const SegmentImage = styled.img`
  margin-top: 48px;
  margin-bottom: 58px;
`;

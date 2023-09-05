import React from "react";
import styled from "styled-components";
import FAQCollapsed from "./assets/FAQCollapsed.svg";
import FAQExpanded from "./assets/FAQExpanded.svg";
import { useCollapse } from "react-collapsed";

const FAQs = () => {
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <HeaderText>Frequently asked questions</HeaderText>
        </TextContainer>
        <FAQObject
          question={'What is the "earn and refer" programme all about?'}
          answer={
            "In Bull type, you will choose stocks for your portfolio, which you think have will increasing value during contest duration."
          }
        />
        <FAQObject
          question={"What is Bear type contest?"}
          answer={
            "In Bull type, you will choose stocks for your portfolio, which you think have will increasing value during contest duration."
          }
        />
        <FAQObject
          question={"What is Bear type contest?"}
          answer={
            "In Bull type, you will choose stocks for your portfolio, which you think have will increasing value during contest duration."
          }
        />
        <FAQObject
          question={"What is Bull type contest?"}
          answer={
            "In Bull type, you will choose stocks for your portfolio, which you think have will increasing value during contest duration."
          }
        />
        <FAQObject
          question={"Can I refer someone who lives in a different country?"}
          answer={
            "In Bull type, you will choose stocks for your portfolio, which you think have will increasing value during contest duration."
          }
        />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 1258px;
  margin-top: 149px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 86px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const HeaderText = styled.span`
  color: #343434;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Chivo;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 74px; /* 154.167% */
`;

export default FAQs;

const FAQObject = ({ question, answer }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <FAQContentContainer>
      <FAQHeaderContent>
        <FAQHeaderText>{question}</FAQHeaderText>
        <FAQButtonImage
          src={isExpanded ? FAQExpanded : FAQCollapsed}
          {...getToggleProps()}
        />
      </FAQHeaderContent>
      <FAQText {...getCollapseProps()}>{answer}</FAQText>
    </FAQContentContainer>
  );
};
const FAQContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border: 8px solid #f6f6f6;
  padding: 36px 24px;
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 16px;
`;

const FAQHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const FAQHeaderText = styled.span`
  color: #343434;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FAQButtonImage = styled.img`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;

const FAQText = styled.span`
  color: rgba(52, 52, 52, 0.85);
  font-family: Chivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  width: 1044px;
`;

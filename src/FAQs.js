import React from "react";
import styled from "styled-components";
import FAQCollapsed from "./assets/FAQCollapsed.svg";
import FAQExpanded from "./assets/FAQExpanded.svg";
import { useCollapse } from "react-collapsed";

const FAQs = () => {
  const isMobile = window.innerWidth<500
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <HeaderText>Frequently asked questions</HeaderText>
        </TextContainer>
        <FAQObject
          question={'What is fantasy trading?'}
          answer={
            "Fantasy trading is a simulated trading experience that allows users to buy and sell virtual stocks or assets without using real money. It's a risk-free way to practice trading and learn about the financial markets."
          }
        />
        <FAQObject
          question={"How does fantasy trading work?"}
          answer={
            "Typically, fantasy trading platforms offer both free and premium (paid) options. Users can choose to participate for free or subscribe to premium plans for additional features and benefits."
          }
        />
        <FAQObject
          question={"Is there a cost to join or participate?"}
          answer={
            "Rewards in fantasy trading contests can vary but often include cash prizes, gift cards, or other incentives. The specific rewards are usually outlined in the contest details."
          }
        />
        <FAQObject
          question={"What can I win in fantasy trading contests?"}
          answer={
            "In Bull type, you will choose stocks for your portfolio, which you think have will increasing value during contest duration."
          }
        />
        <FAQObject
          question={"How do I create a fantasy portfolio?"}
          answer={
            "To create a fantasy portfolio, you select virtual stocks or assets from the available options on the platform. These virtual assets mirror real assets' performance in the market."
          }
        />
         <FAQObject
          question={"Are the market data and prices real-time?"}
          answer={
            "Yes, most fantasy trading platforms use real-time market data and prices to ensure a realistic trading experience."
          }
        />
         <FAQObject
          question={"Is fantasy trading suitable for beginners?"}
          answer={
            "Yes, fantasy trading is an excellent way for beginners to learn about trading without risking real money. It's a safe environment to practice and gain confidence."
          }
        />
         <FAQObject
          question={"Do I need any prior trading experience?"}
          answer={
            "No prior trading experience is necessary. Fantasy trading platforms are designed to be user-friendly and accessible to traders of all skill levels."
          }
        />
         <FAQObject
          question={"Can I compete in multiple contests simultaneously?"}
          answer={
            "Yes, users to participate in multiple contests at the same time, offering a variety of trading scenarios."
          }
        />
         <FAQObject
          question={"How do I withdraw my winnings?"}
          answer={
            "Users can withdraw their winnings through bank transfers after completing KYC."
          }
        />
        <FAQObject
         question={"What happens if I run out of virtual funds in my portfolio?"}
         answer={
          "User can increase their trading funds from funds section inside trading contest"
         }
       />
       <FAQObject
        question={"How can I contact customer support for assistance?"}
        answer={
          "You can usually contact customer support through email, or through whatsap chat."
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
  width: ${(props)=>props.isMobile ? '100%' :'85%'};
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
  border: 5px solid #f6f6f6;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
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
  font-size: 20px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  width: 1044px;
`;

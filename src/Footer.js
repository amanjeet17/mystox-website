import React from "react";
import styled from "styled-components";
import DownloadApple from "./assets/DownloadApple.svg";
import DownloadGoogle from "./assets/DownloadGoogle.svg";
import FacebookIcon from "./assets/FacebookIcon.svg";
import TwitterIcon from "./assets/TwitterIcon.svg";
import InstagramIcon from "./assets/InstagramIcon.svg";
import FooterSpiral from "./assets/FooterSpiral.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const isMobile = window.innerWidth<500
  const navigate= useNavigate()
  return (
    <Container id="contact_us" >
      <ContentContainer>
        <HalfContainerLeft isMobile={isMobile}>
         
          <SocialButtonsContainer>
            <SocialButton onClick={()=>window.open('https://www.facebook.com/people/MyStox/100090229607932/','_blank')} src={FacebookIcon} />
            <SocialButton onClick={()=>window.open('https://www.linkedin.com/company/mystoxgames/','_blank')} src={TwitterIcon} />
            <SocialButton onClick={()=>window.open('https://www.instagram.com/mystoxgames/','_blank')} src={InstagramIcon} />
          </SocialButtonsContainer>
          <JargonContainer isMobile={isMobile}>
            <JargonText onClick={()=>navigate('/refund-cancel')}>Cancellation & Refund</JargonText>
            <JargonText onClick={()=>navigate('/privacy-policy')}>Privacy & Policy</JargonText>
            <JargonText href="http://docs.mystox.co.in/v1/terms-and-condition.pdf">Terms & Condition</JargonText>
          </JargonContainer>
        </HalfContainerLeft>
        <HalfContainerRight>
        <ContactUsContainer>
           <ContactUsContainer>
            <ContactUsHeader>Contact us</ContactUsHeader>
            <ContactUsEmail>Email : support@mystox.com</ContactUsEmail>
          </ContactUsContainer>
            <ContactUsHeader>Address</ContactUsHeader>
            <ContactUsEmail>Wework Prestige Atlanta, 80 Feet Main Road Industrial Layout,Koramangala 1 A Block  Bengaluru Urban, Karnataka,560034</ContactUsEmail>
          </ContactUsContainer>
        </HalfContainerRight>
      </ContentContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  /* background: linear-gradient(202deg, #231f2d 0%, #2c1a3c 100%); */
  background-color: #2c1a3c;
  background-image: url(${FooterSpiral});
  flex-wrap: wrap;
  padding:50px 15px;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

const HalfContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

const HalfContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  // align-items: ${props => props.isMobile ?'start':'end'};
`;
const DownloadText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Chivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 42px;
`;

const DownloadAppsContainer = styled.div`
  margin-top: 28px;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

const DownloadAppButton = styled.img`
  width: 200.053px;
  height: 59.275px;
  flex-shrink: 0;
  margin-right: 16px;
  margin-bottom:20px;
`;

const MyStoxText = styled.span`
  color: #fff;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px; 
  letter-spacing: -1.02px;
  margin-top: 31px;
`;
const VisionText = styled.span`
  color: var(--text, #fff);
  font-family: Chivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; 
  width: 364px;
`;

const ContactUsContainer = styled.div`
  width: 187px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

const ContactUsHeader = styled.span`
  color:  #fff;
  font-family: Chivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

`;

const ContactUsEmail = styled.span`
  color: var(--text, #fff);
  font-family: Chivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
  margin-bottom: 16.5px;
`;

const SocialButtonsContainer = styled.div`
  margin-top: 28px;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 46px;
`;

const SocialButton = styled.img`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  margin-right: 24px;
  cursor:pointer;
`;

const JargonContainer = styled.div`
  margin-top: 28px;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top:25px;
`;

const JargonText = styled.a`
  color: #fff;
  text-align: right;
  font-family: Chivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  margin-right: 20px;
  cursor:pointer;
`;

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
  const navigate= useNavigate()
  return (
    <Container id="contact_us" >
      <ContentContainer>
        <HalfContainerLeft>
          <DownloadText>Download Mystox app Now</DownloadText>
          <DownloadAppsContainer>
            <DownloadAppButton src={DownloadGoogle} />
            <DownloadAppButton src={DownloadApple} />
          </DownloadAppsContainer>
          <MyStoxText>Mystox</MyStoxText>
          <VisionText>
            Our Vision is empowering traders worldwide with a user-centric and
            technologically advanced trading app, bridging financial expertise
            and rewarding trading experiences.
          </VisionText>
        </HalfContainerLeft>
        <HalfContainerRight>
          <ContactUsContainer>
            <ContactUsHeader>Contact us</ContactUsHeader>
            <ContactUsEmail>Email : support@mystox.com</ContactUsEmail>
          </ContactUsContainer>
          <SocialButtonsContainer>
            <SocialButton src={FacebookIcon} />
            <SocialButton src={TwitterIcon} />
            <SocialButton src={InstagramIcon} />
          </SocialButtonsContainer>
          <JargonContainer>
            <JargonText onClick={()=>navigate('/policy')}>Privacy & Policy</JargonText>
            <JargonText href="http://docs.mystox.co.in/v1/terms-and-condition.pdf">Terms & Condition</JargonText>
          </JargonContainer>
        </HalfContainerRight>
      </ContentContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  /* background: linear-gradient(202deg, #231f2d 0%, #2c1a3c 100%); */
  background-color: #2c1a3c;
  height: 411px;
  background-image: url(${FooterSpiral});
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 1258px;
  margin-top: 149px;
  display: flex;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
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
  flex-direction: row;
  align-items: center;
`;

const DownloadAppButton = styled.img`
  width: 200.053px;
  height: 59.275px;
  flex-shrink: 0;
  margin-right: 16px;
`;

const MyStoxText = styled.span`
  color: #fff;
  font-family: Chivo;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px; /* 152.941% */
  letter-spacing: -1.02px;
  margin-top: 31px;
`;
const VisionText = styled.span`
  color: var(--text, #fff);
  font-family: Chivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  width: 364px;
`;

const ContactUsContainer = styled.div`
  width: 187px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

const ContactUsHeader = styled.span`
  color: var(--text, #fff);
  font-family: Chivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
`;

const ContactUsEmail = styled.span`
  color: var(--text, #fff);
  font-family: Chivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
  margin-top: 16.5px;
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
`;

const JargonContainer = styled.div`
  margin-top: 28px;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 125px;
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
  margin-left: 38px;
  cursor:pointer;
`;

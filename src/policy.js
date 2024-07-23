import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CarouselBG from "./assets/CarouselBG.svg";

export default function PrivacyPolicy(){
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
              How to play?
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

        <PolicyData />
         
        </div>
        </>
    )
}

const OldPolicy = ()=>{
  return(
    <div style={{padding:"20px"}}>
    <h1 class="heading">Privacy Policy</h1>
     <p>Mystox Wealthtech Private Limited operates MyStox in India, which offers stock market / cryptocurrency exchange based games through the web-platform(s) https://Mystox.co.in and partner website(s) and mobile application(s) (collectively referred to as the “Platform”) ( Mystox Wealthtech Private Limited referred to herein as  "Mystox" or "we" or "us" or "our").
     </p>
     <p>Any person utilizing the Platform ( "User" or "you" or "your") or any of its features including participation in the various events, pools (including games / pools ("Game") (" Services ") being conducted on the Platform) shall be bound by this Privacy Policy.</p>
     <p>Most of the Services are offered for free but you may need registration to participate in Mystox online games. The information about the User is collected by Mystox as (i) information supplied by Users and (ii) information automatically tracked during User's navigation on Mystox.</p>
    
     <p>Before you submit any information to the Platform, please read this Privacy Policy for an explanation of how we will treat your personal information. By using any part of the Platform, you consent to the collection, use, disclosure and transfer of your personal information for the purposes outlined in this Privacy Policy and to the collection, processing and maintenance of this information. If you do not agree to this Privacy Policy, please do not use the Platform. Your use of any part of the Platform indicates your acceptance of this Privacy Policy and of the collection, use and disclosure of your personal information in accordance with this Privacy Policy. While you have the option not to provide us with certain information or withdraw consent to collect certain information, kindly note that in such an event you may not be able to take full advantage of the entire scope of features and services offered to you and we reserve the right not to provide you with our services.</p>
     <p></p>
     <p></p>
     <div>
     {/* <a href="/PRIVACYPOLICY.pdf" download  target="_blank"> */}
 
     <div class="heading">1. Usage</div>
     {/* </a> */}
     <p>To avail certain Services on the Platform, Users would be required to provide certain information for the registration process namely:</p>
     <ul>
       <li>Username</li>
       <li>Mobile Number</li>
     </ul>
     <p>In the course of providing you with access to the Services , and in order to provide you access to the features offered through the Platform and to verify your identity, you may be required to furnish additional information, including your Permanent Account Number and Bank Account Details.</p>
     <p>All required information is specific and based on the kind of Game/ Services the User wishes to participate in or access, and will be utilized for the purpose of providing services, including but not limited to the Services requested by the User. The information as supplied by the Users enables us to improve the Services and provide you the most user-friendly game experience. Mystox may also share such information with affiliates and third parties in limited circumstances, including for the purpose of providing services requested by the User, complying with legal process, preventing fraud or imminent harm, and ensuring the security of our network and services. This includes financial information, such as information regarding the payment instrument/modes used by you to make such payments, which may include cardholder name, credit/debit card number (in encrypted form) with expiration date, banking details, wallet details etc. This information is presented to you at the time of making a payment to enable you to complete your payment expeditiously.</p>
     <p>In the course of providing the Services , Users may invite other existing Users or other users ("Invited/Referred Users") to participate in any of the Services by providing the email address or mobile number of such users. Mystox may thereafter use this information to contact the Invited User and invite such user to register with Mystox (if such Invited User is not an existing User) and participate in the Game in relation to which such person was invited by the User. The participation of the Invited User in any of the pools shall be subject to the terms of this Privacy Policy and the Terms and Conditions for the use of the Platform. The User hereby represents that the Invited Users have consented and agreed to such disclosure to and use of their email address and mobile number by Mystox.</p>
     </div>
     <div>
     <div class="heading">2. Disclosure</div>
     <p>Mystox may also share information as provided by you and data concerning usage of the Services and participation in the Games with third party service providers engaged by Mystox, for the purpose of data analytics or other similar purposes, for the purpose of storage, improving the services and helping Mystox serve you better. By using the Platform, you hereby expressly agree and grant consent to the collection, use and storage of this information by Mystox. Mystox reserves the right to share, disclose and transfer information collected hereunder with its own affiliates. In the event Mystox sells or transfers all or a portion of its business assets, consumer information may be one of the business assets that are shared, disclosed or transferred as part of the transaction. You hereby expressly grant consent and permission to Mystox for disclosure and transfer of information to such third parties. Mystox may share information as provided by you and data concerning usage of the Services and participation in the Game with its commercial partners for the purpose of facilitating user engagement, for marketing and promotional purposes and other related purposes. Further, Mystox reserves the right to disclose personal information as obligated by law, in response to duly authorized legal process, governmental requests and as necessary to protect the rights and interests of Mystox.</p>
   
     </div>
         <div>
     <div class="heading">3. Cookies</div>
     <p>To improve the effectiveness and usability of the Platform for our Users, we use "cookies", or such similar electronic tools to collect information to assign each visitor a unique random number as a User Identification (User ID) to understand the User's individual interests using the identified computer. Unless the User voluntarily identifies himself/herself (e.g., through registration), Mystox has no way of knowing who the User is, even if we assign a cookie to the User's computer. The only personal information a cookie can contain is information supplied by the User. A cookie cannot read data off the User's hard drive. Mystox’s advertisers may also assign their own cookies to the User's browser (if the User clicks on their ad banners), a process that Mystox does not control.</p>
     <p>Mystox's web servers automatically collect limited information about User's computer's connection to the Internet, including User's IP address, when the User visits the Platform. (User's IP address is a number that lets computers attached to the Internet know where to send data to the User -- such as the web pages viewed by the User). The User's IP address does not identify the User personally. Mystox uses this information to deliver its web pages to Users upon request, to tailor its Platform to the interests of its users, to measure traffic within the Platform and let advertisers know the geographic locations from where Mystox's visitors come.</p>
   
     </div>
         <div>
     <div class="heading">4. Links
 </div>
     <p>Mystox also includes links to other websites. Such websites are governed by their respective privacy policies, which are beyond Mystox's control. Once the User leaves Mystox's servers (the User can tell where he/she is by checking the URL in the location bar on the User's browser), use of any information provided by the User is governed by the privacy policy of the operator of the site which the User is visiting. That policy may differ from Mystox's own. If the User can't find the privacy policy of any of these sites via a link from the site's homepage, the User may contact the site directly for more information. Mystox is not responsible for the privacy practices or the content of such websites.</p>
     <p></p>
   
     </div>
         <div>
     <div class="heading">5. Security</div>
     <p>All information gathered on Mystox is securely stored within Mystox- controlled database. The database is stored on servers secured behind a firewall; access to such servers being password-protected and strictly limited based on need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. Further, any information you include in a posting to the discussion areas will be available to anyone with Internet access. By using the Platform, you understand and agree that your information may be used in or transferred to countries other than India.
 </p>
     <p>Mystox also believes that the internet is an ever-evolving medium. We may periodically review from time to time and change our privacy policy to incorporate such future changes as may be considered appropriate, without any notice to you. Our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be. Any changes to our privacy policy will be posted on this page, so you are always aware of what information we collect, how we use it, how we store it and under what circumstances we disclose it.</p>
     <p>MYSTOX DOES NOT WARRANT THAT THIS PLATFORM, IT’S SERVERS, OR EMAIL SENT BY US OR ON OUR BEHALF ARE VIRUS FREE. MYSTOX WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS PLATFORM, INCLUDING, BUT NOT LIMITED TO COMPENSATORY, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL AND CONSEQUENTIAL DAMAGES, LOSS OF DATA, GOODWILL, BUSINESS OPPORTUNITY, INCOME OR PROFIT, LOSS OF OR DAMAGE TO PROPERTY AND CLAIMS OF THIRD PARTIES. IN NO EVENT WILL MYSTOX BE LIABLE FOR ANY DAMAGES WHATSOEVER IN AN AMOUNT IN EXCESS OF AN AMOUNT OF INR 100.</p>
     </div>
       <div>
     <div class="heading">6. Data
     </div>
     <p>You can delete your profile under Account Details section</p>
     <p>Your personal information may be retained and may continue to be used until: (i) the relevant purposes for the use of your information described in this Privacy Policy are no longer applicable; and (ii) we are no longer required by applicable law, regulations, contractual obligations or legitimate business purposes to retain your personal information and the retention of your personal information is not required for the establishment, exercise or defense of any legal claim.</p>
     <p></p>
   
     </div>
       <div>
     <div class="heading">7.Applicable law & Jurisdiction</div>
     <p>By visiting this Platform, you agree that the laws of the Republic of India without regard to its conflict of laws principles, govern this Privacy Policy and any dispute arising in respect hereof shall be subject to and governed by the dispute resolution process set out in the Terms & Conditions</p>
     <p></p>
   
     </div>
 
     <div>
     <div class="heading">8. Contact Us</div>
     <p>Email : support@mystox.co.in</p>
     <p>
       Corporate Office :
       Mystox Wealthtech Private Limited,
       HD-035, Wework Prestige,
       80 Feet Main Road Industrial Layout, Koramangala,
       Bengaluru, Karnataka, 560034
     </p>
     </div>
 
   </div>
  )
}

const PolicyData = ()=>{
  return(
    <div>

    <h1>Privacy Policy</h1>
<p>Last updated: October 19, 2023</p>
<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank">Free Privacy Policy Generator</a>.</p>
<h2>Interpretation and Definitions</h2>
<h3>Interpretation</h3>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h3>Definitions</h3>
<p>For the purposes of this Privacy Policy:</p>
<ul>
<li>
<p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
</li>
<li>
<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
</li>
<li>
<p><strong>Application</strong> refers to MyStox, the software program provided by the Company.</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to MyStox wealthtech pvt ltd, Mystox Wealthtech Private Limited, HD-035, Wework Prestige, 80 Feet Main Road Industrial Layout, Koramangala, Bengaluru, Karnataka, 560034.</p>
</li>
<li>
<p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
</li>
<li>
<p><strong>Country</strong> refers to: Karnataka,  India</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
</li>
<li>
<p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Application or the Website or both.</p>
</li>
<li>
<p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
</li>
<li>
<p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
</li>
<li>
<p><strong>Website</strong> refers to MyStox, accessible from <a href="https://www.mystox.co.in" rel="external nofollow noopener" target="_blank">https://www.mystox.co.in</a></p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h2>Collecting and Using Your Personal Data</h2>
<h3>Types of Data Collected</h3>
<h4>Personal Data</h4>
<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
<ul>
<li>
<p>Email address</p>
</li>
<li>
<p>First name and last name</p>
</li>
<li>
<p>Phone number</p>
</li>
<li>
<p>Address, State, Province, ZIP/Postal code, City</p>
</li>
<li>
<p>Usage Data</p>
</li>
</ul>
<h4>Usage Data</h4>
<p>Usage Data is collected automatically when using the Service.</p>
<p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
<h4>Tracking Technologies and Cookies</h4>
<p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
<ul>
<li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
<li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
</ul>
<p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking" target="_blank">Free Privacy Policy website</a> article.</p>
<p>We use both Session and Persistent Cookies for the purposes set out below:</p>
<ul>
<li>
<p><strong>Necessary / Essential Cookies</strong></p>
<p>Type: Session Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
</li>
<li>
<p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
</li>
<li>
<p><strong>Functionality Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
</li>
</ul>
<p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
<h3>Use of Your Personal Data</h3>
<p>The Company may use Personal Data for the following purposes:</p>
<ul>
<li>
<p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
</li>
<li>
<p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
</li>
<li>
<p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
</li>
<li>
<p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
</li>
<li>
<p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
</li>
<li>
<p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
</li>
<li>
<p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
</li>
<li>
<p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
</li>
</ul>
<p>We may share Your personal information in the following situations:</p>
<ul>
<li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
<li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
<li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
<li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
<li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
<li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
</ul>
<h3>Retention of Your Personal Data</h3>
<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
<h3>Transfer of Your Personal Data</h3>
<p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
<h3>Delete Your Personal Data</h3>
<p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
<p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
<p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
<p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
<h3>Disclosure of Your Personal Data</h3>
<h4>Business Transactions</h4>
<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h4>Law enforcement</h4>
<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h4>Other legal requirements</h4>
<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
<ul>
<li>Comply with a legal obligation</li>
<li>Protect and defend the rights or property of the Company</li>
<li>Prevent or investigate possible wrongdoing in connection with the Service</li>
<li>Protect the personal safety of Users of the Service or the public</li>
<li>Protect against legal liability</li>
</ul>
<h3>Security of Your Personal Data</h3>
<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
<h2>Children's Privacy</h2>
<p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
<p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
<h2>Links to Other Websites</h2>
<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
<h2>Changes to this Privacy Policy</h2>
<p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
<p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
<h2>Contact Us</h2>
<p>If you have any questions about this Privacy Policy, You can contact us:</p>
<ul>
<li>By email: support@mystox.co.in</li>
</ul>
</div>

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

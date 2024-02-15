import React from "react";

import "./App.css";
import HeaderAndCarousel from "./HeaderAndCarousel";
import { About } from "./About";
import { LevelsOfPlay } from "./LevelsOfPlay";
import SelectMarketSegment from "./SelectMarketSegment";
import HowToPlay from "./HowToPlay";
import FAQs from "./FAQs";
import Footer from "./Footer";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import PrivacyPolicy from "./policy";
const Main = ()=>{
  return(
  <div>
    <HeaderAndCarousel/>
    <About/>
    <LevelsOfPlay/>
    <SelectMarketSegment/>
    <HowToPlay/>
    <FAQs/>
    <Footer/>
   </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/policy" element={<PrivacyPolicy/>}/>
        <Route path="/privacy-policy/" element={<PrivacyPolicy/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

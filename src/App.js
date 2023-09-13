import React from "react";

import "./App.css";
import HeaderAndCarousel from "./HeaderAndCarousel";
import { About } from "./About";
import { LevelsOfPlay } from "./LevelsOfPlay";
import SelectMarketSegment from "./SelectMarketSegment";
import HowToPlay from "./HowToPlay";
import FAQs from "./FAQs";
import Footer from "./Footer";
function App() {
  return (
   <div>
    <HeaderAndCarousel/>
    <About/>
    <LevelsOfPlay/>
    {/* <SelectMarketSegment/> */}
    <HowToPlay/>
    <FAQs/>
    <Footer/>
   </div>
  );
}

export default App;

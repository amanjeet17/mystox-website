import React, { useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselBG from "./assets/CarouselBG.svg";
import PlayNowButtonImg from "./assets/PlayNowButton.svg";
import Carousel1 from "./assets/pic_1.png";
import Carousel2 from "./assets/Carousel2.svg";
import Carousel3 from "./assets/Carousel3.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
const HeaderAndCarousel = () => {
  const isMobile = window.innerWidth<500

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log("scrollcalled", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onPlayDownload = ()=>{
    console.log('onPlayDownload')
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
     if (userAgent.includes("iPhone") || userAgent.includes("Mac")) {
      window.open(
        "https://apps.apple.com/in/app/mystox-fantasy-stock-gaming/id1668213556",
        '_blank' // <- This is what makes it open in a new window.
      )
   } else {
    window.open(
      "https://play.google.com/store/apps/details?id=com.mystox",
      '_blank' // <- This is what makes it open in a new window.
    )
   }
  }
  useEffect(()=>{
    // onPlayDownload()
  },[])

  const download = ()=>{
    console.log('onPlayDownload')
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
     if (userAgent.includes("iPhone") || userAgent.includes("Mac")) {
      window.open(
        "https://apps.apple.com/in/app/mystox-fantasy-stock-gaming/id1668213556",
        '_blank' // <- This is what makes it open in a new window.
      )
   } else {
    window.open(
      "https://play.google.com/store/apps/details?id=com.mystox",
      '_blank' // <- This is what makes it open in a new window.
    )
   }
  }

  return(
    <>
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><img src={require('./assets/logo.png')}/> </h1>

      <nav id="navbar" class="navbar" style={{display:'none'}}>
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 d-flex flex-column justify-content-center pt-4 pt-lg-0   bg" data-aos="fade-up" data-aos-delay="200">
          <h1>With our Skill based game learn how to enter the world of stock market.</h1>
          <h2>Trade, strategize, and compete with other aspiring traders in a risk-free environment, honing your skills and unleashing your potential to conquer the trading realm.</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" class="btn-get-started scrollto" onClick={download}>Download now</a>
          </div>
        </div>
        <div class="row col-lg-6  col-12 order-1 order-lg-2 " data-aos="zoom-in" data-aos-delay="200" style={{position:'relative'}}>
        <img src={require('./assets/mobile_banner.png')} class="mobile-banner" alt="" width={"100%"} />
         
          <div class="col-12 carousel-img   hero-img bottom-200" data-aos="zoom-in" data-aos-delay="200" style={{position:'relative'}}>
            <img src={require('./assets/main_1.png')} class="absolute  toggle-image1 bottom-0" alt="" width={"80%"} />
            <img src={require('./assets/main_2.png')} class="absolute  toggle-image2 bottom-0" alt="" width={"80%"}/>
            <img src={require('./assets/main_3.png')} class="absolute  toggle-image3 bottom-0" alt=""  width={"80%"}/>
          </div>
        </div>
      
      </div>
    </div>

  </section>
    </>
  )
};

export default HeaderAndCarousel;



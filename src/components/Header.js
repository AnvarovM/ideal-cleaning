// react hooks
import { useState, useRef, useEffect } from "react";

// packages
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap, TweenMax, Power3 } from "gsap";

// import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Header = ({t}) => {
  const router = useRouter();
  let heading = useRef(null);
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  useEffect(() => {
    TweenMax.to(heading, 0.8, { opacity: 1, y: -20, ease: Power3.easeOut });
    console.log(heading);
  }, []);

  return (
    <header className="relative">
      {/* <Navbar /> */}

      <div className="cursor-move">
        <Slider {...settings}>
          <div className="relative border-transparent">
            <div className="carousel-bg-opacity" />
            <img
              className="carousel--image"
              src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/919de9a5f1ec66520ff115a407e70088/cfc45c5d-354c-439e-aba6-588334726bed_rw_1920.png?h=7457744d92c19c1164049879edea5cda"
            />
            <img
              className="carousel--image-sm"
              src="/static/img/carousel-sm-1.png"
              alt="carousel-image"
            />
            <div className="carousel--content-div">
            <div className="carousel-bg-opacity" />
              <h1 ref={(el) => (heading = el)} className="carousel--content-h1">
              {t("home:header_slider1")}
              </h1>
              <button
                onClick={() => router.push("/contact")}
                className="carousel--content-btn"
              >
                {t("home:header_aloqa_btn")}
              </button>
            </div>
          </div>
          <div className="relative border-transparent">
          <div className="carousel-bg-opacity" />
            <img
              className="carousel--image"
              src="https://www.dectar.com/images/cleaning/cleaning_banner.png"
              alt="carousel-image"
            />
            <img
              className="carousel--image-sm"
              src="/static/img/carousel-sm-2.png"
              alt="carousel-image"
            />
            <div className="carousel--content-div">
              <h1 ref={(el) => (heading = el)} className="carousel--content-h1">
                {t("home:header_slider2")}
              </h1>
              <button
                onClick={() => router.push("/contact")}
                className="carousel--content-btn"
              >
                {t("home:header_aloqa_btn")}
              </button>
            </div>
          </div>
          <div className="relative border-transparent">
          <div className="carousel-bg-opacity" />
            <img
              className="carousel--image"
              src="https://praniefiran.pl/wp-content/uploads/2018/02/tlo.png"
              alt="carousel-image"
            />
            <img
              className="carousel--image-sm"
              src="/static/img/carousel-sm-3.png"
              alt="carousel-image"
            />
            <div className="carousel--content-div">
              <h1 ref={(el) => (heading = el)} className="carousel--content-h1">
              {t("home:header_slider3")}
              </h1>
              <button
                onClick={() => router.push("/contact")}
                className="carousel--content-btn"
              >
                {t("home:header_aloqa_btn")}
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";



import bannerImg from "../../public/images/banner/banner-image-03.png";
import separator from "../../public/images/separator/separator-top.svg";

const heroStyle = {
  position: 'absolute',
  display: 'flex',
  height: '100vh',
  width: '100vw',
  zIndex: '-100',
};

const Home = () => {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/hero/waves.js'; // Adjust the path based on your public folder structure
    script.async = false;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1" style={{ height: '100vh' }}>
        <div className="hero-background-animation" style={heroStyle}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--60">
                <h1 className="title display-one">
                  Verify Information Fast<br />With{" "}<br />
                  <span className="theme-gradient">Inter-Link AI</span>
                </h1>
                <p className="b1 desc-text">
                  AI Information Integrity for Industries.
                </p>
                <div className="button-group">
                  <Link
                    className="btn-default btn-large"
                    href="#product-reveal"
                  >
                    <div className="has-bg-light"></div>
                    <span>Discover</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aisquare-separator has-position-bottom">
          <Image className="w-100" src={separator} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;

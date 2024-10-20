import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const [imgKey, setImgKey] = useState(Date.now());

useEffect(() => {
  const timeout = setTimeout(() => {
    setImgKey(Date.now());
  }, 100); // 100 ms delay

  return () => clearTimeout(timeout); // Clean up the timeout
}, [introdata.your_img_url]);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <link rel="preload" href={introdata.your_img_url} as="image" />
        </Helmet>

        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="h_bg-image order-1 order-lg-2 h-100 relative">
            <img
              key={imgKey} // Use imgKey here to force reload
              src={introdata.your_img_url}
              className="absolute w-full h-full top-0 left-0 object-cover object-top"
              alt="Intro"
              loading="eager"
            />
          </div>

          {/* Intro text */}
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-2.5">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-2.5">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-4">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

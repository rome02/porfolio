import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const Portfolio = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {});

    const scrollToPosition = (element, targetPosition, duration) => {
      const startPosition = element.scrollTop;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const scrollStep = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Cap progress at 1
        element.scrollTop = startPosition + distance * easeInOutCubic(progress); // Use easing

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollStep);
        }
      };

      requestAnimationFrame(scrollStep);
    };

    // Easing function for smooth scroll
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const handleMouseEnter = (e) => {
      const target = e.currentTarget;
      const activeImage = target.querySelector("img");
      if (activeImage) {
        const activeImageHeight = activeImage.offsetHeight;
        const containerHeight = target.offsetHeight;
        const maxScroll = activeImageHeight - containerHeight;

        if (maxScroll > 0) {
          scrollToPosition(target, maxScroll, 4000); // Slow scroll in 4 seconds
        }
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.currentTarget;
      scrollToPosition(target, 0, 4000); // Slow scroll back to top in 4 seconds
    };

    // Attach event listeners for scrollable_Img inside wrapper-mac
    const macImages = document.querySelectorAll(".wrapper-mac .scrollable_Img");
    macImages.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Attach event listeners for scrollable_Img inside wrapper-mobile
    const mobileImages = document.querySelectorAll(".wrapper-mobile .scrollable_Img");
    mobileImages.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      macImages.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      mobileImages.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 md:!mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-2 md:!mb-4"> Portfolio </h1>
            <hr className="t_border my-2 md:!my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="pb-[60px]">
          <div className="project-wrapper w-full flex gap-x-[1%] lg:gap-x-[2%] flex-wrap">
            {dataportfolio.map((data, i) => (
              <div key={i} className="group each-project w-[49%] lg:w-[31%] relative lg:mb-[4%] mb-[2%]">
                <div className="h-0 pb-[130%] relative overflow-hidden rounded-md">
                  <img className="absolute w-full left-0 object-cover" src={data.img} alt={data.title} />
                </div>
                <button
                  data-fancybox
                  data-src={`#${data.title}`}
                  data-caption={`<span class='sm:mb-0 mb-4 flex sm:flex-row flex-col font-light sm:gap-[10px] gap-[5px] text-center'><div class='font-bold uppercase'>Owner: </div>${data.title}</span>
                  <span class='sm:mb-0 mb-4 flex sm:flex-row flex-col font-light sm:gap-[10px] gap-[5px] text-center'><div class='font-bold uppercase'>Owner: </div>Roya.com</span>
                  <span class='sm:mb-0 mb-6 flex sm:flex-row flex-col font-light sm:gap-[10px] gap-[5px] text-center'><div class='font-bold uppercase'>Design by: </div>Joanne Panaligan, Creative Director</span>`}

                  className="absolute bottom-4 right-4 group-hover:scale-100 scale-0 transition-transform duration-300 ease-in-out bg-transparent border-0 p-0 z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-10 lg:h-10 w-5 h-5"
                    fill="#fff"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                    />
                  </svg>
                </button>

                <div className="build-wrapper hidden" id={data.title}>
                  <div className="block-wrapper flex justify-center items-center">
                    <div className="block-gadget max-w-[1024px] w-[90%]">
                      <div className="wrapper-mac">
                        <img src="./images/blank-macbook.png" alt="Macbook" />
                        <div className="photo absolute">
                          <div className="scrollable_Img">
                            <img className="absolute w-full left-0 object-cover" src={data.img} alt={data.title} />
                          </div>
                        </div>
                      </div>
                      <div className="wrapper-mobile">
                        <img src="./images/blank-mobile-new.png" alt="Mobile" />
                        <div className="photo absolute">
                          <div className="scrollable_Img">
                            <img className="absolute w-full left-0 object-cover" src={data.imgMobile} alt={data.title} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};

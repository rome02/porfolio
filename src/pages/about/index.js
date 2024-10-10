import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
  workExperience,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 md:!mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 md:!mb-4 mb-2">About me</h1>
            <hr className="t_border md:!my-4 my-2 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 uppercase text-base md:text-lg">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p class="text-sm md:text-base">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 uppercase text-base md:text-lg">Experience</h3>
          </Col>
          <Col lg="7">
            {workExperience.map((data, i) => {
              return (
                <div className="py-4" key={i}>
                  <h4 className="text-base md:text-lg">{data.companyName}</h4>
                  <h5 className="text-xs md:text-sm pb-2 mb-2 border-b italic font-light opacity-70">{data.title}</h5>
                  <p className="text-sm md:text-base font-light">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 uppercase text-base md:text-lg">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h4 className="text-base md:text-lg !font-light">{data.name}</h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        
      </Container>
    </HelmetProvider>
  );
};

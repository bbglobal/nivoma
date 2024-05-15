import "./style.css";
import { MyAccording } from "../../../components";
import { Container, Row, Col } from "react-bootstrap";
import hero from './img/hero.webp'

import React from "react";

const Karriereinsight = () => {
  return (
    <main className="karriereinsight">
      <section className="kar-sec-hero">
        <Container className="karriereinsight-container">
          <Row>
            <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
              <p className="pb-5">Beschwerdenmanagement</p>
              <h1>Ihre Zufriedenheit <br /> ist uns Wichtig</h1>
              <p>
                Beschwerden werden ernst genommen und kostenlos untersucht.
                Bitte fügen Sie Ihrer Korrespondenz alle relevanten
                Informationen hinzu. Wir werden Ihr Anliegen schnellstmöglich
                bearbeiten und Sie über den Fortschritt informieren. Bei
                Unzufriedenheit wenden Sie sich bitte an uns unter
              </p>
              <div className="kar-hero-mail-wrapper">
                <a href="mailto:dach-beschwerden@nivoma-solar.de">dach-beschwerden@nivoma-solar.de </a>(für den DACH-Raum) <br />
                <a href="mailto:usa-beschwerden@nivoma-solar.de">usa-beschwerden@nivoma-solar.de </a>(für die USA).
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="kar-hero-img-wrapper">
                <img src={hero} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <MyAccording />
    </main>
  );
};

export default Karriereinsight;

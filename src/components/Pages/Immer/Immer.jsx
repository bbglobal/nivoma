import "./immer.css";
import heroVideo from "../../Pages/Home/img/hero.mp4";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rectangle from "./image/Rectangle.jpg";

const Immer = () => {
  return (
    <main id="immer">
      <section className="hero-wrapper">
        <video
          src={heroVideo}
          className="hero-video"
          autoPlay
          muted
          loop
        ></video>
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={8} lg={6}>
              <div className="hero-txt">
                <h1>
                  Immer auf dem
                  <br />
                  <strong>Neusten Stand,</strong>
                </h1>
                <p>Folgen Sie unserem Blog, um stets über die neuesten </p>
                <p>Trends, Technologien und Projekte informiert zu bleiben.</p>
                <p>Erhalten Sie exklusive Einblicke.</p>

                <div className="d-flex flex-wrap align-items-center">
                  <button className="btn-nivoma-yellow">
                    Dachfläche verpachten
                  </button>
                  <button className="btn-outline-nivoma my-3 mx-3">
                    Freifläche verpachten
                  </button>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={4} lg={6}>
              {/* Second column content */}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-two">
        <Container fluid>
          <Row>
            <Col xs="12" sm="12" md="12" lg="6" style={{ margin: "auto" }}>
              <div className="sec-two-img-wrapper">
                <img src={Rectangle} alt="image" />{" "}
                {/* Use Rectangle as the image source */}
              </div>
            </Col>

            <Col xs="12" sm="12" md="12" lg="6" style={{ margin: "auto" }}>
              <div className="sec-two-txt-wrapper">
                <p>JETZT VERGLEICHEN</p>
                <h2>
                  Profitieren Sie von Ihrer <br />
                  <strong>ungenutzten Fläche</strong>
                </h2>
                <p>
                  Mit NIVOMA entdecken Sie die besten Angebote für Ihre Flächen
                  und <br /> maximieren Ihre Einnahmen.{" "}
                </p>
                <ul>
                  <li>Mieteinnahmen ohne Aufwand</li>
                  <li>Geld sparen ohne Anschaffungskosten</li>
                  <li>Strom kostengünstiger selbst beziehen</li>
                </ul>

                <button className="btn-nivoma">
                  Kostenloses Beratungsgespräch
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Immer;

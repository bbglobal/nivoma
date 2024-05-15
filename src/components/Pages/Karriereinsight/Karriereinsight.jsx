import "./style.css";
import { MyAccording } from "../../../components";
import { Container, Row, Col } from "react-bootstrap";
import nivoma from './img/nivoma.jpg'

import React from "react";

const Karriereinsight = () => {
  return (
    <main id="karriereinsight">
      <section className="kar-sec-hero">
        <Container fluid className="karriereinsight-container">
          <Row>
            <Col>
              <p>Beschwerdenmanagement</p>
              <h1>Ihre Zufriedenheit ist uns Wichtig</h1>
              <p>
                Beschwerden werden ernst genommen und kostenlos untersucht.
                Bitte fügen Sie Ihrer Korrespondenz alle relevanten
                Informationen hinzu. Wir werden Ihr Anliegen schnellstmöglich
                bearbeiten und Sie über den Fortschritt informieren. Bei
                Unzufriedenheit wenden Sie sich bitte an uns unter
              </p>
            </Col>
            <Col>
           <img src={nivoma} alt="image" />
            </Col>
          </Row>
        </Container>
      </section>
      <MyAccording />
    </main>
  );
};

export default Karriereinsight;

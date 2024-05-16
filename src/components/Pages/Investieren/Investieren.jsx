import "./style.css";
import { SliderTwo } from "../../../components";
import { Container, Row, Col } from "react-bootstrap";

const Investieren = () => {
  return (
    <main className="inverstieren">
      <section className="hero-wrapper">
        <Container fluid>
          <Row>
            <Col>
              <div className="invers-txt-wrapper">
                <h1>Immer auf dem Neusten Stand</h1>
              </div>
            </Col>
            <Col>
              <div className="invers-txt-wrapper">
                <h1>Immer auf dem Neusten Stand</h1>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>

      <SliderTwo />
    </main>
  );
};

export default Investieren;

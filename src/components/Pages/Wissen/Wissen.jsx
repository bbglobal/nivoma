import block from "./images/Block.jpg";
import eye from "../../assets/icons/eye.svg";
import thumb from "../../assets/icons/thumb.svg";
import { Container, Row, Col, } from "react-bootstrap";
import {BlogSlider, MyAccording, MyBanner} from "../../../components";
import "./wissen.css";

const Wissen = () => {
  return (
    <>
      <main className="wissen">
        <section className="wissen-hero">
          <h1>Immer auf dem neusten Stand - mit NIVOMA</h1>
        </section>

        <section className="sec-two">
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <img src={block} alt="image" style={{ width: "100%" }} />
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <h2>Die Solarwende hat Begonnen in der Schweiz</h2>
                <br />
                <p>
                  Die Solarbranche unterliegt kontinuierlichen Entwicklungen, daher <br /> legen wir großen Wert darauf, dass unsere Kunden und Interessenten <br /> stets über die neuesten <br /> <br /> Lorem ipsum sit dolor .
                </p>
                <br />
                <div className="sec-two-views-wrapper">
                  <div className="views">
                    <button>
                      <img src={eye} alt="icon" />
                    </button>
                    5K Views
                  </div>
                  <div className="likes">
                    <button>
                      <img src={thumb} alt="icon" />
                    </button>
                    121 Likes
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="sec-three">
          <Container fluid>
            <Row>
              <Col>
                <p>
                  Die Solarwende markiert einen entscheidenden Wendepunkt in der
                  Energieversorgung der Schweiz. Sie symbolisiert nicht nur den
                  Übergang von traditionellen, fossilbasierten Energiequellen zu
                  erneuerbaren Alternativen, sondern auch einen tiefgreifenden Wandel
                  in der gesamten Energiewirtschaft des Landes. Diese Entwicklung wird
                  von einer Vielzahl von Faktoren vorangetrieben, darunter das
                  steigende Umweltbewusstsein, die fortschreitende technologische
                  Entwicklung und die politische Unterstützung für nachhaltige
                  Energiesysteme.
                </p>
                <p>
                  Immer mehr Unternehmen und Haushalte in der Schweiz erkennen die
                  Vorteile der Solarenergie und investieren aktiv in Solaranlagen.
                  Diese Anlagen bieten nicht nur eine umweltfreundliche Energiequelle,
                  sondern auch die Möglichkeit, die Energiekosten langfristig zu
                  senken und unabhängiger von konventionellen Energieversorgern zu
                  werden.
                </p>

                <p>
                  Darüber hinaus tragen sie zur Reduzierung der Treibhausgasemissionen
                  bei und leisten somit einen wichtigen Beitrag zum Klimaschutz. Die
                  Schweiz verfügt über ein günstiges Umfeld für die Entwicklung von
                  Solarenergieprojekten, das durch eine Vielzahl von staatlichen
                  Förderprogrammen und Anreizen unterstützt wird. Diese Programme
                  bieten finanzielle Unterstützung für die Installation von
                  Solaranlagen sowie Anreize für den Eigenverbrauch und die
                  Einspeisung von überschüssigem Strom ins Netz. Dadurch werden
                  Investitionen in Solarenergie attraktiver und tragen zur
                  Beschleunigung des Ausbaus erneuerbarer Energien bei.
                </p>

                <p>
                  Diesteigende Akzeptanz und Verbreitung von Solarenergie in der
                  Schweiz wird auch durch eine zunehmende Anzahl von Initiativen und
                  Projekten im Bereich der erneuerbaren Energien unterstrichen. Von
                  lokalen Gemeinden bis hin zu großen Energieunternehmen setzen sich
                  immer mehr Akteure aktiv für den Ausbau der Solarenergie ein und
                  treiben die Energiewende voran.
                </p>

                <p>
                  Insgesamt stellt die Solarwende in der Schweiz einen wichtigen
                  Schritt in Richtung einer nachhaltigen und umweltfreundlichen
                  Energiezukunft dar. Sie zeigt, dass die Schweiz entschlossen ist,
                  die Herausforderungen des Klimawandels anzugehen und eine saubere
                  Energieversorgung für zukünftige Generationen zu gewährleisten.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

       <BlogSlider />

        <MyBanner />

        <MyAccording />

      </main>
    </>
  );
};

export default Wissen;

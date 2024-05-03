import { ImImages } from "react-icons/im";
import block from "./images/Block.jpg";
import { Container, Row, Col,Accordion } from "react-bootstrap";
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
                <img src={block} alt="Block.jpg" />
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <h2>Die Solarwende hat Begonnen in der Schweiz</h2>
                <p>
                  Die Solarbranche unterliegt kontinuierlichen Entwicklungen,
                  daher legen wir großen Wert darauf, dass unsere Kunden und
                  Interessenten stets über die neuesten
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="sec-three">
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
        </section>

        <section className="section-seven">
          <h2>Jetzt vergleichen & sparen</h2>
          <p>
            Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch,
            damit <br />
            wir Ihre Fläche genau analysieren können.
          </p>
          <button className="btn-nivoma d-block">Dachfläche verpachten</button>
        </section>


        <section className="section-eight">
                    <Container fluid>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="4">
                                <div className="sec-eight-txt-wrapper">
                                    <h3 className='my-5'>Häufig gestellte Fragen</h3>

                                    <h4 className='active my-3'>Verpachten</h4>
                                    <h4 className='my-3'>Investieren</h4>
                                    <h4 className='my-3'>Projekte</h4>
                                    <h4 className='my-3'>Technologie</h4>
                                    <h4 className='my-3'>Umwelt</h4>
                                </div>
                            </Col>

                            <Col xs="12" sm="12" md="12" lg="8">
                                <div className="sec-eight-acc-wrapper">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Welche Vorteile bietet die Solarverpachtung mit NIVOMA?</Accordion.Header>
                                            <Accordion.Body>
                                                Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen <br />
                                                erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen <br />
                                                sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen <br />
                                                der Solarenergie profitieren können.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Wie funktioniert die Solarverpachtung mit NIVOMA?</Accordion.Header>
                                            <Accordion.Body>
                                                Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen <br />
                                                erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen <br />
                                                sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen <br />
                                                der Solarenergie profitieren können.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Welche Voraussetzungen muss mein Grundstück erfüllen?</Accordion.Header>
                                            <Accordion.Body>
                                                Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen <br />
                                                erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen <br />
                                                sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen <br />
                                                der Solarenergie profitieren können.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Welche Rolle spielt NIVOMA bei der Solarverpachtung?</Accordion.Header>
                                            <Accordion.Body>
                                                Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen <br />
                                                erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen <br />
                                                sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen <br />
                                                der Solarenergie profitieren können.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>






        
      </main>
    </>
  );
};

export default Wissen;

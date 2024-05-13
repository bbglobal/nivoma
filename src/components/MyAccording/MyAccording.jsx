import './style.css'
import { Container, Row, Col, Accordion } from "react-bootstrap"

const MyAccording = () => {
    return (
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
    )
}

export default MyAccording
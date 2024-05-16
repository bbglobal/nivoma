import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import rectangle from './img/Rectangle.webp'

const InvestierenOne = () => {
    return (
        <main>
            <section className='inver-one-hero-sec'>
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="8" lg="6">
                            <div className="hero-txt">
                                <h1>Immer auf dem  <br />
                                    <strong>nachhaltige Investitionen</strong>
                                </h1>
                                <p>Folgen Sie unserem Blog, um stets über die neuesten Trends, Technologien und Projekte informiert zu bleiben. Erhalten Sie exklusive Einblicke.</p>

                                <div className="d-flex flex-wrap align-items-center">
                                    <button className="btn-nivoma-yellow">Dachfläche verpachten</button>
                                    <button className="btn-outline-nivoma my-3 mx-3">Freifläche verpachten</button>
                                </div>
                            </div>
                        </Col>

                        <Col xs="12" sm="12" md="4" lg="6">
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='inver-one-sec-two'>
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="8" lg="6" style={{margin: "auto"}}>
                            <div className="inver-one-txt-wrapper">
                                <h2>Solar-Newsletter:
                                    <strong>Sonnige Aussichten</strong>
                                </h2>

                                <p>rlichen Entwicklungen, daher legen wir großen Wert darauf, dass unsere Kunden und InteressDie Solarbranche unterliegt kontinuieenten stets über die neuesten Entwicklungen informiert sind. Uns ist es zudem ein Anliegen, Ihnen die Informationen verständlich und leicht nachvollziehbar zu präsentieren.

                                Bei Fragen stehen wir Ihnen jederzeit zur Verfügung und freuen uns auf den Kontakt mit Ihnen.</p>

                                <button className='btn-nivoma'>Brochure herunterladen <i className="arrow"></i> </button>
                            </div>
                        </Col>

                        <Col xs="12" sm="12" md="4" lg="6">
                            <img src={rectangle} alt="image" style={{maxWidth: "100%"}}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default InvestierenOne
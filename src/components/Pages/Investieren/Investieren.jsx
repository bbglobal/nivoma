import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Bullets, Gallery, MyAccording, SliderTwo, SlideTwo, Table } from '../../../components'

const Investieren = () => {
    return (
        <main className='investieren'>
            <section className='inver-hero-sec'>
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="8" lg="6">
                            <div className="hero-txt">
                                <h1>WSichere Renditen -  <br />
                                    nachhaltige Investitionen
                                </h1>
                                <p>Befreien Sie sich von den unsicheren Kapitalmärkten, indem Sie in sofort <br />
                                    einsatzbereite Solaranlagen investieren. Auf diese Weise erwerben Sie <br />
                                    Produktivkapital, das zahlreiche steuerliche Gestaltungsmöglichkeiten <br />
                                    bietet und stetig an Wert gewinnt.</p>

                                <div className="d-flex flex-wrap align-items-center">
                                    <button className="btn-nivoma-yellow">Freifläche verpachten</button>
                                    <button className="btn-outline-nivoma my-3 mx-3">Freifläche verpachten</button>
                                </div>
                            </div>
                        </Col>

                        <Col xs="12" sm="12" md="4" lg="6">
                        </Col>
                    </Row>
                </Container>
            </section>

            <Bullets />

            <Gallery />

            <Table />

            <SlideTwo
                title="Investieren Sie in eine nachhaltige Zukunft"

                p="Unsere Solarprojekte zeichnen sich durch ihre Wirtschaftlichkeit, Stabilität und Umweltfreundlichkeit aus. Durch langfristige Pachtverträge mit zuverlässigen Partnern und professionelles Management gewährleisten wir attraktive Renditen für unsere Investoren."

                pTwo="Mit unseren skalierbaren Investitionsmöglichkeiten können Sie Ihr Portfolio diversifizieren und in Projekte unterschiedlicher Größenordnung investieren. Egal, ob Sie ein erfahrener Investor oder ein Neuling auf dem Gebiet der erneuerbaren Energien sind, wir bieten Ihnen die Unterstützung und Expertise, um Ihre Anlageziele zu erreichen."

                img="inver-sl-img"
            />

            <section className="section-four mt-5">
                <Container>
                    <SliderTwo />
                </Container>
            </section>

            <Container>
                <MyAccording />
            </Container>
        </main>
    )
}

export default Investieren
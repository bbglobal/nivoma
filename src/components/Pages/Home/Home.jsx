import './home.css'
import heroVideo from './img/hero.mp4'
import pregnanatWoment from './img/pregnant-women-with-girl.png'
import { Container, Row, Col } from "react-bootstrap"

import { SliderProgressBar, SliderTwo, MyAccording, MyBanner, IconBox, TeamSlider, Testimonial } from '../../../components'

const Home = () => {

    return (
        <>
            <main id="home">

                <section className="hero-wrapper">
                    <video src={heroVideo} className="hero-video" autoPlay muted loop></video>
                    <Container fluid>
                        <Row>
                            <Col xs="12" sm="12" md="8" lg="6">
                                <div className="hero-txt">
                                    <h1>Wir vergleichen, <br />
                                        <strong>Sie entscheiden</strong>
                                    </h1>
                                    <p>Wir analysieren sorgfältig eine Vielzahl von Faktoren und</p>
                                    <p>präsentieren Ihnen die besten Optionen, die Ihren</p>
                                    <p>Anforderungen entsprechen.</p>

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

                <section className="section-two">
                    <Container fluid>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="6" style={{ margin: "auto" }}>
                                <div className="sec-two-img-wrapper">
                                    <img src={pregnanatWoment} alt="image" />
                                </div>
                            </Col>

                            <Col xs="12" sm="12" md="12" lg="6" style={{ margin: "auto" }}>
                                <div className="sec-two-txt-wrapper">
                                    <p>JETZT VERGLEICHEN</p>
                                    <h2>Profitieren Sie von Ihrer <br />
                                        <strong>ungenutzten Fläche</strong>
                                    </h2>
                                    <p>Mit NIVOMA entdecken Sie die besten Angebote für Ihre Flächen und <br /> maximieren Ihre Einnahmen. </p>
                                    <ul>
                                        <li>
                                            Mieteinnahmen ohne Aufwand
                                        </li>
                                        <li>
                                            Geld sparen ohne Anschaffungskosten
                                        </li>
                                        <li>
                                            Strom kostengünstiger selbst beziehen
                                        </li>
                                    </ul>

                                    <button className='btn-nivoma'>Kostenloses Beratungsgespräch</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <SliderProgressBar />

                <section className="section-four">
                    <SliderTwo />
                    <IconBox />
                </section>

                <Testimonial />

                <section className='section-two'>
                    <TeamSlider />
                </section>

                <MyBanner />

                <MyAccording />

            </main >
        </>
    )
}

export default Home
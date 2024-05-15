import "./uberuns.css"
import { Container, Row, Col } from 'react-bootstrap'
import uberVideo from '../Home/img/hero.mp4'
import poster from './img/poster.webp'
import rating from './img/rating.webp'
import indIcon from './img/independence.svg'
import shapeIcon from './img/shape.svg'
import tradeIcon from './img/trade.svg'
import personalIcon from './img/personal-data.svg'

import { SliderProgressBar, SliderTwo, MyAccording, MyBanner, IconBox } from '../../../components'

const Uberuns = () => {
    return (
        <>
            <main className="uberuns">

                <section className="uberuns-hero-wrapper">
                    <div className="uber-txt-wrapper">
                        <h1>
                            Unsere Geschichte - <strong>Die Vision von NIVOMA</strong>
                        </h1>
                    </div>
                    <div className="uber-video-wrapper">
                        <video src={uberVideo} poster={poster}></video>
                    </div>
                </section>

                <section className="uber-sec-two-wrapper">
                    <Container fluid>
                        <Row>
                            <Col sx={12} sm={12} md={12} lg={6}>
                                <div className="user-sec-two-txt-wrapper">
                                    <h2>Das Konzept hinter <br /> <strong>Unserem Unternehmen</strong> </h2>

                                    <p>Nivoma wurde aus einer klaren Vision heraus gegründet: Unser Ziel war es eine Welt zu schaffen, in der jeder Eigentümer von ungenutzten Flächen die Möglichkeit hat, aktiv zur nachhaltigen Energieerzeugung beizutragen und gleichzeitig davon zu profitieren. Ausgehend von diesem Gedanken haben wir uns zur Aufgabe gesetzt, den Prozess der Solarenergieverpachtung so einfach und effizient wie möglich zu gestalten. Wir glauben fest daran, dass die direkte Kommunikation mit unseren Kunden uns hilft, ihre individuellen Bedürfnisse und Anforderungen besser zu verstehen. Durch diese persönliche Betreuung können wir maßgeschneiderte Lösungen entwickeln, die genau auf die Bedürfnisse unserer Kunden zugeschnitten sind. Unsere Beratung bietet eine transparente und unkomplizierte Lösung für die Verpachtung von Flächen für Solarenergieprojekte.</p>

                                    <h3>Baumgärtner & .Markovic</h3>
                                </div>
                            </Col>

                            <Col xs="12" sm="12" md="12" lg="6">
                                <div className="uber-sec-two-blank-wrapper">
                                    <div className="uber-sec-two-inner">
                                        <div className="uber-sec-two-txt">
                                            <p>Niklas Baumgärtner</p>
                                            <p>Gründer & Geschäftsführer</p>
                                        </div>
                                    </div>

                                    <div className="uber-sec-two-inner">
                                        <div className="uber-sec-two-txt">
                                            <p>Niklas Baumgärtner</p>
                                            <p>Gründer & Geschäftsführer</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section-seven">
                    <h2>Wir sind stolz auf unsere Berater</h2>
                    <div className="rating">
                        <div>
                            <img src={rating} alt="ratting" />
                        </div>
                        <p className="rat-num">
                            4.9
                        </p>
                    </div>
                    <button className='btn-nivoma d-block'>Jetzt bewerben</button>
                </section>

                <section className="uber-sec-four-wrapper">
                    <div className="uber-sec-head-txt-wrapper">
                        <small className="uber-sm">Unser team</small>
                        <h2>38 Berater in 4 Ländern <br /> Ihr Partner vor Ort</h2>
                    </div>

                    <div className="uber-sec-four-gallery-wrapper">
                        <div className="one bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Michael Jenkowitz</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="two bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="three bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="four bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Michael Jenkowitz</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="five bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="six bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="seven bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Michael Jenkowitz</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="eight bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="nine bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="seven bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Michael Jenkowitz</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="eight bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="nine bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="seven bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Michael Jenkowitz</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="eight bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="nine bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="seven bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Michael Jenkowitz</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="eight bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="nine bg">
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="uber-sec-five-wrapper">
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={4}>
                                <div className="uber-sec-five-txt-wrapper">
                                    <h2>Die Vorteile <br /> <strong>im Überblick</strong></h2>
                                    <p>Warum sollten Sie sich dafür entscheiden, eine externe Beratungsfirma für Ihr Solarprojekt zu beauftragen – und das auch noch komplett kostenlos für Sie! Hier erhalten Sie eine prägnante Übersicht.</p>
                                    <div className="uber-btn-wrapper">
                                        <button className="btn-nivoma">
                                            Unsere Anlageprojekte
                                        </button>
                                        <button className="btn-outline-nivoma">
                                            Verpächter werden
                                        </button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={12} lg={12} xl={4}>
                                <div className="uber-sec-five-box-wrapper">
                                    <div className="uber-sec-five-box-icon">
                                        <img src={indIcon} alt="image" />
                                    </div>
                                    <h5>Unabhängige Beratung</h5>
                                    <p>Erhalten Sie von uns eine Zusammenstellung der führenden Solarfirmen sowie eine Einschätzung, welche für Sie am besten geeignet ist.</p>
                                </div>
                                <br />
                                <div className="uber-sec-five-box-wrapper">
                                    <div className="uber-sec-five-box-icon">
                                        <img src={shapeIcon} alt="image" />
                                    </div>
                                    <h5>Professionelle Abwicklung</h5>
                                    <p>Von der Planung bis zur Abnahme der Solaranlage gewährleisten wir eine professionelle Abwicklung aller Schritte.</p>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={12} lg={12} xl={4} className="abnorm">
                                <div className="uber-sec-five-box-wrapper">
                                    <div className="uber-sec-five-box-icon">
                                        <img src={tradeIcon} alt="image" />
                                    </div>
                                    <h5>Verhandlungsunterstützung</h5>
                                    <p>Wir kennen die Möglichkeiten und verhandeln für Sie die optimalen Konditionen aus. Lehnen Sie sich entspannt zurück und sichern Sie sich den bestmöglichen Vertrag..</p>
                                </div>
                                <br />
                                <div className="uber-sec-five-box-wrapper">
                                    <div className="uber-sec-five-box-icon">
                                        <img src={personalIcon} alt="image" />
                                    </div>
                                    <h5>Langfristige Partnerschaft</h5>
                                    <p>Unsere Betreuung geht über die Fertigstellung der Solaranlage hinaus – wir sind auch danach für Sie da.</p>
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

                <MyBanner />

                <MyAccording />

            </main>
        </>
    )
}


export default Uberuns
import "./uberuns.css"
import {Container, Row, Col} from 'react-bootstrap'
import uberVideo from '../Home/img/hero.mp4'
import poster from './img/poster.webp'

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
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}


export default Uberuns
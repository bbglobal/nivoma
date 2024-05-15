import './style.css'
import { Container, Row, Col } from "react-bootstrap"
import leaf from '../assets/icons/plant-leaf-forest-foliage-ecology-svgrepo-com.svg'
import sun from '../assets/icons/sun-svgrepo-com.svg'
import prozess from '../assets/icons/prozess.svg'
import hands from '../assets/icons/hands-holding-svgrepo-com.svg'

const IconBox = () => {
    return (

        <Container fluid>
            <Row>
                <Col xs="12" sm="12" md="6" lg="6">
                    <div className="sec-four-txt-wrapper">
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={leaf} alt="icon" className='d-block' />
                            <p style={{ color: "var(--primary)", margin: "10px" }}>Wirtschaftlichkeit</p>
                        </div>

                        <br />
                        <h6>Investieren Sie in eine nachhaltige Zukunft. </h6>
                        <br />
                        <p>Durch die Verpachtung Ihrer Flächen für Solaranlagen sichern Sie
                            sich eine stabile Einnahmequelle ohne zusätzliche Kosten.
                            Profitieren Sie von einer langfristigen, nachhaltigen Investition, die
                            sowohl ökologisch als auch wirtschaftlich sinnvoll ist. </p>
                    </div>
                </Col>

                <Col xs="12" sm="12" md="6" lg="6">
                    <div className="sec-four-txt-wrapper">
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={sun} alt="icon" className='d-block' />
                            <p style={{ color: "var(--primary)", margin: "10px" }}>Nachhaltige Investition</p>
                        </div>

                        <br />
                        <h6>Nachhaltig in Ihre Zukunft investieren </h6>
                        <br />
                        <p>Mit der Nutzung erneuerbarer Energiequellen wie Solarenergie
                            tragen Sie aktiv zum Umweltschutz bei. Unsere Solaranlagen
                            ermöglichen es Ihnen, eine nachhaltige Investition zu tätigen, die
                            nicht nur finanziell lukrativ ist, sondern auch einen positiven Beitrag
                            zum Klimaschutz leistet. </p>
                    </div>
                </Col>

                <Col xs="12" sm="12" md="6" lg="6">
                    <div className="sec-four-txt-wrapper">
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={prozess} alt="icon" className='d-block' />
                            <p style={{ color: "var(--primary)", margin: "10px" }}>Einfacher Prozess</p>
                        </div>

                        <br />
                        <h6>Wir vergleichen - Sie entscheiden  </h6>
                        <br />
                        <p>Wir übernehmen den gesamten Prozess der Suche nach dem
                            passenden Pächter und der Vertragsabwicklung für Sie. Sie müsse
                            sich um nichts kümmern - von der Auswahl des geeigneten Pächters
                            bis zur Unterzeichnung des Vertrags unterstützen wir Sie
                            professionell und sorgen für einen reibungslosen Ablauf.</p>
                    </div>
                </Col>

                <Col xs="12" sm="12" md="6" lg="6">
                    <div className="sec-four-txt-wrapper">
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={hands} alt="icon" className='d-block' />
                            <p style={{ color: "var(--primary)", margin: "10px" }}>Kostenfreiheit</p>
                        </div>

                        <br />
                        <h6>Profitieren ohne Risiko </h6>
                        <br />
                        <p>Profitieren Sie von zusätzlichen Einnahmen, ohne dafür
                            Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere
                            Dienstleistungen sind für Sie als Grundstückseigentümer kostenfrei,
                            sodass Sie ohne finanzielles Risiko von den Vorteilen der
                            Solarverpachtung profitieren können.</p>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default IconBox
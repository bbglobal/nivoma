import './style.css'
import { Container, Row, Col } from "react-bootstrap"
import interview from './img/interview.svg'
import maintenance from './img/maintenance.svg'
import maintenanceTwo from './img/maintenance-2.svg'
import roofTwo from './img/roof-2.svg'
import shovel from './img/shovel.svg'
import urbanPlanning from './img/urban-planning.svg'
import victory from './img/victory.svg'
import ecoEnergy from './img/eco-energy.svg'
import calander from './img/calander.svg'
import connector from './img/connector.svg'
import connect from './img/connect.svg'

const Connector = () => {
    return (
        <section className='connector-wrapper'>

            <Container>
                <div className="con-txt-wrapper">
                    <h2 className='text-center'>Der Ablauf nach Kontaktaufnahme</h2>
                    <br />

                    <p className="text-center">en aufgeführte Liste lediglich eine grobe Übersicht über den Prozess der Freiflächenverpachtung für Solaranlagen darstellt. Es gibt zahlreiche kleine Schritte und Details, die in diesem Überblick nicht explizit aufgefühBitte beachten Sie, dass die obrt sind. Doch seien Sie versichert: Wir kümmern uns um jeden einzelnen dieser Schritte, sodass Sie sich entspannt zurücklehnen können.</p>
                </div>

                <Row className='postion-relative'>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={interview} alt="icon" />
                            </div>
                            <h2>1</h2>
                            <h4>Vollständige Beratung</h4>
                            <p className="text-center">
                                Analyse Ihres Objektes und Fertigstellung eines Beratungsprotokoll mit der Aufführung der passenden Solarfimen
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={shovel} alt="icon" />
                            </div>
                            <h2>2</h2>
                            <h4>Netzanfrage</h4>
                            <p className="text-center">
                                Nach Vorlage aller Unterlagen erstellen wir bei dem zuständigen Verteilnetzbetreiber eine Netzauskunft
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={maintenanceTwo} alt="icon" />
                            </div>
                            <h2>3</h2>
                            <h4>Technische Planung</h4>
                            <p className="text-center">
                                Wir beginnen mit der Planung der Dachbelegung auf der DC-Seite, sowie der AC-Seite
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={calander} alt="icon" />
                            </div>
                            <h2>6</h2>
                            <h4>Planung Montage</h4>
                            <p className="text-center">
                                Nach Vorliegen der Trassengestaltung und Eintragung der Dienstbarkeit planen wir das Bauteam ein
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={urbanPlanning} alt="icon" />
                            </div>
                            <h2>5</h2>
                            <h4>Grundbucheintrag</h4>
                            <p className="text-center">
                                Es wird eine erstrangige Dienstbarkeit von Ihnen beurkundet, falls Grundschulden eingetragen sind
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={ecoEnergy} alt="icon" />
                            </div>
                            <h2>4</h2>
                            <h4>Sicherung der Stromtrasse</h4>
                            <p className="text-center">
                                Nach positiver Planung beginnen wir mit der Sicherung der Stromtrasse bis zum Netzverknüpfungspunkt
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={roofTwo} alt="icon" />
                            </div>
                            <h2>7</h2>
                            <h4>Dachsanierung</h4>
                            <p className="text-center">
                                Beginn der Dachhautsanierung, Demontage samt Entsorgung der alten Dachhaut und die Montage einer neuen Dachhaut
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={victory} alt="icon" />
                            </div>
                            <h2>8</h2>
                            <h4>Fertigstellung & Abnahme</h4>
                            <p className="text-center">
                                Fertigstellung und Abnahme der Dachhautsanierung und PV-Anlage, sowie die Anzeige an den Netzbetreiber für den Netzanschluss
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "5rem 0 " }}>
                        <div className="conn-sec-wrapper">
                            <div className="con-icon-wrapper">
                                <img src={maintenance} alt="icon" />
                            </div>
                            <h2>9</h2>
                            <h4>Weitere Betreuung & Wartung</h4>
                            <p className="text-center">
                                Nach der Ferstigstellung erhalten Sie weiterhin eine intensive Betreuung, sowie die ständige Wartung der Solaranlage
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Connector
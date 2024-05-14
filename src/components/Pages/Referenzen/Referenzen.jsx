import './style.css'
import slideOne from "./img/slide1.webp"
import slideTwo from "./img/slide2.webp"
import slideThree from "./img/slide3.webp"
import slideFour from "./img/slide4.webp"
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MyAccording } from '../../../components'

const Referenzen = () => {
    return (
        <>
            <main className='referenzen'>

                <section className="ref-sec-hero">
                    <Swiper
                        direction={'vertical'}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">

                        <SwiperSlide>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <img src={slideOne} alt="hero image" width={{ width: "100%" }} />
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
                                        <h2>Unsere Projekte <br /> in Deutschland</h2>
                                        <p>Die auf unserer Website dargestellten Projektstandorte sind ungefähre Angaben und können aufgrund der räumlichen Nähe einiger Projekte überlappen oder nicht exakt wiedergegeben werden. Wir bemühen uns um Genauigkeit, können jedoch keine absolute Präzision garantieren.</p>

                                        <p className='time'>Letzte Aktualisierung: 05.05.2024.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
                                        <h2>Unsere Projekte <br /> in Österreich</h2>
                                        <p>Unsere Projekte in Österreich sind darauf ausgerichtet, die Solarenergieinfrastruktur des Landes zu stärken und nachhaltige Energielösungen voranzutreiben. Wir arbeiten eng mit lokalen Partnern zusammen, um innovative und effiziente Solaranlagen zu realisieren, die einen positiven Beitrag zur Energiewende in Österreich leisten.</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <img src={slideTwo} alt="hero image" width={{ width: "100%" }} />
                                    </Col>
                                </Row>
                            </Container>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <img src={slideThree} alt="hero image" width={{ width: "100%" }} />
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
                                        <h2>Unsere Projekte <br /> in der Schweiz</h2>
                                        <p>Entdecke mit uns die strahlende Zukunft der Solarenergie in der Schweiz! Unsere Projekte tragen nicht nur dazu bei, saubere Energie zu erzeugen, sondern auch die Schweizer Landschaft mit nachhaltigen Lösungen zu bereichern. Wir setzen auf die Schweizer Qualität und Präzision, um innovative Solaranlagen zu realisieren, die einen bedeutenden Beitrag zur Energiewende des Landes leisten. Zusammen gestalten wir eine grünere Zukunft für die Schweiz.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Container>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
                                        <h2>Anstehende Projekte <br /> den USA</h2>
                                        <p>Wir freuen uns bekannt zu geben, dass wir seit Anfang 2024 mit einem weiteren Standort in den USA vertreten sind. Obwohl noch im Aufbau, sehen wir mit Freude der Erweiterung unserer Präsenz in den USA entgegen, um noch mehr Gemeinden weltweit mit sauberer Solarenergie zu versorgen.</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <img src={slideFour} alt="hero image" width={{ width: "100%" }} />
                                    </Col>
                                </Row>
                            </Container>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="ref-sec-two-wrappper">
                    <Container>
                        <div className="ref-sec-two-txt-wrapper">
                            <h2 className='text-center'>Strahlende Beispiele - <br /> <strong>Unsere Referenzprojekte</strong></h2>
                        </div>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={4} className='my-3'>
                                <div className="sec-three-slide-wrapper sl-1">
                                    <div className="sec-three-slide-footer">
                                        <p className='sec-three-foot-txt-gr text-white'>
                                            Kirchhundem (Rheinland-Pfalz)
                                        </p>
                                        <p className='sec-three-foot-txt-wh text-white'>
                                            4532 KwP
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} className='my-3'>
                                <div className="sec-three-slide-wrapper sl-2">
                                    <div className="sec-three-slide-footer">
                                        <p className='sec-three-foot-txt-gr text-white'>
                                            Kirchhundem (Rheinland-Pfalz)
                                        </p>
                                        <p className='sec-three-foot-txt-wh text-white'>
                                            4532 KwP
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} className='my-3'>
                                <div className="sec-three-slide-wrapper sl-3">
                                    <div className="sec-three-slide-footer">
                                        <p className='sec-three-foot-txt-gr text-white'>
                                            Kirchhundem (Rheinland-Pfalz)
                                        </p>
                                        <p className='sec-three-foot-txt-wh text-white'>
                                            4532 KwP
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} className='my-3'>
                                <div className="sec-three-slide-wrapper sl-4">
                                    <div className="sec-three-slide-footer">
                                        <p className='sec-three-foot-txt-gr text-white'>
                                            Kirchhundem (Rheinland-Pfalz)
                                        </p>
                                        <p className='sec-three-foot-txt-wh text-white'>
                                            4532 KwP
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} className='my-3'>
                                <div className="sec-three-slide-wrapper sl-5">
                                    <div className="sec-three-slide-footer">
                                        <p className='sec-three-foot-txt-gr text-white'>
                                            Kirchhundem (Rheinland-Pfalz)
                                        </p>
                                        <p className='sec-three-foot-txt-wh text-white'>
                                            4532 KwP
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} className='my-3'>
                                <div className="sec-three-slide-wrapper sl-6">
                                    <div className="sec-three-slide-footer">
                                        <p className='sec-three-foot-txt-gr text-white'>
                                            Kirchhundem (Rheinland-Pfalz)
                                        </p>
                                        <p className='sec-three-foot-txt-wh text-white'>
                                            4532 KwP
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </section>

                <section className="ref-sec-three-wrapper">
                    <Container>
                        <div className="ref-sec-three-txt-wrapper">
                            <h2 className='text-center'>Unsere Solarinvestments - <br /> Jetzt Top Rendite sichern</h2>
                        </div>

                        <table className='ref-table'>
                            <thead className='ref-thead'>
                                <tr>
                                    <th>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                        Name
                                    </th>
                                    <th>Leistung in kWp</th>
                                    <th>Projektaufnahme</th>
                                    <th>Ortschaft</th>
                                    <th>Unverbindliche Anfrage</th>
                                </tr>
                            </thead>
                            <tbody className='ref-body'>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <input type="checkbox" name="" id="" />  */}
                                         Solarpark Passau Brentzau</td>
                                    <td>99.09 kWp</td>
                                    <td>24 April 2024</td>
                                    <td>Passau, Bayern</td>
                                    <td className='last'>Anfrage senden</td>
                                </tr>
                            </tbody>
                        </table>
                    </Container>
                </section>

                <Container>
                    <MyAccording />
                </Container>
            </main>
        </>
    )
}

export default Referenzen
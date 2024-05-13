import './slider.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from "react-bootstrap"
import { Pagination, Navigation } from 'swiper/modules';
import secThreeBg from './img/sec-3-bg.svg'

const SliderProgressBar = () => {
    return (
        <>
            <section className="section-three">
                <Container fluid>
                    <Row>

                        <Col xs="12" sm="12" md="12" lg="6" style={{ margin: "auto" }}>
                            <div className="sec-three-txt-wrapper">
                                <h2>Strahlende Beispiele - <br />
                                    <strong>Unsere Referenzprojekte</strong>
                                </h2>
                                <p>
                                    Die Sonne als Partner: Tauchen Sie ein in die Welt der erneuerbaren
                                    <br /> Energien und lassen Sie sich von unseren Erfolgen inspirieren. Bei
                                    <br /> Nivoma gestalten wir gemeinsam eine Zukunft, die hell und grün
                                    <br /> leuchtet.
                                </p>

                                <div class="d-flex flex-wrap align-items-center justify-content-center">
                                    <button class="btn-nivoma-yellow">Unsere Anlageprojekte</button>
                                    <button class="btn-outline-nivoma mx-3 my-3">Verpächter werden</button></div>
                            </div>
                        </Col>

                        <Col xs="12" sm="12" md="12" lg="6">
                            <div className="sec-three-img-wrapper">
                                <Swiper
                                    pagination={{
                                        type: 'progressbar',
                                    }}
                                    grabCursor={true}
                                    navigation={false}
                                    breakpoints={{
                                        624: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        992: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        1300: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiperSecThree">

                                    <SwiperSlide>
                                        <div className="sec-three-slide-wrapper sl-1">
                                            <div className="sec-three-slide-footer">
                                                <p className='sec-three-foot-txt-gr'>
                                                    Kirchhundem (Rheinland-Pfalz)
                                                </p>
                                                <p className='sec-three-foot-txt-wh'>
                                                    4532 KwP
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="sec-three-slide-wrapper sl-2">
                                            <div className="sec-three-slide-footer">
                                                <p className='sec-three-foot-txt-gr'>
                                                    Kirchhundem (Rheinland-Pfalz)
                                                </p>
                                                <p className='sec-three-foot-txt-wh'>
                                                    4532 KwP
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="sec-three-slide-wrapper sl-1">
                                            <div className="sec-three-slide-footer">
                                                <p className='sec-three-foot-txt-gr'>
                                                    Kirchhundem (Rheinland-Pfalz)
                                                </p>
                                                <p className='sec-three-foot-txt-wh'>
                                                    4532 KwP
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="sec-three-slide-wrapper sl-2">
                                            <div className="sec-three-slide-footer">
                                                <p className='sec-three-foot-txt-gr'>
                                                    Kirchhundem (Rheinland-Pfalz)
                                                </p>
                                                <p className='sec-three-foot-txt-wh'>
                                                    4532 KwP
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <img src={secThreeBg} alt="image" className="sec-three-bg" />
            </section>
        </>
    )
}

export default SliderProgressBar
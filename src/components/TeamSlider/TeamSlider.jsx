import './style.css'
import { Container, Row, Col } from "react-bootstrap"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';

const TeamSlider = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs="12" sm="12" md="12" lg="6">
                    <Swiper
                        grabCursor={true}
                        navigation={true}
                        autoplay={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            578: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1600: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Navigation, Autoplay]}
                        className="testimonial">
                        <SwiperSlide className='one'>
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='two'>
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='one'>
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='two'>
                            <div className="sec-six-tes-wrapper">
                                <div className="sec-six-tes-footer">
                                    <p>
                                        <strong>Andreas Kowalski</strong> <br />
                                        NIVOMA Berater
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Col>

                <Col xs="12" sm="12" md="12" lg="6" style={{ margin: "auto" }}>
                    <div className="sec-two-txt-wrapper">
                        <p>UNSER TEAM</p>
                        <h2> <strong>Profitieren Sie von Ihrer</strong> <br />
                            Ihr Partner vor Ort
                        </h2>
                        <p>Mit NIVOMA entdecken Sie die besten Angebote für Ihre Flächen und <br /> maximieren Ihre Einnahmen. </p>
                        <ul>
                            <li>
                                Berater in allen 16 deutschen Bundesländern
                            </li>
                            <li>
                                Beratung in der Schweiz und Österreich
                            </li>
                            <li>
                                Lokale Berateung in den USA (Texas, Kalifornien und Florida)
                            </li>
                        </ul>


                        <div class="d-flex flex-wrap align-items-center justify-content-center">
                            <button class="btn-nivoma">Dachfläche verpachten</button>
                            <button class="mx-2 my-3 btn-outline">Freifläche verpachten</button></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TeamSlider
import './style.css'
import secThreeBg from '../../components/Pages/Home/img/sec-3-bg.svg'
import rating from '../assets/icons/rating.svg'
import reviewOne from '../../components/Pages/Home/img/review1.jpg'
import reviewTwo from '../../components/Pages/Home/img/review2.jpg'
import reviewThree from '../../components/Pages/Home/img/review3.jpg'
import { Container, Row, Col } from "react-bootstrap"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from 'swiper/modules';

const Testimonial = () => {
    return (
        <section className="section-five">
            <Container fluid>
                <Row>

                    <Col xs="12" sm="12" md="12" lg="6" style={{ position: "relative" }}>
                        <img src={secThreeBg} alt="image" className='sec-five-bg-img' />
                        <div className="sec-five-txt-wrapper">
                            <h2> <strong>NIV A</strong> <br />
                                <div className="divider"></div>
                                Das sagen unsere
                                <strong>Kunden über uns</strong>
                            </h2>
                            <p>
                                Erfahren Sie, was unsere Kunden über ihre Erfahrungen mit
                                <br /> uns berichten. Lesen Sie ihre Meinungen und Bewertungen
                                <br /> vertrauenswürdigen Partner in der Solarverpachtung
                                <br /> entschieden haben.
                            </p>
                        </div>
                    </Col>

                    <Col xs="12" sm="12" md="12" lg="6" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <div className="sec-five-img-wrapper">
                            <Swiper
                                grabCursor={true}
                                autoplay={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1680: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Grid, Autoplay]}
                                className="mySwiperReviews">
                                <SwiperSlide>
                                    <div className="sec-five-box-wrapper">
                                        <p className='text-center d-flex align-items-center' style={{ gap: "1rem" }}>
                                            <img src={reviewOne} alt="image" />
                                            Jürgen W.
                                        </p>
                                        <p>Absolut empfehlenswert <br />
                                            Gruß Jürgen
                                        </p>
                                        <img src={rating} alt="icon" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="sec-five-box-wrapper">
                                        <p className='text-center d-flex align-items-center' style={{ gap: "1rem" }}>
                                            <img src={reviewTwo} alt="image" />
                                            Dr. Lutz K.
                                        </p>
                                        <p>Wir schätzen die transparente Kommunikation und die Effizienz, mit der NIVOMA…</p>
                                        <img src={rating} alt="icon" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="sec-five-box-wrapper">
                                        <p className='text-center d-flex align-items-center' style={{ gap: "1rem" }}>
                                            <img src={reviewThree} alt="image" />
                                            Petra Liebherr
                                        </p>
                                        <p>Zeit gespart und höhere Pacht verhandelt. Danke für die Empfehlung!</p>
                                        <img src={rating} alt="icon" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="sec-five-box-wrapper">
                                        <p className='text-center d-flex align-items-center' style={{ gap: "1rem" }}>
                                            <img src={reviewOne} alt="image" />
                                            Jürgen W.
                                        </p>
                                        <p>Absolut empfehlenswert <br />
                                            Gruß Jürgen
                                        </p>
                                        <img src={rating} alt="icon" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Testimonial
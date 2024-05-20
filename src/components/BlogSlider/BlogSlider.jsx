import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';
import blogTwo from "./images/blog-1.jpg";
import blogOne from "./images/blog-2.jpg";
import blogThree from "./images/blog-3.jpg";
import './style.css'

const BlogSlider = () => {
    return (
        <section className="sec-four">
            <Container fluid>
                <Row>
                    <Col>

                        <div className="wissen-sec-four-head-wrapper">
                            <h2>Weitere Neuigkeiten</h2>
                        </div>
                        <Swiper
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                380: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1600: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper">

                            <SwiperSlide>
                                <div className="wissen-sec-four-slide-wrapper">
                                    <div className="wissen-sec-four-img-wrapper">
                                        <img src={blogOne} alt="image" />
                                    </div>
                                    <div className="wissen-sec-four-txt-head">
                                        <p>Projekt - 12 August 2021</p>
                                    </div>
                                    <div className="wissen-sec-four-txt-body">
                                        <p>Strahlende Neuigkeiten: Die Zukunft der <br /> Solarenergie enthüllt!</p>
                                    </div>
                                    <div className="wissen-sec-four-txt-foot">
                                        <p>Artikel lesen</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="wissen-sec-four-slide-wrapper">
                                    <div className="wissen-sec-four-img-wrapper">
                                        <img src={blogTwo} alt="image" />
                                    </div>
                                    <div className="wissen-sec-four-txt-head">
                                        <p>Projekt - 12 August 2021</p>
                                    </div>
                                    <div className="wissen-sec-four-txt-body">
                                        <p>Strahlende Neuigkeiten: Die Zukunft der <br /> Solarenergie enthüllt!</p>
                                    </div>
                                    <div className="wissen-sec-four-txt-foot">
                                        <p>Artikel lesen</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="wissen-sec-four-slide-wrapper">
                                    <div className="wissen-sec-four-img-wrapper">
                                        <img src={blogThree} alt="image" />
                                    </div>
                                    <div className="wissen-sec-four-txt-head">
                                        <p>Projekt - 12 August 2021</p>
                                    </div>
                                    <div className="wissen-sec-four-txt-body">
                                        <p>Strahlende Neuigkeiten: Die Zukunft der <br /> Solarenergie enthüllt!</p>
                                    </div>
                                    <div className="wissen-sec-four-txt-foot">
                                        <p>Artikel lesen</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="wissen-sec-four-slide-wrapper">
                                    <div className="wissen-sec-four-img-wrapper">
                                        <img src={blogOne} alt="image" />
                                    </div>
                                    <div className="wissen-sec-four-txt-head">
                                        <p>Projekt - 12 August 2021</p>
                                    </div>
                                    <div className="wissen-sec-four-txt-body">
                                        <p>Strahlende Neuigkeiten: Die Zukunft der <br /> Solarenergie enthüllt!</p>
                                    </div>
                                    <div className="wissen-sec-four-txt-foot">
                                        <p>Artikel lesen</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BlogSlider
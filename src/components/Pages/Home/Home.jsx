import './home.css'
import heroVideo from './img/hero.mp4'
import pregnanatWoment from './img/pregnant-women-with-girl.png'
import secThreeBg from './img/sec-3-bg.svg'
import arrowUp from '../../assets/icons/Arrow_Up.svg'
import arrowDown from '../../assets/icons/Arrow_Down.svg'
import leaf from '../../assets/icons/plant-leaf-forest-foliage-ecology-svgrepo-com.svg'
import sun from '../../assets/icons/sun-svgrepo-com.svg'
import prozess from '../../assets/icons/prozess.svg'
import hands from '../../assets/icons/hands-holding-svgrepo-com.svg'
import rating from '../../assets/icons/rating.svg'
import reviewOne from './img/review1.jpg'
import reviewTwo from './img/review2.jpg'
import reviewThree from './img/review3.jpg'
import { Container, Row, Col } from "react-bootstrap"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { SliderProgressBar, SliderTwo, MyAccording, MyBanner, IconBox } from '../../../components'

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
                                        // autoplay={true}
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
                                    </Swiper>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>

                <section className="section-two">
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
                </section>

                <MyBanner />

                <MyAccording />

            </main >
        </>
    )
}

export default Home
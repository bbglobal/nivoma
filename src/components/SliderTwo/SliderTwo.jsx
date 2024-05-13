import './slider.css'

import arrowUp from '../assets/icons/Arrow_Up.svg'
import arrowDown from '../assets/icons/Arrow_Down.svg'
import leaf from '../assets/icons/plant-leaf-forest-foliage-ecology-svgrepo-com.svg'
import sun from '../assets/icons/sun-svgrepo-com.svg'
import prozess from '../assets/icons/prozess.svg'
import hands from '../assets/icons/hands-holding-svgrepo-com.svg'

import { Container, Row, Col } from "react-bootstrap"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const SliderTwo = () => {
    return (
        <>
            <section className="section-four">
                <div className="slider-container">

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
                            <div className="sec-four-box-wrapper">
                                <div className="box-wrapper">
                                    <h2 className='box-font'>
                                        <img src={arrowUp} alt='icon' />
                                        89 MW
                                    </h2>
                                    <p>An Projekten in der Umsetzung</p>
                                </div>
                                <p className='slider-txt'>
                                    Mit über 322 installierten Solaranlagen <br />
                                    haben wir bereits einen bedeutenden <br />
                                    Beitrag zur Förderung von sauberer <br />
                                    Energie und zum Umweltschutz <br />
                                    geleistet. <br />
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sec-four-box-wrapper odd">
                                <div className="box-wrapper">
                                    <h2 className='box-font'>
                                        <img src={arrowUp} alt='icon' />
                                        89 MW
                                    </h2>
                                    <p>An Projekten in der Umsetzung</p>
                                </div>

                                <p className='slider-txt'>
                                    Mit über 322 installierten Solaranlagen <br />
                                    haben wir bereits einen bedeutenden <br />
                                    Beitrag zur Förderung von sauberer <br />
                                    Energie und zum Umweltschutz <br />
                                    geleistet. <br />
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sec-four-box-wrapper">
                                <div className="box-wrapper">
                                    <h2 className='box-font'>
                                        <img src={arrowDown} alt='icon' />
                                        38
                                    </h2>
                                    <p>Berater vor Ort</p>
                                </div>

                                <p className='slider-txt'>
                                    Mit über 322 installierten Solaranlagen <br />
                                    haben wir bereits einen bedeutenden <br />
                                    Beitrag zur Förderung von sauberer <br />
                                    Energie und zum Umweltschutz <br />
                                    geleistet. <br />
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sec-four-box-wrapper odd">
                                <div className="box-wrapper">
                                    <h2 className='box-font'>
                                        <img src={arrowUp} alt='icon' />
                                        89 MW
                                    </h2>
                                    <p>An Projekten in der Umsetzung</p>
                                </div>

                                <p className='slider-txt'>
                                    Mit über 322 installierten Solaranlagen <br />
                                    haben wir bereits einen bedeutenden <br />
                                    Beitrag zur Förderung von sauberer <br />
                                    Energie und zum Umweltschutz <br />
                                    geleistet. <br />
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

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
                </div>
            </section>
        </>
    )
}

export default SliderTwo
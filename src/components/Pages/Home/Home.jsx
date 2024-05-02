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
import { Container, Row, Col, Accordion } from "react-bootstrap"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination, Navigation } from 'swiper/modules';

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
                            <Col xs="12" sm="12" md="12" lg="6">
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

                                    <div className="d-flex align-items-center">
                                        <button className="btn-nivoma-yellow">Unsere Anlageprojekte</button>
                                        <button className="btn-outline-nivoma mx-3">Verpächter werden</button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs="12" sm="12" md="12" lg="6">
                                <div className="sec-three-img-wrapper">
                                    <Swiper
                                        pagination={{
                                            type: 'progressbar',
                                        }}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        grabCursor={true}
                                        navigation={false}
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

                <section className="section-four">
                    <div className="slider-container">

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            grabCursor={true}
                            loog={true}
                            pagination={{
                                clickable: true,
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
                                <Col xs="12" sm="12" md="12" lg="6">
                                    <div className="sec-four-txt-wrapper">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img src={leaf} alt="icon" className='d-block' />
                                            <p style={{ color: "var(--primary)", margin: "10px" }}>Wirtschaftlichkeit</p>
                                        </div>

                                        <br />
                                        <h6>Investieren Sie in eine nachhaltige Zukunft. </h6>
                                        <br />
                                        <p>Durch die Verpachtung Ihrer Flächen für Solaranlagen sichern Sie <br />
                                            sich eine stabile Einnahmequelle ohne zusätzliche Kosten. <br />
                                            Profitieren Sie von einer langfristigen, nachhaltigen Investition, die <br />
                                            sowohl ökologisch als auch wirtschaftlich sinnvoll ist. </p>
                                    </div>
                                </Col>

                                <Col xs="12" sm="12" md="12" lg="6">
                                    <div className="sec-four-txt-wrapper">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img src={sun} alt="icon" className='d-block' />
                                            <p style={{ color: "var(--primary)", margin: "10px" }}>Nachhaltige Investition</p>
                                        </div>

                                        <br />
                                        <h6>Nachhaltig in Ihre Zukunft investieren </h6>
                                        <br />
                                        <p>Mit der Nutzung erneuerbarer Energiequellen wie Solarenergie  <br />
                                            tragen Sie aktiv zum Umweltschutz bei. Unsere Solaranlagen <br />
                                            ermöglichen es Ihnen, eine nachhaltige Investition zu tätigen, die <br />
                                            nicht nur finanziell lukrativ ist, sondern auch einen positiven Beitrag <br />
                                            zum Klimaschutz leistet. </p>
                                    </div>
                                </Col>

                                <Col xs="12" sm="12" md="12" lg="6">
                                    <div className="sec-four-txt-wrapper">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img src={prozess} alt="icon" className='d-block' />
                                            <p style={{ color: "var(--primary)", margin: "10px" }}>Einfacher Prozess</p>
                                        </div>

                                        <br />
                                        <h6>Wir vergleichen - Sie entscheiden  </h6>
                                        <br />
                                        <p>Wir übernehmen den gesamten Prozess der Suche nach dem  <br />
                                            passenden Pächter und der Vertragsabwicklung für Sie. Sie müssen <br />
                                            sich um nichts kümmern - von der Auswahl des geeigneten Pächters <br />
                                            bis zur Unterzeichnung des Vertrags unterstützen wir Sie <br />
                                            professionell und sorgen für einen reibungslosen Ablauf.</p>
                                    </div>
                                </Col>

                                <Col xs="12" sm="12" md="12" lg="6">
                                    <div className="sec-four-txt-wrapper">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img src={hands} alt="icon" className='d-block' />
                                            <p style={{ color: "var(--primary)", margin: "10px" }}>Kostenfreiheit</p>
                                        </div>

                                        <br />
                                        <h6>Profitieren ohne Risiko </h6>
                                        <br />
                                        <p>Profitieren Sie von zusätzlichen Einnahmen, ohne dafür <br />
                                            Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere <br />
                                            Dienstleistungen sind für Sie als Grundstückseigentümer kostenfrei, <br />
                                            sodass Sie ohne finanzielles Risiko von den Vorteilen der <br />
                                            Solarverpachtung profitieren können.</p>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </section>

                <section className="section-five">
                    <Container fluid>
                        <Row>

                            <Col xs="12" sm="12" md="12" lg="6" style={{ margin: "auto" }}>
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

                            <Col xs="12" sm="12" md="12" lg="6">
                                <div className="sec-five-img-wrapper">
                                    <Swiper
                                        slidesPerView={2}
                                        spaceBetween={10}
                                        grabCursor={true}
                                        loop={true}
                                        modules={[Grid]}
                                        className="mySwiperReviews">
                                        <SwiperSlide>
                                            <div className="sec-five-box-wrapper">
                                                <p className='text-center'>Jürgen W.</p>
                                                <br />
                                                <p style={{ padding: "0 1rem" }}>Absolut empfehlenswert <br />
                                                    Gruß Jürgen
                                                </p>
                                                <br />
                                                <img src={rating} alt="icon" />
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="sec-five-box-wrapper">
                                                <p className='text-center'>Jürgen W.</p>
                                                <br />
                                                <p style={{ padding: "0 1rem" }}>Absolut empfehlenswert <br />
                                                    Gruß Jürgen
                                                </p>
                                                <br />
                                                <img src={rating} alt="icon" />
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="sec-five-box-wrapper">
                                                <p className='text-center'>Jürgen W.</p>
                                                <br />
                                                <p style={{ padding: "0 1rem" }}>Absolut empfehlenswert <br />
                                                    Gruß Jürgen
                                                </p>
                                                <br />
                                                <img src={rating} alt="icon" />
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="sec-five-box-wrapper">
                                                <p className='text-center'>Jürgen W.</p>
                                                <br />
                                                <p style={{ padding: "0 1rem" }}>Absolut empfehlenswert <br />
                                                    Gruß Jürgen
                                                </p>
                                                <br />
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
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    loop={true}
                                    grabCursor={true}
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


                                    <div className="d-flex flex-wrap align-items-center">
                                        <button className='btn-nivoma'>Dachfläche verpachten</button>
                                        <button className='mx-2 btn-outline'>Freifläche verpachten</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section-seven">
                    <h2>Jetzt vergleichen & sparen</h2>
                    <p>Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch, damit <br />
                        wir Ihre Fläche genau analysieren können.</p>
                    <button className='btn-nivoma d-block'>Dachfläche verpachten</button>
                </section>

                <section className="section-eight">
                    <Container fluid>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="4">
                                <div className="sec-eight-txt-wrapper">
                                    <h3 className='my-5'>Häufig gestellte Fragen</h3>

                                    <h4 className='active my-3'>Verpachten</h4>
                                    <h4 className='my-3'>Investieren</h4>
                                    <h4 className='my-3'>Projekte</h4>
                                    <h4 className='my-3'>Technologie</h4>
                                    <h4 className='my-3'>Umwelt</h4>
                                </div>
                            </Col>

                            <Col xs="12" sm="12" md="12" lg="8">
                                <div className="sec-eight-acc-wrapper">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Welche Vorteile bietet die Solarverpachtung mit NIVOMA?</Accordion.Header>
                                            <Accordion.Body>
                                                Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen <br />
                                                erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen <br />
                                                sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen <br />
                                                der Solarenergie profitieren können.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Wie funktioniert die Solarverpachtung mit NIVOMA?</Accordion.Header>
                                            <Accordion.Body>
                                                Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen <br />
                                                erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen <br />
                                                sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen <br />
                                                der Solarenergie profitieren können.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Welche Voraussetzungen muss mein Grundstück erfüllen?</Accordion.Header>
                                            <Accordion.Body>
                                                Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen <br />
                                                erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen <br />
                                                sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen <br />
                                                der Solarenergie profitieren können.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Welche Rolle spielt NIVOMA bei der Solarverpachtung?</Accordion.Header>
                                            <Accordion.Body>
                                                Durch die Solarverpachtung mit NIVOMA können Grundstückseigentümer zusätzliche Einnahmen <br />
                                                erzielen, ohne Investitionskosten oder laufende Gebühren tragen zu müssen. Unsere Dienstleistungen <br />
                                                sind für Sie als Grundstückseigentümer kostenfrei, sodass Sie ohne finanzielles Risiko von den Vorteilen <br />
                                                der Solarenergie profitieren können.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </main >
        </>
    )
}

export default Home
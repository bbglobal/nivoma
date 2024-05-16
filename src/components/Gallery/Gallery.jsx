import './style.css'
import { Container, Row, Col } from 'react-bootstrap'

const Gallery = () => {
    return (

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
    )
}

export default Gallery
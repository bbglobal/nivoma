import './style.css'
import { Container, Row, Col } from "react-bootstrap"


const SlideTwo = ({title, p, pTwo, pThree, img}) => {
    return (
        <div className="slide-two-wrapper">
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="slide-two-txt-wrapper">
                            <h2>{title}</h2>

                            <p>{p}</p>

                            <p>{pTwo}</p>

                            <p>{pThree}</p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={6} className='col-img'>
                        <div className={`slide-two-img-wrapper ${img}`}>
                            <div className="slide-two-overlay-wrapper"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SlideTwo
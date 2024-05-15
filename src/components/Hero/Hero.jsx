import './style.css'
import { Container, Row, Col } from 'react-bootstrap'

const Hero = ({ title, content, vedio, bgColor }) => {
    return (
        <>
            <div className={`hc-txt-wrapper ${bgColor}`}>
                <Container>
                    <Row>
                        <Col>
                            <h1>{title}</h1>
                        </Col>
                        <Col>
                            <p>{content}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="hc-video-wrapper">
                {vedio}
            </div>
        </>
    )
}

export default Hero
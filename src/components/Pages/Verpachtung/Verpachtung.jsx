import blub from './img/blub.svg'
import chart from './img/chart.svg'
import growth from './img/growth-chart.svg'
import plant from './img/plant.svg'
import roof from './img/roof.svg'
import sheild from './img/sheild.svg'
import { Container, Row, Col } from "react-bootstrap"
import poster from '../Uberuns/img/poster.webp'
import uberVedio from '../Home/img/hero.mp4'
import { Connector, Hero, SliderProgressBar, SliderTwo, TeamSlider, Testimonial } from '../../../components'
import './style.css'

const Verpachtung = () => {
  return (
    <>
      <main className="verpachtung">
        <Hero
          bgColor="bg-pr"

          title="Profitieren Sie von Ihrer ungenutzten Dachfläche"

          content="Die Verpachtung bietet Eigentümern die Möglichkeit, ihre ungenutzten Dachflächen für die Installation von Solaranlagen zu vermieten. Durch diese Form der Nutzung können sie zur Förderung erneuerbarer Energien beitragen und gleichzeitig passive Einkommensströme generieren."

          vedio={<video src={uberVedio} poster={poster}></video>}
        />

        <section className='ver-sec-two-wrapper'>
          <Container>
            <Row>

              <Col xs={12} sm={12} md={12} lg={4}>
                <div className="sec-four-txt-wrapper">
                  <div className="d-flex align-items-center justify-content-start">
                    <img src={roof} alt="icon" className='d-block' />
                    <p style={{ color: "var(--primary)", margin: "10px" }}>Kostenlose Dachsanierung</p>
                  </div>

                  <br />
                  <p>Profitieren Sie von einer kostenlosen Dachsanierung und steigern Sie den Wert Ihrer Immobilie.</p>
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={4}>
                <div className="sec-four-txt-wrapper">
                  <div className="d-flex align-items-center justify-content-start">
                    <img src={blub} alt="icon" className='d-block' />
                    <p style={{ color: "var(--primary)", margin: "10px" }}>Niedrige Stromkosten</p>
                  </div>

                  <br />
                  <p>Decken Sie Ihren eigenen Stromverbrauch mit der Solaranlage ab und profitieren Sie auch bei einer Vermietung an Ihre Mieter.</p>
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={4}>
                <div className="sec-four-txt-wrapper">
                  <div className="d-flex align-items-center justify-content-start">
                    <img src={growth} alt="icon" className='d-block' />
                    <p style={{ color: "var(--primary)", margin: "10px" }}>Direktinvest</p>
                  </div>


                  <br />
                  <p>Sichern Sie sich eine Beteiligung an der Solaranlage und schaffen Sie langfristig eine sichere Einnahmequelle.</p>
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={4}>
                <div className="sec-four-txt-wrapper">
                  <div className="d-flex align-items-center justify-content-start">
                    <img src={sheild} alt="icon" className='d-block' />
                    <p style={{ color: "var(--primary)", margin: "10px" }}>Pachtzahlung im Voraus</p>
                  </div>


                  <br />
                  <p>Durch eine Pachtzahlung im Voraus über die gesamte Laufzeit minimieren Sie Ihr Risiko und optimieren Ihre finanzielle Planung.</p>
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={4}>
                <div className="sec-four-txt-wrapper">
                  <div className="d-flex align-items-center justify-content-start">
                    <img src={plant} alt="icon" className='d-block' />
                    <p style={{ color: "var(--primary)", margin: "10px" }}>10% Beteiligung ab dem 21. Jahr</p>
                  </div>


                  <br />
                  <p>Bei einer Verlängerung der Pachtzeit erhalten Sie automatisch eine 10%-Beteiligung, um zusätzliche Einnahmen zu generieren.</p>
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={4}>
                <div className="sec-four-txt-wrapper">
                  <div className="d-flex align-items-center justify-content-start">
                    <img src={chart} alt="icon" className='d-block' />
                    <p style={{ color: "var(--primary)", margin: "10px" }}>Geschützt & Versichert</p>
                  </div>


                  <br />
                  <p>Ihr Gebäude und Inventar sind vollständig versichert, während die regelmäßige Wartung der Solaranlage sicherstellt, dass sie den maximalen Ertrag erzielt.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='py-5'>
          <Container>
            <SliderTwo />
          </Container>
        </section>

        <section className='py-5'>
          <SliderProgressBar />
        </section>

        <section className='py-5'>
          <TeamSlider />
        </section>

        <Testimonial />

        <Connector />

      </main>
    </>
  )
}

export default Verpachtung
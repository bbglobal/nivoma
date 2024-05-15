import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import hero from "./img/hero.webp"
import compositeLayer from "./img/CompositeLayer.webp"
import blob from "./img/blob.webp"
import blobTwo from "./img/blobTwo.webp"
import clock from "./img/clock.svg"
import { MyBanner, SliderTwo, IconBox } from "../../../components"

const Karrieree = () => {
  return (
    <>
      <main className='karrieree'>

        <section className='karr-sec-hero'>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4} >
                <div className="karr-hero-txt-wrapper">
                  <h1> Karriere machen <br /> <strong>mit NIVOMA</strong></h1>
                </div>
                <button className='btn-nivoma-yellow mt-5'>
                  Jetzt bewerben
                </button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} >
                <div className="karr-hero-img-wrapper">
                  <img src={hero} alt="hero img" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="karr-sec-two-wrapper">
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={8} >
                <div className="kar-sec-two-wrapper">
                  <h2>Smarter. Better. Faster.</h2>

                  <img src={compositeLayer} alt="image" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} style={{ margin: "auto" }}>

                <div className="divider mb-5"></div>

                <p>Möchtest du deine Karriere in einem innovativen Unternehmen vorantreiben, das sich für saubere Energie und nachhaltige Entwicklung einsetzt? Bei Nivoma hast du die Möglichkeit, dich einem dynamischen Team anzuschließen, das sich leidenschaftlich für die Förderung erneuerbarer Energien engagiert.</p>

                <p>Wir bieten dir spannende Herausforderungen, ein inspirierendes Arbeitsumfeld und die Chance, an der Zukunft der Energiebranche mitzuwirken.</p>

                <p>Erfahre mehr über unsere aktuellen Stellenangebote und bewirb dich noch heute, um Teil unseres Teams zu werden.</p>

                <button className='btn-nivoma-yellow mt-5'>
                  Noch fragen?
                </button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-four">
          <SliderTwo />
          <IconBox />
        </section>

        <section className="karr-banner-sec my-5">
          <h2>Auf in deine neue Zukunft!</h2>
          <p>Entdecke unsere neusten Stellen und beginne ein neues erfolgreiches Kapitel.</p>
        </section>

        <section className='karr-sec-five-wrapper py-5'>
          <Container>
            <div className="karr-bullet-wrapper">
              <h4>Online Marketing Manager/-in - Vollzeit (m/w/d)</h4>

              <p>Werde Teil unseres Teams bei Nivoma als Online Marketing Manager/-in (m/w/d) im Bereich Coaching & Consulting. In dieser Rolle arbeitest du eng mit unseren Kunden zusammen und setzt dich intensiv mit ihren Geschäftsmodellen auseinander.</p>

              <div className="more-info-wrapper">
                <div className="bottom-wrapper">
                  <img src={clock} alt="image" className='d-block' />
                  <p>Ab sofort</p>
                </div>

                <button className='more-info'>Weitere Informationen</button>
              </div>
            </div>
            <div className="karr-bullet-wrapper">
              <h4>Online Marketing Manager/-in - Vollzeit (m/w/d)</h4>

              <p>Werde Teil unseres Teams bei Nivoma als Online Marketing Manager/-in (m/w/d) im Bereich Coaching & Consulting. In dieser Rolle arbeitest du eng mit unseren Kunden zusammen und setzt dich intensiv mit ihren Geschäftsmodellen auseinander.</p>

              <div className="more-info-wrapper">
                <div className="bottom-wrapper">
                  <img src={clock} alt="image" className='d-block' />
                  <p>Ab sofort</p>
                </div>

                <button className='more-info'>Weitere Informationen</button>
              </div>
            </div>
            <div className="karr-bullet-wrapper">
              <h4>Online Marketing Manager/-in - Vollzeit (m/w/d)</h4>

              <p>Werde Teil unseres Teams bei Nivoma als Online Marketing Manager/-in (m/w/d) im Bereich Coaching & Consulting. In dieser Rolle arbeitest du eng mit unseren Kunden zusammen und setzt dich intensiv mit ihren Geschäftsmodellen auseinander.</p>

              <div className="more-info-wrapper">
                <div className="bottom-wrapper">
                  <img src={clock} alt="image" className='d-block' />
                  <p>Ab sofort</p>
                </div>

                <button className='more-info'>Weitere Informationen</button>
              </div>
            </div>
          </Container>
        </section>

        <section className='karr-sec-six-wrapper'>
          <Container>
            <h2 className='text-center' style={{ margin: "10rem 0" }}>Erfolgsgeschichten -Unserer Berater</h2>
            <Row className='py-5'>
              <Col xs={12} sm={12} md={12} lg={6} >
                <div className="kar-sec-two-wrapper">
                  <img src={blob} alt="image" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>

                <p>Eine meiner ersten Aufgaben bestand darin, potenzielle Standorte für Solarenergieprojekte zu identifizieren. Ich erinnere mich noch gut an meinen ersten Besuch bei Herrn Schmidt, einem Grundstückseigentümer, der skeptisch war, ob seine Flächen für Solarenergie geeignet waren. Nach eingehenden Analysen und Gesprächen konnte ich Herrn Schmidt von den Vorteilen der Solarverpachtung überzeugen.</p>

                <p>Für mich persönlich war diese Erfolgsgeschichte nicht nur ein beruflicher Meilenstein, sondern auch eine Bestätigung dafür, dass erneuerbare Energien die Zukunft sind. Als Berater bei Nivoma habe ich die Möglichkeit, jeden Tag einen positiven Beitrag zur Umwelt zu leisten und gleichzeitig unsere Kunden dabei zu unterstützen, finanzielle Vorteile zu erzielen.</p>

                <h3>Friedirich Lutz</h3>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>

                <p>Als ich vor einem Jahr als Berater bei Nivoma anfing, hätte ich nie gedacht, dass ich so schnell einen echten Unterschied machen könnte. Meine erste Begegnung mit Herrn Schneider, einem skeptischen Grundstückseigentümer, bleibt mir unvergessen.</p>

                <p>Nach ausführlichen Analysen und überzeugenden Gesprächen konnte ich Herrn Schneider von den zahlreichen Vorteilen der Solarverpachtung überzeugen. Heute, ein Jahr später, strahlen nicht nur die Solarpaneele auf seinen Flächen, sondern auch sein Lächeln. </p>

                <p>Vielen Dank für alles und auf ein gemeinsames erfolgreiches Jahr.</p>

                <h3>Alexander Kozlowski</h3>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} style={{margin: "5rem 0"}}>
                <div className="kar-sec-two-wrapper">
                  <img src={blobTwo} alt="image" />
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={12} >
                <div className="kar-sec-two-wrapper py-5">
                  <p className='text-center'>Und viele weitere</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      </main>
    </>
  )
}

export default Karrieree
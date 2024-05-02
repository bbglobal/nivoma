import Logo from "../assets/img/logofooter.png"
import youtube from "../assets/icons/youtube-round-svgrepo-com.svg"
import Ln from "../assets/icons/in-round-svgrepo-com.svg"
import Insta from "../assets/icons/instagram-svgrepo-com.svg"
import X from "../assets/icons/x-round-svgrepo-com.svg"
import Mail from "../assets/icons/mail-round-svgrepo-com.svg"
import Call from "../assets/icons/call-round-svgrepo-com.svg"
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css";


const Footer = () => {
  return (
    <footer className="bg-custom text-white py-5"> {/* Added bg-custom class */}
      <Container>
        <Row>
          {/* Top three columns */}
          <Col md={4}>

            <img src={Logo} alt="logo.png" />
            <p className="my-5">
              Als führender Vermittler in der Solarbranche
              setzen wir bei Nivoma alles daran, unseren Kunden
              den Zugang zu sauberer Energie zu erleichtern.
              Unsere Expertise in der Vermittlung von
              Solaranlagen macht uns zum bevorzugten Partner
              für diejenigen, die innovative Lösungen im Bereich
              erneuerbarer Energien suchen.
            </p>

            <div className="socials">
              <img src={youtube} alt="icon" className="ms-3 my-3" />
              <img src={Ln} alt="icon" className="ms-3 my-3" />
              <img src={Insta} alt="icon" className="ms-3 my-3" />
              <img src={X} alt="icon" className="ms-3 my-3" />
            </div>


          </Col>
          <Col md={4}>
            <h5>Unternehmen</h5>
            <ul className="list-unstyled">
              <li><a href="#">Über uns</a></li>
              <li><a href="#">Referenzen</a></li>
              <li><a href="#">Karriere</a></li>
              <li><a href="#">Kontakt</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Rechtliches</h5>
            <ul>
              <li><a href="#">Beschwerdenmanagement</a></li>
              <li><a href="#">AGB</a></li>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Cookies verwalten</a></li>
            </ul>
          </Col>
        </Row>
        {/* <hr className="my-4" /> */}

        <Row>
          {/* Bottom four columns */}
          <Col md={3}>
            <h5>Verpachtung</h5>
            <ul>
              <li><a href="#">Dachflächen</a></li>
              <li><a href="#">Freiflächen</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Investieren</h5>
            <ul>
              <li><a href="#">Investieren</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Markt & Wissen</h5>
            <ul>
              <li><a href="#">Neuigkeiten</a></li>
            </ul>
          </Col>
          <Col md={3}>

            <div className="socials">
              <div className="d-flex align-items-center">
                <img src={Call} alt="icon" className="mx-3 my-3" />
                <div>
                  <p>Telefon</p>
                  <a href="tel:06222 6840592">06222 6840592</a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img src={Mail} alt="icon" className="mx-3 my-3" />
                <div>
                  <p>E-Mail</p>
                  <a href="mailto:info@nivoma-solar.de">info@nivoma-solar.de</a>
                </div>
              </div>
              <div className="d-flex align-items-center ms-3 mt-3">
                <button className="btn-outline-nivoma">Kostenlose Beratung</button>
              </div>
            </div>

          </Col>

          <Col>
            <p className="copyright-text">
              &copy; 2024 NIVOMA GmbH | Sämtliche Rechte vorbehalten.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

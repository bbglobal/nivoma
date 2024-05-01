
import { VscCallIncoming } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";


import Logo from "../assets/img/logofooter.png"

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css"; 

const SocialIcons = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="social-icons">
      <a href="#" 
         className={clicked ? 'clicked' : ''}
         onClick={handleClick}><FaFacebook style={{ fontSize: '24px', color: 'white' }} />
      </a>
      <a href="#" 
         className={clicked ? 'clicked' : ''}
         onClick={handleClick}><FaInstagram style={{ fontSize: '24px', color: 'white' }} />
      </a>
      <a href="#" 
         className={clicked ? 'clicked' : ''}
         onClick={handleClick}><FaWhatsapp style={{ fontSize: '24px', color: 'white' }} />
      </a>
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="bg-custom text-white py-5"> {/* Added bg-custom class */}
      <Container>
        <Row>
          {/* Top three columns */}
          <Col md={4}>
           
            <img src={Logo} alt="logo.png" />
            <p>
              Als führender Vermittler in der Solarbranche 
              setzen wir bei Nivoma alles daran, unseren Kunden 
              den Zugang zu sauberer Energie zu erleichtern. 
              Unsere Expertise in der Vermittlung von 
              Solaranlagen macht uns zum bevorzugten Partner 
              für diejenigen, die innovative Lösungen im Bereich 
              erneuerbarer Energien suchen.
            </p>
            {/* Social media links */}
            <SocialIcons />
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
           
            
            <VscCallIncoming />
      
            <MdEmail />

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

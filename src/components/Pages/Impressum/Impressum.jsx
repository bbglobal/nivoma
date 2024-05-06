import { Container, Row, Col } from "react-bootstrap";
import "./impressum.css";

const Impressum = () => {
  return (
    <main className="impressum">
      <div className="impressum-hero-banner">
        <h1>Impressum</h1>
      </div>
      <Container>
        <Row>
          <Col className="py-5">
            <p> Impressum der NIVOMA GmbH </p>

            <p>
              Vertretungsberechtigte Geschäftsführer: <br /> Niklas Baumgärtner
              und Vojo Markovic
            </p>

            <p>
              Firmensitz: Jahnstraße 31 <br /> 76689 Karlsdorf-Neuthard <br />{" "}
              Deutschland
            </p>

            <p>
              Kontakt: Telefon:{" "}
              <a href="tel:+49 (0)157 38751471">+49 (0)157 38751471</a> <br />
              E-Mail:<a href="mailto:info@nivoma.com">info@nivoma.com</a>
            </p>

            <p>
              Registereintrag:
              <br /> Registergericht: Amtsgericht Mannheim <br />
              Registernummer: HRB 733559
            </p>

            <p>
              Urheberrecht: Die durch den Seitenbetreiber erstellten Inhalte und
              Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              Die Vervielfältigung, <br />
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
              des jeweiligen <br/> Autors bzw. Erstellers.
            </p>

            <p>
              Urheberrecht: Die durch den Seitenbetreiber erstellten Inhalte und
              Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz: DE123456789
            </p>

            <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: </p>

            <p>
              NIVOMA GmbH <br/>
              Jahnstraße 31 <br/> 
              76689 Karlsdorf-Neuthard <br/>
               Deutschland
               
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Impressum;

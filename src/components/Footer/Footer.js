import React from 'react';
import './Footer.scss';
import C4ADSLogo from '../../images/c4ads-black.png';

// React Router
import { Link } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="footer-outer">
      <Container fluid={true}>
        <Row className="footer-flex-position">
          <Col sm={12} md={12} lg={6}>
            <div className="logo-and-details">
              <div className="logo-c4ads">
                <img src={C4ADSLogo} alt="C4ADS Logo" />
              </div>
              C4ADS is a nonprofit organization dedicated to providing
              data-driven analysis and evidence-based reporting on global
              conflict and transnational security issues.
            </div>
          </Col>
          <Col sm={4} md={4} lg={2}>
            <ul className="footer-links text-lg-right text-md-left text-sm-left mt-sm-3 mt-xs-3">
              <li>
                <Link to="/feedback">Contact Us</Link>
              </li>
              <li className="mb-0">
                <a href="mailto:info@c4ads.org">info@c4ads.org</a>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={4} lg={2}>
            <ul className="footer-links text-lg-right text-md-center text-sm-center mt-sm-3">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li className="mb-0">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </Col>
          <Col sm={4} md={4} lg={2}>
            <ul className="footer-links text-lg-right text-md-right mt-sm-3">
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="mb-0 empty">
                <a title="blank" href="/search">
                  &nbsp;
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

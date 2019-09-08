import React from 'react';
import '../css/App.css';
import { Container, Row, Col } from 'reactstrap';
import instagram from '../img/instagram.jpg';
import linkedin from '../img/linkedin.jpg';
import twitter from '../img/twitter.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="smlinks">
              <a
                className="smlink"
                href="https://www.linkedin.com/in/ashleylduffy/"
              >
                <img className="smimg" src={linkedin} alt="LinkedIn" />
              </a>
              <a className="smlink" href="https://www.instagram.com/ashgenie/">
                <img className="smimg" src={instagram} alt="Instagram" />
              </a>
              <a className="smlink" href="https://twitter.com/ashgenie">
                <img className="smimg" src={twitter} alt="Twitter" />
              </a>
            </div>
          </Col>
          <Col>
            <a className="footerlink" href="mailto:ashduffy@gmail.com">
              ashduffy@gmail.com
            </a>
          </Col>
          <Col>
            <a className="footerlink" href="tel:424-397-4555">
              (424)397-4555
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

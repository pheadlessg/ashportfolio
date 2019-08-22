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
            <div>
              <a href="https://www.linkedin.com/in/ashleylduffy/">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/ashgenie/">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://twitter.com/ashgenie">
                <img src={twitter} alt="Twitter" />
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

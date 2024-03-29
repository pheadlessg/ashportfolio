import React from 'react';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'reactstrap';
import '../css/App.css';

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row className="title">
          <Col>
            <div className="headertext">ASH DUFFY</div>
          </Col>
          <Col>
            <div className="headertext">SCREENWRITER</div>
          </Col>
        </Row>
        <Row className="linkbar">
          <Col>
            <Link
              className="link"
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
              isDynamic={true}
            >
              About
            </Link>
          </Col>
          <Col>
            <Link
              className="link"
              to="writing"
              smooth={true}
              isDynamic={true}
              offset={-150}
              duration={500}
            >
              Works
            </Link>
          </Col>
          <Col>
            <Link
              className="link"
              to="contact"
              smooth={true}
              offset={-150}
              duration={500}
            >
              Contact
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;

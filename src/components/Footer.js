import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center justify-content-between">
        <Col md={4} className="footer-copywright">
          <h3>
            designed &amp; built by{" "}
            <span style={{ color: "var(--accent-primary)" }}>lordkaito_</span>
          </h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>© {year} isai cespedes</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li>
              <a
                href="https://github.com/Lordkaito"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Lordkaito_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/isaicespedes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

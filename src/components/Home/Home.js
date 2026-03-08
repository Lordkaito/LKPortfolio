import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section dot-grid-bg" id="home">
        <Container className="home-content">
          <Row
            className="align-items-center"
            style={{ minHeight: "calc(100vh - 80px)" }}
          >
            <Col md={6} className="fade-up fade-up-1">
              <p className="heading-label">// full-stack developer</p>
              <h1 className="heading-name">
                ISAI
                <strong className="main-name">CESPEDES</strong>
              </h1>
              <div className="type-wrapper">
                <Type />
              </div>
              <div style={{ marginTop: "2rem" }}>
                <a href="/project" className="btn-terminal filled">
                  [ View Projects ]
                </a>
                <a
                  href="/CV.pdf"
                  className="btn-terminal"
                  target="_blank"
                  rel="noreferrer"
                >
                  [ Download CV ]
                </a>
              </div>
            </Col>

            <Col
              md={6}
              className="fade-up fade-up-3 d-none d-md-block"
              style={{ paddingLeft: "2rem" }}
            >
              <div className="code-block-deco">
                <div className="cb-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="cb-filename">developer.js</span>
                </div>
                <div className="cb-body">
                  <div className="code-line">
                    <span className="code-kw">const</span>{" "}
                    <span className="code-var">developer</span>{" "}
                    <span className="code-punc">= &#123;</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-var">name</span>
                    <span className="code-punc">:</span>{" "}
                    <span className="code-str">"Isai Cespedes"</span>
                    <span className="code-punc">,</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-var">location</span>
                    <span className="code-punc">:</span>{" "}
                    <span className="code-str">"Valencia, Spain"</span>
                    <span className="code-punc">,</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-var">company</span>
                    <span className="code-punc">:</span>{" "}
                    <span className="code-str">"Stack Builders"</span>
                    <span className="code-punc">,</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-var">skills</span>
                    <span className="code-punc">: [</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-str">"TypeScript"</span>
                    <span className="code-punc">,</span>{" "}
                    <span className="code-str">"React"</span>
                    <span className="code-punc">,</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-str">"Node.js"</span>
                    <span className="code-punc">,</span>{" "}
                    <span className="code-str">"GraphQL"</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-punc">],</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-var">focus</span>
                    <span className="code-punc">:</span>{" "}
                    <span className="code-str">"DX &amp; type safety"</span>
                    <span className="code-punc">,</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-var">available</span>
                    <span className="code-punc">:</span>{" "}
                    <span className="code-cyan">true</span>
                  </div>
                  <div className="code-line">
                    <span className="code-punc">&#125;;</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

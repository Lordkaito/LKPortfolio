import React from "react";
import myImg from "../../Assets/avatar.svg";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section className="home-about-section">
      <div className="home-about-inner">
        <div className="about-row">
          {/* Avatar */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="avatar-frame">
              <img src={myImg} alt="Isaí Céspedes" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="section-eyebrow">{"//"} about me</p>
            <h2 className="section-title">
              LET ME <span className="gold">INTRODUCE</span> MYSELF
            </h2>
            <p className="about-bio">
              I fell in love with programming and never looked back. I'm a
              full-stack engineer from{" "}
              <span className="hl">Valencia, Spain</span> with{" "}
              <span className="hl">3+ years</span> of professional experience
              building scalable web applications in international, remote-first
              teams.
              <br /><br />
              Currently at <span className="hl">Stack Builders</span>, I've
              worked with clients like Twilio, Thrv, and Communico — leading
              frontend migrations, resolving{" "}
              <span className="cy">4,000+ TypeScript errors</span>, and
              improving DX across global teams.
              <br /><br />
              I specialize in{" "}
              <span className="hl">TypeScript, React, and Node.js</span> — with
              a strong focus on{" "}
              <span className="cy">
                developer experience, testing, and clean code
              </span>
              .
            </p>

            <div className="social-links">
              <a
                href="https://github.com/Lordkaito"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <AiFillGithub /> github
              </a>
              <a
                href="https://twitter.com/Lordkaito_"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <AiOutlineTwitter /> twitter
              </a>
              <a
                href="https://www.linkedin.com/in/isaicespedes/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaLinkedinIn /> linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;

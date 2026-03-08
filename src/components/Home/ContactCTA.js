import React, { useEffect, useRef } from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ContactCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-scanline" aria-hidden="true" />
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-inner">
        <p className="section-eyebrow reveal" style={{ textAlign: "center" }}>{"//"} available for work</p>
        <h2 className="contact-headline reveal reveal-delay-1">
          LET'S WORK<br /><span className="gold">TOGETHER</span>
        </h2>
        <p className="contact-sub reveal reveal-delay-2">
          Open to full-time roles, contracts, and interesting collaborations.<br />
          Based in Valencia, Spain — working <span className="cy">100% remote</span>.
        </p>
        <div className="contact-links reveal reveal-delay-3">
          <a
            href="https://www.linkedin.com/in/isaicespedes/"
            target="_blank" rel="noreferrer"
            className="contact-btn"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
          <a
            href="https://github.com/Lordkaito"
            target="_blank" rel="noreferrer"
            className="contact-btn"
          >
            <AiFillGithub /> GitHub
          </a>
          <a
            href="mailto:isai@example.com"
            className="contact-btn contact-btn-primary"
          >
            <AiOutlineMail /> Send Email
          </a>
        </div>
        <div className="contact-status reveal reveal-delay-4">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-text">Available for new opportunities</span>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;

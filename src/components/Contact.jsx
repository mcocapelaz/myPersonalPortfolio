function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-text">
          <h2>Get in touch</h2>
          <p className="contact-subtitle">
          Looking for a developer and technical writer who loves clean code, 
          clear docs, and continuous learning? Let's talk! 
          </p>

          <a
            href="mailto:mcocapelaz@gmail.com"
            className="cta-button contact-cta"
          >
            <p>Write me: </p>
            mcocapelaz@gmail.com
          </a>
        </div>

        <div className="contact-links">
          <p className="contact-small-text">Or find me here</p>
          <div className="social-links">
            <a href="https://github.com/mcocapelaz/" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mcocapelaz/" className="social-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Mónica Coca</p>
      </footer>
    </section>
    
  );
}

export default Contact;

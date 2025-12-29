function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <h2>About Me</h2>
          <p className="about-lead">
            I build fun, interactive experiences on the web, combining clean
            code with a strong focus on collaboration and learning.
          </p>
        </div>

        <div className="about-highlights">
          <div className="about-pill">User‑focused web experiences</div>
          <div className="about-pill">From idea to usable prototype</div>
          <div className="about-pill">Teamwork & clear communication</div>
        </div>

        <div className="toolbox-card">
          <h3 className="toolbox-title">My toolbox</h3>

          <div className="toolbox-grid">
            <div className="toolbox-item">
              <div className="toolbox-logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="toolbox-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="toolbox-logo" />
              </div>
              <h4>HTML &amp; CSS</h4>
              <p>Accessible layouts, Flexbox, Grid &amp; responsive design.</p>
            </div>

            <div className="toolbox-item">
              <div className="toolbox-logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="toolbox-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="APIs" className="toolbox-logo" />
                
              </div>
              <h4>JavaScript &amp; APIs</h4>
              <p>
                Modern JS, DOM, fetch to third‑party APIs and first steps with
                AI tools.
              </p>
            </div>

            <div className="toolbox-item">
              <div className="toolbox-logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="toolbox-logo" />
              </div>
              <h4>Front‑end: React</h4>
              <p>Components, state, props, routing and local storage.</p>
            </div>

            <div className="toolbox-item">
              <div className="toolbox-logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="toolbox-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="toolbox-logo" />
              </div>
              <h4>Back‑end: Node &amp; Express</h4>
              <p>
                REST APIs, routing, JSON data and connecting to databases.
              </p>
            </div>

            <div className="toolbox-item">
              <div className="toolbox-logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="toolbox-logo" />
              </div>
              <h4>Databases &amp; deployment</h4>
              <p>
                SQL queries, persisting data and deploying apps with services
                like Render.
              </p>
            </div>

            <div className="toolbox-item">
              <div className="toolbox-logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="toolbox-logo" />
              </div>
              <h4>Teamwork &amp; Agile</h4>
              <p>
                Scrum, remote work, communication, feedback and self‑learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

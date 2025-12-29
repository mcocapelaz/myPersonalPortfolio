import ExtraImage from "../images/extra.jpg";
import CoolImage from "../images/cool.jpg";
import MagicalImage from "../images/magical.jpg";

function Projects() {
  return (
    <div>
      <section id="work" className="work">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={ExtraImage} alt="Extra, extra, project" />
              </div>
              <div className="project-info">
                <h3>Extra, extra!</h3>
                <p className="project-description">
                  Personalized news generator with forms and previews in real
                  time in order to download an unique news card with JavaScript.
                </p>
                <p className="project-meta">
                  Team project in the Adalab web programming bootcamp
                </p>
                <a
                  href="https://github.com/estherquiros/project-promo-58-modulo-2-team-2"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={CoolImage} alt="Cool projects" />
              </div>
              <div className="project-info">
                <h3>Cool projects</h3>
                <p className="project-description">
                  A React Frontend application that consumes REST APIs with
                  Express.js to display interactive projects in a responsive and
                  professional manner
                </p>
                <p className="project-meta">
                  Team project in the Adalab web programming bootcamp
                </p>
                <a href="https://github.com/IngraIssdottir/promo-58-module-4-group-3" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={MagicalImage} alt="Magical characters finder" />
              </div>
              <div className="project-info">
                <h3>Magical characters finder</h3>
                <p className="project-description">
                  Interactive Harry Potter character finder made in React and
                  filter by name, gender and house, with detailed profiles.
                </p>
                <p className="project-meta">
                  Individual project in the Adalab web programming bootcamp
                </p>
                <a
                  href="https://github.com/mcocapelaz/modulo-3-evaluacion-final-mcocapelaz"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Projects;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    text: "What kind of product is your team developing (or would you like to develop)?",
    options: [
      { id: "A", label: "Internal tools to organize work, tasks, or projects" },
      { id: "B", label: "Products that display personalized content or news" },
      { id: "C", label: "Online stores or products with a clear purchase flow" },
    ],
  },
  {
    id: 2,
    text: "What skills should the people working with you have?",
    options: [
      { id: "D", label: "Clear, well‑organized code" },
      { id: "E", label: "Ability to share solutions and a curious mindset" },
      { id: "F", label: "Collaborative attitude and focus on achieving goals" },
    ],
  },
  {
    id: 3,
    text: "What interests you the most right now?",
    options: [
      { id: "G", label: "Task management and internal dashboards" },
      { id: "H", label: "Data filtering and personalized experiences" },
      { id: "I", label: "Product catalog, cart, pricing, and checkout steps" },
    ],
  },
];

const projectByType = {
  news: {
    title: "Extra, extra!",
    description: "Personalized news generator with forms and real‑time previews to download a unique news card built with JavaScript.",
    role: "Team project in the Adalab web programming bootcamp",
     repoUrl: "https://github.com/estherquiros/project-promo-58-modulo-2-team-2"
  },
  projects: {
    title: "Cool projects",
    description: "React frontend application that consumes REST APIs with Express.js to display interactive projects in a responsive and professional way.",
    role: "Team project in the Adalab web programming bootcamp",
    repoUrl: "https://github.com/IngraIssdottir/promo-58-module-4-group-3"
  },
  harry: {
    title: "Magical characters finder",
    description: "Interactive Harry Potter character finder built in React with filters by name, gender, and house, plus detailed profiles.",
    role: "Individual project in the Adalab web programming bootcamp",
    repoUrl: "https://github.com/mcocapelaz/modulo-3-evaluacion-final-mcocapelaz"
  },
};

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleOptionClick = (optionId) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, 400);
  };

  const getRecommendedType = () => {
    let newsScore = 0;
    let projectsScore = 0;
    let harryScore = 0;

  
    for (let i = 0; i < answers.length; i++) {
      const optionId = answers[i];
      
      switch (optionId) {
        case "A":
        case "D":
        case "G":
          projectsScore = projectsScore + 1;
          break;
        case "B":
        case "E":
        case "H":
          newsScore = newsScore + 1;
          break;
        case "C":
        case "F":
        case "I":
          harryScore = harryScore + 1;
          break;
        default:
          break;
      }
    }

  
    if (projectsScore >= newsScore && projectsScore >= harryScore) {
      return "projects";
    } else if (newsScore >= harryScore) {
      return "news";
    } else {
      return "harry";
    }
  };

  const handleSeeProjects = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("work");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

 
  let content;

  if (currentIndex >= questions.length) {
  
    const projectType = getRecommendedType();
    const recommendedProject = projectByType[projectType];
    
    content = (
      <div className="result-container">
        <h2>Perfect match for your team</h2>
        <p className="result-description">
          Based on your answers, this project best fits what your team needs right now:
        </p>
        <div className="project-features">
          <h4>{recommendedProject.title}</h4>
          <p>{recommendedProject.description}</p>
          <p><em>{recommendedProject.role}</em></p>
        </div>
        <div className="result-actions">
  <a
    href={recommendedProject.repoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="cta-button"
  >
    View repository
  </a>
  <button onClick={handleSeeProjects} className="cta-button">
    See all projects
  </button>
</div>
      </div>
    );
  } else {
   
    const currentQuestion = questions[currentIndex];
    const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

    content = (
      <div className="quiz-container">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="question-container">
          <h3 className="quiz-question">
            {currentIndex + 1} / {questions.length} · {currentQuestion.text}
          </h3>

          <div className="options-grid">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className="option"
                onClick={() => handleOptionClick(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return content;
}

export default Quiz;

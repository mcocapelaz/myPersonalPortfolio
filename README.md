# My Portfolio

Personal portfolio website built with React and React Router, featuring an interactive quiz to recommend projects based on user preferences.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Quiz**: Dynamic questionnaire that recommends projects based on user answers
- **Smooth Navigation**: Seamless navigation between sections using React Router
- **Modern UI**: Gradient backgrounds, smooth animations, and hover effects
- **Project Showcase**: Display of web development projects with descriptions and links to repositories

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **React Router DOM**: For client-side routing and navigation
- **CSS3**: Custom styles with gradients, animations, and responsive design
- **JavaScript ES6+**: Modern JavaScript features including arrow functions, destructuring, and template literals

## Installation

1. Clone this repository:
git clone https://github.com/mcocapelaz/myPortfolio

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

5. Open your browser and visit `http://localhost:5173`

## How the Quiz Works

The quiz component uses a scoring system to recommend projects:

1. User answers 3 multiple-choice questions
2. Each answer is mapped to a project type
3. A scoring algorithm counts votes for each type
4. The type with the highest score is recommended
5. User can view the recommended project's repository or see all projects

## Customization

To customize the portfolio for your own use:

1. Update personal information in `Hero.jsx`
2. Add your projects in `Projects.jsx`
3. Modify quiz questions and project data in `Quiz.jsx`
4. Adjust colors and styles in `App.scss`
5. Replace profile images in the `public` folder

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Author

Created with ❤️ by Mónica Coca

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Adalab web programming bootcamp
- React documentation
- Design inspiration from modern portfolio websites







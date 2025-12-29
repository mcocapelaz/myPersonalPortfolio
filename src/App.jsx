
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";


function App() {
  return (
    <>
      <Header />

      <Routes>       
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />

       
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;

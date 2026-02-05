import HeroTitle from "./HeroTitle";
import ProfilePhoto from "../images/profile.png";
import {Link} from "react-router-dom"; 


function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
       
        <div className="hero-text">
          <HeroTitle />       

          <Link to="/quiz" className="cta-button">
            Find your match! 
          </Link>
        </div>

               <div className="hero-photo-wrapper">
          <img
            src={ProfilePhoto}
            alt="Mónica Coca"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;


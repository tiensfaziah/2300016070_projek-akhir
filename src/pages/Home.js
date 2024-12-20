import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import "./Home.css";
import Logo from "../assets/icons/Logo.png"; // Logo
import heroCare from "../assets/images/Hero care.png"; // Hero Image
import slogan from "../assets/icons/Slogan.png"; // Slogan image
import loginIcon from "../assets/icons/Loggin.png"; // Login button image
import getStartedIcon from "../assets/icons/Get started.png"; // Get started button image

const Home = () => {
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleGetStartedClick = () => {
    navigate("/add-journal"); // Navigasi ke halaman add-journal
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <img src={slogan} alt="Your Space, Your Feelings" className="slogan" />
            <div className="button-group">
              <button className="get-started-button" onClick={handleGetStartedClick}>
                <img src={getStartedIcon} alt="Get Started" className="button-icon" />
              </button>
              <button className="login-button">
                <img src={loginIcon} alt="Login" className="button-icon" />
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroCare} alt="Hero Care" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

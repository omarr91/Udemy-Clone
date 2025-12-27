import React from "react";
import "../App.css";

type HeroProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

const HeroSection: React.FC<HeroProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <section
      style={{
        padding: "2.6rem 0 1.5rem",
      }}
    >
      <div className="app-container">
        <div className="hero-grid">
          {/* Left side */}
          <div>
            <div className="hero-badge">
              <span>🔥 New</span>
              <span>Fresh courses every week</span>
            </div>

            <h1 className="hero-title">
              Upgrade your career with
              <span className="hero-highlight"> on-demand learning.</span>
            </h1>

            <p className="hero-text">
              Learn from industry experts at your own pace. Build real-world
              skills in development, design, data, business, and more.
            </p>

            <div className="hero-search">
              <input
                className="hero-search-input"
                placeholder="What do you want to learn today?"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <button className="hero-search-button">Search</button>
            </div>

            <p className="hero-meta">
              Join <strong>50M+ learners</strong> — courses starting from{" "}
              <strong>$9.99</strong>.
            </p>
          </div>

          {/* Right side */}
          <div className="hero-card">
            <p className="hero-card-title">A broad selection of courses</p>
            <p className="hero-card-text">
              Choose from thousands of online video courses with new additions
              published every month.
            </p>
            <ul className="hero-list">
              <li>Hands-on projects and downloadable resources</li>
              <li>Lifetime access on mobile and desktop</li>
              <li>Certificates of completion to showcase your skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

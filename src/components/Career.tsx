import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>
                  <a href="https://vallo.in" target="_blank" rel="noopener noreferrer">
                    Vallo Mobility
                  </a>
                </h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Developing robust backend solutions using Spring Boot and building mobile frontend interfaces with React Native. Gaining hands-on industry experience through practical implementations and mentorship sessions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>UPES, Dehradun</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Pursuing a comprehensive curriculum with a specialized focus on modern web architectures and Artificial Intelligence. I am actively part of the UPES research team, developing an AI to predict and enhance trachea conditions. Consistently demonstrating strong analytical problem-solving skills while mastering advanced algorithms and AI-driven paradigms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Independent Projects</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Architected and deployed highly responsive, accessible business websites like Waffle Da utilizing modern web technologies. Engineered high-conversion landing page mockups for clients and optimized ATS resume structures, significantly improving digital presence, readability, and user engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

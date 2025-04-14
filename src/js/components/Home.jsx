import React from "react";
import "../../styles/home.css";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="cv-container">
      {/* Efecto de partículas (opcional) */}
      <div className="particles-background"></div>
      
      <div className="header">
        <h1>DAYLOC YUMAR PRIETO RODRIGUEZ</h1>
        <div className="title neon-text">Full Stack Developer</div>
        <div className="contact-info">
          <div className="contact-item glow-on-hover">
            <span className="contact-icon"><FaPhone className="icon"/></span>
            <span>+34662424881</span>
          </div>
          <div className="contact-item glow-on-hover">
            <span className="contact-icon"><FaEnvelope className="icon"/></span>
            <span>daylocyumar@gmail.com</span>
          </div>
          <div className="contact-item glow-on-hover">
            <span className="contact-icon"><FaLinkedin className="icon"/></span>
            <a
              href="https://www.linkedin.com/in/dayloc-prieto-1aa020288/"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-link"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-item glow-on-hover">
            <span className="contact-icon"><FaMapMarkerAlt className="icon"/></span>
            <span>Rio San Pedro, Puerto Real, Cadiz, España</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title"><span className="neon-underline">SUMMARY</span></h2>
        <p className="summary-text glow-text">
          A modo de resumen, me gustaría agregar, que aunque el desarrollo de mi
          vida laboral no ha sido precisamente entorno a esta rama, creo que
          seré capaz de cumplir las expectativas que requiera el puesto. Me
          caracterizo por ser perseverante y por utilizar todas las herramientas
          posibles para poder estar a la altura del empleo que desarrolle. Creo
          que las mayores barreras nos las ponemos nosotros mismos, por lo que
          si nos mentalizamos en que nada es imposible, el cielo es el límite.
        </p>
      </div>

      <div className="section current-role">
        <h2 className="section-title"><span className="neon-underline">CURRENT ROLE</span></h2>
        <div className="role-content">
          <div className="holographic-card">
            <h3 className="role-title">Mentor at 4geekAcademy</h3>
            <p className="glow-text">
              Actualmente colaboro con la academia 4geekAcademy ejerciendo como
              mentor donde mi actividad principal es ayudar a alumnos en curso
              actual a la resolucion de proyectos de dicho curso. Especificamente
              en React, JWT, servicios de API, React-Redux, JavaScript, PYTHON,
              SQLAlchemy y cualquier duda que pueda surgir.
            </p>
          </div>
        </div>
      </div>

      <div className="two-column-section">
        <div className="section">
          <h2 className="section-title"><span className="neon-underline">EDUCATION</span></h2>
          <div className="education-item timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="neon-accent">4Geeks Academy</h3>
              <div className="date neon-date">01/2024 - 07/2024</div>
              <p>Full Stack Developer Program</p>
            </div>
          </div>
          <div className="education-item timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="neon-accent">UCI (Universidad de las Ciencias Informáticas)</h3>
              <div className="date neon-date">2005 - 2010</div>
              <p>Computer Science Degree</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title"><span className="neon-underline">CERTIFICATION</span></h2>
          <div className="certification-item holographic-card">
            <h3 className="neon-accent">Full Stack Developer</h3>
            <p>4 Geeks Academy</p>
            <div className="date neon-date">2024</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title"><span className="neon-underline">TECHNICAL SKILLS</span></h2>
        <div className="skills-container">
          <div className="skills-category">
            <h4 className="neon-category">Frontend</h4>
            <div className="skills">
              <span className="skill pulse">React</span>
              <span className="skill pulse">Redux</span>
              <span className="skill pulse">CRUD</span>
              <span className="skill pulse">JavaScript</span>
              <span className="skill pulse">TypeScript</span>
              <span className="skill pulse">HTML5</span>
              <span className="skill pulse">CSS3</span>
            </div>
          </div>

          <div className="skills-category">
            <h4 className="neon-category">Backend</h4>
            <div className="skills">
              <span className="skill pulse">Python</span>
              <span className="skill pulse">Flask</span>
              <span className="skill pulse">SQLAlchemy</span>
              <span className="skill pulse">JWT</span>
              <span className="skill pulse">RESTful APIs</span>
            </div>
          </div>

          <div className="skills-category">
            <h4 className="neon-category">Tools & Others</h4>
            <div className="skills">
              <span className="skill pulse">Git</span>
              <span className="skill pulse">Insomnia</span>
              <span className="skill pulse">Postman</span>
              <span className="skill pulse">Agile Methodologies</span>
              <span className="skill pulse">Mentoring</span>
            </div>
          </div>
        </div>
      </div>

      <div className="two-column-section">
        <div className="section">
          <h2 className="section-title"><span className="neon-underline">LANGUAGES</span></h2>
          <div className="language-item">
            <span className="language-name">Español</span>
            <div className="language-level-container">
              <div className="language-level" style={{"--level": "100%"}}></div>
              <span>Native</span>
            </div>
          </div>
          <div className="language-item">
            <span className="language-name">Inglés</span>
            <div className="language-level-container">
              <div className="language-level" style={{"--level": "80%"}}></div>
              <span>Advanced</span>
            </div>
          </div>
          <div className="language-item">
            <span className="language-name">Francés</span>
            <div className="language-level-container">
              <div className="language-level" style={{"--level": "20%"}}></div>
              <span>Beginner</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title"><span className="neon-underline">ONLINE PRESENCE</span></h2>
          <div className="online-presence">
            <a
              href="https://www.linkedin.com/in/dayloc-prieto-1aa020288/"
              className="social-link neon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon"><FaLinkedin className="icon"/></span>
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/Dayloc"
              className="social-link neon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon"><FaGithub className="icon"/></span>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
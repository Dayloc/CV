import React from "react";
import "../../styles/home.css";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import cvimg from "../../img/imgcv.png"; // Importa la imagen del CV

const Home = () => {
  return (
    <div className="cv-wrapper text-center">
      <div className="cv-container  m-5 text-center">
        {/* Efecto de partículas (opcional) */}
        <div className="particles-background"></div>

        {/* Header */}
        <header className="header text-center py-4">
          <div className="header-content">
            {/* Imagen del perfil */}
            <div className="profile-image-container mb-3">
              <img
                src={cvimg}
                alt="Dayloc Prieto CV"
                className="cv-image img-fluid rounded-circle border border-warning"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>

            {/* Nombre */}
            <h1
              className="text-uppercase mb-2"
              style={{ letterSpacing: "2px" }}
            >
              DAYLOC YUMAR PRIETO RODRIGUEZ
            </h1>

            {/* Título */}
            <div className="title neon-text mb-4">
              <h3 className="m-0" style={{ fontWeight: "700" }}>
                Full Stack Developer
              </h3>
            </div>

            {/* Información de contacto */}
            <div className="contact-info d-flex flex-wrap justify-content-center gap-3 mb-3">
              {/* Teléfono */}
              <div className="contact-item glow-on-hover p-2 d-flex align-items-center">
                <FaPhone className="icon text-warning me-2" />
                <span className="text-warning">+34 662 424 881</span>
              </div>

              {/* Email */}
              <div className="contact-item glow-on-hover p-2 d-flex align-items-center">
                <FaEnvelope className="icon text-warning me-2" />
                <span className="text-warning">daylocyumar@gmail.com</span>
              </div>

              {/* LinkedIn */}
              <div className="contact-item glow-on-hover p-2 d-flex align-items-center">
                <FaLinkedin className="icon text-warning me-2" />
                <a
                  href="https://www.linkedin.com/in/dayloc-prieto-1aa020288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-link text-warning text-decoration-none"
                >
                  LinkedIn
                </a>
              </div>

              {/* Ubicación */}
              <div className="contact-item glow-on-hover p-2 d-flex align-items-center">
                <FaMapMarkerAlt className="icon text-warning me-2" />
                <span className="text-warning">
                  Río San Pedro, Puerto Real, Cádiz, España
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="section">
          <h2 className="section-title neon-underline text-warning">SUMMARY</h2>
          <p className="summary-text glow-text mt-3">
            Aunque mi experiencia laboral previa no ha estado directamente
            relacionada con la tecnología, tengo la firme convicción de que
            puedo cumplir con las expectativas del puesto. Soy perseverante y
            siempre busco todas las herramientas posibles para estar a la altura
            de cualquier desafío. Creo que las mayores barreras son mentales: si
            creemos en nosotros mismos, no hay límites.
          </p>
        </section>

        {/* Current Role */}
        <section className="section current-role">
          <h2 className="section-title neon-underline text-warning">
            CURRENT ROLE
          </h2>
          <div className="holographic-card m-4">
            <h3 className="role-title text-warning">
              Mentor at 4Geeks Academy
            </h3>
            <p className="glow-text">
              Actualmente colaboro con 4Geeks Academy como mentor, ayudando a
              los estudiantes a resolver proyectos relacionados con React,
              JavaScript, Python, SQLAlchemy, JWT, servicios API, y React-Redux,
              así como otras dudas técnicas del curso.
            </p>
            <h3 className="role-title text-warning">
              Teacher Asistent at 4Geeks Academy
            </h3>
            <p className="glow-text">
              También colaboro como asistente de profesor en 4Geeks Academy,
              apoyando a los estudiantes en su aprendizaje y desarrollo de
              habilidades técnicas. Mi enfoque es ayudarlos a comprender
              conceptos complejos y a aplicar sus conocimientos en proyectos
              prácticos.
            </p>
          </div>
        </section>

        {/* Education & Certification */}
        <section className="two-column-section">
          {/* Sección Educación */}
          <div className="section education-section">
            <h2 className="section-title neon-underline text-warning mb-3 text-center">
              EDUCATION
            </h2>
            <div className="education-item timeline-item centered-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="neon-accent text-center">4Geeks Academy</h3>
                <div className="date neon-date text-center">
                  01/2024 - 07/2024
                </div>
                <p className="text-center">Full Stack Developer Program</p>
              </div>
            </div>
            <div className="education-item timeline-item centered-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="neon-accent text-center">
                  Universidad de las Ciencias Informáticas (UCI)
                </h3>
                <div className="date neon-date text-center">2005 - 2010</div>
                <p className="text-center">Computer Science Degree</p>
              </div>
            </div>
          </div>

          {/* Sección Certificación */}
          <div className="section certification-section">
            <h2 className="section-title neon-underline text-warning text-center">
              CERTIFICATION
            </h2>
            <div className="certification-item holographic-card mt-4 centered-certification">
              <h3 className="neon-accent text-center">Full Stack Developer</h3>
              <p className="text-center">4Geeks Academy</p>
              <div className="date neon-date text-center">2024</div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="section m-5 text-center">
          <h2 className="section-title neon-underline mb-4 text-warning">
            TECHNICAL SKILLS
          </h2>
          <div className="skills-container">
            <div className="d-flex flex-wrap justify-content-center skills-categories-container">
              {/* Frontend Skills */}
              <div className="skills-category">
                <h4 className="neon-category text-warning">Frontend</h4>
                <div className="skills">
                  <span className="skill pulse">React</span>
                  <span className="skill pulse">Redux</span>
                  <span className="skill pulse">JavaScript</span>
                  <span className="skill pulse">TypeScript</span>
                  <span className="skill pulse">HTML5</span>
                  <span className="skill pulse">CSS3</span>
                  <span className="skill pulse">Bootstrap</span>
                </div>
              </div>

              {/* Backend Skills */}
              <div className="skills-category">
                <h4 className="neon-category text-warning">Backend</h4>
                <div className="skills">
                  <span className="skill pulse">Python</span>
                  <span className="skill pulse">Flask</span>
                  <span className="skill pulse">SQLAlchemy</span>
                  <span className="skill pulse">JWT</span>
                  <span className="skill pulse">RESTful APIs</span>
                  <span className="skill pulse">MySQL</span>
                  <span className="skill pulse">PostgreSQL</span>
                </div>
              </div>

              {/* Tools & Others */}
              <div className="skills-category">
                <h4 className="neon-category text-warning">Tools & Others</h4>
                <div className="skills">
                  <span className="skill pulse">Git</span>
                  <span className="skill pulse">GitHub</span>
                  <span className="skill pulse">Insomnia</span>
                  <span className="skill pulse">Postman</span>
                  <span className="skill pulse">Agile</span>
                  <span className="skill pulse">Mentoring</span>
                  <span className="skill pulse">VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Online Presence */}
        <section className="two-column-section gap-5  m-5 ">
          <div className="section">
            <h2 className="section-title neon-underline">LANGUAGES</h2>
            <div className="language-item">
              <span className="language-name">Español</span>
              <div className="language-level-container">
                <div
                  className="language-level"
                  style={{ "--level": "100%" }}
                ></div>
                <span>Native</span>
              </div>
            </div>
            <div className="language-item">
              <span className="language-name">Inglés</span>
              <div className="language-level-container">
                <div
                  className="language-level"
                  style={{ "--level": "80%" }}
                ></div>
                <span>Advanced</span>
              </div>
            </div>
            <div className="language-item">
              <span className="language-name">Francés</span>
              <div className="language-level-container">
                <div
                  className="language-level"
                  style={{ "--level": "20%" }}
                ></div>
                <span>Beginner</span>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title neon-underline">ONLINE PRESENCE</h2>
            <div className="online-presence">
              <a
                href="https://www.linkedin.com/in/dayloc-prieto-1aa020288/"
                className="social-link neon-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Dayloc"
                className="social-link neon-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
                GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

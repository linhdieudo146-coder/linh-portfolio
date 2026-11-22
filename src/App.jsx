import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [activePopup, setActivePopup] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const greetings = ["Hi!", "Xin chào!", "여보!","Bonjour!", "Hola!"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
  const timer = setInterval(() => { //runs a function repeatedly
    setIndex((prev) => (prev + 1) % greetings.length);
  }, 2000); //changes the greeting every 2 seconds
  return () => clearInterval(timer);
}, []);
  return(
    <main className = "scroll-container">
      {/* page1 */}
      <section className="page-section hero-section">
        <div className="hero-layout">
          <div className="intro">
          <h1 key={index}>{greetings[index]}</h1>
          <p>Welcome to my creative world!</p>
          <p className="explore-hint">
            * Move your mouse over the objects to discover my story...(7)
          </p>
          </div>

          <div className="hero-video">
            <video
              src={`${import.meta.env.BASE_URL}videos/video1.mp4`}
              autoPlay
              loop
              muted
              playsInline
      />
      <div className="hotspot cake-hotspot">
      <div className="story-popup">
        <img src={`${import.meta.env.BASE_URL}photos/cake.png`} alt="Cake" />
        <h3>My Sweet Side</h3>
        <p>I love baking, It's my favorite way to unwind. Whenever I'm stressed, I find comfort in creating something sweet. And of course, I love sharing my creations with others!</p>
      </div>
      </div>
      <div className="hotspot camera-hotspot">
      <div className="story-popup">
        <img src={`${import.meta.env.BASE_URL}photos/camera.png`} alt="Camera" />
        <h3>Through My Lens</h3>
        <p>I love capturing the little moments in my life through photography. Because of that, my phone is constantly running out of storage...</p>
      </div>
      </div>
      <div className="hotspot book-hotspot">
      <div className="story-popup">
        <img src={`${import.meta.env.BASE_URL}photos/book.png`} alt="Book" />
        <h3>Between the Pages</h3>
        <p>Every book leaves me with something new to think about. I'm especially drawn to psychology, philosophy and finance.</p>
      </div>
      </div>
      <div className="hotspot global-hotspot">
      <div className="story-popup">
        <img src={`${import.meta.env.BASE_URL}photos/global.png`} alt="Global" />
        <h3>Exploring the World</h3>
        <p>I've been lucky enough to explore several countries during college. My favorites are Kyoto, Japan, and Rome, Italy. Traveling has allowed me to meet people from different backgrounds, hear their stories, and see the world through new perspectives. I can't wait to explore more!</p>
      </div>
      </div>
      <div className="hotspot linh-hotspot">
      <div className="story-popup">
        <img src={`${import.meta.env.BASE_URL}photos/linh.png`} alt="Linh" />
        <h3>About Me | Data Science Student at the University of Utah</h3>
        <p>Hi, I'm Linh! I'm born and raised in Vietnam, I moved to the United States as a teenager. Starting over in a new country taught me valuable lessons and shaped me into the person I am today. </p>
      </div>
      </div>
      <div className="hotspot art-hotspot">
      <div className="story-popup">
        <img src={`${import.meta.env.BASE_URL}photos/art.png`} alt="Art" />
        <h3>Through my Palette</h3>
        <p>Art has always been my favorite way to express my creativity. I love experimenting with different colors, painting techniques, and styles.</p>
        <p className="fun-fact">Fun fact: I have my own fashion design collection!!</p>
      </div>
      </div>
      <div className="hotspot computer1-hotspot">
      <div className="story-popup">
        <img src={`${import.meta.env.BASE_URL}photos/computer1.png`} alt="Computer1" />
        <h3>What Drives Me?</h3>
        <p>I didn't start in Data Science! I began in Information Systems, switched to Computer Science for a bigger challenge, and eventually discovered my passion for data.
          Now, I'm a 3rd year Data Science student at the University of Utah with a minor in Information Systems. I'm passionate about ML, data analytics, and software development.
        </p>
        <p className="hire-message">Wanna unlock my full potential? Time for a coffee chat or better yet.. an interview?</p>
      </div>
      </div>

    </div>
  </div>
</section>
{/* page 2 */}
<section className="page-section projects-section">
  <div className="projects-header">
    <h1>My Skills, Projects and Experience</h1>
  </div>

      <div className="interactive-scene">
    <img
      src={`${import.meta.env.BASE_URL}photos/photo3.png`}
      alt="My projects illustration"
      className="projects-art"
    />

    <div className="interactive-objects">
      <img
        src={`${import.meta.env.BASE_URL}photos/computer2.png`}
        alt="Projects"
        className="object computer"
        onClick={() => setActivePopup("projects")}
      />

      <img
        src={`${import.meta.env.BASE_URL}photos/organizer.png`}
        alt="Skills"
        className="object organizer"
        onClick={() => setActivePopup("skills")}
      />

      <img
        src={`${import.meta.env.BASE_URL}photos/folder.png`}
        alt="Experience"
        className="object folder"
        onClick={() => setActivePopup("experience")}
      />
    </div>
    {/* pop ups */}
    {activePopup && (
  <div className="modal-overlay">
    <div
      className="modal-content"
      role="dialog"
      aria-modal="true"
      aria-label={`My ${activePopup}`}
    >
      <button
        className="modal-close"
        onClick={() => setActivePopup(null)}
      >
        ×
      </button>

      {activePopup === "projects" && (
  <>
    {selectedProject === null ? (
      <>
        <h2>My Featured Projects</h2>

        <div className="projects-grid">

          <button
            className="project-card"
            onClick={() => setSelectedProject("portfolio")}
          >
            <h3>Interactive Portfolio</h3>
            <p className="experience-dates">Oct 2026</p>
            <p>
              Designed and developed an interactive portfolio website using React, Vite, JavaScript, and CSS.
            </p>
            <span>React | Vite | JavaScript | CSS</span>
          </button>

          <button
            className="project-card"
            onClick={() => setSelectedProject("finrisk")}
          >
            <h3>FinRisk</h3>
            <p className="experience-dates">Nov 2026 - Present</p>
            <p>
              Analyzed financial data from 30,000 credit card customers, identifying repayment patterns and key indicators of credit default risk.
            </p>
            <span>Python | Pandas | Decision Trees</span>
          </button>

          {/* <button
            className="project-card"
            onClick={() => setSelectedProject("construction")}
          >
            <h3>Construction AI</h3>
            <p>
              Worked on AI-driven construction safety
              analytics, including reporting workflows
              and risk prioritization.
            </p>
            <span>AI | Data Analytics | Safety Reporting</span>
          </button> */}

        </div>
      </>
    ) : (
      <div className="project-details">
        <button
          className="project-back"
          onClick={() => setSelectedProject(null)}
        >
          ← Back to Projects
        </button>

        {selectedProject === "portfolio" && (
          <>
            <h2>Interactive Portfolio</h2>
            <p className="experience-dates">Oct 2026</p>
            <h3>My Contributions</h3>
            <a
              href="https://github.com/linhdieudo146-coder/linh-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="github-link"
            >
              View on GitHub
            </a>
          </>
        )}

        {selectedProject === "finrisk" && (
          <>
            <h2>FinRisk</h2>
            <p>Research Progress</p>
            <p className="experience-dates">Nov 2026 - Present</p>
            <h3>My Contributions</h3>
            <p>
              Analyzed and cleaned a dataset of 30,000 credit card customers using Python and Pandas in Google Colab. Investigated repayment patterns, credit limits, and billing behavior to identify financial risk indicators and compare classification models for predicting credit card default.
            </p>
            <h3>Focus Areas</h3>
            <p>Python | Pandas | Decision Trees</p>
          </>
        )}

        {/* {selectedProject === "construction" && (
          <>
            <h2>Construction AI</h2>
            <h3>Project Work</h3>
            <p>
              Worked on a construction safety analytics
              solution involving worker-submitted incident
              reports, AI-assisted form generation, and
              prioritization of safety risks using
              historical records.
            </p>
            <h3>Focus Areas</h3>
            <p>AI Workflows | Risk Analysis | Reporting</p>
          </>
        )} */}
      </div>
    )}
  </>
)}

      {activePopup === "skills" && (
        <>
          <h2>My Skills Collection</h2>
          <div className="skills-grid">
            <div className="skill-box">
              <h3>Data Analysis, Visualization & Design</h3>
              <p>Pandas | Matplotlib | Seaborn | Tableau | NumPy | Excel | Google Sheets</p>
            </div>
            <div className="skill-box">
              <h3>Programming Languages</h3>
              <p>Python | Java | SQL | JavaScript | C++</p>
            </div>
            <div className="skill-box">
              <h3>Web Development</h3>
              <p>React | Django | HTML | CSS | Flask | Vite</p>
            </div>
            <div className="skill-box">
              <h3>Tools & Platforms</h3>
              <p>GitHub | VS Code | Google Colab | AWS </p>
            </div>
            <div className="skill-box">
              <h3>Design & Creative</h3>
              <p>Blender | Adobe Express | Canva | Procreate</p>
            </div>
            <div className="skill-box">
              <h3>ML & AI</h3>
              <p>Regression | Classification | Clustering | K-means Clustering | Decision Trees </p>
            </div>
          </div>
        </>
      )}


      {activePopup === "experience" && (
  <>
    {selectedExperience === null ? (
      <>
        <h2>My Experience</h2>

        <div className="projects-grid">

          <button
            className="project-card"
            onClick={() => setSelectedExperience("ceob")}
          >
            <h3>Data & Communications Intern</h3>
            <p>Center for Economic Opportunity & Belonging</p>
            <p className="experience-dates">May 2026 - August 2026</p>
            <span>Web Design | Data Management | Communications</span>
          </button>

          <button
            className="project-card"
            onClick={() => setSelectedExperience("crimson")}
          >
            <h3>Data Systems</h3>
            <p>Crimson Projects at U of U | Break Free Candy</p>
            <p className="experience-dates">Feb 2026 - June 2026</p>
            <span>AppSheet | Google Sheets | Inventory Systems</span>
          </button>

        </div>
      </>
    ) : (
      <div className="project-details">

        <button
          className="project-back"
          onClick={() => setSelectedExperience(null)}
        >
          ← Back to Experience
        </button>

        {selectedExperience === "ceob" && (
          <>
            <h2>Data & Communications Intern</h2>
            <p>Center for Economic Opportunity & Belonging</p>
            <p className="experience-dates">May 2026 - August 2026</p>

            <h3>My Contributions</h3>
            <p>
              Redesigned website navigation and managed UCHWA website content.
            </p>

            <h3>Tools & Technologies</h3>
            <p>Duda CMS | Glue Up CRM | Google Apps Script | Canva</p>
          </>
        )}

        {selectedExperience === "crimson" && (
          <>
            <h2>Data Systems</h2>
            <p>Crimson Projects at U of U| Break Free Candy</p>
            <p className="experience-dates">Feb 2026 - June 2026</p>
            <h3>My Contributions</h3>
            <p>
              Developed an inventory management application using
              AppSheet and Google Sheets. 
            </p>
            <p> 
              Worked with a team of 6 people to organize product data,
              and implemented inventory tracking and low-stock alerts.
            </p>

            <h3>Tools & Technologies</h3>
            <p>AppSheet | Google Sheets | Data Management</p>
          </>
        )}

      </div>
    )}
  </>
)}
  </div>
  </div>
    )}
      </div>
</section>


      <section className="page-section contact-section">
        <div className="ContactMe-header">
        <h1>Contact Me</h1>
        </div>
        <div className="contact-buttons">

        <a
          href="https://www.linkedin.com/in/linh-elysia-do-362967277"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          >
          LinkedIn
        </a>
        <a
          href="mailto:linhdieudo146@gmail.com"
          className="contact-button"
          >
          Email
        </a>
        <a
            href={`${import.meta.env.BASE_URL}LinhElysiaResume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          >
          Resume
        </a>

        <a
          href="https://github.com/linhdieudo146-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          >
          GitHub
        </a>
        <a
          href="https://leetcode.com/Linh_elysia/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          >
          LeetCode
        </a>
      </div>
      </section>
    </main>
  )
}
export default App
// update commands
// git add .
// git commit -m "Describe your changes"
// git push origin main
// npm run deploy
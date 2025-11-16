import React from 'react';
import foodImg from '../assets/img/Food_website.png';
import blogImg from '../assets/img/image.png';
import weatherImg from '../assets/img/Weatherimg.png';
import projectileImg from '../assets/img/projectile.png';
import kanbanImg from '../assets/img/kanban_Board.jpg';

const Projects: React.FC = () => {
  return (
    <section className="timeline-section" id="work" style={{scrollMarginTop: '80px', scrollBehavior: 'smooth'}}>
      <div className="timeline">
        <div className="timeline-item sr-element">
          <div className="timeline-dot"></div>
          <div className="project-card">
            <div className="project-header">
              <img src={foodImg} alt="Taste Bites" />
              <h3>Taste Bites (React · TypeScript · Python · Tailwind CSS)</h3>
            </div>
            <ul className="project-description">
              <li>Responsive SPA with React Router & utility-first styling</li>
              <li>Python FAST API for Post call handle and connect to MySQL Database</li>
              <li>Store User Details in Database</li>
              <li>Git feature-branch workflows & automated deployments</li>
            </ul>
            <a href="https://food-recipe.techboy.in/" target="_blank" rel="noopener noreferrer" className="project-link">🔗 View Project</a>
          </div>
        </div>

        <div className="timeline-item sr-element">
          <div className="timeline-dot"></div>
          <div className="project-card">
            <div className="project-header">
              <img src={blogImg} alt="Blogging Website" />
              <h3>Blogging Website (React · TypeScript · PHP · Tailwind CSS)</h3>
            </div>
            <ul className="project-description">
              <li>Responsive SPA with React Router & utility-first styling</li>
              <li>PHP REST API for CRUD operations & Markdown rendering</li>
              <li>Real-time upload/delete plus dynamic likes/views counters</li>
              <li>Git feature-branch workflows & automated deployments</li>
            </ul>
            <a href="https://blog.techboy.in/" target="_blank" rel="noopener noreferrer" className="project-link">🔗 View Project</a>
          </div>
        </div>

        <div className="timeline-item sr-element">
          <div className="timeline-dot"></div>
          <div className="project-card">
            <div className="project-header">
              <img src={weatherImg} alt="Weather App" />
              <h3>Weather Website (HTML · CSS · JavaScript · API Integration)</h3>
            </div>
            <ul className="project-description">
              <li>Fetch API with async/await for live OpenWeatherMap data retrieval</li>
              <li>Dynamic UI updates with vanilla JS and Font Awesome icons.</li>
              <li>Client-side event handling for search, error states, and DOM manipulation.</li>
              <li>Git version control and GitHub Pages for continuous hosting</li>
            </ul>
            <a href="https://aady1311.github.io/Weather-app/" target="_blank" rel="noopener noreferrer" className="project-link">🔗 View Project</a>
          </div>
        </div>

        <div className="timeline-item sr-element">
          <div className="timeline-dot"></div>
          <div className="project-card">
            <div className="project-header">
              <img src={projectileImg} alt="Projectile Motion" />
              <h3>Projectile Motion Simulator (HTML5 Canvas · JavaScript)</h3>
            </div>
            <ul className="project-description">
              <li>Animated 60 FPS projectile trajectories via HTML5 Canvas</li>
              <li>Physics-based motion calculations in a JavaScript Projectile class</li>
              <li>Interactive launch/reset controls with live stats updates</li>
              <li>Responsive canvas resizing with optimized drawing logic</li>
            </ul>
            <a href="https://aady1311.github.io/projectile-motion/" target="_blank" rel="noopener noreferrer" className="project-link">🔗 View Project</a>
          </div>
        </div>

        <div className="timeline-item sr-element">
          <div className="timeline-dot"></div>
          <div className="project-card">
            <div className="project-header">
              <img src={kanbanImg} alt="Kanban Board" />
              <h3>Kanban Board (HTML · CSS · JavaScript)</h3>
            </div>
            <ul className="project-description">
              <li>Create, edit, and delete tasks across "To Do", "In Progress", and "Done" columns.</li>
              <li>Drag-and-drop functionality for seamless task movement between columns.</li>
              <li>Persistent task data using localStorage ensures tasks remain after page reloads.</li>
              <li>Responsive design adapts to various screen sizes, from mobile to desktop.</li>
            </ul>
            <a href="https://aady1311.github.io/Kanban-Board/" target="_blank" rel="noopener noreferrer" className="project-link">🔗 View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
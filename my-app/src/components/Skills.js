import React from 'react';

function Skills() {
  const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Sass'];
  const backendSkills = ['Node.js', 'Express', 'MongoDB', 'Firebase'];
  const toolsSkills = ['Git', 'GitHub', 'VS Code', 'Figma', 'Webpack'];
  
  return (
    <section id="skills" className="skills">
      <div className="section-title">
        <h2>Mes Compétences</h2>
        <div className="underline"></div>
      </div>
      
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skills-list">
            {frontendSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-name">{skill}</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skills-list">
            {backendSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-name">{skill}</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Outils</h3>
          <div className="skills-list">
            {toolsSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-name">{skill}</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

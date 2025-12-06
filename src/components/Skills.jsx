import React from 'react';
import "../style/Skills.css";

function Skills() {
  const skills = [
    { name: 'C++', img: '/portfolio/assets/skill/icon-cpp.svg' },
    { name: 'CSS3', img: '/portfolio/assets/skill/icon-css.svg' },
    { name: 'HTML5', img: '/portfolio/assets/skill/icon-html.svg' },
    { name: 'Java', img: '/portfolio/assets/skill/icon-java.svg' },
    { name: 'JavaScript', img: '/portfolio/assets/skill/icon-js.svg' },
    { name: 'Python', img: '/portfolio/assets/skill/icon-python.svg' },
    { name: 'Qt', img: '/portfolio/assets/skill/icon-qt.svg' },
    { name: 'Raylib', img: '/portfolio/assets/skill/icon-raylib.svg' },
    { name: 'SageMath', img: '/portfolio/assets/skill/icon-sagemath.svg' },
    { name: 'SQL', img: '/portfolio/assets/skill/icon-sql.svg' },
    { name: 'React', img: '/portfolio/assets/skill/icon-react.svg' },
    { name: 'PHP', img: '/portfolio/assets/skill/icon-PHP.svg' },
    { name: 'Angular', img: '/portfolio/assets/skill/icon-angular.svg' },
    { name: 'Webpack', img: '/portfolio/assets/skill/icon-webpack.svg' },
    { name: 'GitHub', img: '/portfolio/assets/skill/icon-github.svg' },
    { name: 'Scrum', img: '/portfolio/assets/skill/icon-jira.svg' },
    { name: 'Laravel', img: '/portfolio/assets/skill/icon-laravel.svg' },
  ];
  
  


  return (
    <section id="skills" className="skills">
      <div className="section-title">
        <h2>Mes Compétences</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} className="skill-image" />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

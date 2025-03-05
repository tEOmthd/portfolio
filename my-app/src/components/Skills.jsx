import React from 'react';
import "../style/Skills.css";

function Skills() {
  const skills = [
    { name: 'C++', img: '/assets/skill/icon-cpp.svg' },
    { name: 'CSS3', img: '/assets/skill/icon-css.svg' },
    { name: 'HTML5', img: '/assets/skill/icon-html.svg' },
    { name: 'Java', img: '/assets/skill/icon-java.svg' },
    { name: 'JavaScript', img: '/assets/skill/icon-js.svg' },
    { name: 'Python', img: '/assets/skill/icon-python.svg' },
    { name: 'Qt', img: '/assets/skill/icon-qt.svg' },
    { name: 'Raylib', img: '/assets/skill/icon-raylib.svg' },
    { name: 'SageMath', img: '/assets/skill/icon-sagemath.svg' },
    { name: 'SQL', img: '/assets/skill/icon-sql.svg' },
    { name: 'React', img: '/assets/skill/icon-react.svg' },
    { name: 'PHP', img: '/assets/skill/icon-PHP.svg' },
    { name: 'Angular', img: '/assets/skill/icon-angular.svg' },
    { name: 'Webpack', img: '/assets/skill/icon-webpack.svg' },
    { name: 'GitHub', img: '/assets/skill/icon-github.svg' },
    { name: 'Scrum', img: '/assets/skill/icon-jira.svg' },
    { name: 'Laravel', img: '/assets/skill/icon-laravel.svg' },
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

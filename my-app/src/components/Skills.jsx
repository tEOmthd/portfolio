import React from 'react';

function Skills() {
  const skills = [
    { name: 'C++', img: ' ../src/assets/skill/icon-cpp.svg' },
    { name: 'CSS3', img: '../src/assets/skill/icon-css.svg' },
    { name: 'HTML5', img: '../src/assets/skill/icon-html.svg' },
    { name: 'Java', img: ' ../src/assets/skill/icon-java.svg' },
    { name: 'JavaScript', img: ' ../src/assets/skill/icon-js.svg' },
    { name: 'Python', img: ' ../src/assets/skill/icon-python.svg' },
    { name : "Qt", img : '../src/assets/skill/icon-qt.svg'},
    { name : "Raylib", img :'../src/assets/skill/icon-raylib.svg'},
    { name : "SageMath", img : '../src/assets/skill/icon-sagemath.svg'},
    { name: 'SQL', img: ' ../src/assets/skill/icon-sql.svg' },
    { name: 'React', img: '../src/assets/skill/icon-react.svg' },
    
    { name: 'Webpack', img: '../src/assets/skill/icon-webpack.svg' },
    { name: 'GitHub', img: ' ../src/assets/skill/icon-github.svg' },

    { name: 'Scrum', img: ' ../src/assets/skill/skillicon-jira.svg' },
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

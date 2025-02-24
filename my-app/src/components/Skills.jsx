import React from 'react';

function Skills() {
  const skills = [
    { name: 'C++', img: ' ../src/assets/icon-cpp.svg' },
    { name: 'CSS3', img: '../src/assets/icon-css.svg' },
    { name: 'HTML5', img: '../src/assets/icon-html.svg' },
    { name: 'Java', img: ' ../src/assets/icon-java.svg' },
    { name: 'JavaScript', img: ' ../src/assets/icon-js.svg' },
    { name: 'Python', img: ' ../src/assets/icon-python.svg' },
    { name : "Qt", img : '../src/assets/icon-qt.svg'},
    { name : "Raylib", img :'../src/assets/icon-raylib.svg'},
    { name : "SageMath", img : '../src/assets/icon-sagemath.svg'},
    { name: 'SQL', img: ' ../src/assets/icon-sql.svg' },
    { name: 'React', img: '../src/assets/icon-react.svg' },
    
    { name: 'Webpack', img: '../src/assets/icon-webpack.svg' },
    { name: 'GitHub', img: ' ../src/assets/icon-github.svg' },

    { name: 'Scrum', img: ' ../src/assets/icon-jira.svg' },
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

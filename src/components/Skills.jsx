import "../style/Skills.css";

const skills = [
  { name: 'C++', img: '/portfolio/assets/skill/icon-cpp.svg' },
  { name: 'Java', img: '/portfolio/assets/skill/icon-java.svg' },
  { name: 'JavaScript', img: '/portfolio/assets/skill/icon-js.svg' },
  { name: 'Python', img: '/portfolio/assets/skill/icon-python.svg' },
  { name: 'PHP', img: '/portfolio/assets/skill/icon-PHP.svg' },
  { name: 'React', img: '/portfolio/assets/skill/icon-react.svg' },
  { name: 'Angular', img: '/portfolio/assets/skill/icon-angular.svg' },
  { name: 'Laravel', img: '/portfolio/assets/skill/icon-laravel.svg' },
  { name: 'HTML5', img: '/portfolio/assets/skill/icon-html.svg' },
  { name: 'CSS3', img: '/portfolio/assets/skill/icon-css.svg' },
  { name: 'SQL', img: '/portfolio/assets/skill/icon-sql.svg' },
  { name: 'Qt', img: '/portfolio/assets/skill/icon-qt.svg' },
  { name: 'Raylib', img: '/portfolio/assets/skill/icon-raylib.svg' },
  { name: 'SageMath', img: '/portfolio/assets/skill/icon-sagemath.svg' },
  { name: 'Webpack', img: '/portfolio/assets/skill/icon-webpack.svg' },
  { name: 'GitHub', img: '/portfolio/assets/skill/icon-github.svg' },
  { name: 'Scrum', img: '/portfolio/assets/skill/icon-jira.svg' },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Compétences</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

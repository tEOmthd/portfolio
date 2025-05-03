import { useState } from "react";
import "../style/Experiences.css";

export default function ExperienceSection() {
  const [activeCategory, setActiveCategory] = useState("diplomes");

  const experienceData = {
    diplomes: [
      {
        id: 1,
        title: "BUT Informatique",
        institution: "IUT Aix-Marseille",
        lieu: "Arles",
        period: "2023 - aujourd'hui",
        inProgress: true,
        currentYear: 2,
        totalYears: 3,
        description:
          "Actuellement en deuxième année de BUT Informatique à l'IUT Aix-Marseille, cette formation offre une approche complète du numérique. J'y ai aussi abordé les méthodologies agiles et le travail collaboratif, préparant ainsi efficacement aux enjeux du secteur informatique.",
      },

      {
        id: 2,
        title: "Baccalauréat Général",
        institution: "Lycée Philippe Lamour",
        lieu: "Nîmes",
        specialites: [
          "Mathématiques",
          "Numérique et Sciences Informatiques",
          "Anglais Monde contemporain",
        ],
        Options: ["Mathématiques complémentaires", "Section Euro Anglais"],
        mention: "Assez Bien",
        period: "2020-2023",
      },
    ],
    certifications: [
      {
        id: 1,
        title: "Cambridge English B2 First",
        institution: "Cambridge University",
        description:
          "Certificat de niveau B2 en anglais, validant mes compétences linguistiques dans un contexte académique et professionnel.",
        period: "2023",
      },
    ],
    experience: [
      {
        id: 1,
        title: "Stage Informatique",
        institution: "Harsco Environmental",
        lieu: "Fos-sur-mer",
        period: "2025",
        duration: "3 mois",
        description:
          "Au sein de Harsco, ma mission principale a été de digitalisé les rapports papier des différents chantiers. Pour cela, aider au developpement une PowerApp qui remplacais ces rapports, proposant une application directement sur tablette afin que les employes remplisse directement le rapport et qu'il soit ajouter à la base de données. L'environnement de travail était dynamique et collaboratif : nous échangions régulièrement par email et Teams, et nous présentions l'application aux responsables sur le terrain pour recueillir leurs retours et l'ajuster en continu. En adaptant rapidement la solution aux besoins exprimés par les équipes.",
      },
    ],
  };

  // Mappings de titres d'affichage
  const categoryTitles = {
    diplomes: "Diplômes",
    certifications: "Certifications",
    experience: "Expériences professionnelles",
  };

  // Gestion du changement de catégorie
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="experience" id="experiences">
      <h2 className="experience-title">Mon Parcours</h2>

      {/* Navigation des catégories */}
      <div className="experience-tabs">
        {Object.keys(categoryTitles).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {categoryTitles[category]}
          </button>
        ))}
      </div>

      {/* Contenu de la catégorie active */}
      <div className="experience-container">
        {experienceData[activeCategory].map((item) => (
          <div key={item.id} className="experience-card">
            <div className="experience-card-header">
              <h3>{item.title}</h3>
              <div className="institution">{item.institution}</div>
              {item.lieu && <div className="lieu">{item.lieu}</div>}
              {item.duration && <div className="duration">{item.duration}</div>}
              <div className="period">{item.period}</div>
              {item.mention && <div className="mention">{item.mention}</div>}
              {item.inProgress && <div className="status">En cours</div>}
            </div>

            <div className="experience-card-content">
              {item.description && <p>{item.description}</p>}

              {item.inProgress && (
                <div className="progression">
                  <div>
                    Progression : Année {item.currentYear}/{item.totalYears}
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${(item.currentYear / item.totalYears) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {item.specialites && (
                <div className="specialites">
                  <h4>Spécialités</h4>
                  <ul>
                    {item.specialites.map((specialite, index) => (
                      <li key={index}>{specialite}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.Options && (
                <div className="options">
                  <h4>Options</h4>
                  <ul>
                    {item.Options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {(item.skills || item.competences) && (
              <div className="experience-card-footer">
                <div className="ExperiencesSkills">
                  {item.skills &&
                    item.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  {item.competences &&
                    item.competences.map((comp, index) => (
                      <span key={index} className="skill-tag">
                        {comp}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import "../style/Experiences.css";

const experienceData = {
  diplomes: [
    {
      id: 1,
      title: "BUT Informatique",
      institution: "IUT Aix-Marseille",
      lieu: "Arles",
      period: "2023 — aujourd'hui",
      inProgress: true,
      currentYear: 3,
      totalYears: 3,
      description:
        "Formation complète couvrant le développement logiciel, les bases de données, les réseaux, et les méthodologies agiles. Approche à la fois théorique et pratique avec de nombreux projets concrets.",
    },
    {
      id: 2,
      title: "Baccalauréat Général",
      institution: "Lycée Philippe Lamour",
      lieu: "Nîmes",
      period: "2020 — 2023",
      mention: "Assez Bien",
      specialites: ["Mathématiques", "Numérique et Sciences Informatiques", "Anglais Monde contemporain"],
      options: ["Mathématiques complémentaires", "Section Euro Anglais"],
    },
  ],
  certifications: [
    {
      id: 1,
      title: "Cambridge English B2 First",
      institution: "Cambridge University",
      period: "2023",
      description:
        "Certification de niveau B2 en anglais, validant mes compétences linguistiques dans un contexte académique et professionnel.",
    },
  ],
  experience: [
    {
      id: 1,
      title: "Stage Informatique",
      institution: "Harsco Environmental",
      lieu: "Fos-sur-Mer",
      period: "2025",
      duration: "3 mois",
      description:
        "Développement d'une PowerApp pour digitaliser les rapports papier des chantiers. L'application permettait aux employés de remplir les rapports sur tablette, directement intégrés à la base de données. Travail en environnement agile avec présentations régulières aux responsables terrain.",
    },
  ],
};

const categoryTitles = {
  diplomes: "Diplômes",
  certifications: "Certifications",
  experience: "Expériences",
};

export default function Experiences() {
  const [active, setActive] = useState("diplomes");

  return (
    <section className="experience" id="experiences">
      <div className="container">
        <div className="section-header">
          <h2>Parcours</h2>
        </div>

        <div className="experience-tabs">
          {Object.keys(categoryTitles).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={active === cat ? "active" : ""}
            >
              {categoryTitles[cat]}
            </button>
          ))}
        </div>

        <div className="experience-list">
          {experienceData[active].map((item) => (
            <div key={item.id} className="experience-card">
              <div className="experience-card-header">
                <h3>{item.title}</h3>
                <span className="institution">{item.institution}</span>
                {item.lieu && <span className="lieu">{item.lieu}</span>}
                {item.duration && <span className="duration">{item.duration}</span>}
                {item.inProgress && <span className="status-badge">En cours</span>}
                {item.mention && <span className="mention-badge">{item.mention}</span>}
                <span className="period">{item.period}</span>
              </div>

              <div className="experience-card-content">
                {item.description && <p>{item.description}</p>}

                {item.inProgress && (
                  <div className="progress-container">
                    <div className="progress-label">
                      Progression — Année {item.currentYear}/{item.totalYears}
                    </div>
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${(item.currentYear / item.totalYears) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                {item.specialites && (
                  <div className="exp-section">
                    <h4>Spécialités</h4>
                    <ul>
                      {item.specialites.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                )}

                {item.options && (
                  <div className="exp-section">
                    <h4>Options</h4>
                    <ul>
                      {item.options.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

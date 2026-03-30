---
name: new-experience
description: Ajouter une nouvelle expérience, diplôme ou certification au portfolio. Utilise cette skill quand l'utilisateur veut mettre à jour son parcours.
argument-hint: "[type: diplome|certification|experience]"
---

Ajoute une nouvelle entrée à la section Parcours du portfolio de Téo Mathiaud.

## Type d'entrée : $ARGUMENTS

## Ce que tu dois faire

1. **Lis** `src/components/Experiences.jsx` pour voir la structure exacte de `experienceData`

2. **Identifie la catégorie** selon `$ARGUMENTS` ou en demandant si absent :
   - `diplomes` — formation académique (BUT, Licence, Master, Bac...)
   - `certifications` — certifications professionnelles ou linguistiques
   - `experience` — stages, alternances, emplois

3. **Collecte les infos** selon la catégorie :

   **Pour un diplôme :**
   - Titre (ex: "Licence Professionnelle Développement Web")
   - Établissement
   - Lieu
   - Période (ex: "2025 — 2026")
   - En cours ? (oui/non + année actuelle / total)
   - Mention (optionnel)
   - Spécialités (liste, optionnel)
   - Options (liste, optionnel)

   **Pour une certification :**
   - Titre
   - Organisme émetteur
   - Année
   - Description courte

   **Pour une expérience professionnelle :**
   - Titre du poste
   - Entreprise
   - Lieu
   - Période
   - Durée (ex: "6 mois")
   - Description du rôle et des missions

4. **Génère l'entrée** avec un `id` = `max(ids dans la catégorie) + 1`

5. **Ajoute-la** dans la bonne catégorie de `experienceData` dans `src/components/Experiences.jsx`

6. **Vérifie** que les entrées sont ordonnées par date décroissante (plus récent en premier)

## Format selon la catégorie

```js
// Diplôme en cours
{
  id: N,
  title: "Titre",
  institution: "Établissement",
  lieu: "Ville",
  period: "2024 — aujourd'hui",
  inProgress: true,
  currentYear: 1,
  totalYears: 3,
  description: "Description...",
}

// Certification
{
  id: N,
  title: "Titre",
  institution: "Organisme",
  period: "2024",
  description: "Description...",
}

// Expérience pro
{
  id: N,
  title: "Poste",
  institution: "Entreprise",
  lieu: "Ville",
  period: "2025",
  duration: "3 mois",
  description: "Description des missions...",
}
```

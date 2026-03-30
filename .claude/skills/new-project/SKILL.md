---
name: new-project
description: Ajouter un nouveau projet au portfolio. Utilise cette skill quand l'utilisateur veut ajouter un projet à la section Projets.
argument-hint: "[titre du projet]"
---

Ajoute un nouveau projet au portfolio de Téo Mathiaud.

## Projet à ajouter

Titre : $ARGUMENTS

## Ce que tu dois faire

1. **Collecte les infos** — si elles ne sont pas toutes fournies, demande-les une par une :
   - Titre du projet
   - Description courte (1-2 phrases pour la carte)
   - Tags / technologies (ex: `['React', 'JavaScript']`)
   - Lien GitHub (ou `'propriete-iut'` si code non disponible)
   - Chemin vers le screenshot (dans `public/assets/projet/`)
   - Description longue (pour le modal)
   - Défis techniques (liste de 3-5 points)
   - Approches et solutions (liste de 3-5 points)
   - Compétences acquises (liste de 3-5 points)

2. **Lis** `src/components/Projects.jsx` pour voir la structure exacte du tableau `projects`

3. **Ajoute l'entrée** dans le tableau `projects` de `src/components/Projects.jsx` en suivant exactement le même format que les entrées existantes. L'`id` doit être `max(ids existants) + 1`.

4. **Vérifie le filtre** — si le projet utilise un nouveau tag non présent dans `FILTERS`, propose de l'ajouter.

5. **Signale** si un screenshot est manquant dans `public/assets/projet/`.

## Format d'une entrée projet

```js
{
  id: N,
  title: "Titre du projet",
  description: "Description courte pour la carte.",
  image: "/portfolio/assets/projet/NomDuScreenshot.png",
  tags: ['Tech1', 'Tech2'],
  codeLink: 'https://github.com/tEOmthd/nom-repo', // ou 'propriete-iut'
  Description: "Description longue pour le modal.",
  DefisTechniques: [
    "Défi 1",
    "Défi 2",
  ],
  ApprochesEtSolutions: [
    "Solution 1",
    "Solution 2",
  ],
  CompetencesAcquises: [
    "Compétence 1",
    "Compétence 2",
  ]
}
```

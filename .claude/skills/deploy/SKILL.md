---
name: deploy
description: Pipeline complet avant déploiement — lint, tests, build, puis deploy sur GitHub Pages. Utilise cette skill avant de publier une nouvelle version du portfolio.
allowed-tools: Bash
---

Lance le pipeline de déploiement du portfolio de Téo Mathiaud.

## Étapes

Exécute chaque étape dans l'ordre. **Arrête-toi et signale l'erreur si une étape échoue** — ne passe pas à la suivante.

### 1. Lint
```bash
npm run lint
```
Si des erreurs : liste-les et demande confirmation avant de continuer.

### 2. Tests
```bash
npm run test:run
```
Si des tests échouent : affiche lesquels et arrête le pipeline.

### 3. Build
```bash
npm run build
```
Vérifie que le build se termine sans erreur. Note la taille des chunks.

### 4. Audit de sécurité
```bash
npm audit --audit-level=high
```
Si des vulnérabilités HIGH ou CRITICAL : signale-les. Les vulnérabilités MODERATE sont signalées mais ne bloquent pas.

### 5. Confirmation
Résume ce qui va être déployé :
- Branche actuelle : `git branch --show-current`
- Dernier commit : `git log -1 --oneline`

Demande confirmation explicite avant de lancer le déploiement.

### 6. Déploiement (après confirmation)
```bash
npm run deploy
```

## Rapport final

Une fois terminé, affiche :
- ✅ ou ❌ pour chaque étape
- L'URL du portfolio : https://tEOmthd.github.io/portfolio
- Le commit déployé

---
title: "Hugo : des sites ultra-rapides, sans base de données"
slug: hugo-site-statique
date: 2026-09-29T10:00:00+02:00
description: "Pourquoi nous construisons la plupart de nos sites vitrines avec Hugo, un générateur de sites statiques : vitesse, sécurité, coût d'hébergement quasi nul."
techno: Hugo
icone: hugo
couleur: rose
---

Ce site que vous lisez est fait avec **Hugo**. Comme la plupart des sites vitrines que nous livrons. Voici pourquoi.

## Un site « statique », c'est quoi ?

Un site classique (WordPress par exemple) fabrique chaque page **au moment où le visiteur la demande** : le serveur interroge une base de données, assemble la page, puis l'envoie. À chaque visite.

Un générateur de sites statiques comme Hugo fait ce travail **une seule fois, à l'avance**. Il prend vos textes, vos images et le design, et produit des pages HTML prêtes à l'emploi. Le serveur n'a plus qu'à les servir, comme on tend une feuille déjà imprimée.

Hugo est écrit en Go et il est réputé pour sa vitesse : il génère des centaines de pages en quelques secondes.

## Ce que ça change pour vous

- **La vitesse.** Pas de calcul ni de base de données à chaque visite : les pages s'affichent quasi instantanément. Google aime les sites rapides, vos visiteurs aussi.
- **La sécurité.** Pas de base de données, pas d'interface d'administration exposée, pas d'extensions à mettre à jour chaque semaine. Il n'y a presque rien à pirater.
- **Le coût.** Des fichiers statiques s'hébergent pour quelques euros par mois, voire gratuitement (GitHub Pages, GitLab Pages, Netlify, Cloudflare Pages…).
- **La tranquillité.** Pas de mise à jour de plugin qui casse le site un vendredi soir. Un site Hugo peut tourner des années sans intervention.

## Et pour modifier les textes ?

Les contenus sont écrits en **Markdown**, un format de texte très simple :

```markdown
## Nos horaires

Nous sommes ouverts **du mardi au samedi**, de 9 h à 18 h.
```

Si vous préférez une interface avec des boutons, on peut brancher un **CMS headless** (comme Decap CMS) : vous modifiez vos pages dans un back-office, et le site se régénère tout seul. Nous en parlons dans notre article sur le [headless](../cms-headless/).

## Les limites, honnêtement

Hugo n'est pas fait pour tout :

- **Pas de fonctions dynamiques natives** : un formulaire de contact passe par un petit service externe, un espace client ou une boutique complexe demandent une autre architecture.
- **Chaque modification déclenche une reconstruction** du site. C'est automatique et ça prend quelques secondes, mais ce n'est pas instantané comme sur WordPress.

## Pour quels projets ?

Hugo est idéal pour les **sites vitrines**, les **blogs**, les **documentations**, les **pages de présentation d'une appli** ou d'un **logement en location**. En clair : tous les sites où le contenu change quelques fois par mois, pas à chaque seconde.

Pour les projets plus dynamiques, nous associons un site statique à une API, par exemple avec [Symfony et API Platform](../symfony-api-platform/).

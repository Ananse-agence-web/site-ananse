---
title: "CMS headless : séparer le contenu de l'affichage"
slug: cms-headless
date: 2026-09-29T12:00:00+02:00
description: "Un CMS headless gère vos contenus et les envoie à votre site, votre appli ou n'importe quel écran. Plus rapide, plus sûr, plus flexible : à condition d'en avoir besoin."
techno: Headless
icone: headless
couleur: or
---

« Headless » veut dire « sans tête ». Derrière ce nom un peu étrange se cache une idée simple : **séparer l'endroit où l'on écrit les contenus de l'endroit où on les affiche**.

## Le CMS classique : tout en un

Avec un CMS traditionnel comme WordPress, le même outil fait tout : il stocke vos textes, gère l'administration **et** fabrique les pages du site. Le contenu et l'affichage sont soudés.

C'est pratique au départ. Mais vos contenus sont prisonniers de ce site : les réutiliser dans une appli mobile, un écran en magasin ou un autre site devient compliqué.

## Le CMS headless : le contenu d'un côté, l'affichage de l'autre

Un CMS headless ne s'occupe **que des contenus**. Il les met à disposition au travers d'une **API**, c'est-à-dire une porte d'accès standard que n'importe quelle application peut interroger.

```text
                    ┌─► Site web (Hugo, Next.js, Nuxt…)
CMS headless ─ API ─┼─► Application mobile (PWA)
                    └─► Écran, borne, newsletter…
```

Vous écrivez une fois, et vos contenus apparaissent partout.

## Les avantages

- **Performance** : le site peut être statique (par exemple avec [Hugo](../hugo-site-statique/)) et donc très rapide.
- **Sécurité** : l'administration n'est pas exposée sur le site public.
- **Liberté** : on peut refaire le design, ou changer de technologie d'affichage, sans toucher aux contenus.
- **Multicanal** : un seul back-office alimente le site, l'appli et le reste.

## Quelques outils

- **Decap CMS** : les contenus sont stockés directement dans les fichiers du site. Idéal pour un site vitrine Hugo, sans serveur supplémentaire.
- **Strapi** ou **Directus** : de vrais back-offices, avec une base de données, des rôles et une API prête à l'emploi.
- **WordPress en mode headless** : on garde l'interface que vos équipes connaissent, et on affiche les contenus ailleurs.
- **Une API sur mesure**, par exemple avec [Symfony et API Platform](../symfony-api-platform/), quand vos contenus ont des règles métier bien à vous.

## Les inconvénients

- **Plus de pièces** : un CMS d'un côté, un site de l'autre. L'architecture initiale demande plus de réflexion.
- **L'aperçu** : voir sa page avant publication demande un peu de configuration.
- **Sur-dimensionné pour un petit site** : pour cinq pages qui changent deux fois par an, un site statique simple suffit largement.

## Notre conseil

Le headless devient intéressant dès que vos contenus doivent vivre **à plusieurs endroits**, ou que plusieurs personnes les mettent à jour régulièrement. Pour un site vitrine modeste, nous commençons simple, et nous ajoutons un CMS le jour où le besoin se présente.

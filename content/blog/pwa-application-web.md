---
title: "PWA : une vraie appli mobile, sans passer par les stores"
slug: pwa-application-web
date: 2026-09-29T11:00:00+02:00
description: "Une Progressive Web App s'installe sur le téléphone, fonctionne hors-ligne et coûte bien moins cher qu'une appli native. Voici quand c'est le bon choix."
techno: PWA
icone: pwa
couleur: vert
---

Vous voulez une application mobile. Faut-il forcément développer une appli pour l'App Store et une autre pour Google Play ? Pas toujours. Une **PWA** (Progressive Web App) peut suffire, pour une fraction du prix.

## Une PWA, qu'est-ce que c'est ?

C'est un **site web qui se comporte comme une application**. Le visiteur l'ouvre dans son navigateur, puis peut l'**installer sur son écran d'accueil** en un geste. Elle s'ouvre alors en plein écran, avec son icône, comme n'importe quelle appli.

Deux briques techniques rendent cela possible :

- **Le manifeste** : un petit fichier qui décrit l'appli (nom, icône, couleurs, mode plein écran).
- **Le service worker** : un script qui tourne en arrière-plan et garde en mémoire ce qu'il faut pour que l'appli **fonctionne sans réseau**.

```json
{
  "name": "Mon appli",
  "short_name": "Appli",
  "start_url": "./",
  "display": "standalone",
  "icons": [{ "src": "icone-512.png", "sizes": "512x512", "type": "image/png" }]
}
```

## Les avantages

- **Une seule appli pour tous les appareils** : iPhone, Android, ordinateur. Un seul code à maintenir.
- **Pas de store** : pas de validation à attendre, pas de commission sur les ventes, les mises à jour arrivent immédiatement.
- **Hors-ligne** : l'appli reste utilisable dans une cave, un parking souterrain ou à la campagne.
- **Un simple lien suffit** pour la partager.

C'est le choix que nous avons fait pour **État des lieux Offline** : l'état des lieux se fait souvent dans des logements sans réseau, et toutes les données restent dans le téléphone.

## Les limites

- **iPhone plus restrictif** : Apple limite certaines fonctions des PWA. Les notifications, par exemple, ne sont possibles qu'une fois l'appli installée sur l'écran d'accueil, et depuis iOS 16.4.
- **Accès matériel partiel** : caméra, géolocalisation et partage fonctionnent bien, mais certains capteurs ou le Bluetooth restent réservés aux applis natives selon les appareils.
- **Pas de vitrine dans les stores** : si votre public cherche d'abord sur l'App Store, il faudra le guider autrement (site, QR code, e-mail).

## Alors, PWA ou appli native ?

Choisissez une **PWA** si votre appli sert surtout à saisir, consulter ou partager des informations : outils métier, formulaires, catalogues, réservations, check-lists terrain.

Préférez une **appli native** si vous avez besoin d'un accès poussé au téléphone (jeux 3D, Bluetooth, fonctions en arrière-plan) ou d'une présence forte dans les stores.

Dans le doute, une PWA est souvent un excellent **premier pas** : rapide à livrer, elle permet de valider votre idée avant d'investir dans du natif.

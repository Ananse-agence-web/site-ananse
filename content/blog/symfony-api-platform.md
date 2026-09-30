---
title: "Symfony et API Platform : une API solide en un temps record"
slug: symfony-api-platform
date: 2026-09-29T13:00:00+02:00
description: "Pour les applications qui ont besoin d'un vrai back-end, nous utilisons Symfony et API Platform : une API documentée, sécurisée et évolutive, construite très vite."
techno: Symfony & API Platform
icone: api
couleur: terre
---

Un site vitrine peut se passer de serveur. Mais dès qu'une application gère des **comptes utilisateurs, des réservations, des paiements ou des données métier**, il lui faut un back-end fiable. Pour cela, nous aimons beaucoup le duo **Symfony + API Platform**.

## Symfony, la base solide

**Symfony** est un framework PHP français, utilisé par de nombreuses entreprises et administrations. Ses points forts :

- **Robuste et éprouvé** : des versions à support long (LTS) maintenues pendant des années.
- **Modulaire** : on n'embarque que les briques nécessaires.
- **Bien outillé** : sécurité, formulaires, e-mails, files de tâches, tests… tout est prévu.
- **Un grand vivier de développeurs** : votre projet ne dépend pas d'une seule personne.

## API Platform, l'accélérateur

**API Platform** s'appuie sur Symfony pour créer des **API web** à partir de la simple description de vos données. On décrit une « ressource », et le framework s'occupe du reste :

```php
use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ApiResource]
class Logement
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    public ?int $id = null;

    #[ORM\Column]
    public string $nom = '';

    #[ORM\Column]
    public int $capacite = 2;
}
```

Avec ces quelques lignes, on obtient une API complète pour lister, créer, modifier et supprimer des logements, avec :

- **une documentation interactive** (OpenAPI) générée automatiquement ;
- **la pagination, les filtres et le tri** ;
- **la validation** des données envoyées ;
- **la sécurité** par rôle ou par propriétaire ;
- le choix entre **REST et GraphQL**.

API Platform propose aussi une interface d'administration générée à partir de l'API, bien pratique pour un back-office.

## Ce que ça change pour votre projet

- **Moins de temps sur la plomberie**, plus sur ce qui fait la valeur de votre projet.
- **Une API documentée dès le premier jour** : un autre prestataire, une appli mobile ou un partenaire peuvent s'y brancher facilement.
- **Une architecture qui grandit** : on commence petit, on ajoute des ressources et des règles au fil des besoins.

## Le trio que nous recommandons

Pour une application moderne, nous combinons souvent :

1. **Symfony + API Platform** pour les données et les règles métier ;
2. une **[PWA](../pwa-application-web/)** pour l'interface, installable et utilisable hors-ligne ;
3. un **site statique [Hugo](../hugo-site-statique/)** pour la vitrine et le référencement.

Chaque brique fait une chose, et la fait bien. C'est aussi ça, l'esprit [headless](../cms-headless/).

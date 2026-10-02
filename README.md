# Ananse — site vitrine de l'agence

Site Hugo (extended **0.121.1**), sans framework CSS, sans police externe, **sans cookie ni traceur**.

    hugo server   # http://localhost:1313/ananse/

Ou double-cliquer sur `voir-le-site.bat` : construit le site dans `_apercu/` (ignoré par git) et l'ouvre sur http://127.0.0.1:1400/.

| Quoi | Fichier |
|---|---|
| E-mail, clé Web3Forms, menu | `hugo.toml` |
| Offres | `data/offres.yaml` |
| Réalisations (+ captures dans `static/img/realisations/`) | `data/realisations.yaml` |
| Nos applis | `data/applis.yaml` |
| Textes de l'accueil | `data/accueil.yaml` (gabarit : `layouts/index.html`) |
| Mascotte (poses : salut, ordi, loupe, telephone) | `layouts/partials/mascotte.html` |
| Styles | `assets/css/main.css` |
| Textes de la page Location & Airbnb | `data/immobilier.yaml` (gabarit : `layouts/_default/immobilier.html`) |
| Articles du blog | `content/blog/*.md` |
| Pages légales (compléter les mentions entre crochets) | `content/*.md` |

Captures du portfolio : `node capture.mjs` (Playwright).

Chaque push sur `main` publie le site sur Cloudflare Pages.

## Administration (Decap CMS)

https://www.ananse.fr/admin/ : modifier les textes, les offres, les réalisations, les pages légales, et écrire des articles de blog. Chaque enregistrement crée un commit sur `main`.

- Configuration : `static/admin/config.yml`
- Images des articles : `static/img/blog/`
- Connexion GitHub : `functions/api/auth.js` et `functions/api/callback.js` (Cloudflare Pages Functions). **Service commun** : tous les sites Hugo en `*.ananse.fr` et `*.an6.fr` se connectent via `base_url: https://www.ananse.fr`. Variables à définir dans Cloudflare Pages : `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` (application OAuth GitHub de l'organisation, callback `https://www.ananse.fr/api/callback`).

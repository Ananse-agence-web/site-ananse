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
| Page d'accueil | `layouts/index.html` |
| Mascotte (poses : salut, ordi, loupe, telephone) | `layouts/partials/mascotte.html` |
| Styles | `assets/css/main.css` |
| Page Location & Airbnb | `layouts/_default/immobilier.html` |
| Articles du blog | `content/blog/*.md` |
| Pages légales (compléter les mentions entre crochets) | `content/*.md` |

Captures du portfolio : `node capture.mjs` (Playwright).

Chaque push sur `main` publie le site sur GitHub Pages (`.github/workflows/hugo.yml`).

@echo off
rem Construit le site dans le dossier _apercu puis l'ouvre dans le navigateur.
rem Double-cliquez sur ce fichier. Fermez la fenetre noire pour arreter l'apercu.
cd /d "%~dp0"
echo Construction du site...
if exist _apercu rmdir /s /q _apercu
hugo --quiet --baseURL "http://127.0.0.1:1400/" -d _apercu || (echo Echec de la construction & pause & exit /b 1)
echo Site construit dans le dossier _apercu
echo Ouverture de http://127.0.0.1:1400/ ...
start "" "http://127.0.0.1:1400/"
python -m http.server 1400 -d _apercu


# Bulletin 
Cette application est une ré-écriture d'une vielle application de gestion d'une classe d'école primaire permettant :
* la consultation du socle commun
* la gestion des élèves
* la saisie de notes
* la préparation de la période suivante par la saisie d'objectif par élève et par compétence
* l'édition de bulletin scolaire
* la saisie et l'édition du cahier journal

# Angular
Cette nouvelle version de Bulletin est une occasion de découvrir Angular (version 4.3)

# Documentation Angular CLI :
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via `ng serve`.

En cas de problème avec fsevents, exécuter npm run preinstall avant npm install (voir https://github.com/npm/npm/issues/9204#issuecomment-252076522)

# Protractor offline

En cas de difficulté de démarrage des tests e2e, modifier la date des fichiers textes du répertoire node_modules\protractor\node_modules\webdriver-manager\selenium. Ainsi Selenium acceptera de démarrer Chrome.
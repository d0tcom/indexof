---
author: "Jordan L."
title: "Démarrer un nouveau projet Laravel"
summary: Les étapes de création d'un nouveau projet avec Laravel 8.0
date: 2021-03-27
tags: ["Laravel", "php"]
categories: ["tutoriels", "laravel", "php"]
ShowToc: true
TocOpen: true
---

## Installer PHP et MySQL (simplement)

Vous aurez besoin d'installer PHP et MySQL. Un des moyens très simples pour le faire est d'installer Laragon ou encore XAMPP.

- [Télécharger XAMPP](https://www.apachefriends.org/fr/index.html)
- [Télécharger Laragon](https://laragon.org/download/)

## Installer Composer

Il faudra ensuite installer Composer.
Composer est un gestionnaire de paquets pour PHP, il permet d'installer des packages et des librairies pour notre projet sur Laravel. (C'est un peu comme NPM pour NodeJS)

[Télécharger Composer](https://getcomposer.org/)

Vérifiez que composer est installé, tapez dans l'invite de commande :

```
composer -V
```

La dernière version de Composer que vous avez installé devrait s'afficher. Si ce n'est pas le cas, il y a un problème.

## Installer Laravel

Pour installer Laravel, tapez dans l'invite de commande :

```
composer global require laravel/installer
```

Cela va installer le package de manière globale. Vous pourrez ensuite utiliser Laravel pour créer un projet n'importe où sur votre ordinateur.

---

## Créer un projet

**Avec l'installeur :** Tapez dans l'invite de commande :

```
laravel new nomdevotreprojet
```

Cela va prendre un peu de temps pour créer tous la structure, les dossiers etc.

Vous pourrez ensuite vous rendre dans le dossier "nomdevotreprojet" avec votre éditeur.

**Avec Composer :** Si vous n'avez pas installé l'installeur Laravel, vous pouvez également créer votre projet via composer :

```
composer create-project laravel/laravel nomdevotreprojet --prefer-dist
```

**Avec Laragon :**
Directement par le menu,
Menu -> "Créer un site web rapidement" -> "Laravel"

## Lancer un serveur de développement

Pour lancer un serveur de développement pour voir votre projet en ligne, tapez dans l'invite de commande :

```
php artisan serve
```

Par défaut le port utilisé par ce serveur est le port 8000. Si vous utilisez déjà ce port, vous pouvez spécifier dans la commande celui que vous voulez utiliser grâce au flag **--port=8080** par exemple.

```
php artisan serve --port=8080
```

**Avec Laragon :**
L'avantage de Laragon est qu'il créée automatiquement un hôte virtuel (de type http: // nomdevotreprojet.test) pour chaque nouveau projet (Vous devrez peut-être appuyez sur Stop puis Start pour que l(hôte soit actif)
Le serveur est alors accessible via le menu de laragon :
Menu -> "www" -> nomdevotreprojet

## Liens utiles

- [Voir la documentation de Laravel 8.x](https://laravel.com/docs/8.x)
- [Télécharger Laragon](https://laragon.org/download/)
- [Télécharger XAMPP](https://www.apachefriends.org/fr/index.html)
- [Télécharger Composer](https://getcomposer.org/)

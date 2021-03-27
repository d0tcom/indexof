---
title: "Installer le CMS Hugo sur Windows 10"
summary: Comment installer le CMS Hugo sur Windows 10
author: "Jordan L."
date: 2021-03-26
aliases: ["/creer-un-site-avec-le-cms-hugo"]
tags: ["Hugo", "CMS"]
categories: ["tutoriels"]
---

## 💾 Télécharger le binaire

Nous allons télécharger la dernière version du CMS que l'on peut [trouver ici](https://github.com/gohugoio/hugo/releases).

Déplacez l'executable **"hugo.exe"** dans un dossier que vous allez créer **"C:\Hugo\bin\"** par exemple.

---

## Rendre la commande "hugo" disponible

Pour pouvoir utiliser la commande "hugo" dans notre terminal, nous allons la rendre disponible dans les variables d'environnement Windows 10. (PATH)

- Tapez "Variables d'environnement.." dans la barre de recherche Windows.
- Variables d'environnement...
- Modifier la variable "Path"
- Nouveau
- C:\Hugo\bin
- OK

> Testez ensuite dans le terminal si la commande marche :
>
> `hugo help`

## ✨ Générer un nouveau site

Déplacez-vous dans le dossier de votre choix, par exemple **"C:\SitesWeb\"**.

> Générer un site :
>
> `hugo new site nomdemonsite`

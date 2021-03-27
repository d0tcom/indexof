---
author: "Jordan L."
title: "Initialisation d'un serveur Debian"
summary: Configuration de base pour un serveur Debian
date: 2021-03-27T15:08:24+01:00
draft: false
tags: ["linux", "debian", "serveur"]
categories: ["linux"]
ShowToc: true
TocOpen: true
---

Quand on vient d'aquérir un serveur VPS avec Debian dessus, il y a quelques réglages de base à faire pour améliorer sa sécurité et l'utilisation.

## 🔑 Se connecter en root

Pour pouvoir vous connecter à votre serveur, vous allez avoir besoin de connaître l'adresse IP de celui-ci ainsi que son mot de passe. Ou alors mieux, une clé SSH.

```bash
ssh root@ip_du_serveur
```

Un message d'alerte peut s'afficher, vous pouvez l'accepter. Si vous utilisez un mot de passe pour l'authentification alors utilisez-le mais je vous recommande d'utiliser une clé SSH protégée par une passphrase.

---

### Root, c'est quoi ?

L'utilisateur **root** est l'utilisateur admin de la machine. Il a donc tous les droits. La prochaine étape va être de créer un autre utilisateur avec des droits réduits.

## Créer un utilisateur

Une fois connecté en root, nous allons pouvoir ajouter un nouvel utilisateur. Ici, pour l'exemple, on va créer l'utilisateur **john**.

```bash
adduser john
```

Quelques questions vous seront posées, ainsi qu'un mot de passe. Utilisez-en un fort. Pour la suite, vous n'êtes pas obligé de remplir toutes les informations demandées, elles sont facultatives.

La prochaine étape sera d'accorder des privilèges à cet utilisateur.

## Accorder des privilèges

Maintenant que nous avons crée un nouvel utilisateur **john**, nous allons lui accorder les droits d'admin, qu'on appel donc **superuser** ou **root**. Il sera alors capable de faire des commandes avec les privilèges admin en mettant simplement devant la commande **sudo**.

On ajoute l'utilisateur au groupe **sudo**.

En tant que root.

```bash
usermod -aG sudo john
```

Maintenant, vous êtes loggé avec **john**, vous pouvez tapez **sudo** avant une commande pour l'executer avec les privilèges admin.

## 🛡️ Configurer un firewall

Pour sécuriser un minimum votre serveur, vous devez installer et configurer un firewall. Ici nous allons installer le firewall **UFW** et ajouter des règles pour accepter ou non certaines connexions entrantes.

```bash
apt update
apt install ufw
```

### Afficher les applications disponinbles

Une fois installé, vous pouvez regarder la liste des applications disponibles sur le firewall.

```bash
ufw app list
```

```bash
Output
Available applications:
 . . .
 OpenSSH
 . . .
```

### Autoriser OpenSSH

Pour être sure que le firewall autorise les connexions SSH, on va ajouter une règle.

```bash
ufw allow OpenSSH
```

### Activer le firewall

Une fois la/les règle(s) ajoutée(s) on va activer le firewall.

```bash
ufw enable
```

Vérifier que c'est actif.

```bash
ufw status
```

```bash
Output
Status: active

To             Action   From
--             ------   ----
OpenSSH          ALLOW    Anywhere
OpenSSH (v6)     ALLOW    Anywhere (v6)
```

Le firewall bloque maintenant toutes les connexions sauf pour OpenSSH.

A chaque fois que vous aurez besoin d'ajouter une application qui a besoin de se connecter par exemple, vous devrez ajouter une nouvelle règle pour autoriser le trafic entrant.

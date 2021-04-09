---
author: "Jordan L."
title: "Déployer un projet Laravel 8 sur un serveur VPS"
summary: Configuration de base pour un serveur Debian, déploiement projet laravel
date: 2021-04-09
draft: false
tags: ["linux", "debian", "serveur", "nginx", "laravel", "php", "mysql"]
categories: ["linux", "laravel", "nginx"]
ShowToc: true
TocOpen: true
---

# Configuration de base du serveur

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

# Installer serveur Web Nginx

Avant d'installer Nginx, nous allons mettre à jour la machine :

```bash
sudo apt update
```

Nous pouvons ensuite installer Nginx :

```bash
sudo apt install nginx
```

## Autoriser Nginx dans le firewall

Pour voir la liste des applications disponibles dans le firewall :

```bash
sudo ufw app list

Available applications:
...
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
...

```

Autoriser **Nginx HTTP**. Par la suite on pourra autoriser **Nginx HTTPS** si on veut un certificat SSL sur notre site.

```bash
sudo ufw allow 'Nginx HTTP'
```

On peut vérifier les changements :

```bash
sudo ufw status

Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Nginx HTTP                 ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
Nginx HTTP (v6)            ALLOW       Anywhere (v6)
```

## Vérifier que le serveur web Nginx est actif

On peut vérifier que le serveur Nginx est actif :

```bash
systemctl status nginx

nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Wed 2019-07-03 12:52:54 UTC; 4min 23s ago
     Docs: man:nginx(8)
 Main PID: 3942 (nginx)
    Tasks: 3 (limit: 4719)
   Memory: 6.1M
   CGroup: /system.slice/nginx.service
           ├─3942 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           ├─3943 nginx: worker process
           └─3944 nginx: worker process
```

On peut aussi vérifier dans le navigateur que l'IP répond :
(commande pour connaitre l'ip : **ip addr**)

```bash
http://ip_du_serveur
```

Vous devriez voir une page de bienvenue sur Nginx.

## Quelques commandes utiles pour Nginx

```bash
sudo systemctl stop nginx       // Arrêter le serveur
sudo systemctl start nginx      // Démarrer le serveur
sudo systemctl restart nginx    // Redémarrer le serveur
```

# Installer MySQL

Soon..

# Installer PHP 8 et ses dépendances

Soon..

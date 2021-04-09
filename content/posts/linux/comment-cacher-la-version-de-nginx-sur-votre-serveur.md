---
author: "Jordan L."
title: "Comment cacher la version de Nginx sur votre serveur web Linux"
summary: Cacher la version de nginx sur votre serveur web Linux
date: 2021-04-09
draft: false
tags: ["linux", "debian", "serveur", "nginx"]
categories: ["linux", "serveur", "nginx"]
---

## Modifier le fichier de configuration nginx

Pour cacher la version de Nginx, rendez-vous dans le dossier **/etc/nginx/** et modifiez le fichier **nginx.confg**

```bash
sudo nano /etc/nginx/nginx.conf
```

Il suffit ensuite d'ajouter la ligne **server_tokens off** dans les options **http** ou si elle est déjà présente, la décommenter.

```bash
http {

    types_hash_max_size 2048;

    server_tokens off;
```

Pour que la modification soit effective, relancez le serveur.

```bash
sudo systemctl restart nginx
```

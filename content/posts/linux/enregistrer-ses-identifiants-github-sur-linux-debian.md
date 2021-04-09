---
author: "Jordan L."
title: "Enregistrer ses identifiants Github sur Linux (Debian)"
summary: Enregistrer ses identifiants Github sur Linux (Debian)
date: 2021-04-09T11:49:37+02:00
draft: false
tags: ["linux", "debian", "serveur", "nginx"]
categories: ["linux", "serveur", "nginx"]
---

Si on veut que GitHub se souvienne de nos identifiants, on peut les enregistrer en mémoire.

| ⚠️ ATTENTION : les identifiants seront en clair sur la machine, non cryptés! |
| ---------------------------------------------------------------------------- |

```bash
git config --global credential.helper 'store'
```

Si vous voulez prendre plus de précaution et mettre en cache temporairement (par défaut : 900 secondes) vos identifiants, vous pouvez utiliser cette commande :

```bash
git config --global credential.helper 'cache --timeout 900'
```

Si aucune option n'est précisé, les identifiants seront sauvegardés dans ~/.git-credentials.

## Liens utiles

- [git-credential-cache](https://git-scm.com/docs/git-credential-cache)
- [git-credential-store](https://git-scm.com/docs/git-credential-store)

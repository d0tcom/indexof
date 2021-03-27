---
author: "Jordan L."
title: "Creer du contenu sur le CMS Hugo"
summary: Comment créer un article avec Hugo
date: 2021-03-27T10:26:54+01:00
tags: ["Hugo", "CMS"]
categories: ["tutoriels"]
---

> Créer une nouvelle page sur le CMS
>
> `hugo new posts/titre-de-ma-page.md`

Vous pouvez ajouter des flags à votre commande, voici la liste :

```console
 -b, --baseURL string         hostname (and path) to the root, e.g. http://spf13.com/
  -D, --buildDrafts            include content marked as draft
  -E, --buildExpired           include expired content
  -F, --buildFuture            include content with publishdate in the future
      --cacheDir string        filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/
      --cleanDestinationDir    remove files from destination not found in static directories
  -c, --contentDir string      filesystem path to content directory
  -d, --destination string     filesystem path to write files to
      --disableKinds strings   disable different kind of pages (home, RSS etc.)
      --editor string          edit new content with this editor, if provided
      --enableGitInfo          add Git revision, date and author info to the pages
      --forceSyncStatic        copy all files when static is changed.
      --gc                     enable to run some cleanup tasks (remove unused cache files) after the build
  -h, --help                   help for new
      --i18n-warnings          print missing translations
      --ignoreCache            ignores the cache directory
  -k, --kind string            content type to create
  -l, --layoutDir string       filesystem path to layout directory
      --minify                 minify any supported output format (HTML, XML etc.)
      --noChmod                don't sync permission mode of files
      --noTimes                don't sync modification time of files
      --path-warnings          print warnings on duplicate target paths etc.
      --print-mem              print memory usage to screen at intervals
      --templateMetrics        display metrics about template executions
      --templateMetricsHints   calculate some improvement hints when combined with --templateMetrics
  -t, --theme strings          themes to use (located in /themes/THEMENAME/)
      --trace file             write trace to file (not useful in general)
```

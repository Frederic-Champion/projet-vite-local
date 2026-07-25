# 📒 REGISTRE DES DETTES D'APPRENTISSAGE — Socle

**Frédéric Champion · Session 57 · 22 juillet 2026**
_Périmètre : les 4 paliers du socle — HTML · CSS · Tailwind · JavaScript. React, TypeScript, Next.js et le backend sont hors périmètre de ce document (voir `audit-croise.md`)._

> **Ce document ne liste pas des lacunes, il liste des dettes.** Une dette se rembourse, elle ne se subit pas. Certaines coûtent 20 minutes, d'autres une séance. Aucune n'est un barrage.

---

## 🧾 Les deux natures de dette

| Type              | Définition                                 | Symptôme                                           |
| ----------------- | ------------------------------------------ | -------------------------------------------------- |
| **A — Trou**      | Jamais vu, jamais croisé                   | Le mot ne m'évoque rien                            |
| **B — Entretien** | Vu et compris, mais jamais réactivé depuis | « Je l'ai su » — reconstruction laborieuse à froid |

> **Le type B est le plus traître**, parce qu'il n'apparaît nulle part dans un journal de progression : la notion y figure comme « acquise ». Seule la récupération à froid le révèle.
> **Cas d'école documenté** : `reduce` accumulateur objet — noté 7/10 en juin (bloc C), **cassé à froid en S54 puis encore en S56**. Ce n'était pas un trou. C'était une dette d'entretien.

## 🔑 Priorités

| Code                  | Sens                                                                     |
| --------------------- | ------------------------------------------------------------------------ |
| 🔴 **INDISPENSABLE**  | Le métier l'exige. Son absence se remarque dans du code ou en entretien. |
| 🟠 **À CONNAÎTRE**    | Attendu pour progresser. Pas bloquant à l'embauche.                      |
| 🔵 **MOINS URGENT**   | Utile, se rattrape au besoin.                                            |
| ⚪ **Hors périmètre** | Assumé, non listé comme dette.                                           |

---

# PALIER 1 — HTML

**État général : solide.** Le palier le moins endetté des quatre.

### Dettes de type A (trous)

| Dette                                                                           | Prio | Coût     | Note                                                                                                                           |
| ------------------------------------------------------------------------------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Accessibilité** : rôles ARIA, navigation clavier, gestion du focus, contraste | 🔴   | 1 séance | Réflexes isolés présents (`alt`, `htmlFor`, `outline`+`ring`) mais **aucune méthode**. C'est un marqueur professionnel visible |
| Images responsives (`srcset`, `picture`, formats modernes)                      | 🟠   | ⚡       | Tombe naturellement avec la performance web                                                                                    |
| `data-*` attributes                                                             | 🟠   | ⚡       | 20 min                                                                                                                         |
| SEO technique (title/description, Open Graph)                                   | 🟠   | ⚡       | Arrive avec Next.js (métadonnées)                                                                                              |
| Balises media (`video`, `audio`, `dialog`)                                      | 🔵   | ⚡       | `dialog` est le plus utile (modale native)                                                                                     |
| Canvas, SVG avancé, Web Components                                              | ⚪   | —        | Hors périmètre                                                                                                                 |

### Dettes de type B (entretien)

| Dette                                                                 | Dernière activation  | Prio | Note                                               |
| --------------------------------------------------------------------- | -------------------- | ---- | -------------------------------------------------- |
| Formulaires HTML complets (`name` vs `id`, `required`, types d'input) | **S34-35** (~1 mois) | 🟠   | Reviendra en force avec les formulaires React/Next |
| Tables sémantiques (`thead`/`tbody`/`colSpan`)                        | S45                  | 🔵   | Vu 2×, correctement. Faible risque                 |

---

# PALIER 2 — CSS

**État général : bon, avec une poche dure identifiée.** C'est l'ex-point faible devenu point fort (5,0 → 7,05 sur le positionnement), sauf sur un sujet.

### Dettes de type A (trous)

| Dette                                                                       | Prio | Coût     | Note                                                                                                                                                      |
| --------------------------------------------------------------------------- | ---- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CSS Grid — placement** (`grid-column`, `col-span`, `grid-template-areas`) | 🔴   | 1 séance | ⚠️ **La dette la plus ancienne du socle.** 3/10 en juin, réactivée S36 puis S47, remontée à ~5/10, **jamais ancrée**. Outil de layout fondamental en 2026 |
| **`rem` vs `px`** + échelle de taille accessible                            | 🔴   | ⚡       | Tailwind tourne en `rem` sous le capot — tu l'utilises sans le savoir                                                                                     |
| **`@keyframes`** / animations CSS                                           | 🔴   | 1 séance | Jamais abordé. Très courant                                                                                                                               |
| **`::before` / `::after`**                                                  | 🔴   | ⚡       | Jamais abordé. Omniprésent en CSS pro                                                                                                                     |
| `clamp()` / `min()` / `max()` / typographie fluide                          | 🟠   | ⚡       | Standard moderne du responsive                                                                                                                            |
| Container queries                                                           | 🟠   | 🔨       | Standard 2026, remplace progressivement certaines media queries                                                                                           |
| BEM et méthodologies CSS                                                    | 🔵   | 👀       | À savoir **lire** (code legacy)                                                                                                                           |
| CSS Modules / styled-components                                             | 🔵   | 👀       | Connaître l'existence suffit (tu es sur Tailwind)                                                                                                         |
| Propriétés logiques, `clip-path`                                            | ⚪   | —        | Hors périmètre                                                                                                                                            |

### Dettes de type B (entretien)

| Dette                                                               | Dernière activation  | Prio | Note                                               |
| ------------------------------------------------------------------- | -------------------- | ---- | -------------------------------------------------- |
| **Grid brut** (`display:grid`, `repeat()`, `fr`, `gap`)             | S47 (partiel)        | 🔴   | Se confond avec la dette A ci-dessus — même séance |
| **Glassmorphism** (`backdrop-filter`)                               | S29-31 (~7 semaines) | 🔵   | Vu 1 fois. Cosmétique, faible enjeu                |
| **`-webkit-line-clamp`**                                            | S26 (~2 mois)        | 🔵   | Vu 1 fois, noté 6/10. Tailwind a `line-clamp-3`    |
| Variables CSS + `:root`                                             | Bloc F (12/06)       | 🟠   | Reviendra si tu quittes Tailwind sur un projet     |
| Animation burger → croix (`nth-child`, `rotate`)                    | S23 (~2 mois)        | 🔵   | Noté 6/10, jamais repratiqué                       |
| `position: fixed` + contexte parent (`transform`/`backdrop-filter`) | S29                  | 🟠   | Noté 65 %. Piège réel, cause de bugs difficiles    |

---

# PALIER 3 — TAILWIND

**État général : le palier le moins endetté.** Architecture v4 comprise en profondeur (rare à ton niveau). Aucune dette de type A significative.

### Dettes de type A (trous)

| Dette                                              | Prio | Coût | Note                                                                         |
| -------------------------------------------------- | ---- | ---- | ---------------------------------------------------------------------------- |
| **Tailwind dans Vite/React** (`@tailwindcss/vite`) | 🔴   | ⚡   | **Ce n'est pas une notion, c'est une installation.** Micro-tâche déjà loggée |
| Tailwind Grid (`grid-cols-`, `col-span-`)          | 🔴   | ⚡   | Se solde avec la séance CSS Grid                                             |
| Plugins tiers (`@tailwindcss/forms`, `typography`) | 🔵   | 🔨   | Au besoin                                                                    |

### Dettes de type B (entretien)

| Dette                                                         | Dernière activation | Prio | Note                                                                          |
| ------------------------------------------------------------- | ------------------- | ---- | ----------------------------------------------------------------------------- |
| **`@apply` / `@layer components`**                            | S31-33 (~1 mois)    | 🟠   | Beaucoup pratiqué en Phase 1, **plus du tout depuis React**                   |
| **Dark mode sémantique** (`@custom-variant`, tokens par rôle) | S31 (~5 semaines)   | 🟠   | Fait 1 fois, très bien fait. À refaire en React (`<DarkToggle />` déjà prévu) |
| Architecture `src`/`dist` + scaffolding from scratch          | Bloc H (12/06)      | 🔵   | Vite le fait pour toi maintenant                                              |
| Valeurs arbitraires (`[1fr_1fr_2fr]`)                         | S32-33              | 🔵   | Faible enjeu                                                                  |

---

# PALIER 4 — JAVASCRIPT

**Le palier le plus complexe, et de loin le plus endetté** — mais aussi celui où le socle est le plus large. Éclaté en quatre familles.

---

## Famille JS-A — L'objet, `this`, la POO

_Le seul bloc entier jamais ouvert du socle. Type A pur._

| Dette                                                                | Prio | Coût     | Note                                                                                                                           |
| -------------------------------------------------------------------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **`this`** (en méthode, en fonction, seul, en handler, en flèche)    | 🔴   | 1 séance | Question d'entretien quasi systématique. **Pas un prérequis React** (le fonctionnel s'en passe), mais indispensable en lecture |
| **Classes** (`class`, `constructor`, méthodes, `extends`, statiques) | 🔴   | 1 séance | Tu manipules déjà des classes sans le savoir : `Set`, `FormData`, `IntersectionObserver`, `Error`                              |
| Prototype & héritage prototypal                                      | 🟠   | 👀       | Le « pourquoi » sous les classes. À comprendre, pas à écrire                                                                   |
| `call` / `apply` / `bind`                                            | 🔵   | 👀       | Dépend de `this`. Lecture seule                                                                                                |
| Getters / setters, `Symbol`, descripteurs                            | 🔵   | 👀       | Lecture seule                                                                                                                  |

> ⏳ **Moment recommandé : avant la Phase 3 Python**, où la POO redevient centrale. Aucune urgence avant.

---

## Famille JS-B — Le modèle d'exécution

_« J'utilise correctement, je ne sais pas expliquer. » Type A sur le nom, type B sur le symptôme._

| Dette                                                                  | Prio | Coût     | Note                                                                                                                                                             |
| ---------------------------------------------------------------------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Coercion** (conversion implicite vs explicite, falsy, `==` vs `===`) | 🔴   | ½ séance | Tu appliques déjà `Number()` (S53) sans avoir le modèle. Explique `"5" - 2` vs `"5" + 2`                                                                         |
| **Hoisting**                                                           | 🔴   | ½ séance | ⚠️ **Cas particulier** : tu as le _symptôme_ depuis le bloc A (`var` → `3 3 3`) mais **le mécanisme n'a jamais été nommé**. Question d'entretien archi-classique |
| **Event loop** + microtâches/macrotâches                               | 🔴   | 1 séance | LA question d'entretien sur l'async. Explique pourquoi `setTimeout(fn, 0)` passe _après_ une promesse résolue. Tu as le « non-bloquant » (bloc D), pas le modèle |
| `"use strict"`                                                         | 🟠   | ⚡       | 10 min. Bon à savoir : les modules ESM y sont **déjà** par défaut → tu y es sans le savoir                                                                       |

---

## Famille JS-C — Les outils isolés

_Type A. Petits, indépendants, rentables._

| Dette                                                                      | Prio | Coût     | Note                                                                                                                                                                      |
| -------------------------------------------------------------------------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`sort()` avec comparateur**                                              | 🔴   | ⚡       | Trier un catalogue par prix = ton quotidien futur. Déjà noté ❌ en §7                                                                                                     |
| **`Map`**                                                                  | 🔴   | ⚡       | Tu as `Set` (S45), pas `Map`. Complète la paire                                                                                                                           |
| **Dates** (`Date`, formatage, calculs d'écart)                             | 🔴   | 1 séance | ⚠️ **Je remonte le drapeau** : tu l'avais classé « ignoré sans culpabiliser ». Ordonnances, dates de commande, garanties → ton SaaS optique en aura besoin dès la Phase 2 |
| **Récursion**                                                              | 🔴   | ½ séance | Fondamental algo. Incontournable pour les structures arborescentes                                                                                                        |
| **`switch`**                                                               | 🔴   | ⚡       | Jamais vu. Se lit partout. 15 min                                                                                                                                         |
| `break` / `continue`, `while`, `do...while`                                | 🟠   | ⚡       | Basique, jamais formalisé                                                                                                                                                 |
| Paramètres par défaut `f(x = 0)`                                           | 🟠   | ⚡       | Tu connais le défaut en _déstructuration_, pas en _paramètre_                                                                                                             |
| **Regex** (bases : validation email/téléphone)                             | 🟠   | 1 séance | Utile dès les formulaires du SaaS                                                                                                                                         |
| `**` (exponentiation)                                                      | ✅   | —        | Vu en S57                                                                                                                                                                 |
| IIFE, objet `arguments`, itérateurs/générateurs, `Object.is`               | 🔵   | 👀       | Lecture seule                                                                                                                                                             |
| BigInt, Proxy/Reflect, `eval`, WeakMap/WeakSet, bitwise, currying, Unicode | ⚪   | —        | Hors périmètre                                                                                                                                                            |

---

## Famille JS-D — Les dettes d'entretien ⚠️

_Type B pur. **La famille la plus importante de ce document** — elle répond directement à la peur « oublier ce qu'on ne réactive pas » (S51, S54)._

| Dette                                    | Dernière activation                | Prio | État réel                                                                                                                                                                           |
| ---------------------------------------- | ---------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`reduce` accumulateur objet**          | S56 (réactivé, **encore fragile**) | 🔴   | ⚠️ **Dette confirmée deux fois.** Cassé à froid en S54 _et_ S56. Déblocage identifié = crochets dynamiques `acc[clé]`. **À faire tourner en révision éclair jusqu'à sortie propre** |
| **`slice(0, n)` à arguments**            | S56                                | 🔴   | A demandé plusieurs passes. Recroisement prioritaire acté                                                                                                                           |
| **`fetch` POST + `FormData`**            | **S34-35 (~1 mois)**               | 🔴   | Noté 75 %, recodé 2× de mémoire… **puis plus jamais touché**. Tout le travail fetch depuis est en GET. Dette silencieuse                                                            |
| **`IntersectionObserver`**               | **S30 (~7 semaines)**              | 🟠   | Noté 75 %, beaucoup pratiqué en Phase 1, **zéro depuis**. Reviendra en React (lazy loading, scroll reveal)                                                                          |
| **`Object.values` / `keys` / `entries`** | Bloc C (09/06)                     | 🟠   | Noté 7/10, peu repratiqué. Pont objet→tableau, très utile                                                                                                                           |
| **`for...in`**                           | Bloc C (09/06)                     | 🟠   | Noté 7/10 avec la mention « peu intuitif, à recroiser ». Jamais recroisé                                                                                                            |
| **`splice`**                             | Bloc C (09/06)                     | 🔵   | Noté 7/10. React privilégie `filter`/spread → faible usage réel                                                                                                                     |
| **`toLocaleString` / `toFixed`**         | Bloc D (10/06)                     | 🟠   | Affichage de prix en euros = ton domaine métier. Reviendra vite                                                                                                                     |
| **`localStorage` en JS pur**             | S53 (en React)                     | ✅   | Drillé récemment. **Pas une dette**                                                                                                                                                 |
| **`setTimeout` / `setInterval`**         | S54 (débounce)                     | ✅   | Réactivé récemment. **Pas une dette**                                                                                                                                               |
| **`map` / `find` / `some`**              | S49 (révision éclair)              | ✅   | Ex-poche fragile, **ressortie solide**. Dette éteinte                                                                                                                               |
| **Closures / valeur-référence / scope**  | S50, S52                           | ✅   | Entretenues régulièrement. **Pas une dette**                                                                                                                                        |
| **`fn` vs `fn()`**                       | S54-55                             | ✅   | Ancré (« la parenthèse décide du moment »), mais classique à surveiller                                                                                                             |

---

# 📊 SYNTHÈSE

## Décompte par priorité

| Priorité         | HTML | CSS | Tailwind | JS     | **Total** |
| ---------------- | ---- | --- | -------- | ------ | --------- |
| 🔴 Indispensable | 1    | 5   | 2        | **12** | **20**    |
| 🟠 À connaître   | 4    | 5   | 2        | **9**  | **20**    |
| 🔵 Moins urgent  | 2    | 5   | 3        | 4      | 14        |

## Ce que le décompte cache (et qu'il faut lire)

Sur les **20 dettes indispensables**, la répartition par coût réel est très déséquilibrée :

- **10 sont des micro-tâches ⚡** (`switch`, `sort()`, `Map`, `rem`/`px`, `::before`, `use strict`, `data-*`, Tailwind Vite, Tailwind Grid, params par défaut) → **une seule séance de 1h les solde toutes.**
- **6 méritent une vraie séance** : CSS Grid, `@keyframes`, accessibilité, `this`, classes, event loop, dates.
- **4 sont des dettes d'entretien** qui ne se remboursent pas par un cours mais **par la répétition espacée** : `reduce` objet, `slice(0,n)`, fetch POST/FormData, Grid brut.

> **Point clé** : quatre des dettes les plus critiques ne se soldent **pas** par une séance d'apprentissage. Elles se soldent par la révision éclair. Y consacrer un cours serait inefficace — elles sont déjà comprises.

## Les 3 dettes à traiter en priorité absolue

1. **`reduce` accumulateur objet** — seule dette cassée **deux fois à froid**. Preuve empirique de fragilité, pas d'estimation.
2. **CSS Grid (placement)** — dette la plus ancienne du socle (identifiée le 08/06), deux réactivations sans ancrage.
3. **`fetch` POST + `FormData`** — dette silencieuse : notée 75 %, invisible dans le journal, **non réactivée depuis un mois**. Le profil type de la notion qui lâchera à froid.

---

# 🗓️ PLAN DE REMBOURSEMENT

| #   | Séance                  | Contenu                                                                                                            | Durée      |
| --- | ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- |
| 1   | **Salve micro-notions** | `switch`, `break`/`continue`, `sort()`, `Map`, params par défaut, `rem`/`px`, `::before`/`::after`, `use strict`   | ~1h        |
| 2   | **Projet CSS Grid**     | Catalogue optique en Grid pur (Flexbox interdit) + `@keyframes` + `::before` + `rem`. Solde 4 dettes CSS d'un coup | ~3h        |
| 3   | **Modèle mental JS**    | Coercion + hoisting, méthode prédiction → exécution → écart                                                        | ~1h30      |
| 4   | **Audit accessibilité** | Lighthouse + navigation clavier sur le portfolio existant. Méthode audit, pas cours                                | ~1h30      |
| 5   | **Event loop**          | Une fois la séance 3 digérée                                                                                       | ~1h        |
| 6   | **`this` + classes**    | ⏳ **À caler avant la Phase 3 Python**, pas avant                                                                  | ~2 séances |

**En continu, sans séance dédiée :**

- **Révision éclair** : rotation forcée sur `reduce` objet, `slice(0,n)`, fetch POST/FormData, `Object.values`, `for...in`, `toLocaleString`, `IntersectionObserver`.
- **Récursion** : dans le créneau algo de 15 min par session.
- **Dates & regex** : se tissent dans le projet SaaS (ordonnances, validation de formulaire).

**Total hors `this`/classes : ~8h**, à intercaler dans la Phase 2 — **pas à faire d'un bloc, et surtout pas en suspendant React.**

---

# ⚠️ MISE AU POINT

Ce document liste **54 dettes**. C'est un chiffre qui peut faire peur, alors il faut le lire correctement :

1. **Une dette n'est pas une lacune.** Trente de ces lignes sont des notions qui n'ont simplement jamais eu de raison d'apparaître dans ton parcours. Elles apparaîtront quand un projet les appellera.
2. **Le socle mesuré est solide** : 5,8 → 7,2 sur 15 domaines, aucun en recul. Une liste de dettes ne montre jamais l'actif, seulement le passif.
3. **Aucune de ces dettes ne bloque la Phase 2.** Aucune n'est un prérequis React — vérifié ligne par ligne. Le Tier 1 (les vrais prérequis) a été fermé en S38 et 15 séances de React l'ont confirmé empiriquement.
4. **La dette la plus dangereuse n'est pas dans la liste des trous, elle est dans la famille JS-D.** Ce qui lâche, ce n'est pas ce qu'on n'a jamais appris — c'est ce qu'on a appris et laissé dormir. La réponse n'est pas « travailler plus », c'est la répétition espacée.

---

_Registre généré en Session 57 (22/07/2026). À mettre à jour quand une dette est soldée — et à relire quand le doute revient._

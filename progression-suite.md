## Session 67 — React Router : socle Declarative en place

**Durée** : ~3h (samedi, laptop). Énergie bonne. Séance dense, beaucoup de neuf.

**Révision éclair (`fetch` POST)** 🟡 : les trois clés retrouvées (`method`, `headers`, `body`) mais **deux valeurs inversées** (`headers: "POST"`, `method` recevant le Content-Type). Repère donné : le pluriel/singulier trahit le type de valeur — `headers` = objet, `method` = chaîne. Règle `Content-Type` reformulée : **je fabrique le body moi-même → j'annonce le type ; le navigateur le fabrique (FormData) → je me tais**. Reste en rotation.

**✅ Dette n°1 soldée — fonction de mise à jour dans le parent 🟢.** Reconstruite seule en contexte neuf (`PageSav`), et Frédéric a choisi de réécrire l'exercice **en entier** plutôt que la seule fonction demandée. Les trois points cassés en S64 sont sortis sans aide : setter dans la fonction, `.map()` rendant des références dans les deux branches, surcharge `{ ...d, statut: x }`. Correction unique : `[...dossiers].map()` — le spread est superflu devant `map`/`filter` qui fabriquent déjà un nouveau tableau. Repère posé : **nouveau tableau ≠ nouveaux objets** (le `{ ...d }` intérieur, lui, reste indispensable).

**⚠️ Erreur de ma part (§9, récurrence)** : squelette contenant `useState<Dossier[]>(...)` — generics **jamais enseignés**. Frédéric a stoppé. Puis deuxième fois dans la même séance : `type X = ...` utilisé dans l'explication censée corriger la première. Cours de rattrapage donné (canal des types vs canal des valeurs, inférence, quand les chevrons sont nécessaires). Les chevrons étaient de surcroît **superflus** dans mon squelette (valeur de départ remplie).

**🎓 Question de fond posée** : « est-ce que TS est validé ? j'ai l'impression qu'il manque plein de choses ». Réponse cadrée : c'est **TS des props** qui est fermé, pas TypeScript ; `type`, unions, generics, Zod sont explicitement ❌ au §7. Le trou du jour venait de moi, pas de son parcours.

**React Router — cours de fond** :

- SPA vs MPA, ce que la SPA casse (URL, bouton retour, partage) et que le routeur restitue
- Pourquoi une bibliothèque externe (React = interface uniquement)
- Les 3 modes (Declarative / Data / Framework) — reste en **Declarative**, Next.js couvrira le reste
- **Positionnement React Router ↔ Next.js** : deux solutions au **même problème**, pas un empilement. Next.js a son propre routeur. Le passage par React Router est assumé comme pédagogique (forme longue avant version compressée) + marché SPA réel.

**Mise en place (autonomie)** : `npm i react-router` · `BrowserRouter` dans `main.tsx`, correctement placé **à l'intérieur** de `StrictMode` · deux pages de test · `Routes`/`Route` dans `App.tsx` · `Link` + `<nav>` hors de `<Routes>` (barre persistante).

**Trois erreurs corrigées** :

1. `<PageSav />` placé directement dans `<Routes>` sans `<Route>` — l'aiguillage n'accepte que des correspondances.
2. **`path` rempli avec un chemin de fichier** (`./src/components-exercices/PageSav`). Point de fond : le `path` décrit une **URL**, invention libre, sans rapport avec l'arborescence. C'est précisément ce que Next.js masque en imposant la convention fichier→URL.
3. `path="/Sav"` — les URL sont sensibles à la casse, convention = minuscules.

**Notions neuves posées au passage** :

- **Assertion non-nulle `!`** 🟡 — `getElementById("root")!`. N'est légitime que sur une garantie **structurelle** (HTML versionné, constante en dur) ; jamais sur API / saisie / paramètre d'URL. Test : « qui garantit que cette valeur existe ? »
- **Majuscule en JSX = règle syntaxique, pas convention** 🟢 — minuscule → chaîne (`createElement("nav")`), majuscule → variable du fichier (`createElement(Link)`). Piège : `<link>` au lieu de `<Link>` ne produit **aucune erreur**, juste un lien mort.
- Import nommé vs par défaut sur une lib (`{ createRoot }` vs `ReactDOM.createRoot`) 🟢 — tree-shaking, l'import nommé est le standard.
- `npm` = 3 choses (outil / registre / paquet) 🟢 · `PATH` 🟢.

**⚠️ Source périmée de ma part** : `npm install react-router-dom` donné de mémoire, alors que le paquet est unifié en `react-router`. Frédéric l'a détecté sur la doc officielle. **La page Installation de la doc fait foi sur un nom de paquet, jamais ma mémoire.**

**Niveaux** : `BrowserRouter`/`Routes`/`Route`/`Link` 🟡 — **montés une seule fois, avec correction sur 3 points. Fragiles, Frédéric le signale lui-même.** Distinction `path` (URL) vs `import` (fichier) 🟢 (ancrée par l'erreur).

**Convention adoptée** : un fichier de composant porte le nom du composant (`PageSav.tsx`).

**🎹 Raccourci** : `Ctrl+.` reconduit cette séance — **rotation à la prochaine**.

**💡 Idée de Frédéric pour la suite** : remplacer le système commenter/décommenter de `App.tsx` par un **menu de navigation vers chaque exercice** du `projet-vite-local`. Excellent terrain : besoin réel, autant de routes que d'exercices, pratique en quantité de `Route`/`Link` sans exercice artificiel. **À faire en priorité S68.**

**⏭️ Prochaine étape** :

1. Refaire le montage React Router **en page blanche** (fragile, vu une seule fois).
2. Menu de navigation vers les exercices (idée de Frédéric) — consolide le point 1 par la pratique.
3. Puis paramètres d'URL (`/sav/A12`) : liste → fiche, motif de base des apps de gestion.
4. En attente : projet CSS Grid (dette n°1 du socle).

## Session 68 — React Router : menu de navigation + layout Grid

**Durée** : ~3h (dimanche, fixe). Énergie bonne au départ, séance dégradée par mes erreurs de construction.

**Rituel** : `npm install` lancé dans `mon-premier-projet` (pas de `package.json` → `ENOENT`). Rappel : le rituel s'applique **par projet**, `npm install` n'a de sens que là où il y a un `package.json`.

**Révision éclair (`reduce` objet — 4ᵉ passage)** 🔴 : structure entièrement juste (outil, ordre `(acc, m)`, `{}` en 2ᵉ argument, crochets dynamiques, `return acc`). Cassé sur **clé vs valeur** : `m.prix` utilisé comme clé. Puis blocage sur le sens de `=` en JS (« qu'est-ce que `m.prix` vient faire dans `acc[m.marque]` ») → cours donné sur l'assignation (`=` = flèche, pas égalité ; la droite s'évalue d'abord ; `x = x + 1`).
**🗑️ DÉCISION : `reduce` objet sort de la rotation de révision éclair.** 4 passages à froid, aucun ancrage, et un coût moral réel. Cette notion ne s'apprend pas hors sol — elle reviendra quand un exercice produira un vrai chiffre à l'écran.

**⚠️ Mes erreurs de construction (les 3, à ne pas reproduire)** :

1. **Page blanche demandée 24h après le premier contact** avec React Router. Trop tôt — Frédéric n'a pas pu commencer et a dû regarder ses fichiers. Repris en exercice à trous, qui a bien fonctionné.
2. **`reduce` tiré en révision** alors qu'il est démontré qu'il ne s'ancre pas par répétition espacée.
3. **`useParams` enseigné sur un terrain où il ne sert à rien** (15 exercices connus et fixes), avec un **argument DRY faux** : la table de correspondance remplace 15 `<Route>` par 15 entrées d'objet — aucun gain. Frédéric a demandé la justification, le décompte lui a donné raison. Bloc abandonné, retour à la version en dur.

**Exercice à trous — montage React Router** 🟡 : **toute la structure sortie de mémoire** (imports nommés, `BrowserRouter` dans `StrictMode`, `Routes` autour des `Route`, `Link` dans un `nav` hors de `Routes`).
**🔴 Seul point cassé, 2 fois : `path` rempli avec un chemin de fichier** (`./components-exercices/PageSav`). Test donné : « est-ce que ça ressemble à une adresse de site web ? ». **Corrigé seul ensuite en contexte réel** — l'erreur n'est pas revenue sur les 4 routes du menu.

**✅ Menu de navigation vers les exercices (son idée, S67) — livré et fonctionnel.** 4 exercices routés, URL en minuscules à tirets, liens stylés. Remplace le système commenter/décommenter.

**✅ Layout Grid en contexte réel** — dette socle entamée. `grid min-h-screen grid-rows-[auto_1fr]`.

- **Erreur puis correction : `grid-cols-2` au lieu de `grid-rows`.** Repère posé : _cols_ = colonnes = côte à côte ↔ / _rows_ = rangées = empilées ↕. Le mot décrit **la forme de la case**, pas le sens de progression.
- `[auto_1fr]` expliqué deux fois (2ᵉ version par le calcul concret : écran − nav = reste). `auto` = la hauteur qu'il faut · `1fr` = tout le reste, calculé après les `auto` · underscore = contrainte Tailwind (pas d'espace dans un nom de classe).

**Notions posées** :

- **`<Routes>` n'accepte pas `className`** 🟢 — observé seul. Un composant qui ne produit pas de DOM ne peut pas être stylé. `<Link>` l'accepte (il fabrique un `<a>`).
- **DRY en React = composant, pas `@apply`** 🟡 — `@apply` factorise des classes ; un composant factorise classes + balisage + comportement. `@apply` reste légitime pour du style de base sur balises nues (`@layer base`). `index.css` = CSS global (importé par `main.tsx`) ; `App.css` = résidu Vite, à supprimer.
- **`children`** — montrée en passant, **non enseignée**. À poser proprement avant toute factorisation de `LienNav`.
- **Emplacement d'un composant** 🟢 : même fichier tant qu'un seul l'utilise → fichier propre dans `components/` (≠ `components-exercices/`) dès qu'un second en a besoin.
- **`useParams` / `path="/x/:id"`** 🔴 — mécanisme vu fonctionner, **non compris et non ancré**. Le critère, lui, est acquis : liste **fixe** connue à l'écriture → une `Route` par élément ; liste **variable** (API, base) → paramètre. **À recroiser uniquement sur un vrai cas API (liste → fiche), jamais à vide.**

**Niveaux** : montage React Router 🟡 (structure sortie seule en guidé, pas encore en page blanche) · `Route`/`Link` en quantité 🟢 (4 écrites sans aide) · URL vs chemin de fichier 🟢 (corrigé en contexte réel) · Grid `rows`/`cols` 🟡 · `1fr` 🟡.

**⚠️ Fin de séance difficile** : « ça a juste eu pour effet de me faire douter de mon niveau réel ». Le doute vient de la construction de la séance, pas du niveau. Points sortis sans aide dans la journée : diagnostic `grid-cols`, 4 routes complètes, layout Grid, observation sur `<Routes>`, et **détection que mon argument DRY était faux** (il a demandé la justification, le décompte lui a donné raison).

---

## 🏖️ CONSIGNE VACANCES — 3 semaines à partir du 04/08/2026

**Instruction explicite de Frédéric, à respecter strictement.**

- **Semaines 1 et 2 : AUCUNE notion nouvelle.** Ni React Router, ni Next.js, ni `children`, ni `useParams`, ni quoi que ce soit d'autre. **Consolidation uniquement.**
- Objectif énoncé : _« me sentir plus solide sur mes appuis »_.
- Sessions **irrégulières** : semaine 1 en déplacement familial (laptop emporté, sessions du soir seulement si tout le monde est couché et si l'énergie y est), semaine 2 à la maison. Ne pas présumer d'un rythme, ne pas relancer sur des sessions manquées.
- Semaine 3 : à décider

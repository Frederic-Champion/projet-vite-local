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

## Session 69 — Scaffolding complet + React Router en page blanche

**Durée** : ~2h15 (laptop, semaine 2 de vacances). Énergie bonne. Retour après 8 jours d'arrêt.

**Révision éclair (`sort()` avec comparateur)** 🟢 : comparateur produit juste et sans hésitation (`(a, b) => a.prix - b.prix`) — le blocage de la S65 (flèche oubliée) n'est pas revenu. Une imprécision de vocabulaire corrigée : « la référence est modifiée » → non, **la référence reste constante, c'est le contenu qui est réorganisé en place** (d'où `const` qui ne proteste pas). Cours condensé redonné à sa demande. → sort de la rotation.

**Cap de la séance** : montage d'un projet neuf de bout en bout (`projet-examen-blanc`), le geste le moins réactivé du parcours — dernier montage remontant à l'apprentissage de Vite.

**Scaffolding — 6 étapes livrées** : Vite + React + TS · Tailwind v4 · Prettier + plugin · nettoyage · Git local · dépôt distant relié.

- **Choix TypeScript vs TypeScript + React Compiler** : question posée avant d'agir. Écarté — le compilateur automatise `useMemo`/`useCallback`/`React.memo`, tous ❌ au curriculum. **À revoir après ces trois notions**, c'est aujourd'hui l'hypothèse par défaut du marché.
- **Erreur corrigée** : `@tailwindcss/cli` installé par réflexe Phase 1 au lieu de `@tailwindcss/vite`. Diagnostiqué et réparé (`npm uninstall`) sans aide.
- **🔴 Vrai blocage (~20 min) — le CSS de démo Vite écrase Tailwind.** `text-red-500` présent mais **barré** dans les DevTools, battu par un `h1, h2 { color: var(--text-h) }` du scaffold. Point de fond : **Tailwind v4 range tout son CSS dans des cascade layers ; un CSS hors layer gagne toujours, quelle que soit la spécificité.** Correction : vider `index.css` pour ne garder que `@import "tailwindcss"`. Le preflight se faisait démonter par le même mécanisme.
- **Prettier introuvable dans la doc Tailwind** — normal, ce n'est pas un outil Tailwind. **Leçon de méthode** : la doc d'un paquet npm est son README (npmjs.com / GitHub du paquet), pas la doc de l'outil voisin.
- **Git** : `init` via le panneau Source Control, puis `remote add` + `push -u` au terminal. Passage `master` → `main` assumé après avoir demandé la justification (aucune différence technique, exposition marché).

**Questions de fond posées** (toutes traitées) : `dependencies` vs `devDependencies` et le rôle de `-D` · `prettier` et `prettier-plugin-tailwindcss` = deux paquets distincts · **l'extension VS Code embarque sa propre copie de Prettier — le projet, lui, n'a rien tant qu'on n'installe pas localement** · `main` vs `master`.

**✅ Dette S67 soldée — montage React Router 🟢.** `main.tsx` puis **`App.tsx` écrit intégralement en page blanche, 0 problems, aucune correction** : imports nommés, `BrowserRouter` dans `StrictMode`, `<nav>` hors de `<Routes>`, `path` en minuscules ressemblant à des URL, correspondance exacte `to` ↔ `path`. Le geste n'avait jamais été produit sans squelette. **Le `path` rempli avec un chemin de fichier — erreur revenue 2× en S68 — n'est pas réapparue.**

**Notions éclaircies sur demande** : `<Link>` vs `<a href>` (preventDefault + History API ; produit un vrai `<a>` pour l'accessibilité et le clic droit) · définition de `path` (motif d'URL inventé, indépendant de l'arborescence ; `path` et `to` = deux extrémités du même fil) · **`/` initial = chemin absolu** (sans lui, relatif à l'URL courante) · aucune route par défaut : URL non reconnue = page vide sans erreur.

**Écart doc React Router relevé par Frédéric** : la doc met `Routes` dans `main.tsx` et branche `App` comme page ; notre structure met `Routes` dans `App` qui devient le **layout**. Les deux valides — seule contrainte réelle : `BrowserRouter` enveloppe tout ce qui utilise le routeur. La structure layout est celle qui permet une nav persistante.

**Montré, non enseigné** : `NavLink` (`className` en fonction recevant `{ isActive }`) — écarté volontairement, notion nouvelle.

**⚠️ Erreur de ma part (§9 bis, récurrence)** : j'ai affirmé que le `text-red-500` s'affichait en rouge sur une capture où le texte était **blanc**, et j'ai bâti un diagnostic dessus. Frédéric a recadré. **Ne pas trancher sur une couleur perçue dans une image compressée — demander les fichiers ou le DevTools.**

**Signalé au passage** : message de commit généré par l'IA de VS Code → réécrit à la main (même logique que Copilot désactivé).

**Niveaux** : montage React Router 🟢 (page blanche complète, propre) · scaffolding projet complet 🟢 · cascade layers Tailwind vs CSS hors layer 🟡 (ancré par un vrai blocage) · `Link` vs `<a>` 🟢 · `path` = URL 🟢 · `/` absolu 🟡 · `dependencies`/`devDependencies` 🟢 · `sort()` 🟢.

**🎹 Raccourci** : `Ctrl+.` — peu d'occasions pendant le scaffolding. **Rotation à la prochaine séance.**

**⏭️ Prochaine étape**

1. **Séance suivante, en ouverture** : définir ensemble l'organisation de `projet-examen-blanc` comme support de consolidation/validation — périmètre à trancher (Phase 2 seule ou Phase 1 + 2), et **page d'accueil propre distribuant vers chaque notion/exercice**.
2. Consolidation vacances : réviser, renforcer, valider sur un périmètre large — pas seulement les dernières sessions.
3. **Après les vacances** : approfondir **React Router mode Declarative** (demande explicite de Frédéric — marché SPA réel sans Next.js).
4. Toujours en attente : projet CSS Grid (dette n°1 du socle) · `children` (non enseigné) · `useParams` sur un vrai cas API.

## Session 70 — Organisation `projet-examen-blanc` + démarrage calculatrice

**Durée** : ~3h (vendredi, semaine 2 de vacances). Énergie bonne. Séance de consolidation stricte, aucune notion neuve — conforme à la consigne vacances.

**Révision éclair (`position: fixed` + contexte parent)** 🔴 : **même inversion qu'en S64** — « fixed se fixe par rapport au parent direct ». Deuxième passage identique → règle des trois échecs appliquée par anticipation, cours complet redonné (`fixed` vise le **viewport** ; `transform`/`filter`/`backdrop-filter`/`will-change`/`contain` sur un ancêtre créent un bloc conteneur qui **capture** les descendants `fixed`). La conclusion pratique était juste, la règle sous-jacente fausse. **Reste en rotation.**

**⚠️ Audit exercices types intégré** (livré entre S69 et S70) : recommandation n°2 retenue comme cap du jour. Le Pokédex liste→détail (reco n°1) attend la semaine 3 car il repose sur `useParams` = notion neuve.

---

### 1. Organisation de `projet-examen-blanc` — tranchée

**Périmètre** : React + TS + Tailwind uniquement. Pas de DOM vanilla séparé — le socle Phase 1 se rejoue **dans** les composants (sémantique, Grid, méthodes de tableau, `fetch`).

**Structure actée** : `pages/` (une page routée par exercice) · `data/exercices.ts` (source unique) · `components/` réservé aux composants réellement partagés.

**`App.tsx` = layout permanent** : lien home + `<Routes>`, layout Grid `grid-rows-[auto_1fr]`. `Accueil` = page routée sur `/`, sans statut particulier.

**Ajout d'un exercice = 3 gestes** : créer la page → ajouter une `<Route>` → ajouter une entrée au tableau. Le tableau ne remplace **pas** les routes (correctif explicite de mon erreur DRY de la S68).

**🎓 Blocage d'architecture — le vrai contenu de la séance** : Frédéric plaçait nav + bouton home + `<Routes>` dans `Accueil`, en raisonnant « page d'accueil = point d'entrée » (réflexe `index.html`). Débloqué par les conséquences (boucle infinie, puis perte de la nav au changement de page). **Point posé** : `<Routes>` est une fenêtre qui remplace son contenu → ce qui doit survivre à la navigation vit **au-dessus**. Critère retenu : « cet élément doit-il rester visible quand je change de page ? »

Chaîne `index.html → main.tsx → App.tsx → pages` détaillée à sa demande, ainsi que `<script type="module">`, le chaînage `createRoot(...).render(...)` (forme longue donnée) et la logique des **enveloppes** (`StrictMode`, `BrowserRouter` : une enveloppe contient tous ceux qui s'en servent).

**Décision de design** : carte entièrement cliquable — critère énoncé seul et correct (_la zone de clic doit correspondre à ce que l'œil perçoit comme cliquable_).

**⚠️ Erreur de ma part** : j'ai reconduit une `<nav>` dans `App.tsx` sans la questionner, alors que sa demande initiale ne mentionnait qu'un bouton home. Doublon avec la liste d'accueil. Corrigé après qu'il l'ait relevé. **Récurrence de « demander avant de reconduire » (§9 bis), version design.**

---

### 2. `Accueil.tsx` — page blanche

`.map()` sur `EXERCICES`, `to={path}` branché sur la donnée, structure sortie seule.

- **🔴 `key` oubliée — 3ᵉ fois (S64, S70).** Aggravant : justification explicite (« c'est moi qui ajoute en dur, donc pas important »). **Raisonnement à corriger : la `key` ne dépend pas de l'origine des données.** Réflexe à réinstaller : `key` posée dans la foulée du `.map()`, avant le contenu.
- **🌟 Initiative non demandée** : a proposé de déstructurer directement dans le callback — `({ path, titre, description }) => ...`. Correct, plus propre que ma version, connexion faite seul avec la déstructuration des props (S60). **Sa version retenue.**
- `<article>` autour d'un `<Link>` : imbrication corrigée. Test S61 réappliqué.
- `flex` sans `flex-col` alors qu'il voulait un empilement vertical.

---

### 3. Calculatrice — machine à états (démarrée)

Version 2 validée (afficheur + pavé complet), pas la version « deux champs » qui n'aurait rien drillé. **Comble la famille logique pure, seul vrai trou du canon selon l'audit.**

**✅ Les trois états trouvés — la partie difficile de l'exercice.** Première proposition en `premier`/`second`/`resultat` (découpage par nombre) → reformulée en **rôles** après mise à l'épreuve sur le scénario : `affichage` / `memoire` / `operateur`. Corrections mineures : nommage (un état porte une donnée, pas une action) · valeur de départ `"0"` et non `""`.

**Choix du type chaîne pour l'afficheur** compris via « une variable = un rôle = un type » (S61).

**`<table>` écarté** pour le pavé — critère données tabulaires vs mise en page réappliqué correctement une fois posé. Pavé en `grid grid-cols-4` → entame la dette Grid.

**Arrêté à** : le handler `tapeChiffre` — deux questions posées, non traitées (quel état signale qu'un opérateur vient d'être pressé, et ce test suffit-il après un `=`).

---

**Niveaux** : architecture `main`/`App`/pages 🟢 (débloquée par un vrai contresens) · `<Routes>` = fenêtre, layout au-dessus 🟢 · `.map()` + `Link` sur source unique 🟢 · déstructuration dans un callback 🟢 · `key` 🔴 · identification des états d'une machine à états 🟡 (trouvés avec une reformulation, premier contact) · `position: fixed` 🔴.

**🆕 Dettes ouvertes ce jour** :

- **Generics / `useState<T>`** — demandé explicitement, non enseigné (l'inférence suffit ici). À traiter après React Router. Rejoint la dette S67.
- **`<table>`** — souhaite le repratiquer, peu vu. À caler sur un exercice à vraies données tabulaires.
- `useLocation` (masquer le lien home sur l'accueil) — écarté, notion neuve.

**🎹 Raccourci** : `Ctrl+.` — **non joué cette séance, rotation toujours en attente.** À demander en ouverture s'il est acquis avant d'en poser un nouveau.

**⏭️ Prochaine étape**

1. **Reprendre la calculatrice** au handler `tapeChiffre` (les deux questions en suspens).
2. Puis : opérateurs, `=`, `C`, cas limites (zéro en tête, chaîne d'opérations).
3. Habillage de l'accueil + pavé en Grid — bon créneau basse énergie, entame la dette CSS Grid.
4. **Semaine 3 (à partir du 18/08)** : décision à prendre sur la reprise des notions neuves — `useParams` sur Pokédex liste→détail (reco n°1 de l'audit) et approfondissement React Router Declarative.

## Session 71 — Calculatrice terminée (machine à états complète)

**Durée** : ~2h (soir, PC fixe). Suite directe de la S70, même journée.

**Pas de révision éclair** (séance de continuité, reprise en cours d'exercice).

---

### Calculatrice — terminée et fonctionnelle

**✅ Sorti seul** : les 4 fonctions identifiées par nature de touche (déduction correcte, `efface` en plus après signalement) · structure `switch` complète et juste du premier coup · `tapeChiffre` avec ses deux branches · ternaire du zéro initial (`affichage === "0" ? chiffre : affichage + chiffre`) · pavé complet en `grid grid-cols-4`, `type="button"` posé spontanément · **`<table>` écarté seul** après rappel du critère.

**🔴 Blocages — tous sur du React ancien, pas sur la logique du jour** :

1. **Le contrat `void` des handlers, 3ᵉ fois** (S64, S67, S70-71). `switch` écrit avec `memoire + affichage;` — calcul produit puis jeté, aucun setter. Même famille d'erreur que `return liste.map(...)` en S64. **Le setter va DANS la fonction.** À recroiser.
2. **Handlers qui écrivent dans le mauvais état** : `tapeChiffre` alimentait `memoire`, puis `tapeOperateur` a écrit deux fois dans `affichage` (`memoire + operateur`, puis `""`). Point posé : **chaque fonction n'écrit que dans les états dont elle a la charge.**
3. **Lecture d'un état juste après son setter** dans la même fonction — la photo figée du rendu (S53). Ressorti deux fois.
4. **`!nouveauNombre` au lieu de `true`** : `!x` est fait pour un **basculement**, pas pour une affirmation. Casse sur deux appuis d'opérateur consécutifs.
5. **Coercion string/number** non anticipée : `"12" + "7"` = `"127"`. `Number()` avant, `String()` après.
6. **Un opérateur ne se stocke pas dans une variable** — `a + operateur + b` produit du texte. Il faut tester et écrire les 4 calculs à la main.

**🎓 Question de fond posée — « faut-il un 5ᵉ useState ? »** : critère redonné (un état est nécessaire seulement si l'information n'est pas recalculable depuis les autres). A tranché lui-même pour l'historique persistant après `=`, cas où l'état est effectivement justifié puisque `memoire`/`operateur` sont vidés. **Distinction state vs donnée dérivée réactivée correctement.**

**Fin donnée en entier sur demande** : `calcul()` complète, `efface()`, la ligne `saisie` (donnée dérivée), le JSX de l'afficheur.

**Retour sur `saisie`** : demande explicite de dépliage → forme longue (`if`/`else` + concaténations) donnée avant la version compressée. Template literal 🟢, ternaire dans `${}` 🟢 (même contrainte que les accolades JSX : une valeur, pas une instruction).

---

**✅ Trou de l'audit comblé** : famille logique pure (machine à états, cas limites) — était le seul vrai manque du canon. Quiz / pendu / memory restent ❌ mais le mécanisme central est désormais pratiqué.

**Niveaux** : identification des états d'une machine à états 🟡 (trouvés avec reformulation) · `switch` 🟢 (structure juste sans aide, **sort de la rotation**) · contrat `void` des handlers 🔴 — **3ᵉ récurrence, priorité n°1** · lecture d'un état après son setter 🟡 · coercion string/number 🟡 (neuf en pratique) · state vs donnée dérivée 🟢 · template literal 🟢 · Grid `grid-cols-4` en contexte réel 🟢.

**📌 Reste sur l'exercice** (non fait, optionnel) : habillage Tailwind de l'afficheur · division par zéro · opérations enchaînées sans `=` · **factorisation des 16 boutons en composant `Touche`** — terrain DRY signalé, mécanisme déjà acquis (props + prop fonction, S64), bon exercice à part entière.

**📌 À vérifier en ouverture** : la calculatrice a-t-elle été ajoutée à `EXERCICES` et à `App.tsx` (le 3ᵉ geste de la règle d'ajout) ?

**🎹 Raccourci** : `Ctrl+.` — non joué sur les deux séances. **Demander s'il est acquis avant d'en poser un nouveau.**

**⏭️ Prochaine étape**

1. Recroiser le **contrat `void` des handlers** — page blanche courte, 3ᵉ récurrence.
2. Habillage de l'accueil + de la calculatrice (créneau basse énergie, Tailwind solide).
3. **Semaine 3 (à partir du 18/08)** : décision sur la reprise des notions neuves — `useParams` sur Pokédex liste→détail, approfondissement React Router Declarative.
4. Toujours en attente : projet CSS Grid · `children` · generics (`useState<T>`) · `<table>`.

**📝 Edit post-séance (retour de Frédéric)**

Frustration exprimée en fin de séance : _« j'ai beaucoup galéré sans trouver la réponse, la logique ne venait pas alors que la technique est connue. »_

Recadrage donné, à conserver pour le calibrage : **c'est le premier exercice du parcours sans motif à reconnaître.** Tous les précédents fournissaient la logique (afficher, filtrer, transformer, envoyer) ; il ne restait qu'à brancher le mécanisme. Ici il fallait inventer le comportement — décider ce que le composant doit retenir, quand et pourquoi. Compétence distincte, jamais entraînée, dont c'était le premier contact. **La difficulté ressentie confirme le diagnostic de l'audit, elle ne mesure pas le niveau.**

**Mesure réelle reportée** : refaire la calculatrice en page blanche dans quelques jours. C'est ce passage-là qui vaudra verdict, pas celui-ci.

**🎯 Décidé pour la prochaine session — refactor DRY de la calculatrice** (demande de Frédéric, à faire en priorité)

Zéro notion neuve, conforme à la consigne vacances. Deux niveaux, dans l'ordre :

1. **Composant `Touche`** (props `label` + `onClick`) — la chaîne Tailwind vit à un seul endroit. Échauffement.
2. **Tableau `TOUCHES` + `.map()`** — même pattern que `EXERCICES` sur l'accueil, mais plus exigeant : il faut décider quel handler chaque touche déclenche. C'est le vrai exercice.

Recroise au passage le **contrat `void` des handlers** (récurrence n°1) sur un terrain déjà connu.

---

**🗺️ Famille logique pure — suite du programme (après consolidation de la calculatrice)**

Exercices partageant le même mécanisme (un état invisible qui décide du comportement), par proximité décroissante :

- **Quiz / QCM** — index courant + score ; le même bouton fait deux choses selon qu'on a répondu ou non. **Recommandé comme prochain de la famille** : tableau d'objets typé (terrain fort), résultat présentable en portfolio sur un thème optique.
- **Jeu de mémoire** — mémoriser la première carte + délai avant retournement. Ajoute la dimension temps.
- **Pendu / devine le nombre** — état de partie, tentatives, conditions de fin. Le plus exigeant.
- **Carrousel** — index circulaire, modulo. Le plus rapide (~20 min), jamais fait.

⚠️ **Ne pas confondre** : convertisseur d'unités, calcul de RAC, pourboire = **calculs dérivés**, pas des machines à états. Ils ne drillent pas la même chose.

**Ordre retenu** : consolider la calculatrice (refactor puis page blanche) **avant** d'ouvrir un nouvel exercice de la famille.

## Session 72 — Refactor DRY calculatrice + raccordement clavier

**Durée** : ~3h (dimanche, semaine 2 de vacances). Énergie bonne, séance tenue en entier.

**Ouverture** : bilan de la S71 posé par Frédéric comme un « échec » (aide nécessaire). Recadré sur les faits — les blocages de la veille portaient sur du React ancien, pas sur la logique de l'exercice. La mesure reste la page blanche à venir, pas la séance de construction.

**Révision éclair (`fetch` POST)** 🟢 : structure complète et juste à froid — `method` en chaîne, `headers` en objet, `body` en chaîne JSON. **L'inversion de la S67 n'est pas revenue → sort de la rotation.** `"Content-Type"` cherché en ligne : réflexe correct, chaîne imposée par une norme externe, même famille que `toLocaleString("fr-FR")`. Seule correction : nommage inversé (`data` pour la `Response`, `reponse` pour les données) — l'enveloppe porte `ok` et `status`, le nom doit le rappeler.

**🎹 Raccourci** : `Ctrl+.` acté 🟢 et sorti de rotation. Usage volontairement faible assumé — cherche ses erreurs lui-même, raison valable. **Nouveau : `F2`** (renommer un symbole dans tout le projet), utilisé en contexte réel dans la séance. Donnés en passant : `Shift+Alt+↓` (dupliquer une ligne), `Ctrl+D` (occurrence suivante), `Alt+↑/↓` (déplacer une ligne).

---

### 1. Refactor DRY — composant `Touche` puis tableau

**✅ Sorti seul** : interface `ToucheProps` complète du premier coup, **y compris `onClick: () => void`** · composant `Touche` correct · les 16 entrées du tableau · le `.map()` avec **`key` posée dès la première écriture** (dette 🔴 depuis S64, pas de rappel nécessaire) · `ToucheProps[]` comme type du tableau, choix pertinent · `onClick={() => tapeChiffre("7")}` sans confusion `fn`/`fn()`.

**🔴 Blocage sur le vocabulaire, pas sur le mécanisme.** Demande explicite de redéfinir _prop_, _type_, _contrat_ — le code était juste, les mots ne l'étaient pas. Cours complet redonné (une prop = une information parent→enfant ; React les rassemble en un objet ; l'interface = le contrat). **Le piège des deux `=>` n'était pas compris** malgré son application correcte : redonné avec le repère de position — à droite d'un `:` dans une interface = description ; ailleurs = fabrication.

**`void` non compris non plus** : redonné (TS exige que toute fonction annonce son retour ; `void` = ne compte sur aucune valeur en sortie ; conséquence pratique = le résultat sort par un setter, pas par un `return`).

**Corrections mineures** : `() => efface()` → `efface` (pas d'argument à figer, on passe la référence) · `TOUCHES` → `touches` (tableau reconstruit à chaque rendu, dépend du state — nature différente de `EXERCICES`) · template literal superflu.

**Emplacement du tableau** : question posée par moi, mal formulée, réponse donnée directement. Point retenu : le tableau contient des fonctions qui lisent le state → il vit **dans** le composant. Question de fond posée derrière (ordre de lecture du fichier) → **hoisting mentionné, non enseigné**.

**Spread de props `{...t}`** — demandé explicitement. Forme longue → déstructuration → spread. Points posés : l'ordre décide (ce qui suit le spread écrase) · `key` reste hors du spread · ne fonctionne que si les clés correspondent exactement, garanti ici par le typage.

---

### 2. Raccordement clavier (proposé par Frédéric)

**✅ Sorti seul** : structure `useEffect` + `addEventListener("keydown")` + nettoyage identifié comme nécessaire · tableau de dépendances non vide · les quatre familles de touches et leur aiguillage · early return non retenu mais `if` corrects.

**🔴 Blocage principal — la même référence pour `add` et `remove`.** Deux flèches au texte identique = deux fonctions distinctes ; `removeEventListener` compare par identité. **Non ressorti seul, deux indices nécessaires** malgré le rappel valeur/référence. Squelette finalement donné. À recroiser : c'est le mécanisme central du nettoyage d'écouteur.

**Autres points** : `removeEventListener` placé dans le corps de l'effet au lieu d'être renvoyé (le `return` **confie** la fonction à React) · `filter` proposé là où `includes` suffit (tableau vs booléen) · `"enter"`/`"c"` au lieu de `"Enter"`/`"Escape"` (casse) · `0` manquant dans la liste des chiffres.

**Dépendances de l'effet** : point de fond posé — le tableau doit contenir **tout ce que l'écouteur lit indirectement** via les handlers, pas seulement `affichage`. Sans quoi l'écouteur reste branché sur des fonctions d'un rendu précédent. Corrigé en `[affichage, memoire, operateur, nouveauNombre]`.

**`KeyboardEvent`** 🟡 : type du catalogue navigateur embarqué par TS, à écrire uniquement parce que la fonction est définie hors de son point d'usage. **Question de fond posée — « faut-il connaître ces noms de tête ? »** Réponse : non, geste outillé donné (écrire la fonction inline, survoler `e`, lire le type déduit, puis extraire). Même principe que `"Content-Type"`.

---

**⚠️ Mes erreurs** :

1. **Renvois systématiques aux sessions passées** — recadré explicitement par Frédéric, règle du §9 bis non respectée. Corrigé en cours de séance.
2. **Réponse juste traitée comme fausse** : ma question portait sur les arguments reçus, sa réponse était correcte ; j'ai englobé la partie fausse (le retour, qui répondait à une autre question) dans le même verdict.
3. **Nom `TOUCHES` donné en consigne puis corrigé en `touches`** — la différence de nature n'était visible qu'une fois le code écrit.
4. Question sur l'emplacement du tableau posée de façon incompréhensible, sans que l'enjeu réel (portée) soit énoncé.

**⚠️ Écart à la consigne vacances** : deux notions neuves croisées (spread de props, `KeyboardEvent`), les deux à sa demande explicite. Le raccordement clavier lui-même est de la recombinaison pure.

---

**Niveaux** : interface de props + composant simple 🟢 (page blanche, premier coup) · `key` 🟢 (dette soldée, posée sans rappel) · contrat `void` — **écrit correctement, mais le sens du mot était inconnu** ; le décrire ≠ le comprendre · piège des deux `=>` 🟡 (appliqué juste, expliqué faux) · spread de props 🟡 (neuf) · référence unique add/remove 🔴 (non ressortie seule) · dépendances complètes d'un effet 🟡 · `includes` vs `filter` 🟡 · `KeyboardEvent` 🟡.

**🆕 Dettes ouvertes ce jour** :

- **Types fonction dans une interface au-delà de `() => void`** — avec paramètres, avec valeur de retour. Demandé explicitement.
- **Hoisting** — mentionné, non enseigné.
- **`useRef`** — mentionné (accès au DOM réel en React), non enseigné.
- `tabIndex` / écouteur scopé à un élément — alternative montrée, non pratiquée.

**⏭️ Prochaine étape — reprise directe dans la même conversation**

Trois blocs livrés en fin de séance, à traiter demain dans l'ordre :

1. **Défauts réels** : double déclenchement clavier/souris (bouton focalisé réactivé par `Entrée`/`Espace`) · historique périmé · AZERTY (rangée du haut = `& é " '` sans `Shift`) · `"C"` majuscule non gérée · enchaînement `7 + 3 +` sans `=`.
2. **Clean code** : `switch` répétant `setAffichage(String(...))` 4× (séparer calcul et écriture) · `chiffres`/`operateurs` à sortir de l'effet · quatre `if` indépendants → `else if` ou early return.
3. **DRY** : la table de correspondance existe **deux fois** (tableau `touches` + aiguillage clavier). `e.key` contient la même chaîne que `label` → retrouver l'entrée et appeler son `onClick`. `Enter`/`Escape` restent à part.

Puis : habillage Tailwind (non fait) · page blanche calculatrice (mesure réelle, à distance) · **semaine 3 à partir du 18/08 — décision sur la reprise des notions neuves**.

## Session 73 — Calculatrice : DRY de l'aiguillage clavier + enchaînement des opérateurs

**Durée** : ~2h15 (lundi, dernier jour de semaine 2 de vacances). Énergie bonne, reprise directe dans la conversation de la veille.

**Révision éclair (`Object.keys` / `values` / `entries`)** 🟡 : `keys` et `values` justes de mémoire, `entries` inconnu (cherché en ligne). Cours donné — tableau de paires `[clé, valeur]`, déstructuration par position `([marque, quantite])`, usage React pour transformer un objet en liste. **Faux-ami identifié par Frédéric lui-même** : le `entries` de `IntersectionObserver` est un simple nom de paramètre, aucun rapport. **Demande explicite : mettre `Object.entries` en rotation, se sent fragile.**

**Somme d'un objet** : `Object.values(...).reduce(...)` reconstruit seul, ~10 min d'effort. Confirmé qu'aucune méthode native de somme n'existe en JS — `reduce` **est** la réponse standard, ce n'est pas un contournement.

---

### 1. DRY de l'aiguillage clavier

**Constat de départ** : deux sources de vérité pour le même comportement — le tableau `touches` et les listes `chiffres`/`operateurs` de l'écouteur.

**Première explication incomprise** ("j'ai du mal à comprendre") → reprise à zéro par le déroulé de ce qui se passe au clic, puis squelette à deux trous. A fonctionné.

**✅ Trouvé seul** : `find` + condition `t.label === e.key`. **🟡 Trou 2 manqué** : a testé `e.key === touche.label` (redondant avec ce que `find` vient de vérifier, et plante si `touche` est `undefined`) au lieu de tester l'existence. Correction donnée. **Repère posé : `find` renvoie l'élément ou `undefined`, on teste toujours son résultat.**

**Question posée derrière** : pourquoi `touche.onClick()` avec parenthèses. Réponse redonnée sur `fn` vs `fn()` — les deux formes cohabitent dans son fichier (`onClick={efface}` vs `touche.onClick()`), une transmet, l'autre exécute.

---

### 2. Enchaînement des opérateurs (`2 + 5 + 7` sans `=`)

**🌟 Diagnostic et solution trouvés seul, énoncés en français** : « il n'y a pas de deuxième mémoire, il faudrait que setMemoire fasse un calcul dans le cas où il y a déjà un opérateur ». C'est exactement le comportement d'une vraie calculette — calculer au fil, ne jamais retenir plus d'un nombre.

**✅ Écrit seul** : la branche conditionnelle, la variable locale, les deux setters qui la consomment. Le piège du state non mis à jour dans la fonction en cours a été **évité spontanément**.

**🔴 Bug unique** : `operation(..., op)` au lieu de `operation(..., operateur)` — l'opérateur qui arrive au lieu de celui en attente.

**Extraction de `operation`** : proposée par moi, comprise après une explication ratée (voir erreurs). Fonction pure, hors composant, `return` sans `break`. `calcul()` réécrite pour l'utiliser — **fait seul, avec un `String()` posé directement autour de l'appel, plus propre que ma version en deux temps**.

---

### 3. Points de vocabulaire redemandés

Trois demandes explicites de définition, toutes sur des mots que j'employais sans les avoir posés : **setter**, **variable locale**, **early return**. Cours donnés séparément.

**Sur `return` vs `break` dans un `switch`** : question légitime ("je croyais qu'il fallait un break"). Ma réponse a mélangé trois sujets → **stop net de Frédéric** ("tu m'as perdu, tu as mélangé trop de trucs"). Repris isolément avec deux exemples hors contexte calculatrice : `break` sort du switch, `return` sort de la fonction. Compris immédiatement.

**Early return appliqué seul** dans la foulée : `if (!operateur) return;` — avec, sans le formuler, l'usage du falsy sur chaîne vide.

---

### 4. Notions posées en passant

- **Debugger** : demandé par Frédéric ("comment faire défiler ligne par ligne"). Procédure Chrome donnée (Sources, `Ctrl+P`, breakpoint sur numéro de ligne, `F10`/`F11`/`F8`, panneau Scope) + instruction `debugger;`. **Non pratiqué dans la séance.**
- **Double déclenchement clavier/souris** 🟢 : mécanisme compris (bouton focalisé réactivé par `Entrée`, plus l'écouteur `window`). **A résisté à la correction, à juste titre** — impact nul ici, coût réel sur la navigation `Tab`. **Décision : ne rien corriger.**
- **`onClick` vs `onMouseDown`** 🟢 : trois moments d'un même geste, `onClick` exige `down` et `up` sur le même élément (d'où l'annulation par glissement). Défaut = `onClick`.
- **Warning `exhaustive-deps`** : expliqué à sa demande. `touches` et `calcul` manquants, volontairement — les ajouter relancerait l'effet à chaque rendu. **Consigne donnée : laisser le warning, ne pas le faire taire.** Justifie `useCallback`/`useMemo`, déjà en attente depuis le scaffolding.

---

**⚠️ Mes erreurs** :

1. **Empilement de trois sujets** dans l'explication `return`/`break` (extraction de fonction + enchaînement + switch) → arrêt net. Récurrence directe du §9. Reprise à un seul sujet, hors contexte, immédiatement efficace.
2. **Consigne du bloc DRY incompréhensible au premier envoi** — j'ai donné l'objectif sans dérouler le mécanisme.
3. **Vocabulaire employé sans être posé** : setter, variable locale, early return. Trois arrêts sur définition dans une même séance. À poser avant usage, pas après.

---

**Décisions de Frédéric** :

- **AZERTY et `"C"` majuscule** : pas corrigés, aucun apprentissage à la clé. Jugement correct.
- **Division par zéro** : message texte renvoyé par `operation`. Effet de bord signalé (type de retour `number | string`, `NaN` si on enchaîne après une erreur) et deux alternatives proposées. **Choix assumé de laisser en l'état.**
- **Commentaires pédagogiques dans le code** : conservés. Le fichier est son support de révision, pas un livrable d'équipe. Position légitime, à revoir seulement au moment du SaaS portfolio.

---

**Niveaux** : `find` + test d'existence 🟡 (méthode trouvée seule, garde manqué) · enchaînement des opérateurs / machine à états 🟢 (**diagnostic et solution énoncés seul**) · extraction de fonction pure hors composant 🟢 · `return` vs `break` 🟢 · early return 🟢 (appliqué seul juste après le cours) · falsy sur chaîne vide 🟢 · variable locale vs state 🟢 (piège évité spontanément) · `Object.entries` 🔴 · `fn` vs `fn()` 🟢 · debugger 🔴 (procédure donnée, non pratiquée).

**🔄 Rotation** : `Object.entries` **entre** (demande explicite). Toujours dedans : `position: fixed` 🔴 · `IntersectionObserver` 🔵 · `slice(0, n)` en contexte neutre.

**📋 File d'attente des notions repoussées** (cohérente, à traiter à la reprise) : types fonction dans une interface au-delà de `() => void` · `useCallback` / `useMemo` / `React.memo` (+ React Compiler) · generics `useState<T>` · hoisting · `useRef` · `children` · `useParams` sur vrai cas API.

**📌 Reste sur la calculatrice** : habillage Tailwind (jamais fait) · **page blanche à distance = la vraie mesure**, pas encore programmée.

**⏭️ Prochaine étape**

1. **Demain** : habillage visuel de la calculatrice et de la page d'accueil. Séance légère, terrain Tailwind solide, après deux jours denses.
2. Puis : page blanche calculatrice (mesure réelle).
3. **Semaine 3 démarre le 18/08** — décision à prendre sur la reprise des notions neuves. Candidats posés : `useParams` sur Pokédex liste→détail, approfondissement React Router Declarative.
4. Toujours en attente : projet CSS Grid (dette n°1 du socle).

## Session 74 — Placement Grid + point décimal + flottants IEEE 754

**Durée** : ~2h30 (mardi, semaine 3 de vacances). Énergie bonne.

**Consigne vacances prolongée par Frédéric** : semaine 3 = consolidation également (absent en semaine 1). Pas de grosse nouveauté, exercices tirés de l'audit exercices types. Écarte le Pokédex (`useParams` = neuf).

**Révision éclair (`position: fixed` + contexte parent)** 🔴 : **3ᵉ échec identique** (S64, S70, S74) — cause attribuée au glassmorphism, mais la règle sous-jacente ("`fixed` vise le viewport, pas le parent") toujours pas produite. Règle des trois échecs appliquée, cours complet redonné avec la liste des propriétés créatrices de bloc conteneur. **Reste en rotation.**

**🎹 Raccourci** : `F2` commencé, reconduit.

---

### 1. Placement Grid — dette n°1 du socle, entamée pour de bon

Constat de départ **posé par Frédéric** : « il n'y a pas trop de grid à faire ». Juste — une grille régulière ne drille rien. Le contenu de la dette, c'est le **placement** (`col-span`, `row-span`), jamais pratiqué.

Pavé réorganisé en disposition de vraie calculette : `C` sur 2 colonnes, `+` sur 2 rangées, `0` et `=` sur 2 colonnes. 16 touches, aucune ajoutée.

**🌟 Diagnostic trouvé seul, avant moi** : `size-16` sur le bouton empêche le `col-span-2` de produire un effet visible. C'est **le** point de fond de Grid — la case dimensionne l'élément (`stretch` par défaut), pas l'inverse. Formulé spontanément, avec la bonne solution pressentie.

**Notions posées** : `auto-rows` vs `grid-template-rows` — deux **populations** de pistes (explicites déclarées / implicites fabriquées par le navigateur), pas deux façons de dimensionner. Demandé deux fois, la seconde explication a porté. Valeur arbitraire `[4rem]` → forme canonique `auto-rows-16` (warning du plugin, juste).

**Habillage** : afficheur hiérarchisé (`text-end`, tailles différenciées), fond, titre. Corrections : `flex-col` sans `flex` (classe inerte — le bon résultat par la mauvaise raison, les `<p>` sont block) · `py-1 p-4` sur le même élément (deux utilitaires en conflit sur le même axe) · répétition `py-1 px-4` à remonter sur le parent.

---

### 2. Point décimal

**🎓 Question à l'origine du bloc, posée par Frédéric** : « est-ce que l'exercice canonique intègre les décimales ? » — question de dev qui compare son travail à une référence externe. C'est elle qui a structuré toute la fin de séance.

**✅ Sorti seul** : fonction dédiée plutôt que `tapeChiffre` (justifié : un point n'obéit pas aux mêmes règles) · garde `affichage.includes(".")` en early return · branche `nouveauNombre` produisant `"0."` · abaissement du drapeau.

**Corrections** : `,` comme séparateur → `Number(",")` = `NaN`, le séparateur décimal JS est le point, toujours ; la virgule est une convention d'**affichage** (`toLocaleString`) · `e.key === "dot"` → `e.key` contient le caractère, les noms style `Period` appartiennent à `e.code` · ligne clavier redondante avec le `find` existant · `return setAffichage(...)` → le `return` nu, un seul métier à la fois (**4ᵉ occurrence de la famille contrat `void`**, mais cette fois sur la forme uniquement, pas sur le fond).

**Tentative écartée** : `toLocaleString` avec `style: "currency"` sur l'afficheur. Point posé — **on formate un résultat, jamais une saisie** : `"3."` formaté devient `"3"`, le point disparaît sous les doigts de l'utilisateur.

---

### 3. Flottants IEEE 754

`0.1 + 0.2` = `0.30000000000000004`. Représentation binaire, norme commune à tous les langages ; spécificité JS = un seul type numérique. Conséquence retenue : **jamais d'égalité stricte entre deux flottants calculés**.

Parade : `String(Number(x.toFixed(10)))` — trois métiers distincts (couper / jeter les zéros / rendre du texte). Question posée derrière : « pourquoi `Number` enlève les zéros » → répondu par la nature du texte vs celle du nombre, aller-retour analogue à `JSON.stringify`/`parse`.

**🔴 Bloc mal construit de ma part (voir erreurs)** — correction finalement livrée en entier.

**Effet de bord révélateur** : trois `ts(2345)` sur `undefined`. Cause — `switch` sans `default` dans `operation`, donc retour `undefined` possible. **Le trou existait depuis la S71, invisible.** TS l'a désigné avant exécution. Réaction : « TS c'est juste trop chiant, je ne comprends pas pourquoi tout le monde bosse avec » — recadré sur le coût payé d'avance vs le bénéfice dispersé, et sur le fait qu'un fichier de 130 lignes écrit seul est le format où TS rapporte le moins.

**Union `number | string`** donnée toute faite (❌ au programme), avec `typeof` comme narrowing. Non enseignée, à ouvrir plus tard.

---

### 4. Comparaison aux énoncés canoniques (vérifiée, non reconstruite)

Sources fetchées : les 15 user stories freeCodeCamp et l'énoncé Odin (essentiel + extra credit).

**Couvert** : clear, saisie visible, chaîne d'opérations, pas de zéros multiples en tête, un seul point, opérations sur décimaux, opérateur après `=`, précision ≥ 4 décimales, division par zéro, une paire à la fois, clavier, CSS.

**Restant — 2 items seulement** :

- **Opérateurs consécutifs** (fCC #13) : le dernier opérateur doit écraser, sans calculer. Bug réel — `tapeOperateur` calcule dès que `operateur` n'est pas vide.
- **Backspace** (Odin, extra credit).

**Note d'énoncé** : logique d'exécution immédiate vs logique de formule, les deux acceptées. La calculatrice de Frédéric fait de l'exécution immédiate — conforme.

---

**⚠️ Mes erreurs** :

1. **Trois messages consécutifs incompréhensibles** sur `formateResultat` — j'ai demandé de remplir des trous dans une fonction dont je n'avais pas énoncé le but, avec une union non enseignée dedans. « Je ne comprends rien à ce que tu veux faire !! ». Le cours devait précéder l'exercice, pas le suivre. **Récurrence directe du §9.**
2. **Consigne d'arrondi mal cadrée** : j'avais dit « on arrondit à l'affichage », puis validé implicitement un arrondi dans `operation`. Il a fallu revenir en arrière.
3. **Liste des items restants donnée de mémoire, sur-inclusive** (débordement d'affichage, signe +/− — absents des deux énoncés). Corrigée après vérification. Il a demandé la vérification lui-même.

---

**Niveaux** : placement Grid `col-span`/`row-span` 🟢 (diagnostic du conflit de taille trouvé seul) · `auto-rows` vs `grid-template-rows` 🟡 (deux explications nécessaires) · `stretch` par défaut d'un enfant de grille 🟢 · point décimal / parsing d'entrée 🟢 · flottants IEEE 754 🟡 (neuf, conceptuel) · `toFixed`/`Number`/`String` 🟡 · formater un résultat ≠ une saisie 🟢 · `switch` sans `default` 🟢 (ancré par 3 erreurs TS) · union + `typeof` 🔴 (donné, non enseigné) · `flex-col` sans `flex` 🔴 · `position: fixed` 🔴.

**🆕 Dettes ouvertes ce jour** :

- **Union de types (`number | string`)** — utilisée, non enseignée. Rejoint la file `type`/generics.
- **`e.code` vs `e.key`** — mentionné, non pratiqué.

**📌 Ressenti sur TypeScript** : agacement exprimé franchement. À surveiller — le format actuel (fichier unique, écrit seul, récent) est structurellement celui où TS coûte le plus et rapporte le moins.

**⏭️ Prochaine étape**

1. **Opérateurs consécutifs** (fCC #13) — bug réel, seul mécanisme canonique manquant.
2. **Backspace** — `slice(0, -1)`, pratique en contexte plutôt qu'en révision à froid.
3. **Habillage de l'accueil** — reporté deux fois, créneau basse énergie.
4. Puis : **page blanche calculatrice à distance** = la vraie mesure, toujours pas programmée.
5. Toujours en attente : `children` · `useParams` sur vrai cas API · generics · `useRef` · `<table>`.

## Session 75 — Calculatrice terminée (énoncés canoniques couverts) + structure de l'accueil

**Durée** : ~2h (mercredi, semaine 3 de vacances). Énergie bonne. Reprise dans la même conversation.

**Révision éclair (`Object.entries`)** 🟡 : `.map()` complet écrit juste — `Object.entries` correctement nommé, déstructuration par position `([marque, quantite])`, `key` posée sans rappel. **Mais ~5 min d'effort**, et la forme produite (tableau de tableaux `[["Rayban", 12], ...]`) pas énoncée spontanément. Le signal est l'effort → **reste en rotation**. Détail corrigé : `<li>` sans `<ul>` parent.

**🎹 Raccourci** : `F2` reconduit, non vérifié cette séance.

---

### 1. Centrage vertical de la calculatrice

**Question posée par Frédéric** après avoir constaté que `m-auto` ne centre qu'horizontalement. Point de fond : en flux normal, `margin: auto` vertical est **calculé à zéro par la spécification** — pas un bug, une règle. Il ne devient actif sur les deux axes qu'en contexte Flexbox ou Grid.

Solution : `<div className="grid h-full place-items-center">` en enveloppe de la page. `h-full` indispensable — sans hauteur à remplir, pas d'espace libre à répartir.

**⚠️ Ma consigne partait dans tous les sens** — arrêt net de Frédéric (« tu pars déjà dans tout les sens, je veux la réponse avec l'explication »). Justifié : je posais un exercice sur une notion qu'il venait de découvrir bloquante, au lieu de répondre. Réponse donnée directement ensuite.

**Deux questions de fond posées derrière, toutes deux pertinentes** :

- _Pourquoi une div parent dans `Calculatrice.tsx` plutôt que dans `App.tsx` ?_ → le layout ne sait pas ce qu'il affiche ; centrer là centrerait **toutes** les pages. Critère : contrainte transversale → layout · contrainte propre à une page → la page.
- _Pourquoi Grid pour un enfant unique ?_ → ce n'est pas Grid contre Flex, c'est **un contexte de mise en page contre le flux normal**. `flex items-center justify-center` fait le même travail ; `place-items-center` s'écrit plus court. Repère posé : Flexbox organise **une** direction, Grid **deux**.

**`place-items` vs `place-content`** (repéré dans l'autocomplétion VS Code) : _items_ = le contenu **dans** les cases · _content_ = les cases **dans** le conteneur. Différence invisible quand la grille remplit son conteneur — d'où l'impossibilité de tester chez lui.

**🔴 Faute de frappe coûteuse** : `place-item-center` (sans `s`). **Tailwind ne génère rien pour un nom inexistant, sans erreur ni warning.** Le centrage a disparu en entier. Repère à garder : classe sans effet = vérifier l'orthographe avant la logique.

---

### 2. Opérateurs consécutifs (fCC #13) — dernier item logique

**✅ Résolu en deux tentatives.** Première proposition `operateur && !memoire` — bonne forme (deux conditions, `&&`, `!` pour l'absence), mauvais état : `memoire` garde le premier opérande, elle ne dit rien sur ce qui a été saisi depuis. Corrigé seul après indice : `if (operateur !== "" && !nouveauNombre)`.

**Point de fond posé** : la condition initiale demandait _« y a-t-il un opérateur en attente ? »_. La bonne question est _« un opérateur en attente **et** un nouvel opérande saisi depuis ? »_. `nouveauNombre` porte maintenant deux usages cohérents.

**🎓 Auto-diagnostic de Frédéric, juste** : « ce n'est pas le code qui est compliqué, c'est la logique derrière. Ça s'entraîne. » Nommé en retour : **modéliser un état** — décider ce que le système retient et quelle question chaque fonction pose au state. C'est ce que la famille logique pure entraîne, et c'est la seule compétence du parcours qui n'est jamais fournie par l'énoncé.

---

### 3. Backspace (Odin, extra credit)

**Erreur de départ** : `affichage.length.slice(0, -1)` → `.length` est un **nombre**. Vient d'une confusion avec mon propre message, qui mentionnait `.length` pour le cas limite et non pour la coupe.

**🌟 Cas limite anticipé sans consigne** : ne rien effacer quand un opérateur vient d'être pressé (l'afficheur montre l'ancien nombre, il n'y a rien de personnel à retirer). Non signalé par moi.

**🔴 Structure à corriger** : trois `if` imbriqués dont **deux branches identiques mot pour mot**. Repère posé : _quand deux branches d'un `if/else` contiennent le même code, la condition ne sert à rien telle qu'écrite_ — la reformuler ou la retourner en early return. Version finale en 2 lignes :

```ts
if (memoire && nouveauNombre) return;
setAffichage(affichage.length === 1 ? "0" : affichage.slice(0, -1));
```

---

### 4. Finitions

**`className = ""` en valeur par défaut** dans `Touche` — sans lui, les 15 touches sans span portaient une classe littérale `undefined` dans le DOM. Sans effet visible, mais visible à l'inspecteur.

**Ajouts autonomes** : `Backspace` et `,` traités hors du `find` (le `e.key` ne correspond à aucun label) · 18 touches, grille remplie sans trou · dépendances de l'effet vérifiées.

---

### 5. ✅ Calculatrice terminée — les deux énoncés canoniques sont couverts

**freeCodeCamp** : les 9 user stories fonctionnelles (#7 à #15) ✅.
**Odin** : essentiel (clear, division par zéro, une paire à la fois) ✅ · extra credit complet (flottants, un seul point, CSS, backspace, clavier) ✅.

**Seul écart assumé** : le `-` unaire de fCC #13 (`5 * - 5` = −25). Exige de distinguer un `-` opérateur d'un `-` signe. **Décision : ne pas le traiter** — rapport apprentissage/temps mauvais, mécanisme central déjà acquis, et une calculette de bureau se comporte comme la sienne.

---

### 6. `Accueil.tsx` — structure corrigée, habillage reporté

**Sémantique** : `<nav>` retirée au profit de `<ul>`/`<li>`. Ces liens sont le **contenu principal** de la page, pas un menu autour d'autre chose. Le `<nav>` de `App.tsx` reste justifié (barre persistante à côté du contenu).

**⚠️ Mon explication a opposé `<nav>`/`<Link>` à `<ul>`/`<li>`** comme si c'était un choix — « je n'ai pas compris, c'est nav et Link ou alors ul li ??? ». Ce sont **quatre rôles cumulables** : `<nav>` = bloc de navigation · `<ul>`/`<li>` = liste · `<Link>` = cliquable. Reformulé, compris immédiatement.

**Structure écrite juste** : `key` sur le `<li>` (élément produit par le `.map()`), `<Link>` enveloppant tout le contenu de la carte.

**Posé pour demain** : `<Link>` produit un `<a>`, **inline par défaut** — ignore les paddings verticaux, ne s'étend pas en largeur. Doit passer en `block` avant tout habillage de carte.

---

**Niveaux** : `Object.entries` 🟡 (juste mais laborieux) · `margin: auto` vertical en flux normal 🟢 · Grid vs Flex comme contextes de mise en page 🟢 · `place-items` vs `place-content` 🟡 · condition sur le bon état (machine à états) 🟢 · early return sur branches identiques 🟡 · `slice(0, -1)` sur chaîne 🟢 (**sort de la rotation**, pratiqué en contexte réel) · `.length` = nombre 🟢 · valeur par défaut de prop 🟢 · `<nav>` vs `<ul>` 🟡 · `<a>` inline 🔴 (posé, non appliqué).

**⚠️ Mes erreurs** :

1. **Exercice posé au lieu de la réponse** sur le centrage vertical, alors que la notion venait d'être découverte comme bloquante. Arrêt net justifié.
2. **Deux options sémantiques présentées comme exclusives** (`nav`/`Link` vs `ul`/`li`) alors qu'elles sont cumulables.
3. `.length` mentionné pour le cas limite, repris par lui dans l'opération — ambiguïté de ma formulation.

**⏭️ Prochaine étape**

1. **Habillage de `Accueil.tsx`** — cartes cliquables : `block` sur le `<Link>`, surface (fond/bordure/arrondi), padding, état de survol, hiérarchie titre/description. Habillage du lien home dans `App.tsx`.
2. Puis : **page blanche calculatrice à distance** — la vraie mesure, jamais programmée. Délai suffisant à partir de la semaine prochaine.
3. **Fin de semaine 3 / reprise** : décision sur les notions neuves. Candidats posés : `useParams` sur Pokédex liste→détail (reco n°1 de l'audit), approfondissement React Router Declarative.
4. **Famille logique pure — prochain exercice** : quiz/QCM recommandé (tableau d'objets typé, thème optique présentable).
5. Toujours en attente : projet CSS Grid · `children` · generics · `useRef` · `<table>` · union de types.

## Sessions 76-77 — Habillage complet + démarrage de la page blanche calculatrice

**Durée** : ~1h30 (mercredi soir, séance écourtée) + ~1h45 (jeudi). Semaine 3 de vacances, consolidation stricte.

**Révision éclair (interface imbriquée + rendu conditionnel)** 🟢 : les deux interfaces sorties de mémoire sans hésitation — imbrication, `?`, types, PascalCase. Le cap fermé en S64 tient à froid. Deux remarques : `{cond ? <p/> : null}` → `{cond && <p/>}` (critère S62) · `key` posée sur un élément hors `.map()`.
**⚠️ Ma consigne était trop floue** — arrêt immédiat de Frédéric (« pas assez de consigne claire pour établir ce que tu veux »). Reformulée avec la donnée concrète, résolue aussitôt.

**🎹 Raccourci** : `F2` reconduit. Confusion de ma part corrigée par lui — il parlait de `F12`, acté en S63.

---

### 1. Positionnement — le vrai contenu des deux séances

**`margin: auto` vertical** : calculé à zéro en flux normal par la spécification. N'absorbe l'espace sur les deux axes qu'en contexte Flexbox ou Grid.

**🔴 `place-item-center`** (sans `s`) — centrage disparu en entier. **Tailwind ne génère rien pour une classe inexistante, sans erreur ni warning.** Même famille : `shadow-[0px 5px 10px...]` avec des espaces (une valeur arbitraire ne peut pas en contenir). **Repère : classe sans effet → vérifier l'orthographe avant la logique.**

**`place-items` vs `place-content`** : _items_ = le contenu dans les cases · _content_ = les cases dans le conteneur. Différence invisible quand la grille remplit son conteneur.

**🎓 `fixed` — le blocage central, résolu par étapes.** Icône passée en `fixed` → la barre perd sa hauteur et le fond disparaît. Point posé : **un élément `fixed` est extrait du flux**, ses parents cessent de le compter dans leur taille. Ce n'est pas que les classes cessent de marcher, c'est qu'il n'y a plus de contenu à habiller.

Trois formulations successives de son besoin ont été nécessaires avant que je comprenne : il voulait une **barre flottante au-dessus du contenu**, chaque page portant son propre fond. Structure finale : grille à une rangée, `<nav fixed top-0 left-0 z-10>`, et `pt-16` **dans la page** (pas sur le `<main>` — sinon le fond de la page commence sous la barre).

**Coût de `fixed` explicité** : deux valeurs à garder cohérentes dans deux fichiers. `sticky` donné comme alternative (reste dans le flux, se fige au passage) mais écarté car ne répondait pas au besoin.

**Point de vigilance déplié à sa demande** : `transform`, `filter`, `backdrop-filter`, `perspective`, `will-change`, `contain` sur un ancêtre créent un bloc conteneur qui capture les descendants `fixed` **et** `sticky`. Solutions par ordre : déplacer l'effet · sortir la barre de l'arbre. Diagnostic : remonter les parents dans les DevTools, rien dans le CSS de l'élément fixe ne trahit le problème.
**C'est la notion de sa rotation, échouée 3× en révision éclair — cette fois rencontrée en vrai.**

**`h-full` vs `min-h-screen`** : relative au parent vs absolue au viewport · `height` fixe vs `min-height` plancher.

---

### 2. Icônes, a11y

**`lucide-react`** installé — standard de facto React/Tailwind (embarqué par shadcn/ui, tree-shaking, hérite de `currentColor`). Question posée : « ça ne fonctionne pas pareil que MDI ? » → même principe, API différente (MDI sépare moteur et tracés, Lucide livre un composant par icône).

**`aria-label`** 🟡 — **premier attribut ARIA du parcours**, lacune ❌ de l'audit croisé. Question posée : « c'est importé depuis lucide ou natif React ? » → ni l'un ni l'autre, c'est du HTML. Règle : sert quand aucun texte visible ne porte l'information. Noté : `aria-*` et `data-*` gardent leurs tirets, exception au camelCase de React.

---

### 3. `Accueil.tsx` habillé

**Sémantique** `<ul>`/`<li>`/`<Link>` en place. Classes de carte déplacées du `<li>` vers le `<Link>` + `block` — sans quoi la zone cliquable se limite au texte (critère S70 : la zone de clic doit correspondre à ce que l'œil perçoit).

**`::after`** — demandé explicitement pour pratiquer. Trois manques : `content-['']` (**c'est la déclaration qui crée la boîte** — point S65), `block` (un pseudo-élément est inline), et le centrage. Signalé : 6 classes pour une ligne, un `<hr>` ferait mieux ici. `::before`/`::after` sert quand on veut du décor **sans polluer le HTML**, sur du répété.

**⚠️ Source périmée de ma part** : j'ai affirmé que `taupe` n'existe pas dans Tailwind. Faux — `taupe`, `mauve`, `mist`, `olive` sont dans la v4.3, capture de la doc à l'appui. **Ma mémoire de la palette date de la v3. La page Colors fait foi.**

**Détail utile** : le color picker de VS Code ne s'ouvre que sur une valeur CSS, jamais sur une classe Tailwind (du texte). Le nuancier vit dans l'autocomplétion IntelliSense et sur la page Colors.

---

### 4. 🎯 Page blanche calculatrice — DÉMARRÉE (mesure réelle en cours)

**~55 min de travail autonome**, structure entière posée sans aide : les 5 states, `ToucheProps` + composant `Bouton`, le tableau des 16 touches avec leurs handlers, `afficher` avec son ternaire du zéro, `calcul` en `switch`, le JSX complet.

**🔴 Un blocage, ~20 min : `NaN` sur `egal`.** Cause — `setAffichage(affichage + ope)` dans `operation` : `affichage` se retrouvait à porter `"5+3"`, que `Number()` ne peut pas lire. **Régression de « une variable = un rôle = un type » (S61)** : l'opérateur avait déjà `setOperateur`, l'expression complète relevait de `historique`.

**Consigne respectée** : aide limitée au `NaN`, rien d'autre signalé (il l'a demandé explicitement). Reste donc à corriger par lui-même, non mentionné : `useState("false")` en chaîne, `key` absente du `.map()`, `nouveau` jamais lu, `,` branché sur `operation`.

**⏳ Exercice non terminé** — constat de Frédéric : « c'est en réalité bien plus long qu'une heure, même sans trop bloquer ». Juste. Reprise demain.

---

**Niveaux** : `margin: auto` vertical 🟢 · `fixed` = extrait du flux 🟢 (ancré par un vrai blocage) · bloc conteneur / capture des `fixed` 🟡 (compris en contexte, à retester à froid) · `h-full` vs `min-h-screen` 🟢 · `place-items`/`place-content` 🟡 · zone cliquable sur le `<Link>` 🟢 · `::after` + `content-['']` 🟡 · `aria-label` 🟡 · interface imbriquée 🟢 · **page blanche calculatrice : structure 🟢, en cours**.

**⚠️ Mes erreurs** : consigne de révision éclair trop floue · trois reformulations nécessaires avant de comprendre le besoin sur la barre · palette Tailwind donnée de mémoire, périmée.

**⏭️ Prochaine étape**

1. **Terminer la page blanche calculatrice** — c'est la mesure, elle n'a pas encore livré son verdict.
2. Puis : **quiz/QCM**, prochain de la famille logique pure (index courant, score, tableau d'objets typé, thème optique).
3. **Fin de semaine 3** : décision sur la reprise des notions neuves — `useParams` sur Pokédex liste→détail en tête.
4. Toujours en attente : projet CSS Grid · `children` · generics · `useRef` · `<table>` · union de types.

## Session 78 — ✅ Page blanche calculatrice : la mesure est faite

**Durée** : ~2h50 (jeudi), après ~55 min en S77. **Total 3h45 pour reconstruire ce qui avait pris 4 séances** (S70-73), avec en plus l'habillage, le clavier, les spans Grid et la prop optionnelle.

Séance quasi autonome — trois interventions de ma part en tout.

---

### Verdict de la mesure

**Sorti seul, sans référence** : les 5 états et leurs rôles · `ToucheProps` + composant `Bouton` avec `className = ""` optionnelle · les 18 touches, `row-span-2` / `col-span-2` · `auto-rows-16` · le spread `{...l}` · la **`key` posée d'emblée** · `afficher` et ses deux branches · `supprime` et ses gardes · `arrondir` avec son test `typeof` · **l'enchaînement des opérateurs**, qui avait demandé une séance entière en S73 · `useEffect` clavier avec référence unique add/remove et dépendances correctes.

**Un seul vrai blocage (~20 min, S77)** : `setAffichage(affichage + ope)` dans `operation` → `"5+3"` illisible par `Number()`, d'où `NaN`. Régression de « une variable = un rôle = un type ». Aide limitée au diagnostic à sa demande explicite.

**Corrigés par lui après signalement** : `return` nu dans `arrondir` (renvoyait `undefined` au lieu du message) · `egal` sans opérateur (→ `default` dans le `switch`) · gardes de `decimal` · `e.key === "Space"` (l'espace produit `" "`, `Space` appartient à `e.code` — **récurrence du piège `e.key`/`e.code` de la S74**) · `arrondir` non appelée dans `operation`.

**🌟 A testé plutôt que de me croire** sur `supprime` / `memoire === affichage`. Son test ne révélait rien, il a maintenu son choix. Le cas limite existe (`12 + 12` puis deux backspaces) mais reste marginal — **décision assumée, correcte**.

---

**Niveaux** : **modéliser un état 🟢 — acquis, plus seulement compris** · machine à états complète en page blanche 🟢 · prop optionnelle + spread 🟢 · Grid `row-span`/`col-span`/`auto-rows` 🟢 · `key` 🟢 · `useEffect` + nettoyage d'écouteur 🟢 · `e.key` vs `e.code` 🟡 (2ᵉ occurrence).

**Point de méthode confirmé** : la difficulté ressentie en S71 ne mesurait pas le niveau — c'était le premier exercice sans motif à reconnaître. Le recadrage donné alors était juste.

**🎹 Raccourci** : `F2` — non vérifié depuis 3 séances. **Demander en ouverture avant d'en poser un nouveau.**

---

**⏭️ Prochaine étape — fin des vacances**

1. **Quiz / QCM** — décidé ensemble. Prochain de la famille logique pure : index courant, score, un bouton qui fait deux choses selon l'état. À trancher en ouverture : thème optique, et qui écrit le tableau de questions.
2. **Décision sur la reprise des notions neuves** — les vacances se terminent. `useParams` sur Pokédex liste→détail en tête (reco n°1 de l'audit), approfondissement React Router Declarative demandé explicitement en S69.
3. Toujours en attente : projet CSS Grid · `children` · generics · `useRef` · `<table>` · union de types · types fonction au-delà de `() => void`.

## Session 79 — CV Application (Odin) : formulaire contrôlé + ouverture du lifting state up

**Durée** : ~4h45 (lundi). Énergie bonne au départ, séance dégradée par mes erreurs de calibrage.

**Révision éclair (`position: fixed` + contexte parent)** 🟢 : **règle produite juste au 4ᵉ passage** — `fixed` vise le viewport, et `transform`/`filter`/`backdrop-filter`/`will-change`/`contain` sur un ancêtre créent un bloc conteneur qui capture l'élément. Solution énoncée seule (déplacer l'effet ou sortir l'élément de la branche). La rencontre réelle en S76-77 a fait ce que 3 révisions à froid n'avaient pas fait. **Sort de rotation.**

**🎹 Raccourci** : `F2` acté 🟢, sorti de rotation. Nouveau : `Ctrl+Espace` (forcer l'autocomplétion) — **non joué cette séance.**

---

### 1. Vérification des exercices canoniques (demande de Frédéric)

Question posée : le quiz/QCM est-il canonique ? **Vérifié, non.**

- **Odin** : aucun quiz. Les 3 projets React sont CV Application, Memory Card, Shopping Cart.
- **fCC** : « Build a Quiz Webpage » = HTML/CSS guidé, sans JS · « Build a Quiz Game » = JS pur sans interface (3 fonctions, `console.log`, l'ordinateur répond au hasard). Ni l'un ni l'autre n'est une machine à états.
- **Projets React canoniques fCC** (ancien cursus) : Random Quote Machine, Markdown Previewer, Drum Machine, JavaScript Calculator, 25+5 Clock. **Deux déjà faits** (calculatrice S70-78, pomodoro S50-53), les trois autres sans apport.

**⚠️ Origine du quiz** : ma propre reconstruction dans `audit-exercices-types.md`, dont le document qualifie lui-même la source comme non fetchée. Frédéric a demandé la vérification, elle a invalidé ma recommandation.

**🗺️ Programme arrêté avec lui, dans l'ordre** : CV Application (zéro neuf) → Quiz (zéro neuf, énoncé maison assumé) → Memory Card (1 neuf : mélange de tableau) → jeu de mémoire paires (2 neufs : mélange + délai avec verrouillage d'interaction).

---

### 2. Design de l'exercice — décision qui a structuré la séance

Deux designs possibles, l'énoncé Odin n'en impose aucun :

- **A** : une colonne, chaque section bascule sur place formulaire ↔ texte.
- **B** : deux colonnes, formulaire à gauche, aperçu du CV à droite.

J'ai recommandé A. **Frédéric a tranché pour B** après avoir vu des rendus d'élèves — « comme un vrai résultat de développeur ». Décision maintenue même après que le coût en notions neuves lui a été exposé.

---

### 3. `InfosGenerales` — formulaire contrôlé complet, page blanche

**✅ Sorti seul** : 4 controlled inputs (`value` + `onChange`), labels appariés, `type="email"`/`type="tel"`, `required`, `onSubmit` avec `preventDefault`, rendu conditionnel en `&&`. 0 problems.

**Corrigés après signalement** : `<input>` avec contenu textuel au lieu de `placeholder` (page blanche) · `id` dupliqué sur deux champs · `;` orphelin dans le JSX · `e.preventDefault` sans parenthèses dans des `onChange` (où il n'a rien à annuler).

**🎓 Six questions de fond posées, toutes traitées** — c'est le vrai contenu de ce bloc :

1. Peut-on mettre un handler sur un élément interne ? → attribut sur balise minuscule = contrainte DOM (seul `<form>` émet `submit`, échec **silencieux** ailleurs) vs balise majuscule = prop inventée librement.
2. Que veut-on annuler avec `preventDefault` ? → la navigation native ; en SPA, rechargement = tous les `useState` réinitialisés.
3. Le bouton fonctionne-t-il toujours ? → l'événement a lieu, seul le **comportement par défaut** est bloqué.
4. Le submit ne récupère-t-il pas tout seul les champs ? → il les **envoie**, il ne les donne pas. `onChange` maintient le state et rend le champ modifiable.
5. `name` sert-il encore ? → uniquement pour ce qui part au serveur (`FormData`, soumission native, autocomplétion). Ici l'`id` seul est fonctionnel.
6. Pourquoi `e.target` ? → aucun accès implicite à l'élément depuis le corps du handler ; distinction `target`/`currentTarget` posée en passant.

**🌟 Réflexe `FormData`** : a commencé par `new FormData()` de mémoire — outil correct, mauvais contexte. **A trouvé seul pourquoi il ne convient pas** : il faut une mémoire pour rééditer, or le DOM est démonté au passage en mode texte. Distinction contrôlé / non contrôlé posée (`value`+`onChange` vs `defaultValue`).

**Choix 4 états séparés vs 1 état objet** : a défendu l'objet (« un seul bouton donc un seul state »). Argument recadré — le critère est _les valeurs changent-elles ensemble ou séparément_, pas qui déclenche. Objet retenu pour la **donnée publiée**, états séparés pour le **brouillon**.

---

### 4. 🔴 Rupture de séance — mes erreurs

**Trois notions non enseignées balancées dans un exercice page blanche** : lifting state up avec objet, `useState<Infos | null>(null)` (**generics + union, ❌ au §7, 3ᵉ récurrence après S67 et S74**), typage d'une prop fonction à paramètre objet.

**Aggravant** : j'avais annoncé l'exercice comme « zéro concept neuf » **avant** de le donner. Quand ça a bloqué, ma qualification est devenue le problème. Frédéric : _« ce sont tes mots pour décrire l'exercice, sache que c'est faux car je n'y arrive pas »_, puis _« tu trouves le moyen de me faire douter »_, puis _« je ne te fais plus confiance »_.

**Deuxième reproche, fondé** : indices empilant trois renvois aux sessions passées dans un message censé débloquer. **Règle du §9 bis violée après 5 rappels.**

**Correctif retenu** : ne jamais qualifier la difficulté d'un exercice avant de le donner. Vérifier chaque notion contre le §7 **avant** d'écrire un squelette, pas après l'arrêt.

**Décision de Frédéric** : mise en pause du CV, apprentissage des notions manquantes d'abord. Position juste, à respecter.

---

### 5. Bloc 1 enseigné — lifting state up avec objet

**Cours donné** : rien ne remonte en React ; le parent écrit une fonction, la fait descendre, l'enfant l'appelle. Ce qui change avec un objet : il faut le **décrire** (interface de donnée) et le **construire** au moment de l'envoi. Forme longue (`props.x`, fonction `recevoir` nommée, objet en variable) avant version compressée (`{ nom, dossier }`, setter passé directement).

**Demande de Frédéric, acceptée** : faire l'exercice **en `.jsx` d'abord**, TypeScript ensuite. Sa méthode habituelle, appliquée à bon escient.

**Notions déployées à sa demande** :

- **Déstructuration des props** — `({ onEnvoyer })` : d'où sort le nom, pourquoi des accolades, correspondance exacte avec l'attribut JSX du parent.
- **`(adresse: Adresse) => void`** : décomposition complète. Le contrat porte sur le nombre et le type des paramètres, **jamais sur leur nom**.
- **Paramètre `e` non déclaré ailleurs** : c'est React qui appelle et fournit l'argument ; un paramètre **est** une déclaration.
- Terme officiel **lifting state up** donné (il ne l'avait jamais entendu).
- `interface` = TS pur, React fonctionne sans.

**Exercice `SaisieClient` / `PageClient` (JSX)** : squelette à 4 trous, **non rempli** — « je ne sais pas ». Code donné en entier, puis recopié et adapté par lui. **Structure juste** : prop fonction, objet construit dans l'enfant, `recevoir` dans le parent, paramètre renommé `data` (montre que le point du nom libre est passé).
**🔴 Bug unique** : `envoyer;` sans parenthèses dans le `onSubmit` — alors que `onEnvoyer(infoClients)` était correct 15 lignes plus haut. Position piégeante, pas la règle.

---

**Niveaux** : formulaire contrôlé complet 🟢 (page blanche) · `onSubmit` + `preventDefault` en React 🟢 · contrôlé vs non contrôlé 🟢 · `e.target` 🟢 · handler sur balise minuscule vs majuscule 🟡 · **lifting state up avec objet 🔴 — enseigné ce jour, code donné, non reproduit** · déstructuration de props 🟡 (revue à sa demande) · type de fonction à paramètre 🟡 · `fn` vs `fn()` 🟡 (rechute en position inhabituelle) · `position: fixed` 🟢.

**🆕 Dettes ouvertes / confirmées** :

- **Generics `useState<T>()`** — dues depuis S67 et S70, **3ᵉ fois servies sans être enseignées**. À traiter en bloc 3.
- **Union de types (`A | null`)** — nécessaire pour l'état parent vide. Bloc 2.
- Propagation des événements (`target`/`currentTarget`) — mentionnée, non enseignée.
- `defaultValue` / formulaires non contrôlés — posé en explication, non pratiqué.

**⏭️ Prochaine étape — arrêtée par Frédéric**

1. **Refaire `SaisieClient`/`PageClient` de mémoire, en `.jsx`.** C'est la mesure du bloc 1.
2. **Puis la même chose en `.tsx`** — introduction des deux interfaces sur un code déjà fonctionnel.
3. **Bloc 2** : état qui peut être absent (union de types).
4. **Bloc 3** : generics, au moins `useState<T>()`.
5. **Reprise du CV en design B** seulement après ces trois blocs.
6. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `useRef` · `<table>` · types fonction avancés · hoisting.

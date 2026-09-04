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

## Session 80 — Lifting state up : mesure + TypeScript + état absent

**Durée** : ~2h (2 × 1h, coupées d'une pause). Énergie bonne, séance tenue sans accroc.

**Révision éclair (`IntersectionObserver`)** 🟢 : squelette restitué juste de mémoire — constructeur avec callback + objet d'options, itération sur les entrées, test `isIntersecting`, appel à `observe`. Deux corrections : paramètre `entries` absent de la signature (même famille que le `(e)` d'un handler — c'est l'appelant qui fournit l'argument, mais il faut déclarer le tiroir) · `observe` prend **un** élément, donc boucle nécessaire sur une liste. **Sort de rotation.**

**🎹 Raccourci** : `Ctrl+Espace` — non joué. À reconduire.

---

### 1. Lifting state up en `.jsx` — page blanche ✅

Reproduit de mémoire 24h après le cours, **structure entièrement juste** : prop fonction, objet construit dans l'enfant, `recuperer` dans le parent, paramètre renommé librement (`info`). Le `envoyer;` sans parenthèses de la veille n'est pas revenu, et `preventDefault` a été placé dans la fonction plutôt qu'en flèche inline — plus propre que la version d'hier.

**Une correction** : `useState("")` pour un état qui portera un objet. Le code tourne (`"".nom` = `undefined`) mais deux formes cohabitent dans une variable. Règle « une variable = un rôle = un type » réappliquée.

**Questions posées** : `onInput` vs `onChange` (React aligne `onChange` sur le natif `input` — se déclenche à chaque frappe ; la distinction ne réapparaît que sur `select`/`checkbox`/`file`) · **convention `onXxx` vs `handleXxx`** (la prop décrit un moment, la fonction décrit une action).

---

### 2. Passage en `.tsx` ✅

Les deux interfaces écrites seules, correctement distinguées (`Client` = la donnée / `SaisieClientProps` = le contrat du composant) après correction d'un premier nommage d'après la prop (`onEnvoyerProps`).

**Trois erreurs TS, deux causes** — diagnostiquées et corrigées par lui :
1. `const data: string = { ... }` → annotation contradictoire avec la valeur, propagée en cascade sur l'appel à `onEnvoyer`.
2. `type="number"` sur le champ dossier vs `dossier: string` dans l'interface → a tranché seul pour la chaîne (un identifiant contenant une lettre n'est pas un nombre).

**`React.SubmitEvent`** trouvé par le **geste outillé** (écrire inline, survoler, extraire) — pas par mémorisation. ⚠️ J'attendais `React.FormEvent` ; le nom qu'il a obtenu ne produit aucune erreur, **ma mémoire était incomplète, VS Code fait foi**.

**Point posé** : l'inférence suffit tant que la valeur initiale décrit tous les états possibles. Cas du champ numérique déplié (`e.target.value` est **toujours** une chaîne quel que soit le `type` ; `Number()` à la frontière ; pièges `NaN` et `1e5`).

---

### 3. État qui peut être absent — union de types 🟡 (neuf)

**Cours donné** : `{ nom: "", dossier: "" }` en valeur initiale est un mensonge utile — impossible de distinguer « pas encore saisi » de « saisi vide ». `null` dit explicitement « rien ». D'où l'union `Client | null`, et la contrepartie : TS **oblige** à tester avant d'accéder (`client is possibly null`), ce qui rend le `&&` obligatoire au lieu d'optionnel. Narrowing rappelé.

Union sur des **valeurs** montrée au passage (`"vert" | "orange" | "rouge"`) : rend l'état illégal impossible à écrire.

**Chevrons `useState<Client | null>(null)`** donnés comme règle pratique uniquement, avec consigne explicite de ne pas chercher à les comprendre aujourd'hui — **generics = bloc suivant, toujours dû.**

**Exercice réussi du premier coup** : union, `null` initial, `&&` servant à la fois de garde et de narrowing.

**🎓 Question de fond : « qu'est-ce qu'une machine à états ? »** — terme employé depuis plusieurs séances sans jamais avoir été défini. Cours donné : états / transitions / déclencheurs ; l'intérêt = rendre les combinaisons illégales non représentables (contre-exemple des trois booléens indépendants) ; sa calculatrice relue sous cet angle (`nouveauNombre` = état invisible qui change le comportement du visible) ; son exercice du jour identifié comme la plus petite machine à états possible.

---

### 4. Page blanche sur terrain neuf — `SaisieMonture` / `AjoutMonture` ✅

**Demandé par lui** : exercice différent pour mobiliser la connaissance et non la mémoire de frappe. Excellent réflexe.

**Sorti seul** : les deux interfaces, la prop fonction typée, la signature avec annotation, le handler et son type d'événement, l'état `Monture | null`, le rendu conditionnel. Trois champs au lieu de deux.
**🌟 Le prix traité correctement sans consigne** : état en **chaîne** pendant la saisie, `Number()` à la validation — la solution de production, sur un cas seulement évoqué en discussion.

**🔴 Bug unique** : `onSubmit` posé sur le `<div>` intérieur au lieu du `<form>`. Aucune erreur, aucun warning — exactement le piège qu'il avait lui-même identifié la veille (attribut sur balise minuscule = contrainte DOM, échec silencieux).

**Nommage** — question posée par lui (« j'en fais trop ? ») : oui, d'un cran. `onEnvoyerMonture` répète ce que le contexte dit déjà · `handleSendMonture`/`handleGetMonture` mélangent français et anglais et `Get` suggère une récupération là où la fonction reçoit. Principe posé : un nom dit ce qu'on ne devine pas du contexte, et **une seule langue par projet**. `on` sur les props et `handle` sur les fonctions étaient corrects.

---

**Niveaux** : **lifting state up avec objet 🟢 — reproduit en page blanche deux fois, dont une sur terrain neuf** · interfaces donnée vs props 🟢 · annotation de handler + geste outillé 🟢 · union de types 🟡 (neuf, juste du premier coup) · narrowing par `&&` 🟢 · conversion aux frontières (`Number()` à la validation) 🟢 · machine à états — définition 🟢 · handler sur balise minuscule 🟡 (compris hier, rechute aujourd'hui) · `IntersectionObserver` 🟢.

**🆕 Dette confirmée** : **generics `useState<T>()`** — servis une fois de plus comme règle pratique, toujours pas enseignés. Due depuis S67. **C'est le prochain bloc.**

**⏭️ Prochaine étape**

1. **Bloc generics** — `useState<T>()` au minimum. Dernier prérequis avant la reprise du CV.
2. **Reprise de CV Application en design B** : aperçu à droite, trois sections qui remontent leurs données. `InfosGenerales` est déjà écrit et fonctionnel, il ne manque que le branchement.
3. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `useRef` · `<table>` · types fonction avancés · hoisting · propagation des événements (`target`/`currentTarget`).

## Session 81 — Bloc generics soldé + branchement du CV (design B)

**Durée** : ~3h (mercredi, reprise après vacances). Énergie bonne, séance tenue sans accroc.

**Révision éclair (top 3 des moins chères)** 🟡 : `filter` proposé d'abord (sélection par critère) au lieu d'un tri + coupe — la distinction critère/rang n'était pas faite. Comparateur ensuite **juste et sans hésitation** (2ᵉ passage à froid propre). Deux corrections après indice : `sort` mute l'original (oublié, `[...tab]` ajouté ensuite) · `splice` écrit à la place de `slice` alors qu'il avait annoncé `slice` à l'oral. Restitution finale correcte, y compris l'explication `const` / référence constante.

**🎹 Raccourci** : `Ctrl+Espace` — jamais connu, expliqué (forcer l'autocomplétion : catalogue de méthodes, liste refermée, positions où VS Code ne propose rien spontanément — notamment `className` Tailwind). **Non joué, à reconduire.**

---

### 1. ✅ Bloc generics — dette S67 soldée

Enseigné après 3 récurrences de generics servis sans cours (S67, S74, S79).

**Chemin qui a fonctionné** : le problème (fonctions identiques dont seul un mot change) → la fausse solution (`any`) → le tiroir à types. **La formulation « un tiroir vide qui contient un type au lieu d'une valeur » est celle qui a débloqué**, après un premier passage entièrement incompris.

**Questions posées, toutes traitées** :
- **`: T` après les parenthèses** — n'avait jamais identifié l'annotation de retour comme distincte de l'annotation de paramètre. Cours donné (entre / sort, indépendants, facultative quand TS déduit, obligatoire dans une interface faute de corps à inspecter).
- **Puis, seul** : « TS ne le devine pas ? » — oui. A identifié de lui-même que `: T` est redondant. Confirmé, avec la nuance du contrat volontaire sur une fonction exportée.
- **`useState(0)` et l'absence de « vide » pour un nombre** — cours donné : tous les nombres sont des valeurs légitimes, `0` entre en collision avec une vraie donnée. D'où `number | null` et le test `!== null` (piège du falsy, S62).

**Exercice `auHasard`** : signature écrite **de mémoire et juste**, avant de comprendre ce qu'il écrivait (dit explicitement). Bug unique : `* (length + 1)` — borne de `Math.random()` exclue, le `+1` fait sortir du tableau. Même famille que le `+1` du `slice`, en miroir.

**Exercice `useState` (4 cas)** — ⚠️ **ma consigne empilait les 4 d'un coup, incomprise**. Repris un par un, résolu. Les deux formes retenues :
`useState<Monture[]>([])` (plusieurs, vide) vs `useState<Monture | null>(null)` (une seule, absente).

**Question posée** : « faut-il connaître contraintes / `<T, U>` / generics d'interface / utility types pour être recrutable junior ? » Réponse cadrée : utility types et generics d'interface **en lecture** avant candidature ; contraintes et paramètres multiples relèvent de l'écriture d'abstractions, hors périmètre junior.

---

### 2. CV Application (Odin, design B) — branchement fait

**Écrit seul avant toute aide** : les deux interfaces `Infos` / `InfosGeneralesProps`, la prop fonction typée, l'objet construit dans l'enfant, `useState<Infos | null>(null)` dans le parent avec ses chevrons, le handler parent, le passage de la prop dans les deux sens. Le motif de la S80 reproduit sur un terrain plus gros, sans modèle.

**Trois points signalés sans réponse, deux corrigés seul** :
1. `handleEnvoyerInfos;` sans parenthèses dans le `onSubmit` — corrigé immédiatement.
2. `valide` faisant doublon avec `infos !== null` — supprimé, ainsi que l'aperçu local devenu échafaudage.
3. **🔴 `PagePresentation({ infos }: Infos)`** — interface de donnée utilisée comme interface de contrat. **Non résolu, réponse donnée.** Le concept « React ne passe qu'un objet » est connu et correctement appliqué juste au-dessus (`InfosGeneralesProps`) ; l'obstacle était la collision `infos: Infos` (clé vs type, même mot). **Repère donné : une interface de props liste les attributs JSX, un par ligne.**

**Décisions prises** :
- **Un seul fichier** pour tout le CV, conforme à la convention d'apprentissage. Découpage plus tard, sur code fonctionnel.
- **`PagePresentation` conservée** malgré la possibilité d'écrire l'aperçu dans `CvApplication` : orchestrer ≠ afficher. Distinction séparation des responsabilités / DRY posée — deux principes différents.

**Nommage** — validé comme conforme aux usages pro. Convention complétée : une prop qui transporte une **donnée** ne porte ni `on` ni `handle`, juste le nom de la chose, généralement identique à la variable du parent. Booléen = affirmation (`estValide`). **Shorthand d'objet** (`{ nom, email }`) donné et appliqué.

---

**Niveaux** : generics — mécanisme du tiroir 🟢 · `useState<T>()` règle pratique 🟢 · annotation de retour 🟢 · `any` vs generic 🟢 · écriture d'une fonction générique 🟡 (une seule, avec bug de borne) · lifting state up sur terrain plus gros 🟢 · interface de props vs interface de donnée 🟡 — **appliquée juste sur un cas, cassée sur l'autre dans le même fichier** · `sort` mutant 🟡 · `slice`/`splice` 🟢 · `fn` vs `fn()` 🟡 (rechute en position `onSubmit`, corrigée seule).

**🆕 Dette différée (pas un trou)** : utility types `Partial` / `Pick` / `Omit` / `Record` + generics sur interface — **en lecture uniquement, avant la phase de candidature**.

**⚠️ Mes erreurs** : premier cours generics entièrement incompris (parti sur la syntaxe avant d'avoir posé « un tiroir qui contient un type ») · consigne des 4 `useState` empilée en un message · lui avoir fait corriger `useState<Monture | null>(null)` sans dire que la ligne resservirait au besoin suivant, ce qui a brouillé la suite.

**📌 Roadmap — point ouvert, à trancher en fin de Phase 2** (soulevé par lui, reporté d'un commun accord) : cible « recrutable junior++ au mois 7 ». Points posés — le mois 7 doit être une date de **dépôt**, production finie fin de mois 6 · un SaaS optique crédible vaut mieux que trois projets moyens · GitHub public + LinkedIn à activer **avant** le dépôt, pas pendant · **Git branches + Pull Request** (❌ depuis le début) non négociable avant candidature.

**⏭️ Prochaine étape**

1. **Suite du CV** : `Formations` et `Experiences` — même motif, mais **listes** (plusieurs entrées) → `useState<Formation[]>([])`, terrain direct pour les chevrons du jour.
2. Puis habillage design B.
3. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `useRef` · `<table>` · types fonction avancés · hoisting · propagation des événements.

## Session 82 — CV Application : section Formations (liste + lifting state up)

**Durée** : ~3h (jeudi). Énergie bonne.

**Révision éclair (inline vs block)** 🟡 : distinction `span`/`a` inline vs `div` block **juste et sans hésitation**, comportement du block correctement décrit. **Cassé sur les conséquences pratiques** : a annoncé qu'un inline avec `width` et `padding` « prendrait davantage » — or un inline **ignore `width`** et n'applique le `padding` vertical qu'en peinture (peint, ne pousse pas, le texte se chevauche). Tableau des 3 comportements donné, `inline-block` rattaché à son lien home. **C'est exactement le blocage `<Link>`/`block` de la S75-77, dont la règle n'était pas généralisée. Entre en rotation.**

**🎹 Raccourci** : `Ctrl+Espace` — testé mais pas utilisé en contexte. Reconduit.

---

### Section Formations — livrée et fonctionnelle

**✅ Sorti seul, sans modèle** : le formulaire complet à 5 champs contrôlés (dont `type="month"`, choisi seul) · `ajouterDiplome` construisant l'objet et le remontant · `setFormations((prev) => [...prev, formation])` — **updater fonctionnel écrit spontanément après une seule mention** · le `.map()` avec déstructuration dans le callback et `key` posée d'emblée, **dans les deux composants** · le circuit de suppression complet (fonction parent, 2ᵉ prop fonction typée, branchement du bouton, passage dans le JSX) écrit en une fois sans erreur · `crypto.randomUUID()` et le champ `id` ajoutés à l'interface après signalement du problème d'unicité.

**🔴 Le blocage central — donnée détenue à deux endroits.** Avait écrit `liste` dans `AfficherFormations` **et** `formations` dans `CvApplication`. Conséquence directe : `onEnvoyerFormations(liste)` juste après son setter → le parent recevait systématiquement la liste d'avant l'ajout (photo figée du rendu).

**Désaccord exprimé et traité** : « pas d'accord, la liste est aux deux endroits, synthétique à gauche et propre à droite ». **Sa lecture du besoin était juste** — ce sont bien deux affichages. Ce qui manquait : deux *affichages* ≠ deux *propriétaires*. Une fois posé « le parent détient, les deux enfants reçoivent », la refonte a été faite proprement.

**⚠️ Ma faute sur ce point** : j'ai demandé « qui doit détenir la liste ? » sans expliquer d'abord que les deux affichages restaient possibles. Il a entendu qu'il fallait choisir entre les deux vues. **Réponse donnée directement à sa demande explicite, puis découpage en 6 étapes numérotées — c'est ce format qui a débloqué.**

**🔴 Récurrence tableau vs élément unique, 3 occurrences dans le même fichier** : `useState<Formation>([])` · `formations: Formation | null` dans les props de `PagePresentation` · `formations.diplome` sur un tableau. La distinction `useState<T[]>([])` vs `useState<T | null>(null)` est comprise à l'oral mais **ne se déclenche pas encore à l'écriture**. Repère redonné : une liste n'est jamais absente, elle est vide.

**Trois bugs de branchement d'`id`** (filtre sur `f.diplome`, `key={diplome}`, `{id}` affiché à l'écran) : le champ avait été ajouté partout mais pas branché. Corrigés après signalement.

**Nommage** : convention complétée — `handleXxx` côté parent uniformément (`handleSupprimerFormation`), une seule dénomination par concept (`Formation`, pas `Diplome`). Collision `interface Formations` / `function Formations` corrigée : **type au singulier, composant renommé** `AfficherFormations`.

**Réinitialisation des champs** — question posée : 5 × `setX("")` est bien le standard avec des states séparés. Alternative « un state objet » montrée et **écartée avec justification** (gain sur une ligne, coût sur cinq `onChange`). `useReducer` et `form.reset()` mentionnés comme hors périmètre.

---

### DRY — trois niveaux posés, décision prise

1. **Composant `Champ`** (label + input) — zéro neuf, motif `Touche` de la calculatrice.
2. **Formulaire piloté par un tableau** + `.map()` — motif `touches`. **Reconnu seul comme identique à la calculatrice.**
3. **Composant de section générique** servant Formations et Expériences.

**Distinction posée** : 1 et 2 factorisent *dans* un composant (DRY mécanique) · 3 factorise *entre* composants, ce qui affirme que deux choses sont la même — un pari sur l'avenir. Règle donnée : **on factorise ce qui changera ensemble, pas ce qui se ressemble** ; attendre la 3ᵉ occurrence.

**Décision** : `Experiences` sera écrit **en dur** d'abord. Le niveau 3 ne sera évalué qu'ensuite, sur du code réel.

---

**Niveaux** : lifting state up sur une **liste** 🟢 (circuit ajout + suppression complet) · updater fonctionnel `(prev) => [...prev, x]` 🟢 · deux props fonction sur un même composant 🟢 · `key` 🟢 (posée d'emblée, 2 composants) · identifiant stable vs champ de saisie 🟢 (compris immédiatement) · **un seul propriétaire par donnée 🟡 — enseigné ce jour, refonte guidée en 6 étapes** · `T[]` vs `T | null` à l'écriture 🔴 — **3 erreurs dans un fichier, la règle est sue mais ne se déclenche pas** · inline vs block 🟡 · state non à jour après son setter 🟡 (piège retombé, sur le même motif qu'en S71).

**⏭️ Prochaine étape**

1. **`Experiences`** — même motif que Formations, écrit en dur. Terrain de mesure directe pour `T[]` vs `T | null` et pour le circuit complet.
2. Puis **DRY niveaux 1 et 2** : composant `Champ`, puis formulaire piloté par tableau.
3. Puis habillage design B (deux colonnes, aperçu de CV présentable).
4. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `useRef` · `<table>` · types fonction avancés · hoisting · utility types (lecture, avant candidature).

## Session 83 — CV Application : composant `Champ` + section Expériences

**Durée** : ~2h (vendredi). Énergie bonne, séance sans accroc.

**Révision éclair (`Object.entries`)** 🟡 : squelette JSX juste — outil identifié, `.map()`, `key` posée d'emblée. **Cassé sur la forme produite, 3ᵉ fois** : déstructuration par accolades `({marque, quantite})` au lieu de crochets. `Object.entries` renvoie un tableau **de paires**, donc déstructuration par **position**. Repère redonné : entries = paires = position = crochets. **Reste en rotation.**

**🎹 Raccourci** : `Ctrl+Espace` acté (connu, peu utile dans son usage) et sorti de rotation. Nouveau : `Alt+↑/↓` (déplacer une ligne/sélection). Redonnés à sa demande : `Ctrl+Maj+O` (symboles du fichier, `:` pour grouper par catégorie) et `Ctrl+T` (symboles du projet) — utiles sur un fichier CV devenu long.

---

### 1. Composant `Champ` — écrit seul avant la séance

**✅ Sorti seul** : les 6 props, la déstructuration, `htmlFor`/`id` appariés, `value`/`onChange` branchés.

**Trois corrections** :
1. **`onChange: () => void`** — le contrat décrit ce que l'**appelant** fournit ; ici c'est l'`<input>`, qui passe toujours l'événement. Type obtenu par geste outillé puis complété : `React.ChangeEvent<HTMLInputElement>` — **sans le chevron, TS retombe sur `Element` qui n'a pas de `.value`**.
2. **`value` disparue de l'interface**, remplacée par `value={id}` sur l'`<input>` → champ contrôlé impossible à remplir. Distinction posée : `id` = chaîne en dur pour apparier le label · `value` = le state.
3. Valeur par défaut déplacée du JSX (`type ? type : "text"`) vers la déstructuration (`type = "text"`), motif `className = ""` de `Touche`.

**🎓 Question de conception posée par lui** : `<Champ />` à la main ou tableau + `.map()` comme la calculatrice ? **A tranché juste, seul** — le tableau ne convient pas ici. Critère posé : le `.map()` se justifie quand les éléments ne diffèrent que par des **données** ; dès que chaque champ traîne son propre `useState` et son propre setter, le tableau ne fait que déplacer le problème (décompte identique + une indirection). Le gain réel de `Champ` est ailleurs : la structure et la future chaîne Tailwind vivent à un seul endroit.

**Migration effectuée** : 9 blocs `div/label/input` remplacés par `<Champ />` dans `InfosGenerales` et `AfficherFormations`. `<textarea>` laissé en dur — balise différente, attributs différents, un seul cas.

---

### 2. Section Expériences — circuit complet, page blanche

**✅ Écrit sans aide et sans erreur** : interface `Experience` avec `id` · `AfficherExperiencesProps` avec ses trois props · handler qui construit, remonte et vide les 5 champs · `.map()` d'affichage avec `key` et bouton supprimer · côté parent, state + deux handlers + branchement dans les deux sens.

**🎯 Mesure de la dette S82 — `T[]` vs `T | null` : soldée 🟢.** Les 3 erreurs de la veille ne sont pas revenues. `useState<Experience[]>([])`, `experiences: Experience[]` dans les props, `.map()` sur un tableau : la distinction s'est déclenchée à l'écriture, sans rappel.

**Corrections de nommage** (résidus de la veille) : `experience` portant une liste → pluriel partout · `AfficherExperienceProps` → nom exact du composant + `Props` · `onSupprimerDiplome` renommé `onSupprimerFormation`, ce qui a supprimé l'alias de déstructuration · `ajouterDiplome` → `ajouterFormation` · `xp` → `experience`.

**Point ancré sur `F2`** : après un renommage global, relire la ligne d'origine — `onSupprimerFormation: onSupprimerFormation` était devenu un renommage vers lui-même.

**Nettoyage** : `<div>` racines sans style remplacés par des fragments · `htmlFor` du `<textarea>` sans `id` correspondant · `type="button"` sur le bouton supprimer.

---

**⚠️ Mon erreur — `React.SubmitEvent`** : j'ai affirmé que ce type n'existait pas et donné `React.FormEvent` à la place. **Faux** — capture VS Code à l'appui, le survol affiche `React.SubmitEvent<HTMLFormElement>`, aucun rouge. Ma mémoire des noms de types React ne fait pas le poids contre les `@types/react` installés. **2ᵉ fois sur ce type précis, dans le sens inverse de la S80 : je l'ai fait corriger dans un sens puis dans l'autre. Le geste outillé fait foi.**

**Recadrage juste de sa part** : ma remarque sémantique (`<section>` + titres) présentée comme du structurel alors qu'il applique « d'abord ça marche, ensuite c'est beau » — règle que j'avais donnée moi-même. Reporté à la phase design.

---

**Niveaux** : composant `Champ` + prop optionnelle avec défaut 🟢 · typage d'événement avec chevron 🟡 (obtenu par geste outillé, pas de mémoire) · `id` vs `value` sur un champ contrôlé 🟢 · critère « composant vs tableau + map » 🟢 (tranché seul) · circuit lifting state up complet ajout+suppression 🟢 (2ᵉ section, en une fois) · **`T[]` vs `T | null` à l'écriture 🟢 (dette S82 soldée)** · nommage des interfaces et des handlers 🟢 · `Object.entries` 🟡.

**⏭️ Prochaine étape — cap posé, cherché par lui demain**

1. **Bouton Modifier** — manquant, et explicitement demandé par l'énoncé Odin (edit mode / submit mode). Zéro syntaxe neuve, c'est une **machine à états** : le même formulaire et le même bouton font deux choses selon l'état. Deux questions posées en fin de séance, laissées ouvertes : où va la donnée au clic sur Modifier (les champs ont chacun leur `useState` local) · comment le submit sait s'il ajoute ou remplace.
2. À traiter aussi : `InfosGenerales` n'a ni suppression ni édition — une faute de frappe est irrattrapable une fois validée.
3. **Puis habillage design B** (deux colonnes, aperçu présentable) — après l'édition, pour ne pas habiller une structure qui bouge encore.
4. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `useRef` · `<table>` · types fonction avancés · hoisting · utility types (lecture, avant candidature).

## Session 84 — CV Application : mode édition (machine à états) + upsert

**Durée** : ~2h30 (samedi). Énergie bonne.

**Pas de révision éclair** — séance ouverte directement sur le blocage en cours (20 min de recherche autonome avant contact).

---

### Mode édition des formations — livré et fonctionnel

**✅ Modélisation trouvée seule** : a identifié qu'il fallait un état supplémentaire pour « une entrée est en cours d'édition », et l'a typé `Formation | null` d'emblée. La bonne intuition, sur la bonne notion.

**🔴 Premier blocage — setters dans le corps du composant.** Bloc `if (modification !== null) { setDiplome(...) ... }` écrit hors de toute fonction événementielle → boucle infinie de rendu. **Famille du contrat `void` / setter mal placé, 5ᵉ occurrence (S64, S67, S71, S74).** Cette fois la cause était différente : pas un `return` de trop, mais l'absence de déclencheur. Point redonné : un setter est toujours appelé par un événement.

**✅ Débloqué seul après une seule question** (« la donnée a-t-elle besoin de monter au parent pour redescendre ? ») : a compris que le clic, la liste et les cinq `useState` vivent dans le même composant, et a branché `onClick={() => modifierFormation(f)}` en local. **Aucune prop supplémentaire pour le remplissage.**

**Fonctions internes superflues** : première version enveloppait les cinq setters dans une fonction déclarée puis appelée immédiatement une seule fois, plus un test `!== null` sur un paramètre typé non-null. Supprimés après signalement.

**Première solution proposée — supprimer puis réajouter.** Fonctionne, et n'est pas absurde. Écartée après exposition des trois conséquences : disparition de la ligne dans l'aperçu pendant l'édition · perte de la donnée si l'utilisateur abandonne · changement d'ordre dans la liste.

**🔴 Blocage de compréhension, arrêt demandé** (« je ne comprends pas correctement, sois plus clair ») : cherchait une comparaison d'id **dans le formulaire**. Repris à zéro avec un tableau des valeurs successives de l'état, et le point qui débloque : **le formulaire ne pose qu'une question — `null` ou pas ? La comparaison d'id a lieu chez le parent, qui détient la liste.** Compris immédiatement une fois séparé.

**Choix `string | null` plutôt que `Formation | null`** : tranché seul et justifié — les cinq valeurs à jour sont déjà dans les `useState` du formulaire, l'objet complet serait une duplication.

---

### 🌟 Upsert — conception proposée par lui

Plutôt que d'ajouter une 3ᵉ prop fonction `onRemplacerFormation` (ce que j'allais faire écrire), a proposé de faire porter la décision au parent :

```ts
if (formations.some((f) => f.id === formation.id)) { /* remplace */ } else { /* ajoute */ }
```

**Meilleur que ma version** : l'enfant envoie une formation et ne sait pas ce qu'il advient d'elle ; le parent, qui détient la liste, en tire les conséquences. Une prop de moins. Terme donné : **upsert**.

---

### `(prev) =>` — cours donné à sa demande

Les deux formes du setter (valeur / fonction), `prev` comme paramètre fourni par React (même famille que le `e` d'un handler, l'`entries` d'un observer), le cas des deux setters successifs lisant la même photo figée.

**Règle retenue** : la nouvelle valeur se calcule à partir de l'ancienne → forme fonction, systématiquement. Sinon forme valeur.

**Question posée derrière** : « pourquoi ne pas l'utiliser tout le temps ? » — oui, c'est la réponse. Forme bloc `(prev) => { ... return x; }` montrée au passage, avec le piège du `return` oublié.

**Montré, non retenu** : version en passe unique avec drapeau (`some` + `map` traverse deux fois). Sans intérêt à cette échelle, signalé pour information seulement.

**`??`** appliqué : `id: idEnEdition ?? crypto.randomUUID()` — supprime le `if/else` et l'UUID généré pour rien.

---

**Autres corrections** : mode édition qui ne se refermait pas (`setIdEnEdition(null)` manquant → la formation suivante aurait écrasé la précédente) · libellé du bouton en ternaire · renommages (`handleEnregistrerFormation`, booléen affirmatif).

---

**Niveaux** : identifier l'état nécessaire à un mode édition 🟢 (trouvé seul) · setter dans le corps du composant 🔴 — **5ᵉ occurrence de la famille, cause nouvelle (absence de déclencheur)** · « le formulaire teste, le parent compare » 🟡 (débloqué après reprise à zéro) · upsert 🟢 (**conçu seul, meilleur que ma proposition**) · `(prev) =>` — mécanisme et règle d'usage 🟢 · `??` 🟢 · machine à états mode ajout/édition 🟢 · fonctions internes superflues 🟡.

**📌 Reste sur le fichier** :
- Les deux `handleSupprimer` lisent encore le state directement → à passer en `prev`.
- **`AfficherExperiences` n'a pas de bouton Modifier.** Réplication pure du motif formations, aucune décision à reprendre. **Décidé : le refaire de mémoire en prochaine séance, sans regarder `AfficherFormations`** — devient une mesure du motif plutôt qu'un copier-adapter.
- `InfosGenerales` n'a ni suppression ni édition.

**⏭️ Prochaine étape**

1. **Mode édition des expériences, de mémoire** — mesure du motif du jour.
2. Puis **habillage design B** (deux colonnes, aperçu de CV présentable).
3. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `useRef` · `<table>` · types fonction avancés · hoisting · utility types (lecture, avant candidature).

## Session 85 — State objet unique + fin du mode édition

**Durée** : ~4h30 (dimanche, 2h + 2h30 coupées d'une pause). Énergie bonne sur toute la séance.

**Révision éclair (`IntersectionObserver` monté dans un `useEffect`)** 🔴 : squelette sorti de mémoire (constructeur + objet d'options, `forEach` sur les entrées, test `isIntersecting`, `observe`), **mais quatre points cassés** — aucune variable déclarée (le paramètre `entries` du callback manquant, 2ᵉ occurrence), sélection DOM absente, `observe` sur une liste au lieu d'un élément, **aucune fonction de nettoyage**. Diagnostic posé par lui : les deux notions séparément passent, la combinaison casse. **Reste en rotation.**

Correction complète donnée. `disconnect()` découvert (méthode du navigateur, pas de React : `observe` / `unobserve` / `disconnect`) — sans elle, l'observer garde des références vers des nœuds démontés = fuite mémoire. Pendant exact de `removeEventListener`.

**Point posé — DOM vanilla dans React** : possible, mais c'est modifier le DOM dans le dos de React, qui peut l'écraser au rendu suivant. La version React passe par un state pour la classe et `useRef` pour la référence. **`useRef` + observer version React = bon candidat pour une séance dédiée.**

**🎹 Raccourci** : `Alt+↑/↓` acté 🟢, sorti de rotation. Nouveau : `Ctrl+Maj+K`.

---

### 1. `findIndex` — exploré puis écarté (30 min autonomes en ouverture)

Cherchait à remplacer `some` + `map` par une version en un seul parcours. Cours complet donné sur `findIndex` (position vs élément, retour `-1`, **piège : `-1` est truthy**, tableau comparatif `find`/`findIndex`/`some`).

**🎓 Question posée après avoir vu le code : « je ne vois pas comment ça peut me servir mieux qu'un map avec un ternaire. »** Juste. Version `findIndex` écrite (correcte : test explicite du `-1`, early return, copie avant mutation), puis comparée — 5 lignes contre 3, une mutation à surveiller, un `-1` à décoder, et le `[...prev]` reparcourt de toute façon.

**Conclusion actée : `some` + `map` était la bonne réponse**, l'optimisation ne se paie pas à cette échelle. `findIndex` reste acquis pour les cas où la **position** sert (insérer avant, déplacer, premier/dernier).

**⚠️ Correction de ma part** : j'avais laissé passer l'idée que `findIndex` faisait un seul parcours. Faux — le spread en fait un second. La vraie différence est que `findIndex` s'arrête au premier match.

---

### 2. Mode édition des expériences — reproduit de mémoire ✅

Motif complet sorti sans regarder `AfficherFormations` : state `idSelect`, fonction de remplissage, `?? crypto.randomUUID()`, bouton Modifier dans le `.map()`, ternaire du libellé, remise à `null`. **La mesure du motif de la S84 est concluante.**

---

### 3. 🎯 State objet unique — le cap de la séance

**Question posée par lui** : « certains sites ont 15 champs, faut-il 15 states ? Il n'existe pas une méthode plus pro ? » Excellente question, arrivée d'elle-même.

**Trois niveaux donnés** : state objet + `name` + crochets dynamiques (à sa portée) · `useReducer` (nommé, hors périmètre) · React Hook Form + Zod (standard au-delà de ~10 champs, Phase 2).

**Cours donné** : forme longue → clé dynamique → `name`. Points d'appui explicites sur ce qu'il connaît déjà — `[e.target.name]` = le même mécanisme que `acc[v.marque]` du `reduce` objet · l'attribut `name` retrouve un usage après la S79 · ⚠️ **parenthèses obligatoires autour de l'accolade** dans `(prev) => ({...})`, sinon lu comme un corps de fonction.

**✅ `InfosGenerales` converti du premier coup** : constante hors composant, state objet, handler générique, `name` ajouté à `ChampProps`. Deux simplifications signalées ensuite (ligne intermédiaire devenue inutile, second argument de type superflu).

**Deux questions de fond posées, toutes deux traitées** :
- *Pourquoi la constante hors du composant ?* → le corps se réexécute à chaque rendu, l'objet serait recréé (nouvelle référence à contenu identique). Sans conséquence ici, mais deviendrait un bug s'il servait de dépendance à un `useEffect`. Même arbitrage que `EXERCICES` vs `touches`.
- *Pourquoi les crochets, peut-on faire autrement ?* → à gauche d'un `:` dans un littéral, le mot est du texte, jamais une variable. Forme longue en deux temps montrée. Aucune autre syntaxe n'existe.
- *Peut-on demander à `useState` « toutes les clés de `Infos` à `""` » ?* → non, une interface ne crée aucune valeur (règle S60). D'où la constante réutilisable.

**✅ `AfficherFormations` converti** — 5 champs. `modifierFormation` réduite à deux lignes, **rest en déstructuration sorti seul** pour exclure l'`id`.

**🎓 Choix de conception tranché (réponse donnée après une première question mal comprise)** : le formulaire ne porte **pas** l'`id`. Il collecte ce que l'utilisateur tape ; l'`id` est déjà dans `idEnEdition`. Question posée par lui : « pourquoi pas `id?: string` ? » → parce que dans la liste, toute formation a un id ; affaiblir le contrat de la donnée principale pour arranger un cas de saisie produit une **interface fausse** (règle S61), et force à tester une absence qui n'arrive jamais.

**🆕 `Omit<Formation, "id">` donné comme outil**, sans cours. **Frédéric a explicitement demandé que le cours complet sur les utility types soit dû** — accepté, c'est une dette nommée, pas une ligne d'attente.

---

### 4. `InfosGenerales` — bouton Modifier tranché sans code

Point posé : ce n'est **pas** le même motif que les listes. Une seule donnée, rien à sélectionner. Comportement des vrais générateurs de CV : les champs restent remplis, libellé fixe « Enregistrer », pas de ternaire (il n'annonce rien puisque le comportement ne change pas). Deux lignes modifiées, zéro state ajouté.

---

**Habillage** : formulaires (fond, arrondi, ombre), titres de section, boutons avec `transition-colors` (convention rappelée : fond/bordure/élévation plutôt que taille de texte — **une boîte se calcule d'après son contenu, agrandir le texte agrandit le bouton**). Feuille A4 posée : `min-h-[297mm] w-[210mm] p-[15mm]`, ratio et unités physiques expliqués.

---

**Niveaux** : state objet + `[e.target.name]` + `name` 🟢 (converti sur deux formulaires le jour même) · constante hors composant 🟢 · parenthèses autour de l'objet en flèche 🟢 · rest pour exclure une clé 🟢 (sorti seul) · type de saisie vs type de donnée 🟡 (tranché après explication) · `Omit` — **utilisé, non enseigné, cours dû** · `findIndex` 🟡 (appris puis écarté à raison) · mode édition reproduit de mémoire 🟢 · `IntersectionObserver` dans `useEffect` 🔴 · `disconnect()` 🟡.

**📌 Reste sur le fichier** :
- **`AfficherExperiences` non converti** en state objet — dernier des trois. Difficulté supplémentaire : le `<textarea>` n'est pas un `<Champ>` et son événement n'est pas un `HTMLInputElement`.
- `name` passera en obligatoire une fois les trois formulaires convertis.
- Feuille A4 : `w-[210mm]` déborde en demi-colonne. **Test `scale` + `<nav>` fixe** à faire (bloc conteneur, S76).

**⏭️ Prochaine étape**

1. Convertir `AfficherExperiences` en state objet (+ le cas `<textarea>`).
2. Passer `name` en obligatoire.
3. Habillage design B : feuille A4 et son adaptation à la largeur.
4. **Cours dû, demandé explicitement : utility types** (`Omit`, `Pick`, `Partial`, `Record`) — cours complet + exercices.
5. Candidat séance dédiée : `useRef` + `IntersectionObserver` en version React.
6. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `<table>` · `useReducer` · types fonction avancés · hoisting.

## Session 86 — Utility types : cours complet + `AfficherExperiences` converti

**Durée** : ~2h (mardi soir). Énergie bonne, séance tenue jusqu'à minuit.

**Révision éclair (inline vs block)** 🟢 : `w-full` identifiée comme ignorée, `inline-block` donné en solution. Une imprécision corrigée sur le padding vertical (il est **peint** mais ne pousse pas les voisins — d'où le chevauchement). Le point cassé en S82 est ressorti juste. **Sort de rotation.**

**🎹 Raccourci** : `Ctrl+Maj+K` — peu utilisé, réflexes souris encore dominants. Reconduit.

---

### 1. `AfficherExperiences` — converti au state objet ✅

**Écrit seul avant la séance**, complet et fonctionnel : state objet, `handleChange` générique avec déstructuration de `e.target`, `EXP_VIDE` typé `Omit<Experience, "id">`, mode édition avec rest en déstructuration.

**Question posée : pourquoi `{ ...saisie, id }` et non `{ saisie, id }`** → un littéral ne contient que des paires ; `{ saisie, id }` produit un objet à deux clés dont l'une imbrique la saisie. Forme longue donnée (les 5 recopies à la main) avant la version spread.

**Union sur un type d'élément** : `React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>` — le nom de l'outil n'était plus en tête, la notion oui. `handleChange` mutualisé, `onChange` inline du `<textarea>` supprimé (il refaisait le même travail avec la clé en dur), annotation fautive à deux paramètres de type retirée.

**🌟 A tranché seul** de ne pas élargir `ChampProps` : `Champ` ne rend qu'un `<input>`, son contrat doit rester exact. Point complété : un fournisseur peut accepter plus large que le contrat, jamais plus étroit.

**Points de la todo S85 vérifiés et déjà soldés** : `name` obligatoire dans `ChampProps` ✅ · préfixes d'`id` sans collision ✅ (j'avais reconduit ce point sans vérifier — récurrence de §9 bis).

---

### 2. Utility types — cours dû livré

**`Omit`** posé par le problème qu'il résout : deux interfaces décrivant la même donnée à un champ près se désynchronisent silencieusement. `Omit` rend la dérivation explicite et automatique. Rattaché aux generics (S81) : un outil livré avec TS, qui tourne dans le canal des types.

**🎓 Question de fond : « à quel moment on met `<>` ? »** — cours donné, point qui structurait tout le reste. **`: Type` = annoter** (attacher un type à une chose qui existe) · **`<Type>` = remplir un tiroir** (fournir un type comme argument à un outil générique). Repère décisif : ce n'est pas toi qui décides, c'est l'outil qui impose. Test au survol VS Code — `type Omit<T, K>` a des tiroirs, `interface Formation` n'en a pas.

**🎓 Question : `interface` vs `type`** — `interface` ne sait décrire qu'une forme d'objet ; `type` nomme n'importe quel type (union, alias, résultat d'utility type). Convention actée pour le projet : `interface` pour les formes d'objet, `type` pour le reste. C'est déjà ce qu'il fait.

**🔴 Blocage sur `|` dans un contexte de clés** : lu comme une alternative (« soit id, soit description ») dans `Omit<Experience, "id" | "description">`. **Ma faute** — j'ai d'abord expliqué que le `|` s'y lisait « comme une liste », ce qui est faux et a brouillé la notion d'union. Repris : `|` = « ou », toujours ; ce qui change est l'usage du type obtenu.

**Question posée derrière : pourquoi pas `&` ?** Excellente. Réponse : `&` existe, il produit une **intersection**. Sur des littéraux, `"id" & "description"` = `never`. Sur des objets, `&` fusionne deux formes — c'est l'usage réel, réactivé plus tard dans la séance.

**🔴 `Record` — deux explications échouées avant la bonne.** Mes deux premiers passages partaient de l'exemple à clés fermées, hors besoin. Débloqué en partant de son `reduce` objet : `{ Rayban: 2, Persol: 1 }` ne peut pas être typé par une interface puisque les clés viennent des données. `Record<string, number>` écrit la **règle** au lieu de la liste.

**Question posée : « il en existe beaucoup plus dans la doc, pourquoi ces 4 ? »** — cadrage donné : ces quatre couvrent les manipulations CRUD courantes ; le reste se range en trois familles (chaînes, types de fonctions type `ReturnType`/`Awaited` — utiles avec Prisma —, filtrage d'unions). Tous fonctionnent pareil, donc lisibles sans cours. Position S81 réaffirmée : utility types **en lecture** avant candidature.

---

### 3. Exercices

**🔴 Mon premier exercice était infaisable** : il demandait de combiner `Partial` + `Omit` + `Pick` + `&` alors que les trois outils venaient d'être vus et que `&` avait été explicitement écarté (« pas aujourd'hui »). Consigne également trop vague — aucun contexte d'appel fourni. Recadré par lui : « ta consigne n'était pas claire, il faut que tu travailles ça ». **Correctif retenu : un exercice = un outil, la combinaison seulement quand chaque brique est sortie seule ; et toujours donner le code appelant avec des valeurs concrètes avant de demander un type.**

**Repris en 4 micro-exercices, un outil chacun — 4/4 justes** : `Pick<Formation, "ville">` · `Partial<Formation>` · `Omit<Formation, "fin">` · `Record<string, number>`. Syntaxe, PascalCase et choix `type` corrects.

**`Record` à clés fermées** ensuite, compris et vérifié (`Record<Statut, number>` restitué juste).

**✅ Combinaison réussie en fin de séance**, avec contexte d'appel fourni cette fois (appels qui doivent passer / être refusés) :
```ts
Partial<Omit<Formation, "id" | "diplome">> & Pick<Formation, "id" | "diplome">
```
Écrit seul, du premier coup — soit exactement ce qui avait bloqué 20 min plus tôt. La variante courte `Partial<Formation> & Pick<...>` donnée en complément (la contrainte la plus stricte gagne dans une intersection). Seule remarque : nom du type non descriptif.

---

**Niveaux** : state objet sur les 3 formulaires 🟢 (converti seul) · union sur type d'élément d'événement 🟢 · contrat exact vs fournisseur plus large 🟢 · **`: Type` vs `<Type>` 🟢 — c'était le chaînon manquant** · `interface` vs `type` 🟢 · `Omit` 🟢 · `Pick` 🟢 · `Partial` 🟢 · `Record<string, T>` 🟡 (3 explications nécessaires) · `Record<Union, T>` 🟡 · `&` sur objets 🟡 · combinaison d'utility types 🟡 (réussie une fois, guidée par un énoncé très cadré) · `|` sur littéraux 🟡 · inline vs block 🟢.

**🆕 Demande explicite de Frédéric** : **pratiquer et développer les types TS pour perfectionner son usage.** Ce n'est pas une dette à solder mais un axe de travail continu — prévoir des exercices de typage réguliers, y compris hors CV.

**⚠️ Mes erreurs** :
1. Exercice combinant 3 outils neufs + un opérateur annoncé comme hors périmètre. Récurrence §9.
2. Consignes d'exercice sans contexte d'appel — « je ne comprends pas, il faut que je type quoi ? ».
3. `Record` expliqué deux fois par le cas particulier avant le cas général.
4. Point des préfixes `id` reconduit depuis la todo S85 sans vérifier qu'il était déjà réglé.

**⏭️ Prochaine étape**

1. **Test `scale` de la feuille A4 avec la `<nav>` fixe** — en attente depuis S85 (`w-[210mm]` déborde en demi-colonne ; `transform` sur un ancêtre capture les `fixed`, S76).
2. **Habillage design B** — deux colonnes, aperçu de CV présentable.
3. Exercices de typage réguliers (demande du jour), sur terrain varié.
4. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `useRef` (+ `IntersectionObserver` version React) · `<table>` · `useReducer` · types fonction avancés · hoisting.

## Session 87 — Feuille A4 responsive + `<details>` natif + habillage des listes

**Durée** : ~2h (mercredi). Énergie bonne.

**Révision éclair (top 3 des moins chères)** 🟡 : comparateur `(a, b) => a.prix - b.prix` et `slice(0, 3)` justes et sans hésitation. **Cassé sur la mutation de `sort`, 2ᵉ fois** (S81 déjà, après indice) — `montures` réordonné sans que rien ne le demande, et `monturesTrie` qui n'est pas une copie mais le même tableau. `[...tab].sort()` redonné, avec le contraste : spread indispensable devant `sort`, superflu devant `map`/`filter`. **Reste en rotation.**

**🎹 Raccourci** : `Ctrl+Maj+K` jamais adopté (« je n'y pense pas ») → **abandonné**. Remplacé par **Emmet Wrap with Abbreviation**, demandé par lui en cours de séance (« comment envelopper une sélection sans couper/coller la balise fermante ? »). Assigné à `Alt+M` immédiatement et utilisé dans la foulée. Besoin réel exprimé par lui = bon terrain d'ancrage.

---

### 1. Feuille A4 — dette S85 soldée

**`scale` testé et écarté.** Point posé : un `transform` s'applique **après** le calcul de la mise en page — l'élément est peint plus petit mais réserve toujours sa place. Ne résout pas un débordement.

**`aspect-ratio` — notion neuve** 🟢 : impose un **rapport**, jamais une taille ; la hauteur devient une conséquence de la largeur. `aspect-[210/297]`.

**🎓 Question posée : « aspect peut-il être limité dans sa taille ? »** — oui, il se combine avec toutes les contraintes. Point de fond donné : le ratio est appliqué **après** résolution de la largeur, et une contrainte de taille explicite gagne toujours contre lui.

Version retenue : `aspect-[210/297] w-full max-w-[210mm] p-[5%]`. Format A4 réel quand la place existe, rétrécissement proportionnel sinon. Arbitrage tranché par lui en connaissance de cause : le contenu long sortira du cadre au lieu d'allonger la feuille. Padding en `%` retenu, avec la particularité CSS signalée (un padding en pourcentage se calcule sur la **largeur**, y compris verticalement).

---

### 2. `<details>` / `<summary>` — notion neuve

**Besoin exprimé par lui** (capture d'un CV generator à l'appui) : replier la liste des formations enregistrées.

Deux implémentations comparées, **native retenue** : `<details>` gère le clic, le clavier, l'état et l'accessibilité sans une ligne de JS. Le state React ne se justifierait que pour piloter l'ouverture depuis le code (fermer après ajout, une seule section ouverte). Règle « solution native avant contournement » appliquée.

Points posés : attribut `open` = état **initial** uniquement · `<summary>` est en `display: list-item`, il faut lui remettre `flex` explicitement (même famille que `flex-col` sans `flex`) · `cursor-pointer` non fourni par défaut.

**`group` / `group-open`** 🟡 — deux mécanismes distincts, empilés par moi puis dépliés à sa demande. `open:` cible l'élément lui-même · `group` marque un parent pour permettre à un enfant de réagir à son état, ce que le CSS ne sait pas faire seul. Second exemple donné (`group-hover` sur une carte entière). `peer` mentionné pour les voisins, non enseigné.

**✅ Implémenté seul sur les deux sections**, avec `<article>`, hiérarchie `h3`/`p`, `justify-between` contenu/actions, icônes Lucide et `aria-label` sur le chevron seul (réflexe correct — aucun texte visible ne porte l'information).

---

### 3. Structure sémantique de l'aperçu

**Question posée par moi, répondue juste avant tout code** : `<article>` pour chaque entrée (test S61 « détaché, garde-t-il son sens ? »), `<section>` pour le bloc thématique. Précision ajoutée : les deux sont **imbriqués**, pas alternatifs. Nuance `<h3>` (sens, navigable au lecteur d'écran) vs `font-bold` (apparence).

`<section>` posées sur les trois composants dans la foulée.

---

### 4. Retour à la ligne — diagnostic

Description sur une seule ligne interminable. **Cause : chaîne sans espaces** — le navigateur cherche un espace pour couper, n'en trouve aucun, laisse déborder. `whitespace-pre-line` ne traite pas ce cas.

Donné : `break-words` (coupe dans un mot seulement s'il ne rentre pas) + `whitespace-pre-line` (conserve les retours tapés) · `break-all` déconseillé · `min-w-0` sur l'enfant flex si le débordement persiste (`min-width: auto` par défaut empêche un enfant flex de rétrécir sous son contenu). **Non encore appliqué, à vérifier en ouverture.**

---

**⚠️ Mes erreurs** :

1. **Deux affirmations fausses sur son propre code** : `<nav>` inexistante dans `App.tsx` (elle y est), et diagnostic de débordement construit sur deux captures que j'ai lues comme un avant/après alors qu'il s'agissait du même code dans deux fenêtres de tailles différentes. Recadré par lui. **Même famille que S69 — ne pas trancher sur une capture, demander.**
2. **`marker:content-none` donné de mémoire — n'existe pas.** Il a cherché la doc et n'a rien trouvé. La classe correcte est `list-none`. **Récurrence de « qualifier la source » (§9 bis).**
3. **`split` et `new Date` servis dans une fonction de formatage sans cours**, tous deux ❌ au §7 (dates jamais abordées). Signalé par lui. **Récurrence §9 vigilance n°1**, en fin de séance de surcroît.

---

**Niveaux** : `aspect-ratio` + `max-w` 🟢 · padding en `%` 🟡 · `scale` = peinture, pas layout 🟢 · `<details>`/`<summary>` 🟢 (implémenté seul sur 2 sections) · `group` / `group-open` 🟡 (neuf, expliqué en deux temps) · `<article>` dans `<section>` 🟢 · `break-words` vs `whitespace-pre-line` 🟡 (posé, non appliqué) · mutation de `sort` 🔴 (2ᵉ échec).

**🆕 Dettes ouvertes ce jour** :
- **`split()`** — utilisé, non enseigné. Rapide.
- **`new Date` / objet Date** — utilisé, non enseigné. Les dates sont ❌ au §7. Nécessaire pour formater `type="month"` (`"2008-09"` → « septembre 2008 »), et le piège des mois indexés à 0 va avec.
- `peer` — mentionné, non enseigné.

**⏭️ Prochaine étape**

1. **`split` et `new Date`** si le créneau le permet — sinon reporté.
2. **Habillage de `PagePresentation`** : c'est le dernier bloc non traité du design B. La colonne de gauche est habillée, l'aperçu affiche encore des données brutes séparées par des tirets.
3. Toujours en attente : projet CSS Grid · `children` · `useParams` sur vrai cas API · `useRef` (+ `IntersectionObserver` version React) · `<table>` · `useReducer` · types fonction avancés · hoisting · exercices de typage réguliers (demande S86).

## Session 88 — `split` / `new Date` + habillage de l'aperçu CV

**Durée** : ~2h (jeudi midi). Énergie bonne.

**Révision éclair (le plus cher, sans muter la source)** 🟢 : `[...montures].sort((a, b) => b.prix - a.prix)[0]` écrit sans hésitation, **spread posé d'emblée sans rappel**. Le point cassé en S81 et en S87 est ressorti seul. **Sort de rotation.** Corrections de nommage seulement : PascalCase sur une variable ordinaire · nom décrivant le contenu (`monturesTriees`) plutôt que la nouveauté.

**🎹 Raccourci** : Emmet Wrap (`Alt+M`) — utilisé, jugé très pratique, **reconduit à sa demande** avant rotation.

**Vérification d'ouverture** : `break-words` + `whitespace-pre-line` appliqués, débordement résolu ✅.

---

### 1. Dettes S87 soldées — `split` et `new Date`

**`split()`** 🟢 : cours donné (le séparateur disparaît, le retour est **toujours** un tableau même sans coupure, `split("")` découpe caractère par caractère, `join()` en inverse). Deux micro-exercices justes.

**Point réactivé au passage — déstructuration de tableau** 🟡 : a écrit deux `split` successifs avec accès par index plutôt que `const [annee, mois] = ...`. La notion est connue (il l'utilise dans chaque `useState`) mais ne s'est pas déclenchée. Repère redonné : accolades = objet, par **nom** · crochets = tableau, par **position**. Rattaché à `useState` et à `Object.entries`.

**`new Date`** 🟡 : cours limité à ce que le CV exige (représentation en millisecondes, trois formes de construction, **mois indexés à 0**, `toLocaleDateString` avec objet d'options). Le piège des mois est présenté comme à retenir, pas à comprendre.

**Écriture de `formaterMois` — 4 points cassés** :
1. **La fonction lisait la constante globale `date` au lieu de son paramètre `valeur`** — récurrence directe du `CLIENTS.map` de la S63. 🔴
2. **Aucun `return`** : résultat calculé puis jeté, `alert` de l'objet `Date` brut. ⚠️ **Ma consigne était ambiguë** (« doit ressortir X » sans préciser la forme) — signalé par lui, à raison. Point de fond maintenu : une fonction utilitaire renvoie, elle n'affiche pas ; c'est ce qui la rend réutilisable.
3. **Pas de `Number()`** aux frontières — `split` renvoie des chaînes, `new Date` attend des nombres. Acquis sur la calculatrice, non transféré. 🔴
4. Garde manquant sur chaîne vide (`NaN` → « Invalid Date »).

---

### 2. Habillage de `PagePresentation`

**🎓 Deux questions posées avant de coder, toutes deux pertinentes** :

- *Faut-il un bouton télécharger/imprimer, et est-ce dans mes cordes ?* → oui aux deux. `window.print()` ouvre la boîte native qui propose l'export PDF ; le travail réel est le CSS d'impression (`@media print`, variant Tailwind `print:hidden`). Bloc de ~30 min, **écarté par lui pour un autre projet**. Décision assumée.
- *Un CV sans couleur, juste du gras et de la marge ?* → ma consigne était trop stricte. Reformulée : la couleur **accompagne** la hiérarchie, elle ne la porte pas ; le test est qu'un CV reste lisible en noir et blanc. Règle donnée : une couleur d'accent, trois usages maximum.

**Question posée : quel est le souligné le plus pro ?** → `border-b` (standard, une propriété, aucun élément en plus, suit la largeur du bloc) · `<hr>` réservé aux séparateurs sémantiques entre blocs · `::after` seulement pour ce que `border-b` ne fait pas (trait partiel, couleur indépendante) · **une `<div>` vide pour faire un trait : jamais**.

**Première version — deux erreurs bloquantes** :
1. **`<p>` imbriqué dans un `<p>`** — interdit en HTML, le navigateur ferme le premier de force.
2. **Séparateur conditionné sur `length > 1`** — condition identique pour toutes les entrées, donc un trait après la dernière. Corrigé avec l'index.

**Deuxième paramètre de `.map()`** 🟢 — expliqué à sa demande (« je le connais mais jamais utilisé seul »). Trois arguments fournis, on ne déclare que ce qu'on veut ; même famille que le `e` d'un handler. `length - 1` = index du dernier, conséquence de l'indexation à 0.

**✅ Prop `obligatoire?: boolean` avec défaut `true`** — motif de la prop optionnelle sorti sans aide, **3ᵉ fois** après `type` et `className`. Appliqué aux deux champs « date de fin ».

**Corrections appliquées** : `<section>`/`<article>` à la place des `<div>` · `justify-between` + `items-baseline` pour les dates alignées à droite · ternaire `fin` propagé dans l'aperçu · formulations de CV allégées.

**Décision de Frédéric, juste** : l'habillage s'arrête là. L'énoncé Odin porte sur la mécanique (lifting state up, mode édition), pas sur la maquette.

---

**Niveaux** : `split` 🟢 · déstructuration de tableau 🟡 (connue, non déclenchée) · `new Date` + mois indexés à 0 🟡 · conversions aux frontières 🔴 (acquises ailleurs, non transférées) · lire le paramètre et non la globale 🔴 (récurrence S63) · fonction utilitaire qui renvoie 🟡 · 2ᵉ paramètre de `.map()` 🟢 · `border-b` vs `<hr>` vs `::after` 🟢 · prop optionnelle avec défaut 🟢 · `<p>` non imbricable 🟢 · `sort` non mutant 🟢.

**📌 Reste sur le fichier** (mineur, non bloquant) : `break-words` / `whitespace-pre-line` absents de la description dans l'aperçu · le bloc d'en-tête serait plutôt un `<header>`.

**✅ CV Application terminé** côté énoncé Odin. `InfosGenerales` sans bouton Modifier : conforme à la décision S85 (une seule donnée, champs qui restent remplis, libellé fixe).

**⏭️ Prochaine étape — décision à prendre en ouverture**

Le CV est fini, et la consolidation dure depuis la S70 alors que les vacances sont terminées depuis deux semaines. Deux directions :

1. **Reprendre l'axe Phase 2** (recommandé) : approfondissement **React Router Declarative**, demandé explicitement en S69 et jamais ouvert · **`useParams` sur un vrai cas API** liste → fiche, en attente depuis S68 — c'est le motif central des apps de gestion, donc du futur SaaS optique.
2. **Poursuivre la famille logique pure** : Quiz (zéro neuf), puis Memory Card (mélange de tableau), puis jeu de paires.

Toujours en attente : projet CSS Grid · `children` · `useRef` (+ `IntersectionObserver` version React) · `<table>` · `useReducer` · types fonction avancés · hoisting · `peer` · exercices de typage réguliers (demande S86).

## Session 89 — `useParams` et route paramétrée

**Durée** : ~2h (vendredi). Énergie bonne. Reprise de l'axe Phase 2 après la consolidation ouverte en S70.

**Révision éclair (`Object.entries`)** 🟢 : `.map()` complet écrit sans hésitation, déstructuration par **crochets** posée d'emblée — le point cassé trois fois (jusqu'en S83) est ressorti seul. **Sort de rotation.** Seule remarque : `<p>` répétés là où le résultat attendu était une liste (`<ul>`/`<li>`).

**🎹 Raccourci** : Emmet Wrap (`Alt+M`) acté 🟢, très utilisé, sorti de rotation. Nouveau : `Ctrl+Maj+F` (recherche projet) — **non joué cette séance.**

---

### 1. Organisation des dépôts — tranchée par Frédéric

J'avais recommandé de tout regrouper dans `projet-examen-blanc`. **Il a maintenu une autre répartition, meilleure, à retenir** :

- **`projet-examen-blanc`** = exercices canoniques / projets aboutis, dépôt vitrine.
- **`projet-vite-local`** = atelier d'apprentissage, petits exercices, noms de fichiers descriptifs pour la relecture.

Accueil de `projet-vite-local` refait sur le modèle de l'autre projet — remplace définitivement le système commenter/décommenter.

---

### 2. Cours `useParams` + segment paramétré

Segment `:id` comme joker, nom inventé librement, correspondance stricte du nombre de segments. `useParams()` renvoie **un objet** dont les clés sont les noms écrits après les `:` → déstructuration par accolades, par nom.

**Point de fond posé** : un composant monté par une route n'a **pas de parent qui lui passe des props** — c'est le routeur qui l'affiche en lisant l'URL. D'où la nécessité d'un hook pour aller chercher la donnée. Deux conséquences : la valeur est **toujours une chaîne**, et son type est `string | undefined` (l'assertion `!` est illégitime ici, la valeur vient de l'utilisateur).

**🔴 Premier exercice (`Catalogue`) non produit** — « je ne comprends pas ce que je dois faire ». Code donné en entier puis commenté ligne par ligne. Deux causes distinctes : **ma consigne initiale était dispersée** (reformulée ensuite en livrable explicite, ce qui a débloqué la partie liste), et le mécanisme était neuf.

Erreurs corrigées avant le blocage : `<Link>` auto-fermant (lien vide, contenu à côté et non dedans — récurrence du point zone cliquable S75-77) · marque et prix affichés dans la liste, ce qui vidait la fiche de son intérêt · `path="/fiche-monture"` **fixe au lieu de paramétré**, donc aucune correspondance avec les `<Link>` générés et `useParams` renvoyant un objet vide.

**Question posée : export nommé vs `export default`** — cours donné (un seul défaut, autant de nommés ; le défaut n'a pas de nom donc l'importateur le choisit ; accolades = même syntaxe que la déstructuration, renommage possible avec `as`). Convention dominante = nommé partout. Rattaché à `{ createRoot }`.
**Vocabulaire corrigé** : accolades `{}`, pas crochets.

---

### 3. Exercice `Clients` / `FicheClient` — page blanche ✅

Motif complet reproduit sans modèle 20 min après avoir reçu le code : route paramétrée dans le bon ordre, `to` construit en template literal, `useParams()` déstructuré, `find` + test, deux exports nommés, entrée d'accueil.

**Trois corrections** :

1. **🔴 `if (!client) return;` — `return` nu.** React accepte `undefined` : page **vide** sans message ni erreur sur une URL invalide. Le cas d'erreur n'est pas traité, il est silencieux. **Récurrence directe du `return` nu de `arrondir` (S78)** — une fonction doit produire quelque chose dans toutes ses branches.
2. Nommage `clientExiste` pour une variable portant un objet — annonce un booléen (sa propre convention, S81). La variable **porte** le client, le test d'existence est une conséquence.
3. `€` collé à la date, résidu du copier de `Catalogue`.

**Question de fond posée en fin de séance : pourquoi `:id` dans le `path` et pas dans le `to` ?** Réponse : `path` décrit un **motif** écrit une seule fois, il ne peut pas nommer une valeur qu'il ignore · `to` est réévalué dans le `.map()` avec la donnée sous la main et produit une **adresse réelle**. Test réappliqué : « est-ce que ça ressemble à une adresse de site web ? »

---

**Niveaux** : route paramétrée `:id` 🟢 · `useParams` + déstructuration par nom 🟡 — **code donné sur le 1er exercice, reproduit seul sur le 2e ; un seul passage autonome, ne pas surévaluer** · correspondance `to` ↔ `path` 🟢 · `find` + test d'existence 🟢 · `return` nu dans une branche 🔴 (récurrence S78) · export nommé vs défaut 🟢 · `<Link>` enveloppant son contenu 🟡 (rechute) · `Object.entries` 🟢.

**⚠️ Mes erreurs** :
1. **Consigne du 1er exercice dispersée** — livrable pas énoncé clairement, ce qui a pesé sur un mécanisme déjà neuf. Reformulée en « voici les deux composants à produire, voici le résultat attendu », efficace immédiatement.
2. **Annonce d'un exercice à deux paramètres** puis retrait — j'allais ajouter du neuf alors que le premier exercice n'avait pas été produit seul.
3. Recommandation d'organisation des dépôts moins bonne que la sienne.

**⏭️ Prochaine étape — décidée pour demain, séance fraîche**

1. **Liste → fiche sur une vraie API** : deux `fetch` (liste et fiche), avec chargement et erreur **dans le composant monté par la route** — jamais fait. C'est ce que `useParams` sert réellement, et le motif du futur SaaS optique. Bonne révision du socle `useEffect`/`fetch` au passage. ~1h.
2. Puis : approfondissement React Router Declarative (demandé S69, jamais ouvert).
3. Toujours en attente : projet CSS Grid · `children` · `useRef` (+ `IntersectionObserver` version React) · `<table>` · `useReducer` · types fonction avancés · hoisting · `peer` · exercices de typage réguliers (demande S86).
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

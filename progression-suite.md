## Session 49 — useEffect + fetch API (première rencontre)

**Durée** : ~2h (matin, frais) — session écourtée volontairement (pause repas), reprise ~1h prévue plus tard.
**Thème** : premier gros morceau data — `useEffect`, cycle de vie d'un fetch pro en React, gestion d'erreur, lecture de console.

**Révision éclair S49 (map/find/some)** : `map` → tableau neuf de même longueur (jamais l'original) ; `find` → 1er élément qui matche **ou `undefined`** (d'où le `?.` derrière) ; `some` → **booléen** (« au moins un ? »). Les trois justes, **`some` — l'ex-point fragile S37 — ressorti nickel**. ✅ Compléments donnés : « tableau neuf » pour map, filet `undefined` pour find.

**Ce qui a été fait** :

_useEffect — le pourquoi avant la syntaxe :_

- **Effet de bord** posé comme catégorie : tout ce qui sort du rendu pur pour parler au monde extérieur (fetch, localStorage, setTimeout, listeners). Le fetch = _un cas_, pas la catégorie (bonne question de Fred : « useEffect sert à autre chose que le fetch ? » → oui).
- **La boucle infinie du fetch naïf** disséquée : fetch dans le corps → `setX(data)` → re-render → ré-exécution du corps → re-fetch → 💥. Le `set` ne rappelle pas le fetch _directement_ : il déclenche le re-render, qui relance tout. Point clé bien capté.
- **Tableau de dépendances** = le QUAND. 3 formes : rien (chaque rendu) / `[]` (une fois au montage) / `[x]` (au montage + quand x change). `[]` casse la boucle. Analogie **listener** validée (le tableau = ce que l'effet « écoute »).
- **Pattern async** : `async function charger()` déclarée DANS le `useEffect` puis appelée (pas `useEffect(async …)`).

_fetch pro — gestion d'erreur (briques neuves, enseignées avant l'exo après que Fred m'a arrêté à juste titre) :_

- **`res.ok`** : propriété booléenne de la réponse (`true` sur 200–299). `fetch` ne considère PAS un 404/500 comme une erreur → à toi de le détecter. `.ok` n'existe que sur une réponse fetch.
- **`throw new Error("msg")`** : lever une erreur volontairement → interrompt le `try`, saute au `catch`. Unifie 404 (throw) et panne réseau (native) dans un seul `catch`. Le fetch est déjà fini au moment du throw (ne « stoppe » pas le fetch, stoppe la suite du try).
- **`finally`** : s'exécute toujours (succès OU échec) → nettoyage commun (`setChargement(false)`), DRY.
- **`e.message`** : `e` est un objet erreur (`message`, `name`, `stack`). On range `e.message` (le texte affichable), pas `e` (React n'affiche pas un objet). Nuance donnée : objet erreur un peu spécial (console = stack trace, `message`/`name` non énumérables).
- **Rendu conditionnel** (early return) : `if (chargement) return …` / `if (erreur) return …` / sinon la liste. Premier `return` atteint gagne.

_Exercice guidé (ListePays, API pays) :_

- 1ère passe (3 trous : `setPays(data)`, `[]`, `key={p.name.common}`) : **3/3 du premier coup**, y compris le champ imbriqué choisi seul.
- 2e passe (try/catch/finally, 3 trous) : `if (!res.ok) throw` et `finally` justes seul ; `setErreur(e)` corrigé en `setErreur(e.message)`.

_Débogage en conditions réelles (le vrai apprentissage du jour) :_

- **API `restcountries.com/v3.1` morte/instable** (migration vers modèle authentifié). **Ironie** : c'est l'API que Fred avait DÉJÀ abandonnée en World Explorer (S17→30). Leçon pro : une API tierce peut mourir/changer, on ne la contrôle pas.
- **Lecture de console fine** : « Failed to fetch » (erreur native de fetch, requête non aboutie → `catch`) ≠ le message du `throw` (ne se déclenche que si le serveur RÉPOND mal). L'écran affichait « Failed to fetch », pas la soupe → **preuve en direct des 2 chemins d'échec distincts**.
- **`StrictMode` double-fetch VU EN VRAI** : erreurs CORS ×2 dans la console = `useEffect` exécuté 2× au montage en dev. Phénomène annoncé, observé.
- **Erreur de compilation Vite** repérée (`[vite] Failed to reload … 500`) : tant que le nouveau code ne compile pas, le navigateur garde l'ANCIEN (d'où restcountries encore visible malgré le changement d'URL). Résolu par Fred **seul** : `Ctrl+C` + `npm run dev`.
- **Fix data** : passage à `mledoze/countries` (JSON statique GitHub, `raw.githubusercontent.com`) — pas de CORS/auth, structure `name.common` identique → code inchangé sauf l'URL.

**Niveau estimé après session** :

- **`useEffect` (pourquoi, `[]`, pattern async)** : 🟡 compris solidement, pas encore instinctif (gros concept, vu 1×).
- **fetch pro (`res.ok` / `throw` / `finally` / `e.message` / rendu conditionnel)** : 🟡 neuf, à recroiser (jamais vu proprement avant — enseigné ce jour après arrêt légitime de Fred).
- **Lecture de console (réseau vs compilation, StrictMode ×2)** : 🟢 gros progrès, distinctions comprises en situation réelle.
- **Débogage autonome** : a redémarré Vite seul, n'a pas paniqué. Recalibrage vers le haut (comme d'hab, se sous-note).

**⚠️ Rappel dosage (respecté cette fois après signalement)** : Fred m'a arrêté à juste titre quand j'ai utilisé `res.ok`/`throw`/`finally` sans les avoir enseignés. Briques posées AVANT l'exo → bon déroulé ensuite. Le réflexe « tu me mets un truc jamais vu » est un atout, pas un frein.

**Restes / dettes** :

- **Version `.then`** du fetch : demandée explicitement par Fred (« que je sache bien l'utiliser, je vais la recroiser ») → séance/point dédié à prévoir.
- **`console.log(e)`** : pas encore observé en vrai (l'objet erreur entier) → à voir à la reprise.
- **JSON.stringify/parse** : toujours jamais pratiqué en exo.
- **TS des props** : à brancher (useState solide depuis longtemps) — prioritaire.
- **Rest destructuring** : dette close en S46, RAS.
- **Tic-Tac-Toe version finale** (currentMove, modulo, slice à arguments, 2e arg de map) : toujours en attente.

**➡️ Reprise (~1h plus tard dans la journée)** : au choix —

1. **Consolider useEffect** : 2e petit exo fetch guidé à froid (recommandé pour 1h, ancre pendant que c'est chaud).
2. **Ajouter un filtre** `[search]` en dépendance → voir le re-fetch au changement (réinvestit le controlled input).

### Session 49 (complément après-midi) — Consolidation useEffect + fetch + branchement ESLint

**Durée** : ~1h30 après-midi (total journée S49 = ~3h30, en 2 blocs frais matin + après-midi).
**Thème** : consolider `useEffect` + fetch par exercices (guidé → page blanche), diagnostiquer les points fragiles, brancher l'extension ESLint.
**Révision éclair** : aucune formelle (reprise même-jour, échauffement = récupération à froid des pièces de `useEffect` directement en ouverture).

**Échauffement (cold recall)** : `useEffect` = fonction + tableau de dépendances → **juste**. A questionné à raison ma formulation « 3 states » : ils ne font PAS partie de `useEffect` (function + deps, point), ce sont les 3 issues du fetch (data/chargement/erreur) montées par-dessus. Détail `async function … () { } charger()` re-précisé.

**Ce qui a été fait** :

_Exo 1 — `ListeClients` (guidé, 7 trous, données neuves jsonplaceholder /users) :_

- TROU 1/2/4/5 (`throw`/`setClients`/`finally`/`[]`) justes du premier coup.
- Corrections : `setErreur(error)` → variable inexistante, `error` n'est pas `e` ; puis `e` → **`e.message`** (rappel matin : on range le texte, pas l'objet). Repère ancré : `res.ok` = propriété d'une **réponse** / `e.message` = propriété d'une **erreur**.
- Early returns : première fois qu'il les écrit lui-même (donnés pré-remplis le matin) → structure OK, mais message générique `<p>erreur !</p>` → recadré : réinjecter `{erreur}` (tout le pipeline throw→catch→setErreur sert à AFFICHER le vrai message).
- `key` : contraste pédagogique posé — ce matin pas d'`id` → `name.common` ; ici vrai `id` → **`key={c.id}`** (unique + stable par nature). Choisi juste.

_Exo 2 — `ListeArticles` (PAGE BLANCHE, de mémoire, sans filet) :_

- **Restitué seul** : 3 states + valeurs de départ, `try`/`if(!ok)`/`throw`/`catch`/`finally`, **`setErreur(e.message)` du premier coup** (corrigé 3× le matin → juste seul l'aprem = ancrage réel), pattern `async function recuperation()`, `[]`, `export default`, `setChargement(false)`.
- **SEULE vraie zone conceptuelle** : placement des early returns → mis DANS le `useEffect` (erreur logique). Recadré : les early returns vivent dans le CORPS du composant (points de sortie alternatifs qui retournent du JSX), entre le `useEffect` et le `return` final. Un `return` dans `useEffect` ≠ rendu (= future fonction de nettoyage, à voir). Ordre : `chargement` avant `erreur`.
- Étourderies (pas des trous) : `useStates` au lieu de `useEffect` dans l'import ; `await` oublié sur `reponse.json()` (présent ailleurs le jour même) ; `key={d.id}` sur données sans id → retour `d.name.common`.

_Point outillage — ESLint enfin branché (dette S40 soldée) :_

- Fred pensait ESLint actif → PROBLEMS vide malgré l'import cassé. Diagnostic : le **moteur** ESLint est là (Vite l'installe : `eslint` + `eslint.config.js` + script `lint`), mais l'**extension VS Code** (`dbaeumer.vscode-eslint`) n'était jamais installée → pas de lint en direct.
- Preuve empirique : `npm run lint` sort bien `'useStates' is defined but never used` (no-unused-vars) + `'useEffect' is not defined` (no-undef) → **le moteur marche**, il n'était pas branché en live.
- **Extension installée + testée** (rouge en live vérifié). Modèle mental posé : extension = pont qui réveille le moteur en continu / lit `eslint.config.js` (règles versionnées = équipe alignée) / ne remplace pas `npm run lint` (filet CI) ni la compréhension (attrape le fond : no-undef, unused, `==` vs `===` — PAS la logique : `await` oublié, early return mal placé = JS valide).
- Rappel S40 confirmé en situation : Prettier = forme (ce qui corrigeait en live) / ESLint = fond.

**Niveau estimé après session** :

- **`useEffect` + fetch (structure d'ensemble)** : 🟡→🟢 — squelette monté de mémoire page blanche, ne manque que le poli. Le concept lourd du matin a TENU l'après-midi.
- **Gestion d'erreur (`res.ok`/`throw`/`e.message`)** : 🟢 — restituée seule, vrai gain de la journée.
- **Placement des early returns (dans le corps, pas dans useEffect)** : 🟡 — LE point conceptuel révélé par la page blanche, corrigé, à recroiser 1× pour l'instinct.
- **Distinction moteur ESLint vs extension VS Code** : 🟢 comprise en situation réelle.
- Recalibrage vers le haut : page blanche sur un concept vu le jour même = solide, pas « pas mal ». Se sous-note comme d'habitude.

**Restes / dettes** :

- **`useEffect` SANS fetch** : demande explicite de Fred pour la suite — autres usages (listeners, setTimeout, sync localStorage, effet sur changement de state), difficulté croissante pour « repousser la compréhension ». Excellente initiative, à construire.
- **Version `.then`** du fetch : toujours en attente (demande S49 matin).
- **`console.log(e)`** : toujours pas observé en vrai (l'objet erreur entier).
- **Fonction de nettoyage du `useEffect`** (le `return` dans l'effet) : évoquée, à enseigner — tombera naturellement avec les listeners/setTimeout demandés.
- **JSON.stringify/parse** : toujours jamais pratiqué en exo.
- **TS des props** : à brancher (useState solide depuis longtemps) — prioritaire.
- **Tic-Tac-Toe version finale** (currentMove, modulo, slice à arguments, 2e arg de map) : toujours en attente.

**➡️ Prochaine session (demain, 2-3h selon motivation)** : **approfondissement `useEffect`** — exercices React + `useEffect`, dont `useEffect` **sans fetch** (autres usages, complexité croissante, demande de Fred). Bon terrain pour introduire la **fonction de nettoyage** (cleanup) en contexte listener/setTimeout.

## Session 50 — useEffect : la fonction de nettoyage (cleanup) + setInterval + updater fonctionnel

**Durée** : ~2h (matin, frais).
**Thème** : la moitié manquante de `useEffect` — la fonction de nettoyage. Révélée d'abord sur un listener (facile), puis poussée sur un `setInterval` (dur, a fait remonter le piège de closure + l'updater fonctionnel).

**Révision éclair S50 (valeur vs référence)** : `const copie = original; copie.prix = 200` → `original.prix` vaut **200** (la référence est copiée, pas le contenu → même tiroir partagé). Mécanisme **juste**. Lien React complété par moi : muter = même référence → React ne voit rien → pas de re-render ; le spread crée une nouvelle référence → re-render. (Ce lien ressert LITTÉRALEMENT dans le piège de closure du jour.)

**Ce qui a été fait** :

_Concept neuf — la fonction de nettoyage (cleanup) :_

- **Le pourquoi** : certains effets « laissent une trace active » (`setInterval` qui tique, `addEventListener` qui écoute) — ≠ effets one-shot (`document.title`). Un composant peut se démonter ou l'effet se relancer → la trace reste → accumulation (2 écouteurs, puis 3…) → bugs fantômes + fuite mémoire.
- **Le comment** : la fonction de l'effet peut **retourner une fonction** = le nettoyage. React l'exécute avant chaque relance ET au démontage. Symétrie « je démarre → je retourne la façon d'arrêter ».
- **StrictMode enfin expliqué proprement** (évoqué 3× avant) : composant-emballage dans `main.jsx`, en DEV seulement, monte→démonte→remonte exprès et double les effets pour **débusquer les nettoyages manquants**. C'est lui qui doublait le fetch en S49. Détecteur, pas bug.
- **`handleKey` clarifié** : pas un mot-clé, une **convention** — `handleXxx` = « la fonction qui gère l'événement Xxx » (handleClick, handleSubmit…). Nommée (pas fléchée inline) pour que `removeEventListener` puisse la cibler (la référence compte — écho révision éclair).

_Exo 1 — `DerniereTouche` (guidé, 1 trou = le nettoyage) :_

- `window.addEventListener("keydown", handleKey)` + `return () => window.removeEventListener("keydown", handleKey)`. **Nettoyage juste du premier coup.** Première fonction de nettoyage écrite. Vérifié en console : pas d'accumulation malgré StrictMode → preuve que le cleanup marche.

_Exo 2 — `Minuteur`/`Chronometre` (idée de Fred, mode « consignes en français, zéro syntaxe donnée » à sa demande) :_

- `setInterval`/`clearInterval` montrés d'abord **en JS pur** (à sa demande) : `const id = setInterval(...)` → `clearInterval(id)`, l'id = le « ticket » pour arrêter CE minuteur. Ponts posés avec `setTimeout` (S14) et avec la structure add/remove du matin.
- Grosse difficulté, 3 accrocs traversés : (1) `() => previous` passait la fonction sans l'appeler (réf vs appel, S44) ; (2) **piège de closure** — `setSeconde(seconde - 1)` grave `10` (variable capturée figée), bloqué à 9 → **updater fonctionnel** `setSeconde((actuelle) => actuelle - 1)` (React fournit la valeur fraîche) ; (3) nettoyage mal placé (`if ... return clearInterval` dans le corps ≠ `return () => clearInterval(id)`).
- Piège de closure « RIEN compris » au 1er passage → ré-expliqué SANS jargon (histoire du « 10 gravé dans le marbre » + les 2 `return` distincts JSX/nettoyage). **Correction demandée explicitement → donnée** (règle respectée). Compteur descend 1/s proprement ensuite.
- **Question spontanée de Fred** : « pourquoi une flèche DANS le setter ? » → clarifié : forme A `setX(valeur)` vs forme B `setX((prev) => ...)` = passer une **fonction** que React appelle avec la valeur à jour, **exactement comme** `.map((m) => ...)` / `.filter((m) => ...)` (quelqu'un d'autre appelle ta flèche). Belle connexion.
- **Arrêt à 0** (correction donnée) : le test `if (actuelle <= 1) { clearInterval(id); return 0; }` va DANS le callback du setInterval (là où la valeur bouge), pas dans le corps de l'effet (qui ne tourne qu'une fois). Son instinct (tester ===0 + clear) était juste, seul le placement était en cause — même leçon que le nettoyage.

**Niveau estimé après session** :

- **Fonction de nettoyage (cleanup) — cas listener** : 🟡→🟢 (DerniereTouche réussi seul du premier coup).
- **Fonction de nettoyage — cas setInterval + le combo complet** : 🟡 neuf, dur, correction donnée → à recroiser absolument.
- **`setInterval`/`clearInterval`** : 🟡 neuf (id à ranger, paire symétrique).
- **Updater fonctionnel `setX((prev) => ...)`** : 🟡 neuf, gros morceau, arraché — à re-pratiquer (c'est LE point à consolider).
- **Piège de closure dans un effet `[]`** : 🟡 compris après ré-explication imagée, fragile → à recroiser (relié à la révision éclair du jour).
- **StrictMode / `handleKey`** : 🟢 clarifiés.
- Recalibrage : a poussé un enchaînement très dense (cleanup + closure + updater) en une session — normal que la correction ait été demandée, ce n'est pas un recul.

**⚠️ Dosage** : `Minuteur` combinait TROIS nouveautés d'un coup (setInterval + updater fonctionnel + cleanup). Dense mais assumé (concept relié). Pour la reconsolidation : les redécouper (un exo cleanup pur, un exo updater fonctionnel pur) avant de recombiner.

**Restes / dettes** :

- **`Minuteur` défi n°2** : rebrancher `document.title` au bon endroit (2e `useEffect` avec dépendance `[seconde]`) — non fait, à reprendre.
- **Compte à rebours avec input** (idée de Fred) : la montée de difficulté suivante.
- **Approche alternative du chrono via dépendance `[seconde]`** : à montrer (compare avec la version `[]` + updater).
- **Updater fonctionnel + closure** : à reconsolider par exos dédiés séparés.
- Version `.then` du fetch · `console.log(e)` jamais observé · JSON.stringify/parse jamais pratiqué · **TS des props (prioritaire)** · Tic-Tac-Toe version finale.

**🗑️ Obsolète à signaler dans les instructions** : les mentions **« react.new / CodeSandbox »** (§5, §7, §8) sont caduques depuis le passage en **Vite local** (S47-48). L'environnement React actuel = projet Vite local `projet-vite-local`, multi-fichiers, Git.

**➡️ Prochaine session** : reconsolider le combo `useEffect` avancé — d'abord updater fonctionnel + cleanup en exos **séparés** (dédensifier), puis finir le `Minuteur` (document.title + arrêt à 0 en autonomie) et attaquer le **compte à rebours avec input**. Continuer la série `useEffect` en difficulté croissante (demande de Fred).

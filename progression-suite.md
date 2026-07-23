## Session 52 — Clôture trio fragile S51 + fin du Minuteur (2 useEffect)

**Durée** : ~1h (session courte, énergie correcte malgré fatigue accumulée signalée).
**Thème** : réduction de la pile de dettes — solder le trio fragile diagnostiqué en S51 par exercices de lecture/reconstruction, puis finir le `Minuteur` (arrêt à 0 + `document.title`). Objectif assumé : dettes réduites avant de repartir sur du neuf.

**Révision éclair S52 (CSS — `margin: auto`)** : deux conditions du centrage block (`display: block` + largeur définie) restituées justes. Correction sur le flex : `margin: auto` n'est PAS inopérant en flex — il devient plus puissant (absorbe l'espace libre sur les DEUX axes ; `margin: auto` centre H+V, `margin-left: auto` pousse à droite). Point 🟡 `margin auto` entretenu, confusion « ne marche plus en flex » recadrée.

**Ce qui a été fait** :

_Trio fragile S51 — les 3 points soldés :_

- **Point 1 — `fn` vs `fn()` (référence vs appel)** : exercice de LECTURE/diagnostic (4 lignes A→D). A/B diagnostiqués seul et juste. Piège de C repéré par moi (incohérence `addEventListener("resize", handleResize())` avec `()` vs `remove` sans `()`) → corrigé sans hésiter après signalement, reconstruit seul (add + remove même référence nommée). Repère ancré : **« la parenthèse décide du moment »** — pas de `()` = appelle plus tard / avec `()` = exécute maintenant / flèche = transporter un argument sans exécuter.
- **Point 2 — dépendances `[]` vs `[state]`** : a trouvé `[]` pour le setInterval AVEC le bon raisonnement (sinon empilement d'intervalles à chaque changement de `seconde`). Grosse question spontanée sur l'updater fonctionnel (« comment React sait que `s` = 10 ? ») → clarifié en profondeur : **la vraie valeur du state vit DANS React, pas dans la variable `seconde` (photo périmée). Forme A `setX(valeur)` = je calcule avec ma photo (risque closure) ; forme B `setX((s) => ...)` = je tends une recette, React la remplit avec SA valeur à jour.** Connexion refaite avec `.map((m) => ...)` (quelqu'un d'autre appelle ta flèche et la remplit).
- **Point 3 — arrêt d'un listener** : soldé en situation (reconstruction de C + réinvesti dans le Minuteur).

_Fin du `Minuteur` (dette d'exercice S50) :_

- **Arrêt à 0** : placement travaillé. Instinct initial « dans le corps du useEffect » → recadré : le corps en `[]` ne tourne qu'une fois (teste `10 <= 0` = faux, mort). Le test d'arrêt va **dans le callback de l'updater**, là où vit la valeur fraîche. Même leçon de placement que le nettoyage (« le code va là où vit la donnée »). Reconstruit seul en 3 essais → version finale propre (`if (x > 1) return x - 1; else { clearInterval(id); return 0; }`).
- **Distinction des DEUX arrêts (point clé enfin explicité)** : `clearInterval(id)` dans le `if` = **arrêt métier** (« j'ai fini », ma logique) ; `return () => clearInterval(id)` = **arrêt de sécurité au démontage** (« je m'en vais », React l'appelle). Les deux coexistent TOUJOURS — le nettoyage couvre le cas où le composant disparaît AVANT d'atteindre 0 (l'arrêt métier n'a pas eu lieu). Image : ceinture de sécurité vs frein.
- **2e `useEffect` pour `document.title`** (son PREMIER useEffect avec dépendance `[state]`) : a compris seul pourquoi deux effets séparés (rythmes/dépendances différents : `[]` pour l'intervalle « une fois » vs `[seconde]` pour le titre « à chaque changement ») + règle « un effet = une responsabilité ». Question fine traitée : le titre se met à jour au rythme du tic mais dépend du **changement de state**, pas de l'intervalle (le `[seconde]` est le seul fil de synchro ; l'intervalle n'est que la cause indirecte).
- **Critère du nettoyage affiné** : pas « ça se répète ou pas » (le titre se répète aussi) mais **« est-ce que ça laisse une TRACE ACTIVE qui s'accumule ? »**. setInterval/listener = trace active → nettoyage ; `document.title =` = écrase une valeur, rien d'allumé derrière → pas de nettoyage. Répondu juste seul.

_Définition posée proprement_ : **effet de bord = action qui modifie/lit quelque chose HORS du rendu React** (onglet, serveur, disque, minuteries, écouteurs). Le composant pur = données (props+state) → JSX ; l'effet « de bord » = le à-côté qui touche l'extérieur → rangé dans `useEffect`.

**Niveau estimé après session** :

- **`fn` vs `fn()`** : 🟢 — le point récurrent (S44→S51) enfin ancré via lecture/diagnostic (« la parenthèse décide du moment »).
- **Dépendances `[]` vs `[state]`** : 🟢 — vu sous les DEUX angles (intervalle en `[]` + titre en `[seconde]`). Le pourquoi de l'updater fonctionnel compris en profondeur (plus « chapeau magique »).
- **Updater fonctionnel `setX((prev) => ...)`** : 🟡→🟢 — le mécanisme « React remplit l'argument » est passé, connexion `.map` faite.
- **Fonction de nettoyage (cleanup)** : 🟡→🟢 — critère « trace active » clair, distinction arrêt métier / arrêt de sécurité explicitée. Le point flou de S50 est levé.
- **Minuteur complet (2 useEffect)** : 🟢 — dette d'exercice soldée, exemple canonique réutilisable.
- **Arrêt à 0 dans le callback de l'updater** : 🟢 (reconstruit seul).
- Recalibrage vers le haut : « je m'y suis repris à 3 fois » sur un combo arrêt métier + placement + nettoyage (3 points fragiles/neufs) = ancrage normal, PAS une galère. Se sous-note comme d'habitude.

**Restes / dettes (mises à jour)** :

- **Compte à rebours avec input** : candidat n°1 pour demain — réinvestit TOUT ce qui a été soldé aujourd'hui en autonomie sur un cas neuf.
- **`useEffect` sans fetch** (demande S49) : partiellement entamé (`document.title` = premier cas), à continuer en difficulté croissante.
- **Audit JS croisé** (décidé S51) : à garder pour un jour « cerveau frais / plus posé ».
- Version `.then` du fetch · `console.log(e)` jamais observé · JSON.stringify/parse jamais pratiqué · **TS des props (prioritaire)** · Tic-Tac-Toe version finale · `this` + POO/classes (lire, non urgent).
- Micro-tâches : Tailwind dans Vite · nettoyer `App.css` · réactiver `Ctrl+P`.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) caduques depuis le passage Vite local (S47-48).

**➡️ Prochaine session (demain, dans CETTE conversation)** : **finir les dettes React** — priorité au **compte à rebours avec input** (montée de difficulté, en autonomie, consolide à chaud tout le combo useEffect+setInterval+updater+cleanup). Ouvrir en douceur, vérifier l'énergie avant de charger (fatigue de fond signalée).

## Session 53 — Dettes React : compte à rebours avec input + persistance localStorage/JSON

**Durée** : ~2h30 (matin/journée, énergie « opérationnel » signalée en ouverture).
**Thème** : réduction de la pile de dettes (objectif assumé « statut à jour »). Deux gros exercices useEffect : compte à rebours piloté par un input, puis persistance localStorage — qui solde au passage la vieille dette JSON.stringify/parse.

**Révision éclair S53 (React — la prop `key`)** : intuition juste (id stable pour reconnaître un élément quand la liste bouge, pas l'index). Complété : la key est l'**étiquette d'identité** qui permet à React de **comparer** ancienne/nouvelle liste et ne mettre à jour que le nécessaire ; l'index décrit une **position**, pas une identité → casse quand on supprime au milieu (React associe mal, l'état interne reste collé à la mauvaise ligne). Exception index tolérée : liste jamais réordonnée/filtrée. 🟢. _(Note : rééquilibrer les prochaines révisions éclair vers la Phase 1 — CSS, JS pur, fetch, closures — à la demande de Frédéric.)_

**Ce qui a été fait** :

_Exo 1 — Compte à rebours avec input (`Minuteur2`) :_

- **Architecture posée seul** : 3 states — `valeur` (input texte), `chrono` (nombre, décompte), `on` (booléen de contrôle). La séparation input / décompte trouvée sans aide.
- **Bug n°1 (nettoyage mal placé)** : `clearInterval(id)` écrit directement sous le `setInterval` (exécuté immédiatement → intervalle tué à la naissance) → corrigé en `return () => clearInterval(id)`.
- **Bug n°2 (démarrage non maîtrisé)** : `useEffect` en `[]` → l'intervalle tournait depuis le montage sur `chrono` vide (`"" - 1 = -1`…), le clic ne faisait que réinjecter une valeur. **Erreur de ma part** : j'ai affirmé « ça ne démarre pas » sans vérifier — ça marchait, mais **par coïncidence** (architecture fragile). Reconnu et corrigé.
- **Deux corrections pro** trouvées/comprises : (1) `Number(valeur)` — `e.target.value` renvoie TOUJOURS du texte, conversion explicite obligatoire ; (2) state booléen `on` + `useEffect` en `[on]` + garde-fou `if (!on) return` → le décompte démarre **au clic** (volontaire), plus au montage.
- **Garde-fou sur la saisie** (idée de Frédéric, meilleure que mon `setOn(true)` nu) : `const duree = Number(valeur); if (duree > 0) { setChrono(duree); setOn(true); }` — validation avant lancement.
- **🆕 PIÈGE MAJEUR ANCRÉ — le state n'est pas à jour dans la même fonction** : Frédéric pensait qu'après `setChrono(...)`, la ligne suivante verrait le nouveau `chrono`. Clarifié en profondeur : `setX(...)` ne modifie PAS la variable immédiatement, il **programme un re-render** ; la variable de state est une **photo figée du rendu courant** (`const`), ne change qu'au **rendu suivant**. Donc dans une fonction, on travaille avec une **variable locale** (`duree`), jamais avec le state qu'on vient de « changer ». = même famille que le piège de closure S50, autre visage. **Point clé React, à recroiser.**
- Reconstruction complète de mémoire réussie (arrêt à 0 qui coupe l'intervalle + remet `on` à false + `return 0`). Re-clic après fin → repart (trajet `duree>0 → setOn(true) → [on] → useEffect` vérifié seul).

_Exo 2 — Persistance localStorage + JSON (`Catalogue`) :_

- **Base React** (input contrôlé + ajout immuable spread + `crypto.randomUUID()` + `.map()`/key) reconstruite de mémoire, propre. Bug : `key="m.id"` (guillemets → chaîne littérale identique partout) → corrigé `key={m.id}` (rappel JSX : `="texte"` vs `={expression}`).
- **`useEffect` de sauvegarde `[stock]`** + `JSON.stringify(stock)` : dépendance et stringify trouvés seul. Compris que `[stock]` se déclenche **au montage ET à chaque changement** (sauvegarde `"[]"` au départ).
- **Pourquoi stringify obligatoire** : `localStorage` ne stocke que du texte, et sans stringify il convertit un tableau d'objets **mal et en silence** → `"[object Object],[object Object]"` (données détruites). Pas un refus, une corruption silencieuse (rappel S37).
- **`useEffect` de chargement `[]`** : d'abord inversion `JSON.parse("montures")` (parse sur la CLÉ) → recadré : ordre `getItem(clé)` d'abord → puis `JSON.parse` sur le **texte récupéré**. Symétrie stringify (aller : objet→texte) / parse (retour : texte→objet) ancrée. Test anti-`null` `if (liste)` ajouté (getItem → null au 1er lancement → `JSON.parse(null)` → `setStock(null)` → crash `.map()`).
- **🆕 Lazy initializer `useState(() => ...)`** : ESLint a signalé « setState synchronously within an effect → cascading renders » (piège 2 anticipé : chargement `[]` → setStock → re-render → sauvegarde `[stock]`). Bénin mais Frédéric a voulu le pattern propre (posture « pas de travail bâclé »). Remplacé le 2e useEffect par `useState(() => { const liste = getItem(...); return liste ? JSON.parse(liste) : []; })` → chargement devient **valeur initiale** (calculée UNE fois au montage), plus d'effet, plus d'avertissement. Distinction `useState(valeur)` (recalculé chaque rendu) vs `useState(() => valeur)` (fonction exécutée qu'au montage) expliquée en détail + reliée au motif récurrent « passer une recette, React l'exécute au bon moment » (updater, map).

**Niveau estimé après session** :

- **Compte à rebours (3 states, garde-fou, `[on]`, arrêt à 0)** : 🟢 reconstruit de mémoire, montage inédit assemblé seul.
- **State pas à jour dans la même fonction** : 🟡 neuf, compris en profondeur après objection légitime — à recroiser (point React fondamental).
- **localStorage + JSON persistance** : 🟢 pattern complet (sauvegarde `[stock]` + chargement lazy init + symétrie stringify/parse).
- **JSON.stringify/parse** : 🟡→🟢 **DETTE SOLDÉE** — enfin drillée en contexte réel (traînait depuis S37).
- **Lazy initializer `useState(() => ...)`** : 🟡 neuf, compris (bonus), à recroiser.
- **`useEffect` + dépendance `[state]`** : 🟢 consolidé (vu `[stock]`, `[on]`, `[seconde]` sur 2 jours).
- Recalibrage vers le haut : tout reconstruit de mémoire, accrocs = étourderies de syntaxe (key en guillemets, inversion parse/clé), jamais d'incompréhension. Se sous-note (« pas sûr de moi » sur du code juste). « Compris ≠ instinctif » reformulé : l'écart avec la Phase 1 = nombre de répétitions (~12 séances React vs 35 P1), pas le niveau de compréhension.

**Restes / dettes (mises à jour)** :

- **`useEffect` + refetch sur `[search]`** (données filtrées) : candidat n°1 prochaine session — j'y glisserai la **version `.then`** à côté de l'async/await (amorce dette `.then`).
- **`setTimeout` + cleanup** : variante rapide restante.
- **Audit JS croisé** (décidé S51) : cerveau frais.
- **🆕 Audit « exercice type » (todo list, etc.)** : ajouté aux décisions de fond à la demande de Frédéric — principe à expliquer le moment venu.
- Version `.then` · `console.log(e)` jamais observé · **TS des props (prioritaire)** · Tic-Tac-Toe version finale · `this` + POO/classes (lire, non urgent).
- Micro-tâches : Tailwind dans Vite · nettoyer `App.css` · réactiver `Ctrl+P`.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) — caduques depuis le passage Vite local (S47-48).

**➡️ Prochaine session (demain, probablement)** : **finir React** — `useEffect` + refetch `[search]` (+ bonus version `.then`), puis éventuellement `setTimeout`. Ensuite, cap probable sur les **dettes anciennes**. Ouvrir en vérifiant l'énergie.

## Session 54 — Refetch [search] (client vs serveur) + lecture de `.then` (dette S49 close) + page blanche + débounce

**Durée** : ~2h (énergie bonne), + prolongation sur initiative de Fred (page blanche + débounce).
**Thème** : `useEffect` + refetch sur `[search]`, filtrage client vs serveur, lecture de `.then` (dette S49), puis reconstruction page blanche du socle fetch et auto-résolution du débounce.

**Révision éclair S54 (JS pur — `reduce` accumulateur objet)** : SORTIE ROUILLÉE. Tentative cassée (params inversés `(v, acc)`, valeur initiale `{}` oubliée, `return acc = v+1`). Ré-ancré via forme longue (`for` + `compteur[m] = (compteur[m] || 0) + 1`) puis replié dans `reduce(cb, {})`. Non retouché depuis la révision Phase 1 → 🔴 **poche à ré-entretenir**, à recroiser en révision éclair. Illustre pile la peur de fond de Fred (« oublier ce qu'on ne réactive pas ») → réponse = répétition espacée.

**Ce qui a été fait** :

_Refetch sur `[search]` — les deux mondes :_

- **Concept clé** : filtrage CLIENT (fetch une fois `[]`, `data` = TOUT, `.filter` en mémoire — cf S45) vs filtrage SERVEUR (fetch à chaque `[search]`, `data` = SEULEMENT les résultats du terme, serveur trie). Le refetch n'existe QUE côté serveur, quand `data` est volontairement partiel. Critère : petit jeu → client / données énormes (BDD) → serveur. Lien Phase 2 : future app optique + PostgreSQL = monde serveur.
- Question spontanée de Fred (« les données ne sont pas toutes dans data ? ») = pile la bonne intuition → porte d'entrée du concept.
- Exo 1 (refetch nu, 3 trous) : `[search]` + controlled input ✅. Trou URL : `?` posé après le `/`, oubli de la ressource `users` → recadré (ressource PUIS `?`).

_Gestion d'erreur (reconstruction) :_

- Exo 2 (7 trous) : 6/7 justes. Seul manqué = `setErreur(e)` → **`e.message`** (poche connue). MAIS : Fred a signalé avoir cherché longtemps le trou → calibré FRAGILE, pas acquis (voir point de fond).

_`.then` — LECTURE (dette S49 close) :_

- Pourquoi : fetch rend une Promise. `await` (attend sur place, haut→bas) vs `.then` (chaîne de maillons), même logique. 2 attentes = 2 `.then`, chaque argument rempli par le maillon précédent (motif `.map`/updater : « qqn appelle ta flèche et la remplit »). `.catch` unique en fin = remplace `try/catch`.
- **Positionnement** : async/await = standard, ce que Fred ÉCRIT ; `.then` = ce qu'il doit savoir LIRE (code ancien/docs/collègues). Objectif du jour = LIRE, pas adopter. Exception future : `Promise.all`.
- Exo de lecture (3 Q) réussi : origine de l'argument ✅, coupure réseau → `.catch` ✅, `( )` vs `{ }` ✅ (relié seul à async/await).

_Page blanche `RechercheVilles` (sur initiative de Fred, prolongation) :_

- **Socle useEffect + fetch + gestion d'erreur reconstruit FROM SCRATCH, entièrement juste.** 4 états + valeurs de départ, URL correcte (ressource avant `?` — correction du matin tenue), try/catch/finally, `!r.ok`/throw, **`setErreur(e.message)` du premier coup** (raté le matin en trou, réussi l'aprem page blanche = vrai gain), early returns dans le CORPS (pas dans le useEffect, correction S49). Vétilles cosmétiques : import `use` inutilisé (unused ESLint), `key={m.nom}` → préférer `m.id`, séparateur d'affichage.
- **Bonus non demandé** : a écrit une version `.then` de son propre chef (au-delà de la consigne « lecture seule ») — chaîne `.then((r)=>r.json()).then((d)=>setData(d))` correcte ; seule erreur `.catch(setErreur(e.message))` → **`.catch((e) => setErreur(e.message))`** = piège `fn` vs `fn()` (« la parenthèse décide du moment », S52/S47), appelé au lieu de passé. Même correction sur `.finally`.

_Débounce (auto-résolu, page blanche) :_

- Après simple mention du mot « débounce » + indice « même useEffect, réinvestit le cleanup », Fred a **écrit le pattern complet SEUL, juste du premier coup** : `const id = setTimeout(() => { ...fetch... }, 300)` + `return () => clearTimeout(id)`, `[search]`. Transfert du raisonnement setInterval→setTimeout (S50) opéré seul. Mécanisme compris (cleanup annule le timer précédent avant relance → 1 seul fetch quand la frappe s'arrête, plus la rafale). **Excellent — auto-résolution d'un concept pro découvert dans la minute.**

**Point de fond (échange important)** :

- Fred a **recadré à juste titre** ma sur-évaluation : « reconstruire un trou en galérant ≠ acquis, ≠ from scratch ». VRAI. **Calibrage acté : quand Fred peine longtemps sur un trou = FRAGILE (compris pas instinctif), le signal est l'EFFORT pas le résultat.** Symétrie : lui se sous-note, moi je surévaluais → on se recale tous les deux.
- **Inquiétude de fond** : « 3 mois, énormément appris, peur d'oublier la moitié ». Légitime/lucide. Réponse : oubli normal de ce qu'on ne réactive pas → répétition espacée (révision éclair Phase 1 rééquilibrée, S53) + audit JS croisé (S51). Pas « travailler plus ». NB : la fin de séance (page blanche + débounce auto-résolu) contredit factuellement le doute « incapable de coder seul » — à lui rappeler au besoin.

**Niveau estimé après session** :

- **Socle useEffect + fetch + gestion d'erreur** : 🟡→🟢 — page blanche réussie. Prudence maintenue (« à voir dans le temps », dixit Fred) → confirmer par recroisement.
- **`setErreur(e.message)`** : 🟡→🟢 — raté en trou le matin, réussi page blanche l'aprem. À confirmer 1×.
- **Refetch `[search]` / client vs serveur** : 🟡 neuf, compris, à recroiser.
- **Débounce (setTimeout + cleanup sur `[search]`)** : 🟡→🟢 pour le pattern (auto-résolu, mécanisme compris). Neuf → recroiser 1× pour l'instinct.
- **Lire `.then`** : 🟢 lecture ; **écrire `.then`** : 🟡 tenté seul, chaîne juste, piège `fn()` sur `.catch`/`.finally` → à confirmer.
- **`fn` vs `fn()` (parenthèse = moment)** : recroisé (ressorti dans le `.catch`), 🟢 mais éternel classique à surveiller.
- **`reduce` objet** : 🔴 poche réactivée, à ré-entretenir.

**Restes / dettes (mises à jour)** :

- **Débounce** : ✅ introduit et auto-résolu ce jour (retiré des dettes). À recroiser 1× pour confirmer.
- **`Promise.all`** (fetchs parallèles) : seul cas où `.then` reste pertinent, noté.
- **Audit JS croisé** (S51) : prioritaire — répond à la peur « oublier la moitié ». Candidat séance cerveau frais.
- **`reduce` objet** + méthodes de tableau : à faire tourner en révision éclair (poches Phase 1).
- `console.log(e)` jamais observé · **TS des props (prioritaire)** · Tic-Tac-Toe version finale · `this` + POO/classes (lire, non urgent).
- Micro-tâches : Tailwind dans Vite · nettoyer `App.css` · réactiver `Ctrl+P`.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) — caduques depuis le passage Vite local (S47-48).

**➡️ Prochaine session** : au choix — (1) **audit JS croisé** (séance cerveau frais, répond à la peur de fond, de plus en plus prioritaire) ; (2) **TS des props** (dette ancienne prioritaire) ; (3) consolider `.then` en écriture + confirmer débounce/socle fetch par recroisement. Ouvrir en vérifiant l'énergie.

## Session 55 — Dimanche : clôture useEffect (mini-exam) + famille fetch/Promise (.then écriture, objet vs tableau, throw, console.log(e))

**Durée** : ~3h (dimanche, frais, énergie pleine signalée en ouverture). Séance dense et productive : verrouillage useEffect + grosse réduction de la pile de dettes React chaudes.

**Révision éclair S55 (CSS — flexbox centrage + espacement)** : `justify-content: center` (horizontal) sorti seul ; `align-items: center` (vertical) NON ressorti (moitié de la réponse manquante) → recadré via le mémo « justify suit l'axe principal » (déduction, pas par-cœur). Écart entre cartes : a proposé `padding` → recadré vers **`gap: 20px`** (padding = intérieur + bords parasites ; gap = uniquement entre éléments, flex/grid only). Poche paire justify/align + gap/padding : entretenue puis **DÉCOCHÉE à la demande de Fred** (se sent à l'aise, croisé souvent). 🟢

**Ce qui a été fait** :

_Choix stratégique d'ouverture (par Fred)_ : finir `useEffect` (clôturer un domaine ouvert) AVANT d'ouvrir TS des props (notion neuve) ou l'audit JS (risque de rallonger la liste). Priorité « réduire les dettes chaudes » — excellent réflexe, trouvé seul.

_Clôture `useEffect` sans fetch :_

- **`useEffect` + localStorage sync** (`ThemeBoutique`, page blanche) : pattern `[dark]` + `setItem`. **Point de fond neuf ancré — cohérence de type d'un state** : `getItem` renvoie une CHAÎNE, jamais un booléen → un state doit garder UN SEUL type. Solution : lazy init `=== "sombre"` (→ booléen) + reconversion booléen→texte à la sauvegarde. Bug corrigé : `setItem(theme)` un seul arg → `setItem("theme", theme)`. + cohérence casse écrit/relu (bug silencieux si majuscule d'un côté, minuscule de l'autre).
- **`useEffect` + addEventListener resize** (`LargeurFenetre`, à trous) : listener + cleanup en contexte neuf. Bug instructif : `setLargeur(useState(...))` → **on n'appelle JAMAIS un hook dans un handler** ; `window.innerWidth` seul suffit (c'est déjà un nombre). Repère : `useState` CRÉE (une fois, en haut) / `setX` MODIFIE (partout). Question `[]` vs `[state]` : réponse juste (le listener écoute en continu, on le pose une fois).

_🎓 MINI-EXAM useEffect (idée de Fred : « exercice certifiant, mini-exam ») :_

- `TableauDeBordBoutique`, page 100% blanche, niveau costaud (3 states + 2 useEffect + dépendance + cleanup + localStorage + cohérence de type). **UN SEUL vrai bug** = cleanup avec `addEventListener` au lieu de `removeEventListener` (étourderie de copie, la référence nommée `handleResize` était juste des 2 côtés — le point dur maîtrisé). + point pro : déclarer `handleResize` DANS le useEffect (responsabilité unique) → adopté.
- **Fred a lui-même relativisé** : « exam plus simple que prévu car indices dans les consignes → je n'avais qu'à recâbler ». Calibrage juste et honnête : assemblage réussi de mémoire AVEC garde-fous ≠ from scratch total sans filet. Statut acté : **useEffect = reconstructible, passe en MODE ENTRETIEN** (révision espacée), pas « fini pour toujours ». Domaine VERROUILLÉ. 🔒

_Famille fetch/Promise (multi-clôture, protocole proposé par Fred : page blanche async/await PUIS `.then` en dessous, sans indices) :_

- **`CarteClient` async/await, 3e passage page blanche sans indices** : structure ENTIÈREMENT juste (states, try/catch/finally, !ok/throw, err.message, early returns, `[]`). 🟢 **CONFIRMÉ SOLIDE — la mémoire répond seule** (l'objectif que Fred cherchait à mesurer). Seul « bug » = **objet vs tableau** : avait mis `useState([])` + `.map()` pour UN client (endpoint singulier → objet) → recadré : liste N éléments = `useState([])` + `.map` / objet unique = `useState(null)` + accès direct `data.champ` + early return `if (!data)`. La valeur de départ découle de la FORME de la donnée.
- **`.then` en écriture (2e contact)** : chaîne juste. **Piège `fn()` d'hier CORRIGÉ** (`.catch((err) => ...)` avec la flèche, plus `.catch(setErreur(...))`). Erreurs traversées : `;` entre les maillons (casse la chaîne — une chaîne = UNE expression continue, un seul `;` final) ; tentative `throw` dans un ternaire → **règle de fond ancrée : `throw` est une INSTRUCTION (agit, ne vaut rien), interdite dans un ternaire (qui attend une EXPRESSION) → toujours dans un `if` + bloc `{ }`**. `if (!r.ok) throw ...` dans un `.then` saute au `.catch` (= le try/catch transplanté).
- **`console.log(e)` observé + compris (dette fermée)** : objet erreur ENTIER (type + message + stack trace = chemin/lignes du plantage) = outil du DÉVELOPPEUR pour enquêter ; `err.message` (texte nu) = ce qu'on montre à l'UTILISATEUR (dans setErreur). Repère : objet entier → console/debug, `.message` → écran. Nuance : `message`/`name` non énumérables (pas dans `{...err}`/JSON).

**Niveau estimé après session** :

- **useEffect (tous cas : dépendance, cleanup, localStorage, listener)** : 🟢 reconstructible (mini-exam page blanche réussi) → MODE ENTRETIEN.
- **async/await fetch from scratch** : 🟢 confirmé solide (3e passage sans indices, mémoire autonome).
- **`.then` en écriture** : 🟡→🟢 chaîne maîtrisée (piège fn() corrigé, `;` et throw/if ancrés). Emballage en composant complet = connu (V1 le prouve).
- **cohérence de type d'un state** : 🟡 neuf, compris — à recroiser.
- **objet vs tableau (valeur de départ selon la donnée)** : 🟡 neuf, ancré par le bug — à recroiser.
- **`throw` = instruction, jamais dans un ternaire** : 🟡 neuf, ancré — à recroiser.
- **console.log(e) objet vs .message** : 🟢 compris.
- Recalibrage : Fred relativise justement ses réussites (exam « facile », « pas relu ») — reste que async/await sort seul en 3e passage = solide mesuré.

**Restes / dettes (mises à jour)** :

- ✅ SOLDÉ aujourd'hui : useEffect sans fetch (bouclé), `.then` écriture (consolidé), `console.log(e)` (fermé), débounce (déjà confirmé S54).
- **`Promise.all`** (fetchs parallèles) : NON fait — prévu en bonus mais manque de temps. Notion NEUVE, à enseigner (pas de page blanche). Candidat ouverture prochaine séance.
- **TS des props** : 🔴 PRIORITAIRE — notion neuve complète, mérite un DÉBUT de séance frais dédié (Fred veut clôturer avant d'ouvrir → c'est le prochain gros cap).
- **Tic-Tac-Toe version finale** (`currentMove`, modulo, slice à arguments, 2e arg de `.map()`) : à reprendre — Fred a signalé que « voyager dans le temps » l'avait largué (concept mal compris, pas juste syntaxe). Mérite du calme.
- **Audit JS croisé** (S51) : répond à la peur de fond « oublier la moitié ». Séance cerveau frais.
- Poches à ré-entretenir : **`reduce` objet** 🔴 (rouillé S54) · méthodes de tableau (rotation) · cohérence de type / objet-vs-tableau / throw-if (les 3 neufs du jour).
- Tier 2 non urgent : `this` · POO/classes JS (lire).
- Micro-tâches : Tailwind dans Vite · nettoyer `App.css` · réactiver `Ctrl+P`.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) — caduques depuis Vite local (S47-48).

**➡️ Prochaine session** : au choix — (1) **`Promise.all`** en ouverture (neuf, court) puis enchaîner ; (2) **TS des props** (gros cap prioritaire, début de séance frais) ; (3) **Tic-Tac-Toe version finale** (reprise au calme d'un concept mal digéré). Ouvrir en vérifiant l'énergie.

## Session 56 — Dettes React : reduce objet (ré-entretien) + Promise.all + Tic-Tac-Toe version finale

**Durée** : ~2h. Objectif tenu : clôturer des notions anciennes AVANT d'ouvrir du neuf (TS des props volontairement repoussé — règle "on ferme avant d'ouvrir", décision de Fred).
**Thème** : réduction de dettes — poche `reduce` objet rouillée, puis `Promise.all` (neuf, enseigné), puis reprise au calme du "voyage dans le temps" du Tic-Tac-Toe (concept mal digéré depuis S46).

**Révision éclair S56 (reduce accumulateur objet — poche 🔴 S54)** : sortie à froid encore cassée (`.map` au lieu de `reduce`, concaténation de texte au lieu de comptage). MAIS 2 réflexes revenus seuls : le `{}` en 2e arg et le `return acc`. Cours complet redonné en forme longue (`for` + `compteur[m.marque] = (compteur[m.marque] || 0) + 1`) puis replié en `reduce`. **Vrai déblocage = les crochets** : Fred butait sur `[m.marque]` → clarifié la confusion empilée `[index]` sur TABLEAU (position) vs `["clé"]` sur OBJET (nom de propriété calculé dynamiquement, = `objet.clé` mais avec une clé variable). Distinction actée nette. 🟡 poche réactivée, à recroiser 1×.

**Ce qui a été fait** :

_Promise.all (neuf, enseigné — pas de page blanche) :_

- Le pourquoi : 3 fetchs séquentiels = somme des attentes (~600ms) ; en parallèle = le plus lent (~200ms). `await` attend sur place → le séquentiel fait la queue à 3 guichets pour rien.
- Syntaxe : `const [a, b] = await Promise.all([fetch(...), fetch(...)])`. Bien séparé les 2 `[]` : à DROITE dans `Promise.all([...])` = tableau de promesses (argument unique) ; à GAUCHE = déstructuration par position. Résultats rendus dans l'ordre des promesses (garanti).
- Pattern à 2 niveaux : 1er `Promise.all` pour les réponses, 2e pour les `.json()`.
- Gestion d'erreur (question spontanée de Fred) : même try/catch/finally + `!res.ok`/throw que d'hab, mais tester le `.ok` de CHAQUE réponse. Point clé : `Promise.all` = "tout ou rien" (une seule échoue → saut au catch, aucun résultat). `fetch` ne voit pas un 404 comme une erreur → le `!ok`/throw reste à notre charge.
- Exo guidé (1 trou) : structure juste. Doute levé : on ne nomme PAS dans le tableau de droite (`client = resClient.json()` ❌), le nommage se fait à gauche par position. Fred a flaggé lui-même le doute = bon instinct.
- Questions de fond traitées : pourquoi `[]` dans les `()` (→ parenthèses = appel de fonction / crochets = l'argument est un tableau, contenant naturel d'un nombre variable d'éléments) ; `allSettled` vs `all` (→ dépendance : interdépendants = `all` tout-ou-rien / indépendants = `allSettled` attend tout le monde). `allSettled` juste de nom, non drillé.

_Tic-Tac-Toe version finale (reprise concept, au calme) :_

- Rappel acquis S46 : lifting state up déjà compris (state dans Game, Board reçoit le plateau en prop). Ce qui avait largué = la couche historique cliquable.
- **Changement de mentalité** : on ne stocke plus "le plateau courant" mais `history` = TOUS les plateaux (tableau de tableaux). `useState([Array(9).fill(null)])`. Ajout immuable à chaque coup (`[...history, nouveau]`, pattern S43 avec des plateaux comme éléments).
- **`currentMove` = curseur/marque-page** (un simple index, PAS un plateau). Image livre (history) + marque-page (currentMove) → passée nette. `currentSquares = history[currentMove]`.
- **`xIsNext = currentMove % 2 === 0`** = donnée dérivée, PAS un state (rappel S45/S46 "ne pas stocker ce qui se recalcule"). `%` (modulo) = reste de division, `n % 2` vaut 0 (pair) ou 1 (impair) = test pair/impair standard. Avantage : se recorrige seul au voyage dans le temps (une seule source de vérité = currentMove).
- **`slice(0, currentMove + 1)`** = LE morceau dur. `slice(début, fin)` avec fin EXCLUE → le `+1` compense pour inclure le plateau courant. Rôle : jeter le "futur périmé" quand on rejoue après un retour arrière (nouvelle branche). Bien distingué du `slice()` sans arg (copie, S46). Pourquoi slice et pas mutation : `history` est un state → slice fabrique un tableau neuf (jamais muter, rappel shallow S41). A demandé plusieurs passes + chiffres concrets ; erreur intermédiaire ("P2 remplacé" avec currentMove=1) recadrée → a fini par acter juste : currentMove pointe le plateau GARDÉ (inclus), tout ce qui suit est jeté.
- **`jumpTo(move)` = `setCurrentMove(move)`** : voyager = juste déplacer le marque-page ; tout le reste (plateau affiché + tour) en découle.
- **2e argument de `.map()`** : `history.map((squares, move) => ...)` → `move` = l'index. Ici on IGNORE l'élément (`squares`) et on se sert de l'index (position = n° de coup). Fred a trouvé le pourquoi seul. `onClick={() => jumpTo(move)}` (flèche inline transporte l'argument, S44). `key={move}` = cas légitime d'index en key (historique jamais réordonné, exception S53).

**Niveau estimé après session** :

- **`reduce` objet** : 🟡 poche réactivée (crochets dynamiques = le déblocage). À recroiser en révision éclair.
- **Crochets `[index]` tableau vs `["clé"]` objet** : 🟢 distinction reposée nette.
- **`Promise.all`** : 🟡 neuf, pattern compris (parallèle, tout-ou-rien, nommage à gauche). À recroiser, + emballage en composant complet un autre jour.
- **`allSettled`** : connu de nom seulement.
- **Tic-Tac-Toe / voyage dans le temps (`currentMove`, `%`, `slice` à args, 2e arg map)** : 🟡 concept enfin digéré (largué en S46). À recroiser — le `slice(0, move+1)` a demandé plusieurs passes, le recroiser en priorité.
- Recalibrage vers le haut : a tenu 2 notions denses en 2h avec des questions de fond (les 2 `[]`, allSettled, borne exclue du slice) — se sous-note en fin de parcours (a trouvé le 2e arg de map seul mais dit "je ne sais pas").

**🎹 Raccourci de la semaine** : `F12` (Aller à la définition) + `Alt+←` (revenir). Pertinent avec le multi-fichiers. `Ctrl+P` = acquis (retiré). App.css = nettoyé (retiré).

**Restes / dettes (mises à jour)** :

- ✅ Soldé/traité aujourd'hui : `Promise.all` (introduit), Tic-Tac-Toe version finale (concept repris), `reduce` objet (réactivé).
- **TS des props** : 🔴 PRIORITAIRE — le prochain gros cap, notion neuve, début de séance frais dédié. Rebranche TypeScript (pas touché depuis S38).
- **Audit JS croisé** (S51) : répond à la peur "oublier la moitié". Séance cerveau frais.
- **Audit "exercice type"** (todo list…) : principe à expliquer (S53).
- Poches à ré-entretenir : **`reduce` objet** (recroiser) · méthodes de tableau (rotation) · cohérence de type / objet-vs-tableau / throw-if (neufs S55).
- `Promise.all` à recroiser (composant complet) · `slice` à args à recroiser en priorité.
- Tier 2 non urgent : `this` · POO/classes JS (lire).**❌ Pas abordé** : `sort()` avec comparateur
- Micro-tâches : Tailwind dans Vite.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) — caduques depuis Vite local (S47-48).

**➡️ Prochaine session** : cap sur **TS des props** (gros morceau prioritaire, notion neuve, cerveau frais) OU **audit JS croisé** (répond à la peur de fond). Ouvrir en vérifiant l'énergie. Recroiser `slice(0, move+1)` et `reduce` objet en révision éclair quand l'occasion se présente.

## Session Mise à jour des instructions / fichiers (pas d'apprentissage, seulement de la gestion de projet)

**mise à jour des instructions** : Avec l'aide de Claude. Intemporelle sauf §7.
**création de fichier** : PDF roadmap, revision.md, ArchivePhase1.md et Liste des projets consultable au besoin.

## Session 57 — Audit croisé + registre des dettes du socle

**Durée** : ~1h. Séance de cartographie, pas de code.
**Thème** : croiser le parcours réel avec des référentiels externes pour rendre la liste des manques finie et contrôlable.
**Révision éclair** : fondue dans l'audit (auto-codage de 22 notions JS = récupération à froid).

**Ce qui a été fait** :

- 3 référentiels externes récupérés : javascript.info (Part 1), roadmap.sh JavaScript, roadmap.sh Full-Stack.
- **Recadrage de Frédéric (juste)** : l'audit croisé, c'est à Claude de faire le rapprochement parcours ↔ référentiels, pas à lui de s'auto-coder ligne par ligne.
- 2 livrables : `audit-croise.md` (profil complet) + `dettes-apprentissage-socle.md` (HTML/CSS/Tailwind/JS).

**Ce que l'audit a révélé** :

- Trous invisibles dans mon suivi : `switch`, `break`/`continue`, **hoisting** (symptôme connu, mécanisme jamais nommé), coercion.
- **Notion neuve structurante — dette de type A (trou) vs type B (entretien)** : une notion apprise puis non réactivée redevient une dette invisible, le journal la garde marquée « acquise ».
- **Dettes silencieuses révélées** : `fetch` POST + `FormData` (dernière activation S35, ~1 mois) · `IntersectionObserver` (S30) · `Object.values` / `for...in` / `toLocaleString` (blocs C-D).
- **7 marqueurs « il sait »** : 6 manquent (tests, branches Git/PR, TS réel, a11y, sécurité, architecture/README) ; le 7e — expliquer ses choix — est déjà acquis et rare.

**Top 3 dettes prioritaires** : (1) `reduce` objet — seule cassée 2× à froid ; (2) CSS Grid placement — la plus ancienne, 2 réactivations sans ancrage ; (3) `fetch` POST/`FormData`.

**Vérification faite** : aucune dette du socle n'est un prérequis React (contrôlé ligne à ligne). Le Tier 1 fermé en S38 + 15 séances React le confirment.

**Plan acté** : ~8h en 5 séances (micro-notions · projet CSS Grid · modèle mental JS · audit a11y · event loop), **à intercaler dans la Phase 2, jamais en bloc**. `this` + classes → avant Phase 3. Récursion → créneau algo. Dates + regex → tissés dans le SaaS.

**📌 Gros trous du socle — séance dédiée à caler (en attente, sans urgence)**

Trous de type A identifiés en S57, non intégrables en cours de séance : chacun demande un créneau à part.

- **CSS Grid — placement** (~1 séance, idéalement un projet catalogue optique en Grid pur qui absorbe aussi `@keyframes`, `::before` et `rem`) — la dette la plus ancienne du socle (08/06), 2 réactivations sans ancrage.
- **`@keyframes` / animations CSS** (~1 séance, ou fondu dans le projet Grid ci-dessus).
- **Accessibilité** (~1h30, méthode audit : Lighthouse + navigation clavier sur le portfolio existant, pas un cours).
- **Modèle mental JS : coercion + hoisting** (~1h30, méthode prédiction → exécution → explication de l'écart).
- **Event loop** (~1h, à faire après la séance coercion/hoisting).
- **Dates** (`Date`, formatage, calculs) (~1 séance) — remontera de toute façon avec le SaaS optique (ordonnances, commandes, garanties).
- **Regex — bases** (~1 séance) — arrivera avec la validation de formulaires.
- **`this` + classes JS** (~2 séances) — ⏳ à caler **avant la Phase 3 Python**, pas avant. Aucun impact sur React fonctionnel.
  \_Total ~8h hors `this`/classes.

**➡️ Prochaine session** : **TS des props** (cap inchangé). Alternative : salve micro-notions (~1h, solde 10 lignes du registre).

## Session 58 — Séance outillage : installation de TypeScript dans Vite (+ cours TS des props, non pratiqué)

**Durée** : ~3h30. Séance qui a dérapé sur l'outillage : partie pour TS des props, terminée en installation TypeScript. Objectif initial NON atteint.
**Thème** : cours théorique TS des props, puis installation de TypeScript dans `projet-vite-local` — qui a viré en apprentissage de la recherche de doc officielle.

**Révision éclair S58 (`slice(0, currentMove + 1)` — Tic-Tac-Toe, 🔴 S56)** : **NON RECONSTRUIT**. Fred a signalé honnêtement ne pas avoir assez d'éléments. Ce qui tenait : `slice(départ, fin exclue)` ✅, structure de `history` ✅, l'existence d'un `length - 1` ✅. Ce qui était faux : « `currentMove` = index + 1 » → **non, `currentMove` EST l'index** ; le `+1` appartient uniquement au `slice` (compense la borne exclue). Deux notions fusionnées en une. Le `length - 1` appartient à `setCurrentMove(nextHistory.length - 1)` (ligne suivante) — bon morceau, mauvais endroit. → reste 🔴, remis en rotation, à recroiser à froid dans quelques séances.

**Ce qui a été fait** :

_Cours TS des props (théorie seule, AUCUN exercice) :_

- Le pourquoi : 3 bugs invisibles en JS pur (faute de frappe sur un nom de prop → `undefined` silencieux ; mauvais type `prix="129"` → concaténation au lieu d'addition ; prop oubliée → crash runtime). TS les remonte à l'écriture. Bénéfice bonus = autocomplétion des props.
- Syntaxe en 3 marches (méthode forme longue → DRY) : (1) `function C(props: { marque: string; prix: number })` = simple annotation de paramètre, rien de neuf vs S36 ; (2) type sorti en `interface CMonture Props` (convention `XProps`, PascalCase) ; (3) version finale `function C({ marque, prix }: CProps)`.
- **Piège central signalé** : l'annotation se pose APRÈS l'accolade fermante, sur le paramètre entier. `{ marque: string }` ❌ = renommage de déstructuration (S37), pas du typage. Boussole = la position du `:`.
- À savoir lire, pas écrire : `type Props = {}` et `React.FC<Props>` (obsolète).
- ⚠️ **Statut : cours reçu, ZÉRO exercice → ne compte pas comme acquis.**

_Installation TypeScript dans `projet-vite-local` (le vrai contenu de la séance) :_

- `npm install -D typescript @types/react @types/react-dom` → 2 paquets ajoutés seulement (les `@types` étaient déjà posés par Vite même en template JS). `-D` justifié : outils d'atelier, absents du bundle envoyé au navigateur.
- **Ce qu'installent réellement les `@types/`** : aucun code exécutable, uniquement des fichiers `.d.ts` = descriptions lisibles par la machine. Séparés du paquet React parce que React est écrit en JS ; une lib écrite en TS livre ses types directement.
- **Les 3 `tsconfig` (découverte de la séance)** : `tsconfig.json` = aiguilleur quasi vide / `tsconfig.app.json` = le code de `src/` (tourne dans le NAVIGATEUR, a `document`/`window`) / `tsconfig.node.json` = les fichiers de config (tourne dans NODE). Deux mondes d'exécution ≠ un seul jeu de règles. Seul `tsconfig.app.json` compte au quotidien.
- **Point Vite ancré** : Vite transpile les `.ts` mais ne VÉRIFIE PAS les types (page Features → TypeScript). Le rouge vient de VS Code, pas du serveur. D'où `tsc --noEmit` en complément, et d'où l'installation du paquet `typescript` (pour disposer de `tsc`).
- Test de validation : `const prix: number = "129"` → `ts(2322) Type 'string' is not assignable to type 'number'` ✅ TS opérationnel.

_🎯 LE VRAI APPRENTISSAGE — trouver et qualifier la doc officielle :_

- **Erreur de ma part, à l'origine du dérapage** : j'ai livré un `tsconfig.json` complet **reconstruit de mémoire**, présenté comme une procédure établie, sans dire que ça ne venait d'aucune source. Fred a demandé 3× d'où ça sortait ; j'ai répondu par de nouvelles procédures au lieu de dire « de ma mémoire ». Il a cherché la source d'un texte qui n'en avait pas. **Bonus : ma version était périmée (1 fichier au lieu de 3) — c'est SA démarche qui m'a corrigé.**
- **Répartition des docs comprise** : typescriptlang.org = le langage, option par option (dictionnaire, à consulter APRÈS) · react.dev = les paquets + 2 options obligatoires (`dom` dans `lib`, `jsx` défini) · vite.dev = ce que Vite fait/ne fait pas de tes `.ts`. **Aucune ne donne le `tsconfig` complet** — trou réel de l'écosystème, pas un échec de recherche.
- **🆕 RÈGLE DE MÉTIER ANCRÉE : quand une doc renvoie vers son starter, le CODE du starter EST la documentation.** Source officielle du `tsconfig` = `github.com/vitejs/vite` → `packages/create-vite/template-react-ts/`. Lisible en ligne, versionné, à jour. Aller lire le code source officiel n'est pas un contournement.
- Piège traversé : `awesome-vite` (liste communautaire de templates tiers) ≠ le dépôt `vitejs/vite`. Repère = l'URL + on navigue dans l'arborescence, pas dans un README. `Ctrl+F` inopérant sur GitHub (chargement dynamique) → utiliser la recherche du dépôt (touche `t`).
- Confirmé : `npm create vite@latest` propose la variante TS **au démarrage seulement** ; aucune commande n'ajoute TS à un projet Vite existant → reconstitution manuelle obligatoire.

**Ce qui a accroché** :

- Séance vécue comme pénible et confuse (agacement légitime exprimé). **Cause = moi**, pas la difficulté : 3 méthodes contradictoires livrées en 3 messages sans jamais dire laquelle suivre, sur fond d'une info inventée présentée comme sourcée.
- **Exigence reformulée par Fred, à respecter strictement** : « je veux savoir, pas recopier — être capable d'appliquer seul au besoin ». Corollaire opérationnel : **toujours annoncer la nature de ce que je livre** (source vérifiée vs reconstruction de mémoire).

**Niveau estimé après session** :

- **Installation TypeScript dans un projet Vite existant** : 🟢 faite et validée par test.
- **Rôle des 3 `tsconfig` / `@types` / Vite ne vérifie pas les types** : 🟢 compris.
- **Méthode « remonter à la doc officielle + qualifier la source »** : 🟢 acquis en conditions réelles et douloureuses — la vraie compétence de la journée, transférable à tout outil.
- **TS des props** : 🔴 **INCHANGÉ** — cours théorique reçu, aucun exercice, aucune ligne écrite. Reste le cap n°1.
- **`slice(0, move + 1)`** : 🔴 non reconstruit à froid, remis en rotation.
- Recalibrage : a tenu 3h30 sur une séance frustrante sans lâcher, et a fini par trouver la source officielle par lui-même. La ténacité vaut la notion.

**Restes / dettes (mises à jour)** :

- 📌 **Commiter + pusher** l'installation TS (rituel deux machines — le fixe devra faire `git pull` + `npm install`).
- **TS des props** : 🔴 PRIORITAIRE, en tête de pile depuis la S44 (~15 sessions). Cours fait, exercice à faire.
- **Tailwind dans Vite** : programmé pour la prochaine séance (dette S48). ⚠️ Architecture `src/input.css` + `dist/output.css` de la Phase 1 **NON transposable** (c'était le mode CLI `--watch`) — l'intégration Vite passe par un plugin.
- Poches à ré-entretenir : `slice(0, move+1)` 🔴 · `reduce` objet 🟡 · méthodes de tableau (rotation) · cohérence de type / objet-vs-tableau / throw-if (S55).
- `Promise.all` en composant complet · Audit « exercice type » (S53) · Tier 2 non urgent : `this` · POO/classes.
- Gros trous du socle (S57) : CSS Grid + `@keyframes` · a11y · coercion/hoisting · event loop · dates · regex.

**🎹 Raccourci de la semaine** : `F12` (Go to Definition) + `Alt+←` (Go Back) — inchangé, non entraîné cette séance.

**➡️ Prochaine session** : (1) **Tailwind dans Vite** en ouverture, en autonomie sur la doc officielle Tailwind — time-box 45 min, appeler à l'aide si ça déborde (piège de version probable) ; (2) **TS des props POUR DE VRAI** sur le reste de la séance : exercice guidé, squelette + un seul trou, univers optique. Ne pas enchaîner une 3e séance d'outillage d'affilée.

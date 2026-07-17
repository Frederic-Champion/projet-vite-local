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

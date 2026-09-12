# 📓 Journal de progression — Phase 2

**État arrêté à la Session 93 · 9 septembre 2026 · ~285h de formation**

> ⚖️ **Temporalité** : le §7 des instructions porte la carte de niveau par domaine, **datée S93**. Ce journal ne la redouble pas — il la **corrige au fil des séances**. En cas de divergence, **la source la plus récente fait foi** : une entrée de session postérieure prime sur le §7, sans qu'il soit nécessaire de réécrire les instructions.

> **Documents de référence** — `Archive-progression-Phase2-bis.md` (S60→S88) · `Archive-progression-Phase2.md` (S36→S59) · `Archive-progression-Phase1.md` (S1→S35) · `dettes-apprentissage-socle.md` (registre HTML/CSS/Tailwind/JS — ⚠️ **daté S65, à refondre**) · `audit-croise.md` (cap métier) · `revision.md` (mesures fin Phase 1) · « Projets réalisés ».
> Les archives sont consultables directement : pour tout détail sur une séance ou une notion antérieure à la S89, aller les lire plutôt que reconstruire de mémoire.

---

## 🧭 Où on en est — Phase 2

**Séquence Phase 2** : React ✅ → TypeScript des props ✅ → React Router (mode Declarative) ✅ → **Next.js (cap ouvert, prochain gros bloc)** → PostgreSQL / Prisma / Supabase → authentification → livrable SaaS optique déployé.

**Ce qui vient d'être fermé** : **React Router mode Declarative**, ouvert en S67, complet en S93 après 9 séances. Montage, `path`/`to`, `<Link>` vs `<button>`, `useParams` et le trajet de la donnée par l'URL, routes imbriquées + `<Outlet>` + `index`, 404, `useNavigate` + `replace`, `<Navigate />`, `useLocation` + `state`, `NavLink`. Passe en **mode entretien**, par rotation de révision éclair (voir plus bas).

**Ce qui est terminé côté projets** : calculatrice (machine à états, page blanche S78) · CV Application Odin (lifting state up, mode édition, state objet, S79→S88).

**Domaines verrouillés 🔒 (mode entretien, ne pas réenseigner)** : `useEffect` (S55) · socle fetch async/await (S90, intact en page blanche) · TS des props (S64).
⚠️ Le verrou `useEffect` porte sur le **mécanisme**, pas sur les APIs navigateur qu'on y branche — celles-là s'oublient (cas `setInterval`, S92).

---

## 🔥 Dettes chaudes

_Ce ne sont plus des notions incomprises, mais des **règles sues qui ne se déclenchent pas au clavier**. Le remède est la pratique en contexte, pas le réenseignement._

**Réflexes non déclenchés à l'écriture**

- **Union de valeurs sur une prop optionnelle** 🔴 — `type?: string` accepte n'importe quoi ; la notion est acquise depuis S80, le réflexe absent (S90).
- **`Record<A, B>`** 🔴 — la **virgule** sépare deux tiroirs, l'**union** vit dedans. Confusion avec `Omit<X, "a" | "b">`, accrochée S86 et retombée S90.
- **Annotation portée sur ce qui est extrait au lieu de ce qui arrive** 🟡 — `({ isActive }: boolean)`. La déstructuration ne change pas ce qui est reçu (S93).
- **Conversions aux frontières** 🔴 — `Number()` à l'entrée, `String()` à la sortie. Acquis sur la calculatrice, non transféré (S88).
- **Déstructuration de tableau** 🟡 — connue, remplacée par un accès par index (S88).

**Familles récurrentes à surveiller**

- **Contrat `void` / setter mal placé / `return` nu** 🔴 — 5 occurrences (S64, S67, S71, S74, S84), plus les `return` nus de S78, S89 et S90. Le setter va **dans** une fonction appelée par un événement · une fonction utilitaire renvoie · un `return` nu laisse une branche silencieuse. **Exception acquise S93** : dans un effet, le `return` nu est légitime.
- **`useParams` — correspondance `path` ↔ déstructuration** 🟡 — cassée en révision de sortie S90.

**Neuf, un seul passage — ne pas surévaluer**

- **`as`** (assertion, S93) 🟡 · **nettoyage du `state` d'historique** 🟡 (exige la copie dans un `useState` d'abord).
- **`useLocation` + `pathname`** 🟡 (2 usages).

**Jamais pratiqué malgré la procédure**

- **Debugger Chrome** 🔴 — procédure donnée S73, jamais repratiquée. Réflexe à installer.

---

## 📋 File d'attente des notions repoussées

_Liste **complète**, triée par importance. Elle traînait recopiée à l'identique depuis la S73 sans jamais bouger — le tri lui rend son utilité. À croiser avec `dettes-apprentissage-socle.md` lors de sa refonte._

### 🔴 Groupe 1 — prérequis réels de la suite (à programmer)

- **`children`** — montré en passant S68, jamais enseigné. **Arrive mécaniquement avec les layouts Next.js.** À poser avant, pas pendant.
- **`useRef`** (+ `IntersectionObserver` version React) — mentionné S72 et S85. Séance dédiée déjà identifiée ; bloque la version React de l'observer, qui est un morceau du socle Phase 1 non transposé.
- **Exercices de typage TS réguliers** — demande explicite S86. Ce n'est pas une dette à solder mais un axe de travail continu, à glisser dans les séances.
- **Git branches + workflow Pull Request** — ❌ depuis le début, **non négociable avant candidature** (rappelé S81). Séance dédiée.
- **Utility types au-delà des quatre** — décision S81/S86 : **en lecture uniquement**, avant la phase de candidature.

### 🟡 Groupe 2 — confort différable (ne pas encombrer l'ouverture de séance)

- `<table>` — souhait exprimé S70, jamais recroisé. À caler sur un exercice à vraies données tabulaires.
- `useReducer` — mentionné S82 et S85 comme hors périmètre.
- `useMemo` / `useCallback` / `React.memo` (+ **React Compiler**, à réévaluer une fois ces trois vus).
- Types fonction dans une interface au-delà de `() => void` (avec paramètres et valeur de retour) — demandé S72.
- `unknown` / `instanceof` — donnés via Quick Fix S90, non enseignés.
- `peer` (Tailwind) — mentionné S87.
- Hoisting — mentionné S72.
- Context API · custom hooks.
- `@keyframes` · CSS d'impression (`@media print` / `print:`) — écarté volontairement S88, réservé à un autre projet.

### 🗑️ Item mort — à retirer

- **« Projet CSS Grid, dette n°1 du socle »** — recopié depuis S73, mais le **placement Grid a été soldé S74→S78** (`col-span`, `row-span`, `auto-rows`, la case dimensionne l'élément). L'item n'a plus d'objet.

---

## 🔄 Rotation de révision éclair active

Tirage pondéré, **jamais sur le sujet du jour**. Une révision éclair est une **question** à laquelle on répond de mémoire, pas un exercice de construction (leçon S92 : 25 min consommées sur 120).

### 🆕 React Router Declarative — entre en rotation (décision S93)

Inventaire à répartir sur plusieurs séances, un point à la fois :

1. **Montage et structure** — paquet `react-router`, `BrowserRouter` dans `StrictMode`, un seul `<Routes>`, ce qui doit survivre à la navigation vit au-dessus.
2. **`path` vs `to`** — motif d'URL inventé vs adresse réelle, `/` absolu, minuscules.
3. **`<Link>` vs `<button>`** — critère sémantique, ce que le `href` porte.
4. **`useParams` + trajet de la donnée par l'URL** — les 6 étapes, `string | undefined`, nom libre une seule fois.
5. **Routes imbriquées** — `<Outlet>` (où) vs `index` (quel), chemins relatifs, parent qui reste monté.
6. **404** — `path="*"` gagne parce qu'il est le moins spécifique.
7. **`useNavigate` / `replace: true` / `<Navigate />`** — critère de choix, et le repère du `replace` (redirection automatique → `replace`).
8. **`useLocation` + `state`** — critère « cette URL aurait-elle un sens demain ? », `any` sans filet.
9. **`NavLink`** — `className` en fonction, `{ isActive }`, `end`.

### Également en rotation

- **`setInterval` / `clearInterval`** 🔴 — non ressorti seul S92 (`setTimeout` sortait à la place).
- **`fetch` POST / `FormData` / `Content-Type`** — à recroiser, sorti S72 mais non retiré depuis longtemps.

### Sortis de rotation (à surveiller, ne plus tirer)

`inline` vs `block` (sorti S92) · `Object.entries` (S89) · `sort()` non mutant (S88) · `position: fixed` (S79) · `IntersectionObserver` (S80) · `slice`/`splice` · `rem`/`px` · échelle Tailwind · `map`/`find`/`some` · closures / valeur-référence / scope · `fn` vs `fn()` (ancré, rechute possible en position inhabituelle).

### 🚫 Interdit de tirage

**`reduce` accumulateur objet** — sorti définitivement en S68 après 4 passages à froid sans ancrage et un coût moral réel. Ne reviendra que porté par un exercice produisant un vrai chiffre à l'écran.

---

## ⚠️ Points de vigilance actifs

- **Écrire des consignes claires — récurrence n°1 actuelle.** Relevé explicitement par Frédéric **trois fois en une semaine** (S89, S91, S93). Une consigne donne le **livrable, pas l'objectif** : quels composants produire, quel résultat à l'écran, sur quel fichier de quel projet. Reformuler en **étapes numérotées** débloque à chaque fois.
- **Ne jamais donner un exercice sur un mécanisme non enseigné.** Geste concret : vérifier chaque notion d'un squelette contre le §7 **avant** de l'écrire. Rupture de séance en S79, récurrences S67, S74, S87.
- **Dosage.** L'empilement de plusieurs nouveautés dans un même message reste une cause récurrente d'arrêt net (S65, S73, S81, S86). Redécouper avant de recombiner.
- **Pas de diagnostic sans la source.** Étendu en S93 : ne pas écrire une consigne sur un fichier dont on n'a pas la version en cours (consigne S93 rédigée sur un `FicheMonture` avec fetch, inexistant dans le dépôt où il travaillait).
- **Il se sous-note systématiquement.** Recalibrer vers le haut quand la mesure dépasse l'auto-évaluation. **Symétrie** : un exercice réussi au prix d'un effort long est **fragile** — le signal est l'effort, pas le résultat.
- **Fatigue de fond.** Vérifier l'énergie **avant** de charger, caler le lourd sur les créneaux frais. Il signale lui-même ses blocages — le prendre au mot.

**Règles de travail** : toutes remontées dans les instructions du projet (§1, §5, §6, §9) lors de la refonte S93. Ne pas les chercher ailleurs.

---

## ➡️ Prochaine étape

1. **Reste du chantier documentaire** : refonte de `dettes-apprentissage-socle.md` (daté S65, largement périmé — `position: fixed`, placement Grid, `sort`, `Object.entries`, `slice`/`splice` sont soldés).
2. **Point laissé en suspens S93** : nettoyage du `state` d'historique proprement (bloc livré sans sa condition de fonctionnement, le bandeau avait disparu). Créneau court.
3. **Cap Phase 2 — Next.js.** Prochain gros bloc : App Router, convention fichier→URL, API Routes. **Séance longue et fraîche** (week-end ou midi), pas un créneau du soir. Poser `children` avant ou pendant.

Vérifier l'énergie en ouverture.

---

---

# Sessions

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

## Session 90 — `useParams` sur API réelle : liste → fiche

**Durée** : ~3h (samedi). Énergie bonne au départ, agacement en milieu de séance sur le blocage `useParams`.

**Révision éclair (inline vs block)** 🟡 : `flex flex-col` proposé, solution qui **fonctionne** (un enfant de flex n'est plus inline, `width` et padding vertical redeviennent effectifs). **Mais le diagnostic n'est pas venu** — l'énoncé mentionnait explicitement la largeur ignorée et le chevauchement, deux symptômes non traités dans la réponse. Le réflexe est là, le raisonnement non. **Reste en rotation.**

**🎹 Raccourci** : `Ctrl+Maj+F` — non utilisé, reconduit.

---

### 1. Rafraîchissement — recadré par lui

J'ai commencé par rappeler le motif `useEffect`/`fetch`. **Il a stoppé : ce n'est pas lui qui avait besoin d'être rafraîchi, c'est `useParams`.** Juste — le fetch est verrouillé depuis la S55, `useParams` datait de la veille. Rappel refait sur la bonne notion.

**Question posée en ouverture** : `useParams` vient-il de React ou de React Router ? → React Router. React ne fournit que les hooks d'état et de cycle de vie ; tout ce qui touche à l'URL appartient au routeur (conséquence directe du point S67).

---

### 2. `ListeMonture` — page blanche ✅

API DummyJSON, catégorie sunglasses. **Le socle fetch est intact** : structure `useEffect` + fonction interne async, `res.ok` + `throw`, `finally`, `setErreur(null)` avant chaque appel, early returns dans le corps du composant. Écrit seul, sans aide.

**🌟 `donnee?.products ?? []`** posé spontanément — garantit un tableau, donc un `.map()` toujours sûr.

**Corrections** : message d'erreur construit puis **jeté** au profit d'un texte générique (même famille que le `return` nu de la S89 — le travail est fait, le résultat n'arrive pas à l'écran) · garde `donnee !== null` en doublon du `??` · `String(d.id)` superflu dans un template literal · nommage `Donnee`/`Data` (deux langues, aucune ne dit ce qu'elle décrit) → `Monture` / `ReponseFetch`.

**`catch (e: unknown)` + `e instanceof Error ? e.message : "..."`** — trouvé par lui via Quick Fix, question posée derrière. Cours donné : un `catch` type en `unknown` parce qu'on peut `throw` n'importe quoi ; `instanceof` est un test à l'exécution que TS lit comme du **narrowing**. C'est le standard, pas un contournement. `: unknown` superflu (type par défaut).
**🆕 Notions neuves signalées, non enseignées** : `unknown` et `instanceof`.

---

### 3. 🔴 `FicheMonture` — blocage, code donné

**Deux demandes d'aide successives, puis « correction ça me soule ».** Choix proposé (code commenté / arrêt de séance), il a pris le code.

**Ce qui bloquait, identifié seulement après coup** : pas le fetch, pas le typage — **le trajet de la donnée**. Sa question, textuelle : « comment `if (!id)` est testé ? comment il récupère le nombre cliqué ». Il cherchait un mécanisme actif de récupération là où la valeur est déjà présente.

**Déblocage** par le déroulé complet en 6 étapes : `to` fabrique une adresse figée dans le DOM → `<Link>` pousse l'URL sans recharger → `<Routes>` compare les motifs → le routeur note ce qu'il y avait à la position du joker → monte le composant → `useParams` lit ce qui a été rangé. **Reformulation juste de sa part immédiatement après** (« la donnée voyage par l'URL, donc l'URL fournit elle-même l'id »), avec une seule correction : ce n'est pas `App.tsx` qui importe selon l'URL — les imports sont statiques, `<Routes>` choisit lequel de ses enfants **monter**.

**Point posé** : `if (!id)` n'attrape presque jamais rien en pratique. Il existe pour convaincre TS, qui ne sait pas depuis quelle route un composant est monté.

**Cours donné au passage — règle des hooks** : pas d'early return avant un `useEffect` (un hook doit être appelé au même endroit à chaque rendu). D'où le test **dans** l'effet, où un `return` nu est légitime — un effet a le droit de ne rien faire, contrairement à un composant qui doit produire du JSX.

**✅ Réécrit sans copier-coller ensuite**, les deux composants complets. `[id]` en dépendance, URL en template literal, `Monture | null` pour l'unité contre tableau pour la liste, erreur affichée cette fois.

**🔴 Un vrai bug** : ordre des early returns inversé (`!monture` en premier) → « Référence introuvable » affiché pendant tout le chargement, et le message d'erreur jamais atteint. Règle donnée : l'ordre suit la chronologie des états — chargement, erreur, absence.

**Circuit vérifié à l'écran** : liste, clic, navigation d'une fiche à l'autre (le `[id]` fait son travail), et 404 sur un id inexistant avec message lisible.

---

### 4. Question posée : Next.js rendra-t-il `useParams` inutile ?

Oui pour le guichet, non pour le mécanisme. Next.js déclare ses routes par l'**arborescence de fichiers** (`app/montures/[id]/page.tsx`), les crochets remplaçant le `:` — ce que React Router refuse, Next.js l'impose. Le motif « lire l'identifiant, aller chercher la donnée » reste identique. Nuance ajoutée : en Next.js le fetch peut se faire côté serveur, sans `useEffect` ni état de chargement (Phase 2 backend).

---

### 5. Trois révisions éclair de sortie (demandées par lui)

**`useParams` sur terrain neuf** 🟡 : **la correspondance `path` ↔ déstructuration n'était pas connue** — `const { commande }` écrit sur un `path="/commandes/:reference"`. Point posé : le nom est libre **une seule fois, dans le `path`** ; ensuite c'est une clé d'objet, on la lit à l'identique. Dépendance `[reference]` et `to` justes ensuite.

**Prop optionnelle + défaut** 🟢 : interface et signature justes du premier coup. **Point manqué** : `type?: string` accepte n'importe quelle chaîne → union de valeurs `"info" | "erreur"` non déclenchée, alors que la notion est connue depuis S80. Même schéma que `T[]` vs `T | null` en S82 : règle sue, réflexe absent.

**Utility types** : `Omit<Commande, "id">` 🟢 · `Partial<Commande>` 🟢 · **`Record<string|number>` 🔴** — union écrite à la place de la virgule séparant les deux arguments. Repère donné : ce qui est _dans_ un tiroir peut être une union, ce qui _sépare_ deux tiroirs est toujours une virgule. Confusion venant de `Omit<X, "a" | "b">`, déjà accrochée en S86.

---

**Niveaux** : socle `useEffect`/`fetch` 🟢 (intact, page blanche) · `?.` + `??` 🟢 · trajet de la donnée par l'URL 🟢 (**c'était le maillon manquant, débloqué par le déroulé complet**) · `useParams` — correspondance avec le `path` 🟡 (cassée en révision de sortie) · `[id]` en dépendance 🟢 · test dans l'effet vs dans le corps 🟡 · ordre des early returns 🟡 · `catch` + `instanceof` 🟡 (donné, non enseigné) · union de valeurs sur prop optionnelle 🔴 (connue, non déclenchée) · `Record` 🔴 · `Omit`/`Partial` 🟢 · inline vs block 🟡.

**⚠️ Mes erreurs** :

1. **Rafraîchissement sur la mauvaise notion** — `useEffect` au lieu de `useParams`. Recadré par lui, à raison.
2. **Diagnostic construit sans avoir vu l'écran** : j'ai déduit d'un message que deux composants étaient montés en même temps et lancé une enquête sur ses routes, qui étaient correctes. **Récurrence directe du §9 bis** — pas de diagnostic sans la source.
3. **Premier énoncé sur PokéAPI** alors que l'univers optique est son terrain par défaut. Corrigé à sa demande.

**🆕 Dettes ouvertes ce jour** : `unknown` · `instanceof`.

**⏭️ Prochaine étape**

1. **Révision éclair demandée explicitement : union de types + generics** — « c'est déjà flou pour moi ». À jouer en ouverture de la prochaine séance.
2. Approfondissement **React Router Declarative** (demandé S69, jamais ouvert) — `useNavigate`, `NavLink`, route 404, routes imbriquées.
3. Toujours en attente : projet CSS Grid · `children` · `useRef` (+ `IntersectionObserver` version React) · `<table>` · `useReducer` · types fonction avancés · hoisting · `peer` · exercices de typage réguliers (demande S86).

## Session 91 — Generics (cours de fond) + React Router : `useNavigate`, 404, routes imbriquées

**Durée** : ~3h (dimanche). Énergie bonne, séance tenue en entier.

**Révision éclair (union de types + generics)** — demandée explicitement en S90. Union de valeurs (`type Statut = "a" | "b" | "c"`) et les deux `useState` (`T | null` / `T[]`) **justes et sans hésitation**. Generics : `function premier(tableau: T[]) { return T[0] }` — deux erreurs qui disent exactement où était le blocage, `<T>` absent et `T` traité comme une variable.

**🎓 Cours de fond donné — le point qui a débloqué** : `<T>` **déclare un nom**, exactement comme les parenthèses déclarent `nom` dans `function saluer(nom)`. Avant cette déclaration, `T` n'existe nulle part (d'où « Cannot find name 'T' »). `<>` est aux types ce que `()` est aux valeurs : un endroit qui déclare, un endroit qui remplit. Et `T` vaut quelque chose **par appel**, pas une fois pour toutes. `T` est un nom inventé, pas un mot-clé.

**Exercices — 3/3 justes en page blanche** : `dernier<T>(tableau: T[]): T` · `derniers<T>(tableau: T[], n: number): T[]` (a combiné `T` avec `[]` en retour, et laissé `n: number` en type concret) · `paire<V>(a: V, b: V): V[]` (**même paramètre de type sur les deux arguments** = la contrainte demandée, et nom `V` au lieu de `T` → le point « c'est un nom que j'invente » est passé).

**🎹 Raccourci** : `Ctrl+Maj+F` — peu d'occasions, **maintenu**.

---

### 1. `useNavigate`

Cours : le hook renvoie une fonction, appelée en haut ; la fonction navigue, appelée dans un handler. Piège signalé — l'appeler dans le corps = navigation à chaque rendu, même famille que le setter hors événement (S84).

**✅ Exercice page blanche réussi** : deux boutons ajoutés à `FicheMonture` (`naviguer("/liste-monture")` et `naviguer(-1)`), import et hook corrects. **Résumé du mécanisme produit seul et exact.**

**🎓 Trois questions posées, toutes traitées** :

- _`replace: true` ?_ → l'historique est une pile ; empiler une redirection automatique piège l'utilisateur (Retour → page invalide → re-redirection → boucle). Critère donné : **l'utilisateur a choisi d'aller là → on empile · le code l'y a envoyé → `replace`**.
- _`state` sert à quoi ?_ → donnée transportée hors URL (message de confirmation après enregistrement), lue par `useLocation`. Ne survit ni au rechargement ni au partage de lien — cohérent avec ce qu'elle transporte.
- _`<Navigate />` c'est autre chose ?_ → non, **même action, forme déclarative**. Ne produit aucun DOM (rapprochement fait avec son observation sur `<Routes>` en S68). Critère : redirection issue d'un rendu conditionnel → `<Navigate>` · issue d'un événement ou d'un calcul → `useNavigate`.

**🎓 Question de fond : « on pourrait presque remplacer tous les `<Link>` par des `<button onClick={naviguer}>` ? »** — cours donné sur ce que le `href` porte et qu'un bouton perd : clic droit / Ctrl+clic / nouvel onglet, copier l'adresse, favoris, annonce « lien » au lecteur d'écran, indexation. Critère sémantique redonné (`<a>` = destination, `<button>` = action). **Règle retenue : si l'adresse peut s'écrire dans le JSX, c'est un `<Link>`.** Son bouton « Retour à la liste » identifié comme un cas où le `<Link>` serait plus juste en production ; `naviguer(-1)` légitimement un bouton.

---

### 2. Route 404 ✅

`path="*"` = motif qui accepte tout, gagne uniquement parce qu'il est le moins spécifique (l'ordre d'écriture n'intervient pas — React Router garde la route la plus spécifique). Composant + route écrits seuls, vérifiés à l'écran sur une URL invalide.

Deux remarques données : `<p>` au lieu de `<h1>` pour le titre de la page · placement dans `Accueil.tsx` plutôt qu'un fichier propre — **arbitrage assumé et justifié par lui** (30 fichiers dans `components-exercices`, ne voulait pas en créer un de plus pour 4 lignes). Position légitime en atelier, à revoir au SaaS.

**Question posée : peut-on ordonner les fichiers dans l'explorateur VS Code ?** → non, tri alphabétique uniquement, aucun mode manuel. Options données : sous-dossiers (recommandé), préfixes numériques par dizaines, `explorer.sortOrder: "type"`, et le fait qu'au-delà de ~20 fichiers les projets réels cherchent (`Ctrl+P`) au lieu de parcourir.

---

### 3. 🎯 Routes imbriquées + `<Outlet>` — le cap de la séance

**🔴 Premier exercice page blanche non produit** — a écrit un **second `<Routes>` à l'intérieur du layout**, avec les chemins complets réécrits. Geste connu appliqué là où le mécanisme neuf demandait autre chose. **Reprise en version guidée et commentée à sa demande** (« j'efface tout, on recommence de zéro »), qui a fonctionné.

**Points posés** :

- Les routes enfants s'écrivent **dans le même `<Routes>`**, imbriquées dans la `<Route>` parente. Une route parente n'est plus auto-fermante — c'est l'imbrication JSX qui déclare la relation au routeur.
- **Un seul `<Routes>` par application.** Le cas de plusieurs existe mais est rare.
- Chemins **relatifs** : l'enfant écrit `clients` sans `/`, le routeur compose avec le parent. Rattaché au `/` absolu de la S69.
- Le parent **reste monté** quand on navigue entre ses enfants.
- Le layout n'importe aucun de ses enfants et ne décide rien.

**✅ Livré et fonctionnel** : `LayoutUseParams` + `AccueilUseParams`, section `/use-params` avec 5 enfants, `to` corrigés dans `Clients`, `ListeMonture`, `FicheMonture` et `Accueil.tsx`.

**🌟 Anticipé sans consigne** : a demandé de lui-même s'il fallait un lien d'entrée et un lien de retour. Critère de la S70 réappliqué correctement — le retour de section vit **dans le layout**, pas répété dans chaque page.

**Questions de fond posées en fin de bloc, toutes pertinentes** :

- _`<Outlet>` et `index` sont-ils deux moitiés du même mécanisme ?_ → non. `<Outlet>` = **où** (un par layout, obligatoire, sert tous les enfants) · `index` = **quel** enfant quand l'URL s'arrête au parent (facultatif, son absence laisse un layout à moitié vide). Test proposé : supprimer `index` (seule `/use-params` casse) vs supprimer `<Outlet>` (plus rien ne s'affiche).
- _Différence avec `path="/"` ?_ → même rôle, deux niveaux. La racine n'a pas de parent auquel se coller, donc elle nomme son URL entière ; un enfant ne le peut pas sans répéter celle du parent.
- Alternative `<Route index element={<Navigate to="clients" replace />} />` donnée pour les sections sans page d'accueil propre.

**🔴 Diagnostic final — `<Link>` inline** : bouton « retour au menu » chevauchant le contenu de l'`<Outlet>`. Cause = `p-2` sur un `<a>` inline (peint, ne pousse pas). **4ᵉ rencontre du même point** (S75-77, S82, S86) ; il a d'abord attribué le comportement à `<Outlet>`. `inline-block` redonné, avec le rappel que son bouton maison le porte déjà.

---

**Niveaux** : generics — mécanisme `<T>` déclare un nom 🟢 (**c'était le chaînon manquant, 3 signatures écrites seules ensuite**) · union de valeurs 🟢 · `useNavigate` + `naviguer(-1)` 🟢 · `<Link>` vs `<button>` (critère sémantique) 🟢 · route `path="*"` 🟢 · routes imbriquées + chemins relatifs 🟡 — **non produit en page blanche, livré en guidé commenté ; un seul passage** · `<Outlet />` 🟡 · `index` 🟢 (compris, distinction avec `<Outlet>` produite seule après reformulation) · `<Link>` inline + `inline-block` 🔴 (4ᵉ occurrence, attribué à la mauvaise cause).

**🆕 Dettes ouvertes ce jour — mentionnées, non pratiquées** _(signalé par lui : « je ne m'en souviendrai pas dans 2 jours »)_ :

- **`replace: true`** — le repère minimal à garder : redirection automatique → `replace`. Le bug qu'il évite est difficile à diagnostiquer sans connaître la cause.
- **`state` + `useLocation`**
- **`<Navigate />`**
- **`NavLink`** — jamais ouvert.

**⚠️ Mes erreurs** :

1. **Consigne de l'exercice routes imbriquées trop vague** — « crée un petit composant, deux liens suffisent » sans nommer ni situer, d'où un `ts(2304)` sur un composant inexistant. Récurrence directe de la S89.
2. Exercice page blanche posé sur un mécanisme vu une seule fois, en fin de bloc dense. La version guidée commentée aurait dû venir en premier.

**⏭️ Prochaine étape — décidée avec lui pour demain (~2h)**

1. **Exercice global de reprise** (~1h) : appliquer `useNavigate`, 404 et routes imbriquées aux **deux calculatrices de `projet-examen-blanc`** — layout de section + `<Outlet>` + `index`. À vérifier en ouverture : les deux calculatrices y sont-elles bien toutes les deux ?
2. **`NavLink`** (~1h) — demandé explicitement, complément naturel du layout (marquer le lien de la page courante).
3. Toujours en attente : projet CSS Grid · `children` · `useRef` (+ `IntersectionObserver` version React) · `<table>` · `useReducer` · types fonction avancés · hoisting · `peer` · `unknown` / `instanceof` · exercices de typage réguliers (demande S86).

## Session 92 — Reprise des routes imbriquées sur `projet-examen-blanc` + bouton retour global

**Durée** : ~2h (dimanche). Énergie bonne. Séance courte, amputée par une révision d'ouverture mal calibrée de ma part.

**🎹 Raccourci** : `Ctrl+Maj+K` — **revenu spontanément, acté 🟢** après avoir été abandonné en S87. `Ctrl+Maj+F` sorti de rotation faute d'occasions (2 séances). **Aucun nouveau posé** : décision d'attendre qu'un besoin réel émerge en séance, comme ça avait marché pour Emmet Wrap.

---

### 1. ⚠️ Révision éclair — format raté de ma part

**Notion 1 (`<Link>` inline)** 🟢 : sort de rotation.

**Notion 2 (`useEffect` + nettoyage)** — **j'ai posé un composant complet à reconstruire au lieu d'une question. 25 min consommées sur 120.** Frédéric l'a relevé, à raison. Une éclair correcte aurait été « quel critère décide qu'un effet a besoin d'un nettoyage, cite deux cas » — 3 min, même valeur de rappel. **Correctif : une révision éclair est une question, jamais un exercice de construction.**

Résultat de l'exercice lui-même, malgré tout : **code entièrement juste** (lazy initializer, `setInterval` capturé, `clearInterval` renvoyé, `[]`), reconstruit en autonomie en allant relire son propre exercice compte à rebours.

**🔴 Point réel révélé** : **`setInterval` a mis du temps à revenir** (`setTimeout` sortait à la place), et le lazy initializer était oublié. `useEffect` est verrouillé 🔒 depuis la S55, mais **le verrou porte sur le mécanisme, pas sur les outils du navigateur qu'on y branche** — ceux-là s'oublient comme le reste. `setInterval`/`clearInterval` à mettre en rotation.

---

### 2. Routes imbriquées reproduites sur `projet-examen-blanc` — 45 min en autonomie avant la séance

**✅ Écrit seul** (en partie de mémoire, en partie en s'inspirant de la structure de la veille) : route parente non auto-fermante, `<Route index>`, **chemins relatifs** (`"1"`, `"2"`), `<Outlet />` dans le layout, `PageIntrouvable` + `path="*"`, tableau `CALCULATRICES` + `.map()` avec `key`. Fonctionnel.

**Corrections signalées, toutes traitées** :

- **Lien « Retour Accueil » du layout pointant vers la page courante** — repéré par lui au moment de l'écrire (« c'est exactement ce que je pensais »). Point posé : un lien vers la page courante est un lien mort.
- **Titre du layout nommant une page particulière** (« Accueil Exercice Calculatrice ») alors qu'il s'affiche sur tous les enfants. Ce qui est permanent ne nomme pas une page.
- Chemins absolus dans le tableau → `<Link to="1">` relatif, possibilité qu'il ne connaissait pas.
- `path="/CV-application"` → minuscules.

**Désaccord exprimé et fondé** : sur ma remarque « source unique », il a défendu **deux listes distinctes** (accueil principal / accueil de section). Sa lecture est juste — ma remarque portait sur l'emplacement du tableau (`data/` vs en dur), pas sur la structure. Formulation imprécise de ma part.

---

### 3. Bouton retour global — conçu par lui

**Meilleur que le lien de layout que j'avais laissé passer** : un bouton `naviguer(-1)` à côté du bouton maison, dans la `<nav>` permanente, **masqué sur l'accueil**. Global, et supprime le cas du lien mort.

**✅ Écrit seul** : `<button>` (choix juste — `-1` n'est pas une adresse, rien à mettre dans un `href`), `aria-label`, icône Lucide, `useLocation` + `location.pathname !== "/"`, rendu conditionnel en `&&` (critère « A ou rien »).

**🌟 Diagnostic d'alignement posé par lui avant moi** : « ils sont décalés même avec des classes identiques, probablement à cause de leur nature respective ». Exact — deux inline-block reposent sur la **ligne de base du texte**, et leurs SVG ne s'y alignent pas pareil. Correction structurelle donnée : `flex items-center gap-2` sur la `<nav>`, ce qui sort les enfants du flux de texte et rend `inline-block` inutile. **Repère posé : dès que deux éléments doivent s'aligner, un conteneur flex règle le problème à la source.**

**`useLocation`** 🟡 — **passe de mentionné à pratiqué**. Présenté comme le pendant de `useParams` : l'un lit les segments nommés, l'autre l'URL entière ; même principe (un composant monté par une route interroge le routeur).

**Question posée en clôture** : « peut-on utiliser quelque chose comme `includes` ? » → oui, `includes` existe sur les chaînes ; `startsWith` est plus juste pour un chemin (cherche au début). Utile pour masquer sur toute une section, ce que `NavLink` fait nativement.

---

**Niveaux** : routes imbriquées + `index` + `<Outlet>` 🟢 — **reproduits sur un terrain neuf, en autonomie** (2ᵉ passage, dont un guidé la veille) · chemins relatifs 🟢 · `useNavigate(-1)` 🟢 · `useLocation` + `pathname` 🟡 (1er usage) · `<button>` vs `<Link>` (critère sémantique) 🟢 · rendu conditionnel `&&` 🟢 · alignement inline-block / ligne de base 🟢 (diagnostiqué seul) · `useEffect` + nettoyage 🟢 (structure juste) · **`setInterval` 🔴 (non ressorti seul)** · lazy initializer 🟡 · `<Link>` inline — diagnostic partiel 🟡 ·

**🔄 Rotation** : `setInterval`/`clearInterval` **entre**. Toujours dedans : `<Link>` inline vs block. Sortis : `Ctrl+Maj+F` (raccourci).

**⚠️ Mes erreurs** :

1. **Exercice de construction posé en révision éclair** — 25 min sur 120, séance amputée. Relevé par lui.
2. Remarque « source unique » formulée de façon à contester sa structure alors qu'elle portait sur le rangement du tableau.

**⏭️ Prochaine étape**

1. **`NavLink`** — prévu aujourd'hui, non ouvert faute de temps. Complément direct du layout (marquer le lien de la page courante) et de la question `startsWith` de fin de séance.
2. Dettes React Router restantes, **mentionnées mais jamais pratiquées** : `state` · `<Navigate />` · `replace: true` (repère à garder : redirection automatique → `replace`).
3. Toujours en attente : projet CSS Grid · `children` · `useRef` (+ `IntersectionObserver` version React) · `<table>` · `useReducer` · types fonction avancés · hoisting · `peer` · `unknown` / `instanceof` · exercices de typage réguliers (demande S86).

## Session 93 — `NavLink` + fermeture des trois dettes React Router

**Durée** : ~3h15 (Mardi). Énergie bonne, séance tenue en entier.

**Révision éclair (critère de nettoyage d'un `useEffect`)** 🟡 : le bon effet identifié (`setInterval`) et le symptôme décrit juste (intervalles empilés, chrono qui déraille). **Mais le critère n'a pas été énoncé comme règle** — c'est le cas qui a été reconnu, pas le principe (« l'effet laisse-t-il une **trace active** ? »). Complété : l'empilement vient de StrictMode ou d'un tableau de dépendances non vide, pas d'un `[]` ; et au démontage l'intervalle **survit** et appelle un setter sur un composant disparu.

**🎹 Raccourci** : `Ctrl+Maj+K` **revenu spontanément après abandon en S87 — acté 🟢**. Nouveau : `Ctrl+Maj+\` (saut à la balise/accolade correspondante), posé sur un besoin réel (JSX long de `CvApplication`).

---

### 1. `NavLink`

**Notion neuve** : `className` accepte une **fonction** recevant `{ isActive }`, rattachée au motif connu (le `prev` d'un setter, le `e` d'un handler — un paramètre fourni par l'appelant). Correspondance **par préfixe**, d'où `end` pour l'exact. `isActive` est un simple booléen : usage libre (classe, icône, style).

**✅ Exercice réussi** : trois `NavLink` dans le layout calculatrices, `end` posé sur le lien de section (le piège annoncé, manqué au premier jet puis corrigé), `to` relatifs, chaîne factorisée en `const` puis fonction `lienClasse` extraite.

**🎓 Questions posées** :

- _`isActive` sert à quoi d'autre que Tailwind ?_ → rien d'imposé, c'est un booléen ; `children` accepte aussi une fonction.
- _Où va la barre de navigation ?_ → **dans le layout**, critère S70 réappliqué. `isActive` n'a de sens que là où le composant survit au changement de page.
- _Faut-il `@layer components` / `@apply` ?_ → cours donné sur les trois niveaux : `const` (répétition locale) · composant (classes + balisage + comportement) · `@apply` (CSS de balises nues en `@layer base`). Position S68 réaffirmée : **en React on factorise par le composant**.

**🔴 `({ isActive }: boolean)`** — annotation portée sur ce qui est extrait au lieu de ce qui arrive. Point redonné : la déstructuration ne change pas ce qui est reçu ; React Router passe **un objet**. Même contrat que les props React. Boussole du `:` (S60) réappliquée.

---

### 2. `replace: true` — dette fermée, pratiquée deux fois

**⚠️ Ma consigne était floue** — arrêt net de Frédéric (« pourquoi tu n'arrives pas à me faire des consignes claires ? »), **3ᵉ occurrence de la semaine**. Objectif donné sans dire ce qu'il fallait écrire. Reformulée en livrable numéroté, efficace immédiatement.
**⚠️ Aggravant** : la consigne portait sur un `FicheMonture` avec fetch, alors qu'il travaillait dans `projet-examen-blanc` où le composant lit un tableau en dur. **Consigne écrite sans avoir le bon fichier en tête.** Récurrence de §9 bis.

**✅ Exercice réussi une fois reformulé** (`projet-examen-blanc`) : `useNavigate`, second `useEffect` séparé, garde, `setTimeout` 2 s, `clearTimeout`, dépendances complètes. **Les deux pièges traités seul** : hook placé **avant** l'early return (règle des hooks), et `return` nu légitime **dans un effet** alors qu'il ne l'était pas dans un composant (S89).

**✅ Reproduit ensuite en autonomie sur `projet-vite-local`** avec le fetch réel (garde sur `erreur`, dépendance `[erreur, naviguer]`).

**🎓 Question de fond : « un `useEffect` dans un `useEffect`, c'est bien ou mauvais ? »** — posée **avant** de valider, bon réflexe. Interdit : React identifie les hooks par leur **ordre d'appel**, pas par leur nom. Signal donné : un hook ne s'appelle jamais après un `await` ni dans un bloc conditionnel. Forme correcte = deux effets frères, le premier **enregistre un fait** (`setErreur`), le second l'observe.

**🎓 Question : « faut-il le faire aussi sur `ListeMonture` ? »** → non, et le critère vaut mieux que la réponse : **on redirige quand la ressource est introuvable, on affiche quand le service est en panne** (logique 404 vs 500). Sur une liste, rediriger ne répare rien et peut boucler.

---

### 3. `<Navigate />` — dette fermée

Cours par contraste sur son propre code : sans le délai de 2 s, les 9 lignes d'effet se réduisent à `if (!monture) return <Navigate to="/catalogue" replace />`.

**🌟 Jugement critique exprimé et fondé** : « `<Navigate>` ce n'est pas fou, il n'y a jamais de message pour avertir l'utilisateur ». Exact sur ce cas — je l'avais fait tester sur le seul terrain où `<Navigate>` perd. Trois avantages réels donnés ensuite : il n'y a pas toujours de message à afficher (garde d'accès) · **il n'affiche jamais le contenu protégé, même une fraction de seconde** (avec `useEffect`, le JSX est rendu avant que l'effet ne parte) · toutes les issues du composant se lisent au même endroit.

**Critère retenu** : rien à dire à l'utilisateur → `<Navigate>` · message, délai ou action avant le départ → `useNavigate`.

**🌟 A tranché seul sur la 404** : préfère garder `PageIntrouvable` plutôt que rediriger, « le mieux reste un message ». Jugement correct — une 404 est précisément le cas où il y a quelque chose à dire. Nuance ajoutée et acceptée : **pas de `setTimeout` automatique** sur une page qui informe.

**Questions posées** : intérêt de `<Navigate>` en `index` (section sans accueil propre — ne s'applique pas à son cas, sa `CalculatriceAccueil` a du contenu) · `<Outlet>` obligatoire ? combien ? → un par layout (contrainte logique), autant que de layouts dans le projet, emboîtables.

---

### 4. `state` — dette fermée

Cours : les props et le lifting state up ne peuvent pas servir (les deux composants ne se connaissent pas, c'est le routeur qui les monte). `state` transporte une donnée hors URL. **Critère posé** : _si quelqu'un ouvrait cette URL demain, cette information aurait-elle un sens ?_ Oui → URL · Non → `state`. Survit au retour arrière, pas au rechargement, pas au partage.

**✅ Circuit complet écrit seul** : `naviguer("/catalogue", { state: { … } })` dans la fiche, `useLocation` + `?.` + `&&` dans le catalogue. Deux composants sans lien de parenté qui communiquent.

**Corrections** : `state` doit transporter **une donnée, pas une mise en forme** (la phrase se compose à l'arrivée) · template literal superflu · import `Navigate` inutilisé.

**🔴 `location.state` est typé `any`** — seul endroit du fichier sans filet TS. D'où `as`, **notion neuve** : assertion qui ne convertit rien et ne vérifie rien, même famille que le `!` de la S67. Légitime sur une garantie structurelle (on écrit soi-même le `state` deux fichiers plus loin), jamais sur API / saisie / URL.

**🎓 Nettoyage du `state` — bloc mal livré de ma part** : donné isolément, appliqué par lui, **et le bandeau a cessé d'apparaître**. Cause : l'effet efface la source avant que l'œil ne voie quoi que ce soit. Il faut **copier dans un `useState` avant de nettoyer** — source volatile / copie stable. Deux notions livrées en une.

**🎓 Question posée derrière : « ne faudrait-il pas un `useState` pour `setTimeout` le message ? »** — piste correcte, confusion à lever : le `setTimeout` a besoin d'un `useEffect` (trace active), le `useState` sert à porter « ce bandeau doit-il encore s'afficher ? ». Deux besoins distincts, souvent combinés en production.

---

**Niveaux** : `NavLink` + fonction dans `className` 🟢 · `end` 🟡 (piège manqué puis corrigé) · annotation d'un paramètre déstructuré 🟡 (rechute) · `replace: true` 🟢 (2 terrains) · deux effets frères / règle des hooks 🟢 (**question posée avant de valider**) · `<Navigate />` 🟢 · critère `<Navigate>` vs `useNavigate` 🟢 · `state` + `useLocation` 🟢 · `as` 🟡 (neuf) · nettoyage du `state` d'historique 🟡 · critère de nettoyage d'un effet 🟡 · factorisation `const` vs composant vs `@apply` 🟢.

**🆕 Notion neuve du jour** : `as` (assertion de type).

**🔄 ROTATION — décision de Frédéric** : **toutes les compétences React Router Declarative entrent en rotation de révision éclair à partir de la semaine prochaine.** Inventaire complet établi en fin de séance (montage et structure · navigation `<Link>`/`useNavigate`/`replace`/`<Navigate>` · paramètres d'URL et trajet de la donnée · layouts, `<Outlet>`, `index`, chemins relatifs · 404 · `useLocation` et `state` · `NavLink`). Tirage à répartir sur plusieurs séances, jamais sur le sujet du jour.
Toujours en rotation : `setInterval`/`clearInterval` ·

**⚠️ Mes erreurs** :

1. **Consigne floue, 3ᵉ fois cette semaine** — arrêt explicite de Frédéric. Objectif donné sans livrable énoncé.
2. **Consigne écrite sur le mauvais fichier** (fetch inexistant dans `projet-examen-blanc`).
3. **Nettoyage du `state` livré sans sa condition de fonctionnement** (la copie en `useState`), ce qui a fait disparaître le bandeau.

**⏭️ Prochaine étape**

Le mode Declarative est **complet**. Cap Phase 2 à reprendre.

1. **Demain : créneau court (~1h)** — séance légère. Bon moment pour un retour sur les points laissés en suspens (nettoyage du `state` proprement, ou reprise d'un point de la nouvelle rotation).
2. **Décision à prendre** : suite de l'axe Phase 2 — **Next.js** est le prochain gros bloc de la roadmap (App Router, API Routes), et le routeur y est remplacé par la convention fichier→URL.
3. Toujours en attente : projet CSS Grid · `children` · `useRef` (+ `IntersectionObserver` version React) · `<table>` · `useReducer` · types fonction avancés · hoisting · `peer` · `unknown` / `instanceof` · exercices de typage réguliers (demande S86).

---

## Session 94 — [chantier documentaire]

**Thème** : refonte documentaire de fin de chapitre, pas d'apprentissage.
**Fait** : instructions du projet refondues et datées S93 (§7 réécrit en entier après 28 séances d'écart · §9 bis dissous dans §1/§5/§6/§9 · règle « écrire des consignes claires » ajoutée au §9 · §5 remis à jour, arborescence Vite et raccourcis · §10 aligné sur les vrais noms de fichiers) · `Archive-progression-Phase2-bis.md` créée (S60→S88) · `progression.md` restructuré (en-tête refondu + S89→S93) · file d'attente des notions repoussées triée en deux groupes.
**Reste** : refonte de `dettes-apprentissage-socle.md`.

---

<!-- Les nouvelles entrées de session commencent ici -->

## Session 94 — Chantier documentaire

**Durée** : ~3h (mercredi). Aucun apprentissage — remise à plat des documents du projet, au moment où React Router se ferme et où Next.js n'est pas encore ouvert.

**Fait** : instructions refondues et datées S93 (§7 réécrit, §9 bis dissous dans §1/§5/§6/§9, règle « écrire des consignes claires » ajoutée au §9, §5 et §10 réalignés) · `Archive-progression-Phase2-bis.md` créée (S60→S93) · `progression.md` restructuré (en-tête refondu + S89→S93, file d'attente triée en deux groupes) · `dettes-apprentissage.md` refondu et **élargi** (15 dettes soldées et retirées, paliers React / TypeScript / Git-Outils créés, plan de remboursement reconstruit).

**🎓 Règle posée par Frédéric — la ligne de front.** Le registre des dettes liste ce qui a été **dépassé sans être fait**, pas ce qui reste à apprendre. Derrière la ligne = dette · devant = programme. `this`/POO et `@keyframes` sont des dettes ; Next.js, Prisma et les tests n'en sont pas. Formulée après deux propositions de ma part qui partaient à côté.

**🎓 Deuxième règle** : la mesure, c'est ce qu'on fait ensemble. Une notion croisée seule (vidéo, article) reste classée « non vue » dans le registre.

**📌 Reste ouvert** : statut de `audit-croise.md` (ré-export `.md`, retrait, ou mention au §10) · `Roadmap_actuelle_S56` en doublon `.md`/`.pdf` et `ficherevisionreact.pdf`, non cités au §10.

**⏭️ Prochaine étape** : nettoyage du `state` (S93, code cassé, créneau court, zéro neuf), puis **Next.js** sur séance longue et fraîche — en posant `children` avant, c'est la seule dette du registre qui bloque réellement la suite.

## Session 95 — Nettoyage du `state` d'historique + `children`

**Durée** : ~2h (jeudi soir). Énergie bonne.

**Révision éclair (`fetch` POST)** 🟢 : objet d'options complet et juste à froid (`method`, `headers` + `Content-Type`, `body` sérialisé). Rôle du header juste. Une erreur d'inattention : `JSON.stringify('data')` (chaîne littérale au lieu de la variable). **Sort de rotation.**

**🎹 Raccourci** : `Ctrl+Maj+\` — usage non renseigné, **à demander** en ouverture.

---

### 1. Nettoyage du `state` d'historique — dette S93 soldée ✅

Circuit réparé dans `projet-examen-blanc` (`Catalogue`) : copie dans `useState(location.state?.message)` + effet qui remplace l'entrée d'historique (`naviguer(location.pathname, { replace: true })`) + JSX qui ne lit plus que la copie. Trois scénarios vérifiés à l'écran (Retour → bandeau · F5 → rien · Précédent → rien).

**Accroches, toutes corrigées** : `?.` oublié dans la valeur initiale · garde inversée et testant la copie au lieu de la source · condition du JSX lisant encore `location.state` (le texte avait migré, pas la condition). Dépendance en trop (`message`) retirée.

**Questions posées** : à quoi sert `naviguer` ici (seul outil qui écrit dans l'historique) · `useState` sans setter (mémoriser une valeur initiale d'un rendu à l'autre, là où une `const` est recalculée) · pourquoi autant de dépendances (le tableau décrit ce que l'effet **lit**).

**Niveaux** : source volatile / copie stable 🟢 · `useState` sans setter 🟡 (neuf, un passage) · `replace` sur la même adresse 🟢.

---

### 2. `children` — dette du registre enseignée

**Blocage réel au premier exercice** : `{children}` introuvable alors que l'interface et la déstructuration étaient justes. Ligne donnée après deux tentatives. **Cause** : rupture avec le modèle mental « le composant connaît son contenu, les props apportent des données ». Débloqué par le contraste `CarteMonture` (données brutes) / `Carte` (zone libre) et l'analogie monture / drageoir.

**Exercice de refacto** ✅ : trois `<section>` répétées extraites en `Encadre`, frontière cadre / contenu identifiée seul. Test de l'utilité fait (1 ligne modifiée au lieu de 3) — **c'est ce qui a rendu l'intérêt concret**.

**`children: any`** puis question de fond : comment trouver un type que le survol ne donne pas ? Critère posé : **type imposé par un outil → survol · type décidé par soi → source**. Geste F12 sur `StrictMode` → `index.d.ts` → lecture de la seule ligne d'arrivée. `ReactNode` vérifié dans ses `@types/react`.

**Exercice de choix props de données / `children`** : 3 cas justes (`PrixMonture`, `Modale`, `Rubrique`). Interfaces non écrites faute de temps, correction donnée. Précision : la `Modale` demande une **prop fonction** (`onFermer`), pas une donnée.

**Questions posées** : `children` est-il un nom imposé ? (oui, réservé par React, comme `key`) · fait-il autre chose ? (non — n'importe quelle prop peut transporter du JSX ; une 2ᵉ zone libre passe par une prop nommée).

**Niveaux** : critère props de données / `children` 🟢 · mécanisme `{children}` 🟡 (**ligne donnée, un seul passage autonome sur la refacto — ne pas surévaluer**) · `React.ReactNode` 🟡 · F12 vers un `.d.ts` 🟡 (neuf).

**Registre** : `children` **sort de `dettes-apprentissage.md`** (enseigné) et devient **dette chaude** ici jusqu'à la page blanche.

---

**🔄 Rotation** : `fetch` POST **sort**. Toujours dedans : React Router Declarative (9 points) · `setInterval` / `clearInterval`.

**⏭️ Prochaine étape — décidée avec lui, suite dans la même conversation**

1. Révision éclair (hors `children`).
2. **Page blanche : `children` + TypeScript des séances précédentes + `<table>`** (dette type B du registre, réactivée par la pratique). Ordonnance OD/OG comme terrain.
3. **`useRef`** si le temps le permet, sinon séance suivante.
4. Puis **Git branches + Pull Request** (séance dédiée), puis **Next.js**. Les autres dettes (coercion + hoisting, `@keyframes`, accessibilité) se calent en créneaux courts pendant la suite.

## Session 96 — Page blanche `children` + TypeScript + `<table>`

**Durée** : ~2h45 (vendredi). Énergie bonne, séance tenue en entier.

**Révision éclair (`setTimeout` / `setInterval`)** 🟡 : différence de comportement juste. **Identifiant renvoyé par l'appel non connu** (question non comprise) · critère de nettoyage non énoncé (outil cité, pas la règle « trace active »). **Reste en rotation.**

**🎹 Raccourci** : `Ctrl+Maj+\` — pas encore utilisé, « je n'y pense pas ». **Reconduit.**

---

### Page blanche — fiche ordonnance (`projet-vite-local`, `ExerciceOrdonnance.tsx`)

**⚠️ Première consigne rejetée à raison** : découpage en composants, noms de props et code appelant fournis — une recette, pas une page blanche. Refaite en **livrable + contraintes**. La seconde version restait ambiguë (« deux blocs », « sémantique », origine des valeurs) : trois questions de clarification nécessaires.

**Produit seul** :

- **`Rubrique`** (`titre` + `children`), cadre écrit une seule fois 🟢 — **le mécanisme qui bloquait en S95 est sorti sans aide.** Titre placé dans la rubrique et non dans le `<thead>` : question posée, bonne distinction.
- **Modélisation** : OD/OG en **clés d'objet** plutôt qu'une liste avec union (plus stricte : un seul OD, un seul OG), `OD?`/`OG?` tranché par le métier, puis yeux regroupés dans un sous-objet pour sortir l'addition de la boucle. **Choix défendus avec des arguments métier, et meilleurs que ma modélisation de départ.** 🟢
- **`TableauCorrections`** extrait avec l'ordonnance en prop, pensé « comme si la donnée venait d'une API » ; a conclu seul qu'aucun state n'était nécessaire. 🟢
- **Tableau sémantique** (`thead`/`tbody`, `th` d'en-tête de ligne, `colSpan`) revenu sans rappel. 🟢

**Avec aide** :

- **`Object.entries` + `.map()`** : 1ᵉʳ jet en accès par index (`data[0][0]`), puis déstructuration par crochets **sortie après indice**, avec une accolade parasite (`[oeil, {c}]`). Question de fond posée : comment intégrer l'élément de nature différente (`add`) ? → on corrige la forme des données, pas la boucle. 🟡
- **Union de valeurs sur prop optionnelle** (`variante?: "normal" | "alerte"` + défaut) : **donnée, non déclenchée seule.** Reste 🔴.
- Alignement de la ligne Add (cellule vide fusionnée) : donné.

**Neuf** : `scope="col"` / `scope="row"` 🟡.

**🎓 Règle métier posée par Frédéric** : une addition à 0 n'existe pas en optique (minimum 0,75). Donc 0 ou absent → pas de ligne. Mon `!== undefined` était faux pour ce cas. Point technique qui reste : `addition && …` afficherait le chiffre `0` → forme retenue : `addition ? (…) : null`.

**📌 Point ouvert** : survol de `sphere` dans le `.map()` non fait. Probable `any` (`Object.entries` sur une `interface` sans signature d'index) et `oeil` typé `string` — *non vérifié*. Bon support pour un exercice de typage.

**Niveaux** : `children` 🟢 (page blanche réussie) · critère props de données / `children` 🟢 · `<table>` sémantique 🟢 · modélisation objet vs liste 🟢 · déstructuration de tableau 🟡 · union sur prop optionnelle 🔴 · `scope` 🟡. **Exercice réussi au prix d'un effort long : fragile côté TS.**

**Registre** : **`<table>` soldée** (type B, réactivée par la pratique) · **`children` soldée** (enseignée S95, tenue en page blanche).

---

**⚠️ Mes erreurs** :

1. **Page blanche rédigée comme une recette** — architecture fournie. Correctif : une page blanche donne **le livrable et les contraintes**, jamais le découpage ni le code appelant.
2. **Seconde consigne encore ambiguë** (deux blocs, « sémantique » non défini, valeurs non précisées). Récurrence §9.

**🔄 Rotation** : `setInterval` / `clearInterval` (identifiant + critère) · React Router Declarative (9 points) · union de valeurs sur prop optionnelle.

**⏭️ Prochaine étape**

1. Révision éclair.
2. **`useRef`** — séance fraîche, notion neuve (+ `IntersectionObserver` version React).
3. Puis **Git branches + Pull Request** (séance dédiée), puis **Next.js**.

## Session 97 — Typage `Object.entries` : `interface` vs `type`

**Durée** : ~1h (samedi). Énergie bonne. Créneau court annoncé, séance coupée en fin de parcours par un client.

**Révision éclair (`useParams` — route paramétrée)** 🔴 : trois points sur quatre manqués.
- **Origine du nom inversée** : annoncé comme inventé dans le composant, repris ensuite dans `App`. C'est l'inverse — le nom naît dans le `path`, une seule fois, et devient ensuite une clé d'objet lue à l'identique. **Même point que la révision de sortie S90, non corrigé depuis.**
- `useParams` **sans parenthèses** dans la ligne écrite (déstructure la fonction, pas son résultat) + clé inventée (`eclair`) absente de l'objet.
- Type donné `string`, sans `| undefined` — c'est la moitié qui oblige à la garde.
- **Remarque fondée de sa part** : l'énoncé ne disait pas si la donnée venait d'une API ou d'une liste en dur. Juste pour la suite, sans effet sur la ligne `useParams()` elle-même, identique dans les deux cas.

**🎹 Raccourci** : `Ctrl+Maj+\` **abandonné**. Trois causes cumulées : la commande ne saute qu'entre délimiteurs (`{}`, `()`, `[]`) et **jamais entre balises JSX** — or je l'avais posé sur un besoin de circulation dans un JSX long, donc sur le besoin où il ne répond pas · le curseur doit être collé au délimiteur · `\` en AltGr sur AZERTY. **Geste retenu, utile au-delà du cas** : `Ctrl+Maj+P` → nom de la commande → lire le raccourci réellement assigné à droite. Aucun nouveau raccourci posé, on attend un besoin réel.

---

### 1. Cours — pourquoi `Object.entries` perd le type sur une `interface`

Parti du point ouvert en fin de S96 (survol de `sphere` non fait). **Constat vérifié au survol** : `corrections` en `[string, any][]`, `sphere` en `any` — le tableau d'ordonnance n'avait aucun filet TS.

Cours donné : `Object.entries` a deux signatures, une précise (exige une **signature d'index**) et un filet de secours en `any`. Une `interface` est **ouverte** (rouvrable, fusion de déclarations) → TS ne peut jamais promettre que toutes ses clés mènent au même type → retombe sur `any`. Un `type` est **fermé** → il peut le déduire.

**Point à noter : question reposée à l'identique après l'explication** (« je n'ai pas compris pourquoi `interface` ne fait pas le travail »). Reprise nécessaire, en partant du mot-clé (déclaration ouverte démontrée par l'exemple de la double `interface Yeux`) plutôt que du comportement d'`Object.entries`. **C'est la seconde formulation qui est passée.**

**Repère posé** : boucler sur les clés (`Object.entries`, `Object.keys`, `Record`) → `type` · lire par propriétés nommées (props de composant) → `interface`. Complément de la convention S86, qui reste valable partout ailleurs.

---

### 2. Exercice de réparation — **non produit, cours et réponse donnés**

Demande de réécrire `Yeux` en combinant deux utility types. **Arrêt immédiat : « je n'arrive pas l'exercice, je ne crois pas l'avoir déjà fait ».** Exact — la **combinaison** d'utility types n'a été vue qu'une fois (S86), sur un énoncé très cadré. Briques acquises, assemblage non. Erreur de dosage de ma part.

Cours donné : l'empilement se lit de l'intérieur vers l'extérieur, comme des fonctions imbriquées. `Record<"OD" | "OG", Correction>` puis `Partial<...>`.
**Le cas rend la confusion S86 lisible** : la virgule sépare les deux tiroirs, l'union vit **dans** le premier — et `Omit<X, "a" | "b">` suit exactement la même structure.

`type Yeux = Partial<Record<"OD" | "OG", Correction>>` appliqué. **Typage vérifié au survol : fonctionne.**

**⚠️ Fausse annonce de ma part** : j'avais annoncé une erreur rouge attendue sur le `.map()` (raisonnement sur le `| undefined` ajouté par `Partial`). **Aucune erreur** — hypothèse non vérifiée présentée comme certaine. Corrigé en séance, son écran fait foi.

---

### 3. Exercice `BadgeStock` — interrompu par un client, partiellement produit

Terrain neuf (`Brouillon.tsx`), notions déjà vues uniquement. Deux composants demandés (`BadgeStock` recevant des props + `ListeStock` appelant), pour provoquer une erreur de typage au passage de props.

**Produit** : un seul composant faisant tout, `.map()` + `key` sur id stable, `<ul>`/`<li>`, tableau annoté, interface nommée.

**🔴 `etat?: string`** — union de valeurs non déclenchée, **3ᵉ occurrence** (S90, S96, S97). La notion est acquise depuis S80 ; le réflexe ne part pas. **Repère donné, à tester la prochaine fois** : devant tout `?: string` / `?: number`, se demander « n'importe quelle chaîne a-t-elle un sens ici ? » — nom de modèle oui, état/statut/variante/rôle non.

**🟡 Défaut non posé dans la déstructuration** (`{!m.etat && "disponible"}` dans le JSX, qui affiche l'inverse du besoin) alors que le mécanisme est sorti seul trois fois sur `Rubrique`. Traduction en libellé non faite.

**🔴 Architecture à un seul composant** → pas de passage de props → **l'erreur rouge cible de l'exercice n'a pas pu apparaître**. L'apprentissage principal n'a pas eu lieu.

**Correction complète non donnée** (lecture à la volée après interruption = zéro ancrage). **Exercice reconduit en ouverture de la prochaine séance.**

---

**Niveaux** : `interface` ouverte vs `type` fermé 🟡 (question reposée après la 1ʳᵉ explication) · `Partial<Record<...>>` 🔴 (**non produit, donné**) · repère `type` pour boucler sur les clés 🟡 · `useParams` — origine du nom dans le `path` 🔴 (récurrence S90) · `useParams()` vs `useParams` 🔴 · `string | undefined` 🟡 · union sur prop optionnelle 🔴 (3ᵉ occurrence) · prop optionnelle + défaut 🟡 (rechute sur terrain neuf) · `.map()` + `key` 🟢.

**⚠️ Mes erreurs** :
1. **Exercice posé sur un assemblage vu une seule fois** — combinaison d'utility types demandée en page blanche. Récurrence du §9 (exercice sur mécanisme insuffisamment enseigné).
2. **Erreur rouge annoncée comme certaine, inexistante** — hypothèse non vérifiée présentée comme un fait. Récurrence de la règle « qualifier la source ».
3. **Raccourci `Ctrl+Maj+\` posé en S93 sur un besoin auquel il ne répond pas** (circulation dans du JSX).
4. Première explication `interface`/`type` construite depuis `Object.entries` au lieu du mot-clé — a nécessité une reprise complète.

**🔄 Rotation** : **`useParams` — correspondance `path` ↔ déstructuration** revient en priorité haute (2 échecs, S90 et S97) · **union de valeurs sur prop optionnelle** (3 échecs) · `setInterval`/`clearInterval` · React Router Declarative (9 points).

**⏭️ Prochaine étape**

1. **Reprise de `BadgeStock`** en ouverture (~20 min) — court, cible la dette 🔴 qui résiste, et l'erreur de typage au passage de props n'a jamais été rencontrée.
2. **`useRef`** (+ `IntersectionObserver` version React) — séance fraîche, notion neuve.
3. Puis **Git branches + Pull Request** (séance dédiée), puis **Next.js**.
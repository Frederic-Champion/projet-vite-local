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

**📌 Point ouvert** : survol de `sphere` dans le `.map()` non fait. Probable `any` (`Object.entries` sur une `interface` sans signature d'index) et `oeil` typé `string` — _non vérifié_. Bon support pour un exercice de typage.

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

## Session 98 — `useRef` (deux usages) + règle d'ancrage

**Durée** : ~3h40 (dimanche, en deux blocs : 2h20 le matin, 1h20 le soir). Énergie bonne.

**🎹 Raccourci** : aucun en cours depuis l'abandon de `Ctrl+Maj+\`. Nouveau posé sur un besoin réel de la séance (union écrite deux fois à l'identique) : **`Ctrl+Maj+L`** (toutes les occurrences de la sélection d'un coup). Distinction donnée : `Ctrl+D` une par une · `Ctrl+Maj+L` toutes · **`F2` ne renomme que des symboles, jamais du texte dans une chaîne, une classe Tailwind ou un commentaire** — c'est le trou que `Ctrl+Maj+L` comble.

---

### 🎓 LE POINT DE LA SÉANCE — règle d'ancrage posée par Frédéric

**Constat qu'il a formulé** : rythme d'ouverture trop soutenu par rapport au rythme de reprise. Déclencheur : `NavLink` intégralement perdu 5 jours après son cours, `end` non ressorti.

**Sa nuance, meilleure que ma proposition** : j'avais proposé un **quota** d'une notion neuve par séance. Il l'a refusé à raison — « apprendre de nouvelles choses n'est pas le problème, il le faut pour tenir l'objectif ». Le problème n'est pas le débit d'entrée, c'est l'**absence de reprise**. **Règle retenue** : une notion neuve est **ouverte**, pas acquise ; priorité sur l'**ordre**, pas plafond sur le neuf.

**Acté et intégré aux instructions (§6)** : notion ouverte / cycle de reprise N+2 puis N+5 · demander son ressenti avant de reprendre une notion · révision éclair **15 min, 2-3 questions** · **deux exercices courts en ouverture**, à écrire · projet canonique par quinzaine (sources vérifiées : freeCodeCamp, The Odin Project).

**Écarté par lui** : le paragraphe « ratio clavier / discussion ». Constat sous-jacent à garder en tête malgré tout — beaucoup de cours et de questions de fond, peu de code écrit.

**📌 Chantier ouvert** : `audit-exercices-types.md` à **vérifier item par item** (une recommandation vérifiée en S79 s'est révélée fausse). ~30 min, à caler un jour sans énergie pour coder. Tant que ce n'est pas fait, ne pas s'appuyer dessus.

---

### 1. Reprise `BadgeStock` (exercice S97 interrompu) ✅

Refait seul avant la séance. **`etat?: "disponible" | "commande" | "rupture"` écrit d'emblée** — la dette 🔴 union de valeurs sur prop optionnelle, trois échecs depuis S80, **tombe**. Défaut dans la déstructuration, `switch` exhaustif, deux composants séparés, `key` sur id stable.

**Corrections, toutes appliquées** : une `interface` pour deux rôles (le `id?` facultatif trahissait le pliage de l'interface à la donnée alors que `key={m.id}` en dépend) → `Monture` + `type BadgeStockProps = Omit<Monture, "id">`, **`Omit` appliqué spontanément à un cas réel** · `<ul>` disparu à la séparation en deux composants · fonction pure sortie du composant + renommée (`testEtat` annonçait un booléen) · union nommée une fois en `type EtatStock`.

**⚠️ Mon erreur, relevée par lui** : consigne disant « **deux composants et une interface** ». Il a appliqué le chiffre à la lettre — comportement correct, contrainte fautive. **4ᵉ relevé consignes**, cette fois en chiffrant ce qui ne devait pas l'être.

**Niveaux** : union sur prop optionnelle 🟢 (**dette soldée**) · `Omit` sur un cas réel 🟢 · interface de props vs interface de donnée 🟡.

---

### 2. Révisions éclair

**`useParams` (matin)** 🟢 : ligne juste avec les parenthèses, nom repris à l'identique du `path`, narrowing identifié seul (« il faut tester avec un `if`, TS ne dira plus rien »). **Le point cassé en S90 et S97 ressort seul.** Précision donnée : le nom naît dans le `path`, pas « dans App.tsx ».

**`NavLink` (soir)** 🔴 : `className={isActive ? …}` — **la fonction manquante** (`isActive` n'existe pas sans le paramètre déstructuré). **`end` non ressorti**, y compris après reformulation ; a répondu sur la route `index`, qui traite un autre problème. Vu en S93, soit 5 jours. C'est ce résultat qui a déclenché la règle d'ancrage ci-dessus.

⚠️ **Ma question était incomplète** : piège du préfixe posé sans donner les URL, donc indevinable. Relevé par lui.

---

### 3. `useRef` — notion neuve

**Cours** : troisième tiroir (survit aux rendus, ne déclenche aucun rendu) · tableau variable locale / `useState` / `useRef` · critère « est-ce que ça apparaît à l'écran ? » · ne jamais lire une ref pour afficher · les **deux usages** (valeur vs élément DOM) · `.current` rempli par React quand `ref={}` est posé sur une balise · ref DOM jamais lue dans le corps du composant (`null` au 1er passage) · typage par le survol.

**Critère validé à l'oral** dès la question de contrôle (compteur non affiché → ref).

**Exercice 1 (guidé, focus sur un `<input>`)** ✅ **3/3 du premier coup** : type dans le tiroir, `null` initial, garde, `ref={champRef}`. Frontière du `return` nu posée à cette occasion — **légitime dans un handler et dans un effet** (personne n'attend de valeur), illégitime dans un composant ou une fonction utilitaire.

**Exercice 2** — **⚠️ énoncé fautif, relevé par lui avant de commencer** : « le compteur ne s'affiche jamais seul » n'imposait pas `useRef`, le compteur pouvant vivre dans le message. Objection juste, énoncé refait avec un bouton « Voir le total » qui rend la ref nécessaire.

Puis **question « j'utilise comment ? `ref.current.value` ? »** → confusion entre les deux usages. Repère donné : **`.current` contient ce que tu y mets** — un nœud DOM si `ref={}` est posé sur une balise, un nombre si on a écrit `useRef(0)`. Pas de `.value` sur une ref de valeur.

Code produit : ref juste, mais **deux booléens (`defaut`, `afficher`) pour un état à trois valeurs** → 4 combinaisons, message affiché au chargement, aucun retour possible à l'état vide. Correction donnée : un seul `useState("")` portant le message. **Correction complète demandée faute de temps (fils à nourrir) — pas de mesure valable sur ce point, retiré des niveaux à sa demande, à raison.**

**Contraste posé** : une **ref est à jour dès la ligne suivante**, un **state non** (photo figée du rendu). D'où : incrémenter avant de composer la phrase.

---

### 4. Page blanche `useRef` (soir, ~20 min)

Terrain neuf (`ExerciceUseRefBis`), les deux usages + champ contrôlé.

**✅ Produit seul** : les trois déclarations exactes et bien nommées (`champRef` DOM, `totalRef` valeur, `message` state), garde avant usage, deux refs de natures différentes sans confusion. **Question posée avant de coder** : plusieurs `useRef` par composant ? (oui, comme `useState`).

**🔴 Champ non contrôlé** — lecture **et** écriture par le DOM (`champRef.current.value`, puis `= ""` pour vider). JS pur greffé dans React : React ignore le contenu du champ. **Rechute sur un acquis S79.** Le critère est le point à travailler : **une ref DOM sert à ce que React ne sait pas faire (`focus`, `scrollIntoView`, mesurer) ; toute donnée passe par le state.**

**🔴 « Saisis un modèle. » branché sur `onClick` du champ** au lieu d'un test dans `ajouter` → message dès le clic dans l'input, et le total compte les ajouts vides (pas de `return`).

**🟡** : `focus()` avant le vidage (ordre inverse) · `if (!totalRef.current) return;` = `return` nu silencieux sur panier vide · message hors du `<p>` et sans garde · `useState<string | number>` inutile · `type="submit"` hors `<form>`.

**Niveaux** : `useRef` — deux usages, déclaration et typage 🟢 · **frontière state / ref DOM 🔴** · champ contrôlé 🔴 (rechute S79) · `useRef` DOM appliqué 🟡 (guidé + page blanche partielle).

---

**🆕 Notions ouvertes ce jour** (cycle de reprise à tenir) : `useRef` valeur · `useRef` DOM · frontière state / ref DOM. **Reprise prévue N+2.**

**🔄 Rotation** : **`NavLink` + `end` passe en priorité haute** (🔴 à froid). Toujours dedans : React Router Declarative (8 autres points) · `setInterval`/`clearInterval`. **Sortis** : `useParams` + correspondance `path` (🟢 seul) · union de valeurs sur prop optionnelle (dette soldée).

**⚠️ Mes erreurs** :

1. **Consigne chiffrant les types à produire** (« deux composants et une interface ») — a induit une modélisation fausse. 4ᵉ occurrence consignes.
2. **Énoncé d'exercice n'imposant pas la notion visée** — relevé par lui avant de commencer.
3. **Question de révision éclair incomplète** (piège du préfixe sans les URL).
4. **Quota de notions neuves proposé** — mauvais diagnostic, corrigé par sa nuance.

**⏭️ Prochaine étape — demain, ~1h30**

1. Deux exercices courts en ouverture (nouveau format) : **`NavLink` + `end`**, et **frontière state / ref DOM** (reprise de la page blanche de ce soir, champ contrôlé).
2. Révision éclair 15 min, 2-3 questions, sur les points React Router jamais rejoués (`state`, `<Navigate>`, `replace`).
3. **Pas de notion neuve.** `IntersectionObserver` version React repoussé — il ajouterait une transposition par-dessus un `useRef` d'un jour.
4. Ensuite : **Git branches + Pull Request** (séance dédiée), puis **Next.js**.

## Session 99 — Reprises : `useRef`, `NavLink`, navigation React Router

**Durée** : ~1h45 (lundi). Énergie bonne. **Première séance au nouveau format** (deux exercices courts en ouverture, révision éclair étendue, zéro notion neuve).

**🎹 Raccourci** : `Ctrl+Maj+L` — pas encore d'occasion, **reconduit**.

---

### 1. Exercices d'ouverture — nouveau format ✅

**`NavLink` + `end`** (🔴 la veille) : **`end` ressorti seul et posé uniquement sur le lien qui en a besoin.** Structure de la fonction juste (`({ isActive }) => …`).
**🟡 Corps-bloc au lieu de corps-expression** : `=> {isActive && "font-bold"}` — les accolades ouvrent un bloc d'instructions, la valeur est calculée puis jetée, la fonction renvoie `undefined`. Même famille que le `return` nu. Piège spécifique au JSX : les accolades de `className={}` disent « voici du JS » ; une seconde paire ne les prolonge pas.
Point secondaire : `className` attend une **chaîne** → ternaire avec `""`, pas `&&` (le `&&` est pour afficher ou non du JSX).

**Frontière state / ref DOM — 5/5 à l'oral**, critère formulé seul (« si ça touche au visuel, React doit être informé »). Affinage donné : le focus et le défilement touchent au visuel mais **ne s'écrivent pas en JSX** — c'est ça le critère. **Test opérationnel : « est-ce que je peux l'écrire dans mon JSX ? »** Le cas discriminant (vider un champ = donnée, donc state) est sorti juste.

---

### 2. Page blanche `useRef` — reprise N+1 ✅

Réécrite entièrement. **Les deux 🔴 de la veille corrigés seuls** :

- **champ contrôlé** (`value` + `onChange`), vidage par `setChamp("")` et focus par la ref — la frontière s'est déclenchée au clavier, pas seulement à l'oral ;
- **early return de validation** dans le handler, avec le `return` qui protège l'incrément.

**Portée d'une garde** comprise et appliquée : l'incrément remonté **avant** la garde du focus (le comptage est la donnée, le focus un confort), `?.` substitué à la garde sur une instruction unique.

Rangement des trois exercices `useRef` dans un fichier avec composant de regroupement — bonne application de « 1 fichier = 1 exercice » à une famille.

**⚠️ Ma consigne, encore** : « je clique avec le champ vide » ne disait pas **où**. Il l'a lue comme un clic dans l'input, deux fois de suite. **5ᵉ occurrence cette semaine, toujours la même cause : j'écris l'intention au lieu du geste.**

---

### 3. Révision éclair React Router (points S93 jamais rejoués)

**`replace`** 🟢 : repère juste et reformulé seul (éviter la chaîne retour → page invalide → re-redirection). **Sa remarque, juste** : reconnu à la lecture du mot ≠ produit seul en contexte — la mesure reste à faire.

**`<Navigate>` vs `useNavigate`** 🟢 : critère exact (action supplémentaire, message, délai → `useNavigate`). Avantage non cité, redonné : `<Navigate>` **n'affiche jamais le contenu protégé**, même une fraction de seconde.

**`state`** — **critère 🔴, mécanisme 🟡** : a décrit ce qu'il avait codé en S93 sans retrouver la règle de décision (« si quelqu'un ouvrait cette URL demain, cette information aurait-elle un sens ? »). Deux confusions levées : le `state` de React Router ≠ `useState` · pas de « double `useNavigate` » — un seul appel, une fonction appelée autant de fois que voulu. Les deux lignes du circuit redonnées (`{ state: { … } }` en option de `naviguer`, `location.state?.message` à l'arrivée).

**Question posée : différence `<Navigate>` / `<Link>` ?** → `<Link>` produit un `<a>` et attend un clic · `<Navigate>` ne produit aucun DOM et part au rendu. **Repère : `<Link>` = l'utilisateur décide · `<Navigate>` = le code décide.**

---

### 4. Exercice `ExerciceNavigation` — commencé, **non terminé**

**Produit seul, sans modèle** : routes imbriquées avec `<Route index>` et chemin relatif, `useParams` + `find` + garde, `<Link>` en template literal avec `key`, interface de donnée. **Mécanisme revenu « à 80 % » selon lui**, une seule vérification dans `App.tsx` pour le branchement.

**Reste à faire** : `<Navigate>` sur identifiant inconnu (a mis un `<p>`, comportement correct mais hors consigne) · bouton « Enregistrer » + circuit `state` complet.

**📌 Demande explicite** : **revoir `<Outlet>`**, non mémorisé. Noté qu'il n'apparaît pas dans son exercice parce que sa route parente n'a pas d'`element` — simple regroupement de chemins, sans layout. Terrain idéal pour la reprise (ajouter un layout à cette section).

---

**Niveaux** : `useRef` (3 usages) 🟢 · frontière state / ref DOM 🟢 (oral **et** clavier) · champ contrôlé 🟢 · early return de validation dans un handler 🟢 · portée d'une garde 🟢 · `end` 🟢 · fonction dans `className` 🟡 · `replace` 🟢 · `<Navigate>` vs `useNavigate` 🟢 · `<Navigate>` vs `<Link>` 🟢 · `state` — critère 🔴 / mécanisme 🟡 · routes imbriquées + `index` 🟢 · `<Outlet>` 🔴 (oublié).

**🔄 Cycle de reprise — le format fonctionne.** Deux notions rejouées à N+1, toutes deux redressées : `useRef` (🔴 → 🟢) et `NavLink`/`end` (🔴 → 🟢). Sans la reprise, elles étaient perdues.
**À programmer** : `useRef` **N+5 → ~S103** · `NavLink` **N+5 → ~S103** · `state` et `<Outlet>` **N+2 → séance suivante** (déjà au programme).

**⚠️ Mes erreurs** : consigne écrivant l'intention au lieu du geste (« je clique avec le champ vide ») — **5ᵉ occurrence de la semaine**, et la seule qui reste vraiment récurrente.

**⏭️ Prochaine étape (~demain)**

1. **Finir `ExerciceNavigation`** : `<Navigate>` + circuit `state` complet. ~20 min.
2. **`<Outlet>`** — reprise demandée, en ajoutant un layout à cette même section. Terrain déjà en place.
3. Puis **Git branches + Pull Request** (séance dédiée), puis **Next.js**.

## Session 100 — Reprises React Router : `<Navigate replace>`, `state`, `<Outlet>`

**Durée** : ~2h15 (mardi). Énergie bonne. Zéro notion neuve.

**Ressenti en ouverture** : `state` flou · `<Outlet>` très flou (« je vois le fonctionnement, la mise en place je m'en souviens à peine »).

**🎹 Raccourci** : `Ctrl+Maj+L` — peu utilisé, **reconduit**.

---

### Révision éclair (3 questions)

- **`setInterval` / `clearInterval`** 🟢 : écrits justes dans un `useEffect`, identifiant capturé. Était 🔴 en S92 et S96.
- **Critère de nettoyage d'un effet** 🟡 : cas reconnus, règle non formulée (**3ᵉ fois**) → cours complet donné (règle de la trace active + tableau démarrer/arrêter + deux moments du nettoyage). Appliqué ensuite 3/3 sur trois cas, puis **au clavier en fin de séance** (`clearTimeout`). Reste à l'**énoncer** seul.
- **Conversions aux frontières** 🟢 : `e.target.value` toujours chaîne, `Number()` à l'entrée. Précision : le résultat est `"31"`, la chaîne.
- **Déstructuration de tableau** 🟢 : crochets du premier coup, sans index.

---

### 1. Finir `ExerciceNavigation` (guidé)

- **`<Navigate>` vs `useNavigate`** : question posée avant d'écrire, critère redonné. `<Navigate replace>` 🟢 (`replace` ajouté après correction).
- **`<Outlet>` natif ou lié à `useParams` ?** → deux outils indépendants : `<Outlet>` = **où** afficher l'enfant, `useParams` = **quelle valeur** dans l'URL.
- **`state`** : 1ᵉʳ jet transportant une phrase figée + `?.` sur `location` au lieu de `state`. **Point « donnée brute, pas phrase » non compris à la 1ʳᵉ explication** → reformulé par contraste (qui envoie / qui rédige) et analogie ordonnance, appliqué ensuite. 🟢
- **Layout + `<Outlet>`** en étapes numérotées 🟡. Faute de frappe dans le `to` trouvée seul après indice. Test « `<Outlet>` commenté » : layout affiché, enfants absents — compris.

### 2. Page blanche `<Outlet>` sur terrain neuf ✅

Section montures avec layout + `<Outlet>` + `index` + `useParams` + `find` + `<Navigate>`, **sans rouvrir l'exercice précédent**. Circuit `state` ajouté spontanément. `replace` à nouveau oublié au 1er jet.

**Bonus conçu et écrit seul** (question posée : « est-ce faisable en React ? ») : effacement du message après 3 s → copie de `location.state` dans un `useState` avec setter, test dans l'effet, `setTimeout` + `clearTimeout`. Obstacle expliqué : `location.state` appartient au routeur, on ne peut pas l'effacer directement. Seul écart : dépendance manquante (`[montureSave]`).
**Limite F5 constatée** (message qui revient). Remède `naviguer(location.pathname, { replace: true })` non appliqué.

---

**Niveaux** : `<Outlet>` 🟢 (**« très flou » en ouverture, produit en page blanche 1h plus tard**) · `<Navigate replace>` 🟢 (`replace` oublié deux fois au 1er jet) · `<Navigate>` vs `useNavigate` 🟢 · circuit `state` + donnée brute 🟢 · copie du `state` + effacement temporisé 🟢 · critère de nettoyage 🟡 · `setInterval` / `clearInterval` 🟢 · conversions 🟢 · déstructuration de tableau 🟢.

**🎓 Règles posées par Frédéric**

- **Nommage libre dans les exercices.** Claude peut proposer une convention quand elle apporte quelque chose, mais ne renomme pas ce qu'il a choisi. Les conventions strictes valent pour un projet sérieux.
- **Ne pas exiger ce qui n'est pas l'objet de l'exercice** (ex. : interface sur un tableau en dur dans un exercice de routage).
- Un simple oubli reconnu comme tel n'a pas à être consigné.

**⚠️ Mes erreurs**

1. **Affirmé de mémoire que `state` ne survit pas au F5 — faux**, contredit par son écran. Règle corrigée : `state` survit au Précédent/Suivant **et au F5 dans le même onglet** (entrée d'historique conservée) ; pas au lien partagé ni au nouvel onglet. _Source : observation + reconstruction MDN `History.pushState()`, non vérifiée dans la doc._
2. Corrections de nommage insistantes sur des exercices.

**🗑️ Instruction obsolète** : §7 React Router, ligne `state` — « survit au retour arrière, pas au rechargement » est **faux** (même erreur dans les entrées S91 et S93).

**🔄 Cycle de reprise** : `state`, `<Outlet>`, `<Navigate replace>` rejoués → **N+5 ≈ S105**. `useRef` et `NavLink` toujours attendus **≈ S103**.
**📌 À travailler (demande explicite)** : **`location.pathname`**, avec le nettoyage du `state` par `replace` sur la même adresse.

**Rotation** : `setInterval` / `clearInterval` **sort**. Restent : critère de nettoyage (à énoncer) · React Router Declarative (points non rejoués : montage, `path`/`to`, `<Link>` vs `<button>`, 404).

**⏭️ Prochaine étape**

1. **Git branches + Pull Request** — séance dédiée, longue et fraîche.
2. Puis **Next.js**.
3. En ouverture des prochaines séances : reprises `useRef` et `NavLink` (≈ S103), `location.pathname` + nettoyage du `state`.

## Session 101 — Nettoyage du `state` par `pathname` + Git branches et Pull Request + cadrage Memory Card

**Durée** : ~3h (mercredi, 2h prévues puis prolongées). Énergie bonne.

**🎹 Raccourci** : `Ctrl+Maj+L` — non utilisé, **reconduit**.

---

### Révision éclair (3 questions)

- **Critère de nettoyage d'un effet** 🟢 : règle **énoncée seule, sans exemple** (« reste-t-il une trace après ? »). Précision donnée : trace **active** (quelque chose tourne ou écoute). Sort de rotation.
- **404 écrite en premier** 🟡 : bonne page, mais explication hors sujet. L'ordre n'intervient pas, React Router garde la route la plus spécifique.
- **`margin: auto` vertical** : centrage horizontal/vertical 🟢 · `flex` sur le parent 🟢 · **raison 🔴** (attribuée à la hauteur de la div ; c'est la spécification qui calcule `margin: auto` vertical à zéro en flux normal).

---

### 1. Reprise `location.pathname` + nettoyage du `state` ✅

Sur l'exercice montures (`ListeMonturesExo`). Second effet séparé, garde sur `location.state` justes du premier coup. Premier jet : adresse écrite en dur et sans `replace`. Corrigé avec `naviguer(location.pathname, { replace: true })`. Dépendances complétées. **3 tests passés** (disparition après 3 s, F5, Précédent/Suivant).

**Question posée** : `pathname` ne sert-il qu'à ça ? → usages donnés (masquer selon la page, `startsWith` pour une section, dépendance d'effet pour réagir à un changement de page, se désigner soi-même).

**Niveaux** : `location.pathname` 🟢 · nettoyage du `state` par `replace` sur la même adresse 🟢.

---

### 2. Git branches + Pull Request — dette la plus ancienne du parcours

**⚠️ Premier passage raté de ma part** : principe en quelques lignes puis liste de commandes sans explication. **Arrêt de Frédéric** (« tu me dis de taper du code sans expliquer ce que ça fait »). Repris depuis zéro : commit = photo, `main` = suite de photos, branche = deuxième suite, lecture d'une commande Git morceau par morceau, **une étape à la fois avec son pourquoi**. Ce format a fonctionné jusqu'au bout.

**Cycle complet fait en guidé sur `projet-vite-local`** : branche → commit → publication → PR → relecture (commentaire _Pending_ puis _Submit review_) → fusion → suppression de la branche (GitHub puis locale) → pull sur `master`.

**Reformulation juste de sa part** : un fichier créé sur une branche n'existe pas sur la branche principale, et on peut abandonner l'essai. Nuances données : une branche ne copie rien (historique partagé) ; pas de retour en arrière nécessaire, `master` n'a jamais bougé.

**Questions posées** : équivalents souris (sélecteur de branche dans la barre d'état, Publish Branch) → **fait à la souris au quotidien, savoir nommer la commande** · utilité seul (essais, chantiers parallèles, relecture de son propre travail, Checks, visibilité recruteur).

**📌 Constaté** : `projet-vite-local` utilise **`master`**, pas `main`. Non renommé.

**🎓 Décision de Frédéric** : Memory Card se fera **sur une branche de `projet-examen-blanc`**, fusionnée à la fin — reprise du cycle en conditions réelles.

**Niveaux** : branches (principe, création, changement, suppression) 🟢 · cycle PR complet 🟡 (**un seul passage guidé, notion ouverte**).

**Registre** : **Git branches + PR sort de `dettes-apprentissage.md`** (enseignée) → dette chaude ici jusqu'à la reprise autonome sur Memory Card.

---

### 3. Questions de fond et cadrage du projet canonique

- **Les tests** : cours d'aperçu (unitaire / composant / end-to-end, Vitest, React Testing Library, Playwright). Programme d'après 9 mois, **pas une dette**.
- **`useOutletContext`** : fait passer une valeur à travers un `<Outlet>`, qui ne transmet aucune prop. **Mentionné, non enseigné, non nécessaire** aux projets prévus.
- **Trouver une API** : répertoire **public-apis** (colonnes Auth / HTTPS / CORS), mot-clé **`free fake REST API`** plutôt que le thème, lire la liste des catégories dans la doc. Recherche « API Lunettes » infructueuse : les catalogues optiques sont privés.

**🎓 Ordre décidé avec lui** : **Memory Card → Shopping Cart** (ordre du parcours Odin). Proposition acceptée comme cap : Memory Card → séance coercion + hoisting → Next.js, sans attendre de solder tout le registre (aucune dette ne bloque Next.js).

**Énoncé Memory Card vérifié sur theodinproject.com** (et non de mémoire). Adaptations : page routée dans `projet-examen-blanc` sur branche · **pas de déploiement** · **pas de tests**.
**Données retenues** : DummyJSON, **10 cartes = 5 montres femme + 5 montres homme**, récupérées par **`Promise.all`** (dette d'entretien, jugée floue — réactivée par la pratique). `sunglasses` écartée (5 articles seulement).

**Structure mise en place en fin de séance** : branche, page, route, entrée d'accueil, score et meilleur score en dur.

---

**⚠️ Mes erreurs**

1. **Git : commandes données sans expliquer ce qu'elles font** — arrêt net. Correctif : pour un outil entièrement neuf, le modèle mental d'abord, puis **une commande à la fois avec son pourquoi**.
2. **Énoncé Memory Card donné de mémoire avec des écarts** (12 cartes présentées comme imposées, mélange au montage oublié). Corrigé après vérification à sa demande.
3. **`sunglasses` recommandée sans vérifier le nombre d'articles.**

**🔄 Cycle de reprise**

- **`useRef`** : plus situé en fin de séance (« je ne sais même plus à quoi ça sert »), **revenu à la relecture de ses cours**. Noté 🟢 en S99 : compris en séance ≠ ancré, même après une reprise à N+1. **Reprise maintenue en S103, priorité haute.**
- `NavLink` ≈ S103 · `state`, `<Outlet>`, `<Navigate replace>` ≈ S105 · **cycle Git PR** → rejoué sur Memory Card.

**Rotation** : critère de nettoyage **sort**. Entrent : **`margin: auto` vertical (raison)** · **404 et spécificité des routes**. Restent : React Router Declarative (montage, `path`/`to`, `<Link>` vs `<button>`).

**⏭️ Prochaine étape**

1. **Memory Card, séance 1** : `Promise.all` sur les deux catégories de montres, grille de cartes avec chargement et erreur, CSS. Commits sur la branche.
2. **Séance 2** : clic, score réel, meilleur score, mélange (au montage et au clic — le mélange aléatoire d'un tableau est **neuf**, cours court au moment venu). Puis PR et fusion en autonomie.
3. **S103** : reprises `useRef` et `NavLink` en ouverture.
4. Puis séance **coercion + hoisting**, puis **Next.js**.

## Session 102 — Memory Card : `Promise.all` et récupération des montres

**Durée** : ~2h30 (mercredi). Énergie bonne. **Séance écourtée en urgence, sans clôture** — entrée rédigée le lendemain.

**🎹 Raccourci** : `Ctrl+Maj+L` — pas d'occasion, **reconduit**.

---

### ⚠️ Format de révision éclair — refusé par Frédéric, corrigé

**Deux des trois questions posées étaient celles de la veille**, à l'identique. Relevé immédiatement (« pas normal »). Au-delà de la répétition, le fond du reproche porte sur le format : **des devinettes et des définitions, jamais de code**. Or ses trous sont au clavier, pas à l'oral — une révision sans code ne mesure rien.

**Nouveau format proposé et accepté** (à intégrer au §6, point 1) : 2 à 3 items, **tous avec du code**, en trois formes — **écrire** (3 à 15 lignes à froid, résultat attendu donné), **déboguer** (code cassé fourni), **prédire** (dire ce que ça affiche). Un « pourquoi » ne se pose jamais seul, uniquement sur du code qu'il vient d'écrire ou de lire. **Une réponse juste formulée avec ses mots est une réponse juste.** Jamais la même question d'une séance à l'autre : reprendre une notion, c'est la même notion sur **un autre code**.

**Points de révision malgré tout** : `<Link>` vs `<button>` 🟢 (**sort de rotation**) · spécificité des routes 🟡 (bonne réponse, explication hors sujet) · `margin: auto` vertical 🔴 sur la raison (2ᵉ fois) → règle donnée : la spécification calcule `margin: auto` vertical à zéro **en flux normal**, faute d'espace restant calculable ; flex et grid en fabriquent un. **Les deux sortent de rotation** (posées deux jours de suite, ce qui n'est plus de la rotation).

---

### 1. Deux exercices de typage ✅

- **`Record<Marque, number>`** 🟢 juste du premier coup — **la dette `Record` (virgule vs union) tombe.**
- **Interface `Verre` + signature** 🟢 : union de valeurs sur prop optionnelle, défaut dans la déstructuration, annotation sur ce qui **arrive**. Trois pièges passés d'un coup.

---

### 2. Memory Card — mise en place de la branche et du fetch

Structure (branche, page, route, entrée d'accueil) posée la veille en 15 min ; le projet commence réellement ici.

**Cours `Promise.all` demandé** (rappel + comparaison `await` / `.then`) : séquentiel vs parallèle, `fetch` lance et `await` attend, un tableau entre et un tableau sort dans le même ordre, deux passages (réponses puis `.json()`), `res.ok` + `throw` toujours nécessaires.

**Trois questions de fond posées** :

- _pourquoi les `fetch` sont-ils dans un tableau ?_ → un seul argument, un conteneur pour un nombre variable de Promises.
- _est-on obligé de déstructurer en deux `const` ?_ → non, mais `const [resMontres] = ...` ne récupère que la position 0 et **perd la seconde réponse en silence**. Alternative : garder le tableau et travailler avec `some` / `map`.
- _`throw new Error` et `e instanceof Error`_ → cours complet donné : `throw` accepte n'importe quelle valeur, d'où `catch (e: unknown)` et le narrowing par `instanceof`. Question de suite (« faut-il stocker `const stockage = new Error` ? ») → confusion classe / instance levée : `instanceof` compare à la **classe**, pas à un objet.

**✅ Écrit seul** : les deux `Promise.all`, déstructuration par position, `res.ok` sur les deux réponses, `instanceof` dans le `catch`, `finally`, fusion des deux listes par double spread dans **un seul** state, `useState<Montre[]>` typé, `interface Reponse` appliquée au résultat de `.json()` (annotation portée sur **ce qui arrive** 🟢).

**Corrections** : `chargement` initialisé à `false` → flash de page vide avant le message de chargement (au montage, la page **est déjà** en train de charger) · `dataH["products"]` en crochets alors que la clé est écrite en dur (les crochets servent quand le nom est **dans une variable**) · `setErreur("")` inutile dans un effet qui ne tourne qu'une fois.

**🌟 A trouvé `limit` seul dans la doc DummyJSON** après que j'aie recommandé `?limit=5` sans l'avoir vérifié. Capture de la page officielle à l'appui. Même réflexe que sur le nom de paquet React Router.

**Question posée : intérêt de `git commit` sans `git push` ?** → cours donné (commit local, push publie). Contrainte deux machines rappelée : **push obligatoire avant de changer de poste**.

**Niveaux** : `Promise.all` 🟢 · `instanceof` + `unknown` 🟡 (enseignés, plus donnés) · `throw new Error` 🟢 · annotation d'un résultat de `.json()` 🟢 · `Record` 🟢 (**dette soldée**) · union sur prop optionnelle 🟢 (confirmée) · état initial de chargement 🟡.

**⚠️ Mes erreurs** :

1. **Deux questions de révision éclair identiques à celles de la veille.**
2. **Format de révision sans code**, qui ne mesure pas ce qui le fait échouer.
3. **`?limit=5` recommandé sans vérification** — corrigé par sa capture de la doc.

---

## Session 103 — Reprises N+5 (`useRef`, `NavLink`, `.then`) + Memory Card : mélange et grille

**Durée** : ~2h30 (jeudi). Énergie bonne.

**🎹 Raccourci** : `Ctrl+Maj+L` — toujours pas d'occasion, **reconduit**.

**Ressenti en ouverture** (demandé) : `useRef` « à réactiver de mémoire » · `NavLink` « plutôt bien en tête ».

---

### 1. Reprises — l'écart ressenti / mesuré, dans les deux sens

**`useRef`, exercice complet en page blanche** (deux usages + champ contrôlé) : **code juste, mais 25 min pour 15 annoncées, avec recherche en mémoire.** Les deux 🔴 de la fois précédente corrigés seuls : **champ contrôlé** et **early return de validation** protégeant l'incrément. Reste 🟡 : le signal est l'**effort**, pas le résultat.
Corrections : `useEffect(() => {}, [])` vide (réflexe de frappe) · **garde `if (myRef.current !== null)` englobant le comptage et le message**, qui ne dépendent pas de la ref → une garde protège **la seule instruction qui en a besoin**, d'où `myRef.current?.focus()` · `return setMessage(...)` mélangeant sortir et renvoyer.

**`NavLink`, question courte** 🔴 — **et il le sentait acquis.** A reconstruit à la main avec `useLocation` ce que `NavLink` fait seul, avec un ternaire sur `location.pathname` (chaîne non vide, donc toujours vrai : les trois liens en gras partout). **La fonction dans `className` n'est pas ressortie**, 2ᵉ échec à froid. Réécriture après rappel : fonction juste sur les trois, mais **`end` posé sur les trois liens** — appliqué mécaniquement, pas par le raisonnement du préfixe. Repère donné : _quelle autre adresse commence par celle-ci ?_ Si aucune, pas de `end`.

**Révision éclair `.then`** 🔴 — **« je n'y arrive pas »**, jamais écrit lui-même, seulement lu. Cours complet donné : `.then` renvoie une nouvelle Promise, d'où le **`return res.json()`** obligatoire · correspondance terme à terme avec `await` · `throw` identique · `.catch` / `.finally` · piège du corps-bloc sans `return` (même famille que son `className` de `NavLink`). Réécrit ensuite. **Reste en rotation à sa demande — non ressorti seul.**

**🎓 L'information de la séance** : le ressenti ne prédit pas la restitution, **dans les deux sens**. `useRef` annoncé flou est sorti juste ; `NavLink` annoncé solide était perdu. Le cycle de reprise a rattrapé trois notions qui auraient été perdues.

---

### 2. Memory Card — mélange et grille

**Question posée : quel outil pour faire varier les positions ? `Math.random` avec la position ?** → non : tirer un index par carte produit doublons et oublis. C'est un **réordonnancement**, pas un tirage. Cours **Fisher-Yates** donné (parcours de la fin vers le début, échange avec un index tiré parmi les positions non encore fixées, `(i + 1)` pour inclure `i`, copie obligatoire sinon React ne voit pas le changement). Raccourci `sort(() => Math.random() - 0.5)` écarté et expliqué (distribution biaisée).

**🎓 Question importante : « je ne sais même pas comment j'aurais pu la trouver seul »** → réponse : personne ne réinvente Fisher-Yates. Réflexe à installer : **quand une opération n'existe pas nativement sur un tableau, elle a un nom** — on cherche `javascript shuffle array`, puis on vérifie pourquoi l'implémentation retenue est la bonne.

Deux questions de suite : faut-il repasser la boucle ? (non, chaque tour fixe définitivement une position) · remélange-t-on le tableau précédent au clic ? (oui, même fonction, avec `(prev) =>`).

**✅ `melanger` écrite seule et juste** après le déroulé à la main. Placement corrigé : fonction **pure** → hors du composant.

**Grille et cartes produites** : `<button>` (choix juste, la carte déclenche une action), `key` sur id stable, `alt` sur l'image, `gap`, dégradé, `hover`, mélange appliqué dès la réception des données.

**🔴 Logique de score à reprendre en ouverture** : dans `onAjouter`, l'`id` est rangé dans la ref **avant** le test `some`, donc le score retombe à 0 à chaque clic. L'ordre (tester → compter → mémoriser) est le cœur du jeu. Non traité faute de temps.

**Niveaux** : `useRef` 🟡 (juste, mais effort long) · portée d'une garde 🟡 (rechute) · champ contrôlé 🟢 · `NavLink` + fonction dans `className` 🔴 (2ᵉ échec à froid) · `end` 🔴 · `.then` 🔴 (donné) · Fisher-Yates 🟢 (écrit seul après cours) · fonction pure hors composant 🟡 · `<button>` vs `<Link>` 🟢.

**🎓 Règle posée par Frédéric** : la présentation visuelle des exercices lui appartient — cadrer le **comportement**, pas l'habillage.

**🔄 Cycle de reprise**

- **`NavLink` + `end`** → reprise **rapprochée (N+2)**, priorité haute. Échec à froid avec ressenti d'acquis.
- **`useRef`** → **N+5 ≈ S108**, toujours ouvert.
- `.then` **reste en rotation**.
- `state`, `<Outlet>`, `<Navigate replace>` ≈ S105 · cycle **Git PR** → à rejouer sur la fusion de la branche Memory Card.

**🔄 Rotation** : **entre** — `.then` (fetch classique et `Promise.all`) · `NavLink` / `end`. **Sortent** — `<Link>` vs `<button>` · `margin: auto` vertical · spécificité des routes (posés deux jours de suite). Restent : React Router Declarative (montage, `path`/`to`).

**⚠️ Mes erreurs** : aucune relevée par lui cette séance. Point d'attention maintenu : ne pas cadrer la présentation quand l'objet de l'exercice est le comportement.

**⏭️ Prochaine étape**

1. **Ouverture : `NavLink` + `end`** (N+2, ~10 min, sur un autre code).
2. **Memory Card, fin du jeu** : ordre tester → compter → mémoriser dans `onAjouter`, remise à zéro de la mémoire des cartes cliquées, meilleur score conservé, message de victoire à 10. Puis **PR et fusion en autonomie** (reprise du cycle Git).
3. Puis **Shopping Cart** (Odin), séance **coercion + hoisting**, puis **Next.js**.

## Session 104 — Révisions `.then` + fin de Memory Card + Pull Request en autonomie

**Durée** : ~2h30 (vendredi). Énergie bonne, séance prolongée à sa demande.

**🎹 Raccourci** : `Ctrl+Maj+L` — **commence à servir**, reconduit.

**Demande d'ouverture** : au moins une partie des révisions sur `.then`.

---

### 1. Révision éclair — **premier vrai test du nouveau format** (~1h, trop long)

**Item 1 — Prédire (`.then`)** 🔴 : chaîne avec `res.json();` sans `return`. A répondu « affiche le titre, le catch est ignoré ». La console affiche **`échec`** : `data` vaut `undefined`, `data.title` lève une `TypeError`, que le `.catch` attrape. Piège reconnu et compris après coup.

**Item 2 — Écrire (`.then`)** : a **demandé lui-même** un fetch simple avant la version `Promise.all` pour vérifier qu'il suivait. Bonne démarche, accordée.

- **Fetch simple** 🟢 : `return res.json()` posé, `throw` dans le premier `.then`, `.catch` et `.finally` en fin de chaîne, corps-expression bien employés. `async` résiduel.
- **Version `Promise.all`** 🟡 : la partie difficile est juste — **déstructuration dans le paramètre** `([resM, resV]) =>` et **`return Promise.all([...])`** pour enchaîner. A dérapé en fin de chaîne : `Promise.all(setArticles(...))`, réflexe « deux données donc `Promise.all` ». Repère donné : **on n'écrit `Promise.all` que quand on lance plusieurs opérations asynchrones à attendre** — ici les deux `fetch`, puis les deux `.json()`, et plus rien après.

**Cours `instanceof Error` redonné** à sa demande (« pas encore clair ») : reconstruit depuis le problème (`throw` accepte n'importe quoi → `e: unknown` → TS interdit l'accès) et non depuis la syntaxe. Narrowing rattaché à `if (!client)`. Analogie marque / exemplaire pour la distinction classe / instance.

**Item 3 — Déboguer (React)** 🔴 **trois erreurs, aucune repérée** : composant avec `setTotal(montures.length)` dans le corps.

- **Setter dans le corps** non repéré → boucle infinie. Famille la plus récurrente du parcours.
- **State vs donnée dérivée** non repéré : `total` se calcule depuis une prop, il ne se stocke pas. Le réflexe « déplacer dans un `useEffect` » aurait aussi été faux.
- **🔴 Régression introduite** : a modifié la signature correcte `{ montures }: { montures: Monture[] }` en `{ montures }: Monture[]`. **4ᵉ occurrence** de l'annotation portée sur ce qui est extrait au lieu de ce qui arrive.

---

### 2. Reprise `NavLink` + `end` (N+2) 🟡

**Progrès réel** : la **fonction** dans `className` est ressortie **seule** (🔴 deux jours avant), déstructuration juste, `end` non posé partout.

**🔴 Le `end` reste faux** : posé sur le lien de section (`/mon-compte/commandes`), ce qui l'éteint dès qu'on ouvre `/mon-compte/commandes/42`. Les deux tests de l'énoncé échouaient. A aussi écrit un 4ᵉ lien avec `:id` dans un `to` (motif réservé au `path`).

**Objection fondée de sa part** : « pas compris, 2 et 3 sont presque identiques ». Juste — la différence n'est pas dans l'adresse. **Reformulation qui est passée** : ce lien désigne-t-il **une page** ou **une section** ? Page → `end` (il doit s'éteindre quand on descend plus profond) · section → pas de `end` (il doit rester allumé). Tableau des trois URL donné à l'appui.
Réécriture non faite, séance basculée sur Memory Card à sa demande (1h déjà consommée en révisions).

---

### 3. Memory Card — jeu terminé et fusionné ✅

**`onAjouter` restructuré seul** : le test `some` remonté **avant** la mémorisation (le bug qui remettait le score à zéro à chaque clic), puis **early return** séparant les deux branches — perdre (score 0, mémoire vidée) ou marquer (score, record, mémorisation). `setBest(best)` inutile supprimé, `(prev) =>` posé sur le mélange.

**Fin de partie écrite seule** : ternaire grille / écran de victoire, bouton Rejouer remettant score, mémoire et mélange à zéro, `best` préservé.

**Corrections** : le `10` en dur → `score === dataMontre.length` (nombre magique, casse si `limit` change) · classes Tailwind inexistantes (`from`, `to`, `blue-100`) → **repère permanent réappliqué : une classe mal orthographiée ne produit ni erreur ni warning** · handler de 3 instructions dans le JSX → fonction nommée.

**🌟 Deux désaccords exprimés, tous deux fondés** :

1. **`some` vs `includes`** — sa version est correcte et lisible, `includes` n'était qu'une préférence. Retiré.
2. **`dataH["products"]`** — syntaxe valide, plus lisible pour lui dans cet exercice. Retiré. _(Règle S100 réappliquée : ne pas imposer de convention hors de l'objet de l'exercice.)_

**⚠️ Mon erreur, relevée par lui** : j'ai présenté son `useRef` des cartes cliquées comme un mauvais choix (« c'est fragile ») alors qu'il **avait appliqué le critère correctement** — la liste n'apparaît pas à l'écran, donc ref. C'était une remarque d'anticipation (le jour où on voudra l'afficher), formulée comme une correction. Retirée.

### 4. Pull Request et fusion — **en autonomie** 🟢

Cycle complet refait seul, sans consigne : 5 commits sur la branche, PR avec message descriptif, fusion dans `main`, suppression de la branche distante. **Le cycle Git PR passe de 🟡 à 🟢** (1 passage guidé S101 + 1 autonome).
**📌 Noté** : `projet-examen-blanc` est sur `main`, `projet-vite-local` sur `master`.

---

### 5. Tour des dettes — demandé en fin de séance

Registre relu (fichier, pas de mémoire). **Quatre entrées déjà périmées** : `children`, `useRef`, `<table>`, **Git branches + PR** — les séances 3 et 5 du plan de remboursement sont faites.

**Top 5 établi** : 1. coercion + hoisting · 2. event loop · 3. debugger (coût nul, à imposer au prochain vrai bug) · 4. dark mode sémantique en React (réveille `@theme` + `localStorage` JS pur) · 5. `@keyframes`, **qui a enfin un support : le retournement de carte de Memory Card**.

**Comparaison demandée avec le sommaire Grafikart React** (page officielle récupérée, 33 chapitres) : chapitre 1 intégralement acquis, React Router acquis et plus complet que sa vidéo. **Cinq des sept manques restants figuraient déjà au registre** — la liste le confirme, elle ne révèle rien de caché. À ajouter : **portails** et **ErrorBoundary** (🟠 ⚡). **Render props = motif déjà pratiqué** (`NavLink`, `children` en fonction), seul le nom manque. Chapitre 4 (Framer Motion, react-query, Zustand) = écosystème, pas du React, et la roadmap fait autrement.
Point relevé : le seul chapitre « bonnes pratiques » de Grafikart porte sur **muter l'état dans un `useEffect`**, soit exactement l'erreur non repérée à l'item 3.

---

**Niveaux** : `.then` fetch simple 🟢 · `.then` + `Promise.all` 🟡 · `instanceof` / `unknown` 🟢 (2ᵉ cours, appliqué) · setter dans le corps 🔴 · state vs donnée dérivée 🔴 · annotation d'un paramètre déstructuré 🔴 (4ᵉ) · `NavLink` fonction 🟢 / `end` 🔴 · early return dans un handler 🟢 · nombre magique 🟡 · classe Tailwind inexistante 🟡 · cycle Git PR 🟢.

**⚠️ Mes erreurs**

1. **Correction infondée sur son `useRef`** — critère correctement appliqué de sa part, présenté comme une faiblesse.
2. **Deux corrections de préférence présentées comme des corrections** (`includes`, notation en crochets).
3. **Bloc de révision trop long** : 1h sur 2h30, alors que le format vise 15 min. Le nouveau format est bon, le **volume** ne l'est pas — 3 items dont un cours complet, c'est une séance, pas une ouverture.

**🔄 Cycle de reprise**

- **`NavLink` / `end`** → reprise **maintenue**, réécriture non faite. Le mécanisme est acquis, le critère `end` non.
- **Setter dans le corps + donnée dérivée + annotation déstructurée** → 🔴 à rejouer ensemble, même famille.
- `useRef` ≈ S108 · `state`, `<Outlet>`, `<Navigate replace>` ≈ S105.

**🔄 Rotation** : `.then` **reste** (juste après rappel, pas à froid). Restent : `NavLink`/`end` · React Router Declarative (montage, `path`/`to`).

**🗑️ À corriger au registre** : `children`, `useRef`, `<table>`, **Git branches + PR** soldées · `unknown`/`instanceof` soldée · ajouter **portails** et **ErrorBoundary**.

**⏭️ Prochaine étape**

1. **Consolidation avant Next.js** — c'est un très gros morceau, on ne l'ouvre pas sur une base tiède. Reprises `NavLink`/`end` et la famille setter / donnée dérivée / annotation.
2. **Top 5 des dettes** à traiter au fil des prochaines séances, en commençant par **coercion + hoisting**.
3. Puis **Next.js** : séance longue et fraîche (week-end ou midi).

## Session 105 — Reprises React Router + coercion, hoisting, `var` + Debugger Chrome

**Durée** : ~2h30 en deux blocs (dimanche 1h30, lundi 1h). Énergie bonne.

**🎹 Raccourci** : `Ctrl+Maj+L` — reconduit.

---

### Révision éclair (2 items, format code)

- **Prédire `.then`** 🟢 : ordre et `.catch` ignoré justes. Précision : la valeur affichée est celle **retournée** par le `.then` précédent (`19.98`, pas le prix).
- **Écrire le montage React Router** 🟢 : structure juste. `path` fixe au lieu de paramétré — **pas une rechute selon Frédéric, consigne floue** (deux fichiers demandés sans nécessité). **Montage / `path` / `to` sortent de rotation à sa demande**, retour bien plus tard.

---

### 1. Reprises

- **`NavLink` + `end`** 🟢 : fonction dans `className` sortie seule (2ᵉ fois), `end` posé sur le seul lien qui en a besoin, absent là où il serait inutile. **Redressé après deux échecs à froid.**
- **Famille setter / donnée dérivée / annotation** 🟢 à l'**écriture** (composant `ResumePanier`) : annotation sur ce qui arrive, setter dans un handler, total et longueur dérivés. Restent : `(prev) =>` non déclenché 🟡 · paramètre de fonction inutile 🟡. **Le format débogage (échec S104) reste à remesurer.**
- **`state` / `<Outlet>` / `<Navigate replace>` (N+5)** — exercice SAV en page blanche : layout + `<Outlet>` + `index` 🟢 · `<Navigate replace>` après les hooks 🟢 · circuit `state` 🟢 · `state` transportant une phrase au lieu d'une donnée brute 🟡 · chemin enfant absolu 🟡. Garde `?.` oubliée : **oubli, pas rechute**. Ressenti « moyen » en ouverture : bien calibré.

### 2. Coercion — dette n°1 du registre, enseignée

1ʳᵉ série 5/8, 2ᵉ série sur autre code 4/5. `+` et l'ordre de lecture 🟢 · `Number("")` = 0 🟢 · `Boolean()` renvoie toujours un booléen 🟢 · `==` vs `===` 🟢 · chaînes truthy (`"0"`, `" "`) 🟡.

### 3. Hoisting + `var`

Déclaration de fonction vs `const` fléchée 🟢 · `let`/`const` et TDZ 🟢 · **`var` : difficulté réelle signalée par lui** → cours complet (portée fonction, redéclaration, boucle + `setTimeout`). 🟢 après explication.

### 4. Debugger Chrome — pratiqué pour la première fois

Guidé sur la boucle `var` / `let` : points d'arrêt, F8, Scope, Closure, Call Stack, `debugger;`. Survol, console en pause, Watch vus. 🟡 (un passage). **À entretenir et refaire ensemble au prochain vrai bug.**

---

**🎓 Règle posée par Frédéric** : **des encouragements quand un point est réussi.** Il en avait avant, c'était motivant. Le « couper les félicitations » du §1 visait les récapitulatifs longs, pas ça.

**🎓 Décisions** : **Next.js repoussé** (pas prêt) · **Shopping Cart Odin avant** · **React Developer Tools à installer avant Shopping Cart**.

**Registre** : **coercion + hoisting soldée** (enseignée) · **Debugger soldé** (pratiqué) · **ajout `trim()`** (non urgent, à recroiser au prochain formulaire). Top restant : event loop · dark mode sémantique React · `@keyframes` (retournement de carte Memory Card).

**⚠️ Mes erreurs** : consigne du montage floue (livrable en deux fichiers inutile) · `path` fixe qualifié de rechute alors que la consigne était en cause.

**🗑️ Instruction à ajuster** : §1 « Couper : les félicitations détaillées » → préciser que les encouragements sur un point réussi restent attendus.

**🔄 Cycle de reprise** : `NavLink` / `end` → N+5 ≈ S110 · `state` / `<Outlet>` / `<Navigate replace>` → cycle fermé (donnée brute à surveiller) · `useRef` ≈ S108 · **coercion + hoisting → N+2 ≈ S107**.

**🔄 Rotation** : **sortent** — montage, `path` / `to`, `NavLink` / `end` (priorité haute levée). **Entrent** — chaînes truthy · `var`. **Reste** — `.then` en écriture (`Promise.all`).

**⏭️ Prochaine étape**

1. Ouverture : reprise coercion / hoisting (N+2) + famille setter / donnée dérivée **en format débogage**.
2. Installer React Developer Tools.
3. **Shopping Cart (The Odin Project)** — énoncé à vérifier sur theodinproject.com avant de cadrer. Sur branche, PR en fin de projet.
4. Puis **Next.js**, quand tu te sentiras prêt.

## Session 106 — Reprises coercion / donnée dérivée + `useOutletContext` + cadrage Shopping Cart

**Durée** : ~2h15. Énergie bonne.

**🎹 Raccourci** : `Ctrl+Maj+L` **acté 🟢**. Nouveau, posé à sa demande sur un besoin à venir (Shopping Cart) : **`Alt+Maj+↓`** (copier la ligne en dessous).

**Ressenti en ouverture** : coercion et `var` « pas trop mal ».

---

### Révision éclair (2 items, prédiction)

- **Coercion** 2/4 : `Boolean("false")` 🟢 · `null == undefined` 🟢 · **`+` et l'ordre de lecture 🟡, retombé** (`"10" + 5 - 5` → 100, `4 + 4 + "4"` → "84"). Redressé samedi, perdu aujourd'hui : c'est un réflexe à installer (couper la ligne en étapes), pas une incompréhension.
- **`var` vs `let`, portée** 🟢 : juste et bien raisonné.

### 1. Famille setter / donnée dérivée — format débogage

Annotation corrigée 🟢 · setter dans le corps repéré 🟢 · `(prev) =>` repéré 🟢 (syntaxe cassée = copier-coller).
**🔴 Donnée dérivée non repérée (2ᵉ échec en débogage)** : `nombre` déplacé dans un `useEffect`. **Raison donnée par lui** : ne sachant pas si `verres` venait d'une API, il a voulu suivre un éventuel changement. **Débloqué** : une prop suit déjà les changements (le parent se re-rend, la `const` est recalculée) ; c'est le state recopié qui se désynchronise. Repère : _une prop n'a jamais besoin d'être recopiée dans un state pour rester à jour._
Reprise immédiate (tri de 4 `useState`) : 4/4 🟢, lignes `const` non écrites.
**Niveau** : critère 🟢 au tri · 🟡 en débogage.

### 2. Shopping Cart — cadrage

**Énoncé vérifié sur theodinproject.com.** Adaptations retenues : section routée dans `projet-examen-blanc` sur branche · pas de tests · pas de déploiement · données DummyJSON (lunettes + montres). **Référence visuelle choisie par lui : kapaha** (démo GitHub Pages).

**Question de conception** : le panier est lu par la navigation, la boutique et la page panier → il vit dans le **layout de section** (parent commun, reste monté). `<Outlet>` ne transmettant aucune prop, d'où la notion suivante.

### 3. `useOutletContext` — notion neuve

Doc officielle vérifiée. Exercice guidé (layout favoris + page enfant) ✅ fonctionnel. 🟡 (un passage).
**Blocage réel** : ranger une **fonction dans un objet** (`{ ajouterFavori }`). Levé par la forme longue (`{ ajouterFavori: ajouterFavori }`, une fonction est une valeur) et le rapprochement avec `console.log` et les props fonction.
**🌟 Question juste de sa part** : `favoris` était envoyé inutilement → on n'envoie que ce dont l'enfant a besoin, et l'interface suit (TS ne vérifie pas le lien entre les deux côtés).
`as` : nom oublié, redonné (assertion de type).

### 4. Scaffolding Shopping Cart ✅

Branche `Shopping-Cart-ODIN-Project` créée d'abord · dossier `pages/shopping-cart/` (renommé depuis `Shopping-Cart.tsx` : extension sur un dossier + majuscules) · 4 composants (layout, accueil, boutique, panier) · routes imbriquées relatives + `index` + `<Outlet>`.

---

**🎓 Décision** : **hooks personnalisés + Context API juste après Shopping Cart** (leçon Odin suivante, avec le panier comme cas réel).

**📌 À demander** : installation de React Developer Tools (non confirmée).

**⚠️ Mes erreurs**

1. **« Rien de neuf » annoncé pour Shopping Cart** alors que j'avais moi-même annoncé `useOutletContext` en S104. Contradiction relevée par lui.
2. **Cours `useOutletContext` surchargé** (typage, `unknown`, `as`, hooks personnalisés, Context API dans un seul message) → blocage. Récurrence du dosage.
3. `favoris` inclus inutilement dans le `context` de l'exercice.

**🔄 Cycle de reprise** : `useOutletContext` → rejoué dans Shopping Cart (N+2) · donnée dérivée → compteur de navigation et total du panier · `NavLink` / `end` → barre de navigation de Shopping Cart (avant le N+5 prévu) · `useRef` ≈ S108.

**🔄 Rotation** : **`+` et ordre de lecture (priorité)** · chaînes truthy · `var` · `.then` en écriture.

**⏭️ Prochaine étape**

1. **Barre de navigation du layout** avec `NavLink` (question du préfixe sur le lien d'accueil de section).
2. **Le plan** : states (et ce qui n'en est pas), interfaces produit et ligne de panier, contenu du `context` et page qui utilise quoi.
3. Puis fetch DummyJSON et cartes produits.

## Session 107 — Shopping Cart : navigation, plan des données, fetch dans le layout, `useOutletContext`

**Durée** : ~3h. Énergie bonne.

**🎹 Raccourci** : `Alt+Maj+↓` — usage non confirmé, **à demander** en ouverture.
**Outillage** : React Developer Tools installé sur le **portable**. Autre machine : à vérifier.

---

### Révision éclair (2 items)

- **Prédire — coercion** 🟢 **6/6** : `+` et ordre de lecture (retombé en S106) **redressé**, dont `"6" - 2 + "1"` · chaînes truthy (`" "`, `"0"`) justes.
- **Écrire — `.then` + `Promise.all`** 🔴 : structure de la chaîne juste (déstructuration dans le paramètre, `throw`, `.catch` / `.finally`, `instanceof` juste). **Second `Promise.all` absent** (`return [res1.json(), res2.json()]` → tableau de Promises transmis tel quel). Retombé alors qu'il était sorti en S104. Repère retenu par lui : **deux `await`, donc deux `Promise.all`**. Clé `titre` au lieu de `title`. Correction donnée.

---

### 1. Barre de navigation du layout

`<header>` + `<nav>` + trois `NavLink`, titre en **`Link`** (choix juste : il n'a pas à s'allumer). **Fonction dans `className` sortie seule, 3ᵉ fois d'affilée → acquise.**
`end` d'abord posé sur les trois liens, puis **décidé lien par lien après la question « page ou section ? »** : Accueil seul. 🟢

### 2. Plan de Shopping Cart

API retenue par lui : **fakestoreapi**. Interface `Produit` juste.

- **🔴 Donnée dérivée à la planification** : quantité panier et montant total listés comme states (3ᵉ contexte après S104 et S106 en débogage). Le state central `panier` manquait. **Structure donnée** : 4 states dans le layout (`produits`, `chargement`, `erreur`, `panier`), deux `reduce` numériques pour le compteur et le total.
- `LignePanier` décrivait l'écran (boutons) au lieu de la donnée → `{ produit: Produit; quantite: number }`.
- Types partagés dans `pages/shopping-cart/type.ts`.

### 3. Fetch dans le layout

**Syntaxe hybride conçue seul** : fonction `async` + `.catch` / `.finally` accrochés à l'appel. Valide, et montre la compréhension « une fonction `async` renvoie une Promise ». 🟢
Corrections : `chargement` initialisé à `false` (récurrence S102) · `useState([])` non typé (`never[]`).

**Règle pro posée** : l'état de chargement / d'erreur s'affiche **dans le composant qui a besoin de la donnée**. Principe trouvé seul (« la nav reste visible, seule la zone de contenu affiche l'erreur »). Le **layout sert de réserve** (reste monté → un seul fetch), la **Boutique affiche** chargement, erreur et catalogue. Test d'URL fausse passé : seule la Boutique affiche l'erreur.

### 4. `useOutletContext` — reprise N+1

Circuit juste des deux côtés (objet dans `<Outlet context>`, déstructuration par nom, `useOutletContext<Type>()`). Seul écart : `produits: []` dans l'interface → `never`. **Ressenti « fragile » exprimé par lui** → à rejouer. 🟡

**Neuf** : `import type` imposé par `verbatimModuleSyntax` 🟡.

### 5. Taille des images

**Neuf** : `object-contain` / `object-cover` 🟡. Rappel `aspect-ratio` (impose un rapport, jamais une taille). Forme retenue : conteneur `max-w-6xl mx-auto`, grille à colonnes responsives, image `h-48 w-full object-contain`. Distinction **boîte / photo dans la boîte** donnée.
Explications trop longues de ma part ; **le format « code corrigé + une phrase par ligne » a fonctionné**.

---

**Niveaux** : coercion `+` 🟢 · chaînes truthy 🟢 · `.then` + `Promise.all` 🔴 · `NavLink` fonction 🟢 · `end` 🟢 · donnée dérivée (planification) 🔴 · modélisation `LignePanier` 🟡 · fetch `async` + `.catch` 🟢 · état initial de chargement 🟡 · règle chargement/erreur au plus près 🟢 · `useOutletContext` 🟡 · `import type` 🟡 · `object-contain` 🟡.

**⚠️ Mes erreurs**

1. **« Le raccourci a servi » affirmé sans information** — récurrence de « ne pas déduire l'état d'un item ».
2. **« La boutique et le panier ont besoin des produits »** — faux avec `LignePanier` contenant son produit, corrigé en séance.
3. **Explications CSS trop longues** avant le format ligne par ligne.

**🔄 Cycle de reprise** : `useOutletContext` → fiche produit (N+2) · **`useRef` ≈ S108** (en ouverture) · `NavLink` / `end` → N+5 ≈ S110 · donnée dérivée → compteur et total du panier (écriture réelle).

**🔄 Rotation** : **`.then` + `Promise.all` (priorité)** · `+` et ordre de lecture (une fois encore, sur autre code) · chaînes truthy · `var`.

**⏭️ Prochaine étape**

1. Ouverture : reprise **`useRef`**.
2. **Cartes en `Link` vers la fiche produit** : route `boutique/:id`, `useParams` + `find` dans `produits` lu par le `context` (pas de nouveau fetch), `Link` en bloc, **pas de bouton dans le lien**. Vérifier que le lien Boutique reste allumé sur la fiche.
3. Puis le **panier** : state `panier`, ajout, compteur et total dérivés.

## Session 108 — Reprise `useRef` + Shopping Cart : fiche produit

**Durée** : ~2h. Énergie bonne. Machine : **portable** (React DevTools installé ; le fixe reste à vérifier).

**🎹 Raccourci** : `Alt+Maj+↓` — pas encore utilisé, **reconduit**.

---

### Révision éclair (2 items)

- **Prédire — coercion** : `"73"` et `60` justes · `"211"` juste (faute de frappe à la saisie) · **`"5" + 2 * 3` → `"56"` 🟡 : priorité de `*` sur `+` non connue** (« je ne savais pas que ça fonctionnait comme les vrais maths »). Repère : d'abord `*` et `/`, puis gauche → droite ; `+` ne colle qu'à partir de la première chaîne. **Reste en rotation, test rapide.**
- **Déboguer — `Promise.all`** 🟢 : `return` manquant trouvé et corrigé. Prédiction juste sur le fond (`undefined` transmis), formulation incomplète : la déstructuration de `undefined` lève une `TypeError` → `.catch` → « échec ». **Sort de rotation à sa demande**, retour plus tard en entretien.

---

### 1. Reprise `useRef` (N+5) — page blanche 🟢

Ressenti annoncé **6,5/10**, résultat au-dessus. Deux refs distinguées et typées (DOM + valeur), champ contrôlé, early return protégeant l'ajout, compteur incrémenté avant la sortie, `(prev) =>` posé d'emblée, compteur lu seulement au clic.
**Désaccord fondé de sa part** : test `if (!ref.current?.value)` au lieu de `if (!nom)` — **équivalent sur un champ contrôlé**, pas une rechute. Argument de robustesse retenu (test qui dépend de la donnée, pas de l'attachement de la ref).

### 2. Shopping Cart — fiche produit ✅

**Préparé seul avant la consigne** : route `boutique/:id`, carte entière en `Link` avec `key`, `useParams` + `find`. **`String(p.id) === id` sorti seul** → conversion aux frontières déclenchée au clavier (dette chaude). `Omit` appliqué spontanément à un vrai besoin.

- A trouvé lui-même que `chargement` et `erreur` étaient nécessaires (F5 → `produits` vide → faux « introuvable » ; API en panne → message mensonger) → `Omit` retiré, `FetchDataContext` complet.
- **Ordre des early returns inversé au 1er jet** 🟡, corrigé (chargement → erreur → introuvable).
- Bouton Retour : `naviguer(..., { replace: true })` → **`naviguer(-1)`** (`replace` réservé aux redirections décidées par le code).
- **Panier commencé dans la fiche** (state local, un seul article) → recadré : la fiche est démontée en la quittant, le panier vit dans le **layout** en liste. Retiré pour l'étape suivante.
- Champ quantité rendu contrôlé sans consigne. Early return renvoyant un bloc JSX (message + `Link`) plutôt qu'un ternaire enveloppant la page.
- **Les quatre tests passés** (clic carte + lien Boutique allumé · F5 sans faux « introuvable » · id inexistant · clic droit / nouvel onglet).

**🎓 Questions de fond** : lifting state up à travers le `context` (ça monte par un appel de fonction, ça redescend par le `context`) · `useOutletContext` = des props pour un enfant que le layout ne connaît pas à l'avance ; lien annoncé avec la Context API.

---

**Niveaux** : priorité `*` / `+` 🟡 · `Promise.all` (débogage) 🟢 · `useRef` 🟢 · frontière state / ref DOM 🟢 · `useOutletContext` 🟢 (2ᵉ page, circuit juste — **à confirmer à froid**) · `useParams` + `find` 🟢 · conversion aux frontières 🟢 · ordre des early returns 🟡 · `naviguer(-1)` vs `replace` 🟢 · emplacement du state partagé 🟡.

**⚠️ Mes erreurs**
Pas d'erreur particulière : Remarque écrite par Frédéric après => cette partie du résumé a volontairement été supprimer par Frédéric. Il n'y a pas forcement d'erreur à me faire une remarque. Claude n'est pas obligé de spécifiquement noté toutes les observations faite par Frédéric n'allant pas dans son sens.

**🔄 Cycle de reprise** : `useRef` → cycle fermé (N+2, N+5 tenus) · `useOutletContext` → rejoué sur le panier · `NavLink` / `end` ≈ S110 · donnée dérivée → compteur et total (écriture réelle).

**🔄 Rotation** : **`+` et priorité des opérateurs** (test rapide) · chaînes truthy · `var`. **Sort** : `Promise.all`.

**⏭️ Prochaine étape — le panier**

1. Dans le **layout** : state `panier: LignePanier[]`, fonction `ajouterAuPanier(produit, quantite)` transmise par le `context`.
2. Quantité : `number`, valeur par défaut 1, conversion `Number()` à la frontière de l'input.
3. **Produit déjà présent → augmenter sa quantité** au lieu d'ajouter une ligne (upsert, déjà conçu seul sur le CV Application).
4. Compteur dans la barre et total en `const` dérivées.
5. Puis la page Panier : +, −, suppression.

## Session 109 — Shopping Cart : panier étape 1 (ajout, upsert, compteur)

**Durée** : ~2h (vendredi). Énergie bonne.

**🎹 Raccourci** : `Alt+Maj+↓` — reconduit.

---

### Révision éclair (2 items)

- **Prédire — priorité des opérateurs** : `2 + "3" * 2` → `8` 🟢 · `"4" + 4 * 2 + 1` → `"441"` au lieu de `"481"` (**faute de frappe selon lui**) · `3 * "2" + "2"` → `"62"` (guillemets absents, type à confirmer).
- **Prédire — `var` / `let`** : portée juste et bien expliquée · `b` hors du bloc donné `undefined` au lieu d'une **`ReferenceError`** (distinction posée : `undefined` = existe sans valeur / `ReferenceError` = n'existe pas à cet endroit).
- **Les deux sortent de rotation, décision de Frédéric.**

---

### 1. Panier dans le layout

- `Article.quantite` passé en `number` · type du `context` complété (panier + fonction d'ajout).
- **🔴 Donnée dérivée — 4ᵉ occurrence** (S104, S106, S107, S109) : compteur stocké dans un state `affichageQuantite` mis à jour à la main. **Règle des trois échecs appliquée** : cours donné directement, remplacé par une `const` + `reduce`. Test retenu : *« est-ce que je peux le calculer à partir d'un state existant ? »* → `const`.
- **Upsert** : 1ᵉʳ jet avec `find` **dans** le `(prev) =>` (bon emplacement), mais `return article.quantite += quantite` → mutation de l'ancien state **et** retour d'un nombre au lieu d'un tableau. 2ᵉ jet **juste et immuable** : `.map()` + `{ ...a, quantite: ... }`. 🟢 Allègements proposés, facultatifs : `some` au lieu de `find`, `else` inutile après `return`.

### 2. Fiche produit

- Quantité à **1 par défaut**, `Number(e.target.value)` à la frontière 🟢.
- **Neuf** : bouton **`disabled={quantite < 1}`** (condition dérivée, recalculée à chaque rendu) + variante Tailwind **`disabled:opacity-50`** 🟡. `min={1}` = confort, pas protection.
- **Garde dans `ajouterPanier`** : jugée redondante aujourd'hui (un seul appelant, bouton grisé). **Décision de Frédéric : l'ajouter quand le bouton +  du panier ou l'ajout rapide de la boutique arriveront.** Choix légitime — à ne pas oublier à ce moment-là.

### 3. React DevTools — premier usage 🟢

Onglet Components → `LayoutPage` → lecture du state `panier` en direct. **Tests passés** : 2 × A → 1 ligne · +1 × A → toujours 1 ligne, quantité 3 · 1 × B → 2 lignes · 0 → bouton grisé. Nombre négatif non testable (bouton grisé).

---

**Niveaux** : priorité `*` / `+` 🟢 · portée `var` / `let` 🟢 · `ReferenceError` vs `undefined` 🟡 · donnée dérivée 🔴 (cours donné, appliqué ensuite) · upsert immuable `.map()` + spread 🟢 · mutation dans un updater 🟡 (repérée après indices) · conversion aux frontières 🟢 · `disabled` dérivé 🟡 · React DevTools 🟢 · `useOutletContext` 🟢 (3ᵉ passage, fonction transmise et appelée).

**⚠️ Mes erreurs** : aucune relevée cette séance.

**🔄 Cycle de reprise** : `useOutletContext` → page Panier (lecture + fonctions de modification) · **donnée dérivée → total du panier, à écrire seul (test décisif)** · `NavLink` / `end` ≈ S110.

**🔄 Rotation** : chaînes truthy. **Sortent** : priorité des opérateurs · `var` / `let`.

**⏭️ Prochaine étape — le panier, étape 2**
1. Page Panier : afficher les lignes (image, titre, prix unitaire, quantité, sous-total).
2. Boutons **+**, **−** et **supprimer**, via des fonctions du layout transmises par le `context`. Quantité qui tombe à 0 → la ligne disparaît.
3. **Garde dans `ajouterPanier`** au moment où le + l'appelle (décision S109).
4. **Total** en `const` dérivée.
5. Puis : ajout rapide depuis la Boutique · habillage · PR et fusion · **hooks personnalisés + Context API**.

## Session 110 — Shopping Cart : page Panier, ajout rapide, paiement, panier persistant

**Durée** : ~2h30 (samedi). Énergie bonne. Pas de révision éclair : séance ouverte directement sur le code préparé seul.

**🎹 Raccourci** : `Alt+Maj+↓` — peu utilisé, **reconduit**.

---

### 1. Page Panier — préparée seule (35 min avant la séance) 🟢

- `supprimerPanier` (`filter`) et **`modifierPanier(id, delta)`** (`.map()` + spread) : immuables, via `(prev) =>`. **Une seule fonction pour + et −** grâce au paramètre `delta` — décision de conception juste.
- **Types fonction avec paramètres** dans l'interface du `context` : justes (notion en attente depuis S72 → **soldée**). `const data: Produit[]` sur le résultat de `.json()`.
- − **grisé à 1**, X pour supprimer : choix d'interface légitime (aucune quantité 0 possible).
- Sous-totaux, panier vide + lien boutique, `formatEuro` réutilisé depuis `utils/`.
- **✅ Total du panier écrit seul, en `reduce` dérivé — dette donnée dérivée : test décisif réussi** après 4 occurrences (S104, S106, S107, S109). Allègements proposés : `const total` nommée, early return pour le panier vide.

### 2. Ajout rapide depuis la Boutique 🟢

Carte restructurée : `<article>` > `Link` (image + titre) + bouton **frère**, jamais dans le lien. Garde d'`ajouterPanier` inutile (quantité en dur à 1) — décision S109 tenue.
`Link` sorti de la grille → redevenu **inline** → `block` ajouté (le « point 3 » de S108 trouve ici son vrai cas).

### 3. Reprise `NavLink` / `end` (N+5) 🟢

Ressenti « très bien », **bien calibré** : fonction dans `className` juste, `end` uniquement sur le lien racine. Seul écart : `to` inexacts par rapport aux adresses données. **Cycle fermé.**

### 4. Bouton Paiement

State local `paiement` + écran de message. Faute visible dans l'interface (« Paiment ») signalée.

### 5. Panier persistant (`localStorage`) — notion Phase 1 réactivée

1ᵉʳ jet : clé = contenu du panier (`setItem(memoire, memoire)`) · résultat de `getItem` jeté · **lecture dans un effet** (écrasée au 1ᵉʳ rendu par l'effet d'écriture). **Squelette à un trou donné** → `JSON.parse(memoire ?? "[]")`, **plus élégant que la forme classique**. 🟢 Quatre tests passés.
**Vocabulaire « lazy initializer » oublié** (mécanisme appliqué juste) → redonné. 🟡 sur le terme.

---

### 🎓 Décisions de Frédéric — suite de Shopping Cart

- **L'énoncé Odin n'est pas à suivre à la lettre** : ajout rapide de 1 en boutique, quantité choisie sur la fiche. Adaptation voulue et défendable.
- **Indispensables** : habillage CSS soigné (belle page d'accueil, image) · `localStorage` ✅ · paiement ✅.
- **Recherche** : validée. **Tailles XS→XL** (vêtements) : **décision ouverte**, tentante car travaille la modélisation (une ligne de panier s'identifierait par produit + taille). **Mini-panier glissant** : pendant l'habillage, **au clic** (pas de survol sur mobile).

**Conception de la recherche posée** (non codée) : **un seul state** (`recherche`) · résultats en `const` dérivée (`filter` insensible à la casse) · ouverture de la fenêtre dérivée (`recherche` non vide) — pas de booléen séparé · composant `BarreRecherche` qui détient son state et reçoit `produits` en prop · `slice` à 5 · résultats en `Link` qui vident `recherche` · `absolute` sous un parent `relative`. Fermeture au clic extérieur (`useRef` + écouteur) en option.

---

**Niveaux** : fonctions de modification immuables 🟢 · types fonction avec paramètres 🟢 · **donnée dérivée 🟢 (écrite seule)** · `Link` inline hors grille 🟢 · `NavLink` / `end` 🟢 · `localStorage` + `JSON` 🟡 (reconstruit avec squelette) · lazy initializer : mécanisme 🟢 / terme 🟡 · `??` 🟢.

**⚠️ Mes erreurs** : aucune relevée cette séance.

**🔄 Cycle de reprise** : `NavLink` / `end` → **fermé** · `useOutletContext` → acquis en usage réel (4 pages) · `localStorage` → à rejouer (N+2) · **donnée dérivée → recherche** (liste filtrée).

**🔄 Rotation** : chaînes truthy · **entre** : lazy initializer (le nom et le « pourquoi »).

**Registre** : types fonction au-delà de `() => void` **soldée**.

**⏭️ Prochaine étape**
1. **Barre de recherche** selon la conception posée (ouverture de séance).
2. **Habillage** (1 à 2 séances) : accueil, cartes, fiche, panier, mini-panier, textes provisoires.
3. **PR et fusion** de la branche Shopping Cart.
4. Décision sur les **tailles**.
5. Puis **hooks personnalisés + Context API**, avec Shopping Cart comme terrain (`usePanier`, contexte de panier).

## Session 111 — Shopping Cart : barre de recherche complète (résultats, « Afficher plus », clic extérieur)

**Durée** : ~1h samedi soir (23h40, hors séance) + 2h10 dimanche matin. Énergie bonne.

**🎹 Raccourci** : `Alt+Maj+↓` **acté 🟢**. Nouveau, sur un besoin exprimé (ajouter / retirer des parenthèses) : sélection + `(` pour entourer (comportement natif) · **Remove Brackets** (`Ctrl+Alt+Retour arrière`, donné de mémoire — **existence et raccourci à vérifier** via `Ctrl+Maj+P`, à demander).

---

### Révision éclair

- **Chaînes truthy** 🟢 6/6. **Sort de rotation.**
- **`localStorage` + lazy initializer** 🔴 à froid, correction donnée au 3ᵉ essai : corps-bloc sans `return` (famille récurrente) · `JSON.parse("favoris")` (ordre `getItem` → `parse` inversé) · `??` placé dans la parenthèse de `getItem` · effet recopié avec `panier` · `JSON.stringify(data)` pour fabriquer `data`. Nom « lazy initializer » retrouvé, le pourquoi non formulé → donné. **Reprise N+2.**

### 1. Soir — condition d'affichage + extraction

- **Question de fond** : pourquoi `includes("")` renvoie `true` → réponse comprise (la suite vide se trouve partout). Condition inversée corrigée.
- **Extraction `BarreRecherche`** 🟢 : fichier dans `shopping-cart/`, interface, prop `produits`, state descendu au plus près de son usage.

### 2. Matin — résultats et clic extérieur

- **« Afficher plus / moins » ajouté de sa propre initiative**, `deplier` justifié comme vrai state.
- Erreurs corrigées : `key` oubliée · `<li>` dans un `<li>` · seuil `> 4` · **`slice(…, -1)` deux fois** (le dernier résultat disparaît) 🟡.
- **Fragment `<>` posé seul** 🟢. `const visible` en ternaire : bloqué, débloqué par l'indice « écris la phrase si… alors… sinon » 🟢. Un seul `.map()` (DRY).
- **Clic extérieur** : state `ouvert` (l'ouverture n'est plus dérivée du texte — compris) · `useRef` sur la `<div>` · **`contains` trouvé seul** 🟢 · `PointerEvent` trouvé au survol 🟢. **🔴 Référence unique oubliée** (résultat d'`addEventListener` stocké, `removeEventListener` sans `document`) + condition inversée → squelette à un trou donné.
- **`as Node`** : cours `EventTarget` / `Node` / `as` / alternative `instanceof` → « compris, pas instinctif » (ses mots).
- **Question `onBlur`** : piège expliqué (le blur ferme la liste avant que le clic n'atteigne le `Link`) → compris.
- **4 tests passés.**

**Niveaux** : chaînes truthy 🟢 · `localStorage` + lazy initializer 🔴 · extraction de composant + state local 🟢 · `slice` avec index négatif 🟡 · fragment 🟢 · ternaire dans une `const` 🟢 (avec indice) · `contains` 🟢 · référence unique d'écouteur 🔴 (rechute, notion verrouillée) · `as` + `Node` 🟡 · `onFocus` / `onBlur` 🟡 (neufs).

**🆕 Neuf** : `contains` · `onFocus` / `onBlur` · hiérarchie `EventTarget` / `Node` · motif « fermer au clic extérieur ».

---

**Shopping Cart vs énoncé Odin (vérifié sur theodinproject.com)** : pages, navigation, compteur, panier (+ / − / suppression), FakeStore ✅ · ajout rapide en boutique + quantité sur la fiche (adapté) · tests et déploiement écartés. Ajouts hors énoncé : fiche, `localStorage`, paiement, recherche.

**🎓 Décisions de Frédéric**
- **Tests et déploiement** : voir l'en-tête (roadmap modifiée).
- **Quantité** : masquer les flèches natives du `type="number"` et construire ses propres boutons − / + — **en dernier** dans l'habillage.
- **Bouton 🔍** en ouverture de la prochaine séance (~30 min), **à la place** des deux exercices courts : entretien (`<form>`, `onSubmit`, `preventDefault`, `useNavigate`, `visible[0]`, garde sur liste vide).

**⚠️ Mes erreurs** : réécriture « plus élégante » proposée à minuit alors que sa version fonctionnait → trois incompréhensions, « illisible ». Correctif : en séance tardive, ne pas proposer de refonte d'un code qui marche.

**🔄 Cycle de reprise** : `localStorage` + lazy initializer → N+2 · **clic extérieur + référence unique → mini-panier glissant** · `useOutletContext` acquis en usage.

**🔄 Rotation** : **sort** — chaînes truthy. **Reste** — lazy initializer.

**⏭️ Prochaine étape**
1. **Bouton 🔍** (ouverture, ~30 min).
2. **Habillage** : accueil avec image, cartes, fiche, panier, liste de recherche en `absolute` sous le champ.
3. **Mini-panier glissant au clic** (reprise du clic extérieur).
4. Décision sur les **tailles XS → XL**.
5. Boutons − / + personnalisés.
6. **PR + fusion**, puis **hooks personnalisés + Context API**.

## Session 112 — Bouton 🔍 + début de l'habillage (accueil)

**Durée** : 2h15 (mardi, en deux temps). Énergie bonne au départ, **arrêt sur frustration en fin de séance** (positionnement).

**🎹 Raccourci** : **Remove Brackets** (`Ctrl+Alt+Retour arrière`) — **vérifié, fonctionne**. En pratique.

**⚠️ API FakeStore en panne** (erreur 523, serveur d'origine injoignable). Sa gestion d'erreur a tenu en conditions réelles. **Données de secours refusées** : tests du bouton 🔍 reportés au retour de l'API.

---

### 1. Bouton 🔍 (à la place de la révision éclair) — **non testé**

- `action=""` généré par Emmet → rôle expliqué, retiré.
- **🔴 Garde** : `!recherche` puis `!equivalent` (**un tableau vide est truthy**), puis `&&` et `!==` inversés → **réponse donnée au 3ᵉ essai** : `recherche.trim() === "" || equivalent.length === 0`. Réflexe donné : écrire la phrase française, puis traduire (« ou » → `||`).
- **🔴 `onSubmit` posé sur le `<button>`** (seul `<form>` émet `submit` → échec silencieux, rechute). Repéré grâce au type `SubmitEvent<HTMLButtonElement>` au survol. **Correction non confirmée — à vérifier.**
- `aria-label` : décrire l'action (« Rechercher »), pas l'élément.

### 2. Habillage de l'accueil

- **Image locale** : `src/assets/` + `import` vs `public/`. Erreurs corrigées : accolades (import par défaut), chemin, extension.
- **Titre sur la photo** 🟢 : `fixed` remplacé par parent `relative` + calque `absolute inset-0 flex items-center justify-center`. Fonctionne.
- **Icônes Lucide dans la navigation** appliquées. `fillRule` / `clipRule` corrigés dans le SVG.
- **Google Font via `@theme`** : procédure donnée, **non testée**.
- **Footer en bas de page** : solution `calc` **refusée à raison** (peu lisible, dépend de la hauteur du header) → chaîne `min-h-screen` + `flex-1` (layout → `<main>` → page) appliquée.
- **🔴 Blocage final** : blanc entre photo et footer (deux `mt-auto` qui se partagent l'espace, hauteur fixe sur l'image). **Non résolu, séance arrêtée.**

**Niveaux** : tableau vide truthy 🔴 · garde à deux conditions (`||`) 🔴 · `onSubmit` sur `<form>` 🔴 (rechute) · import d'image 🟡 · centrage par calque `absolute` 🟢 · `flex-1` / `mt-auto` en colonne 🔴 (appliqués sans être compris).

**📌 Demande explicite** : **cours sur le positionnement des éléments**, expliqué. À partir de sa page d'accueil : flux normal vs contexte flex · `relative` / `absolute` / `inset-0` · `flex-1` · `mt-auto` et le partage de l'espace entre deux marges `auto` · image dans le flux vs image en calque.

**Restés en suspens** : texte du header chevauchant la barre globale d'`App.tsx` (`pt-16` passé à `pt-4`) · `gap-1` / `gap-2` différents entre lien actif et inactif · chaîne `className` des `NavLink` recopiée trois fois.

**⚠️ Mes erreurs**
1. **Empilement en fin de séance** : quatre notions de positionnement et deux remarques annexes dans une même réponse → « je ne comprends rien ».
2. **Puis du code sans explication** pour corriger → arrêt de séance. Correctif : pour une notion non comprise, redécouper et expliquer une notion à la fois, jamais basculer sur le code seul.
3. Première solution de footer (`calc`) proposée avant la solution propre.

**🔄 Cycle de reprise** : **`localStorage` + lazy initializer → N+2 = S113** · clic extérieur → mini-panier.

**⏭️ Prochaine étape**
1. **Cours positionnement**, pas à pas, sur la page d'accueil → régler le blanc.
2. Au retour de l'API : vérifier `onSubmit` sur le `<form>` + les 4 tests du bouton 🔍.
3. Suite de l'habillage (chevauchement du header, `NavLink` factorisés, pastille du panier, police).

## Session 113 — Cours de positionnement (accueil) + habillage de la barre de recherche

**Durée** : ~2h (mercredi, en deux blocs). Énergie bonne. API FakeStore revenue.

**🎹 Raccourci** : Remove Brackets (`Ctrl+Alt+Retour arrière`) — redonné, usage non confirmé, **reconduit**.

---

### Révision éclair — reprise `localStorage` + lazy initializer (N+2) 🟢

Ressenti 7,5/10, **bien calibré**. `useState` + `useEffect` justes du premier coup (`return`, `??` avant `parse`, bonne dépendance) : les quatre erreurs de S111 ont disparu.
« Pourquoi la fonction ? » 🟡 : idée juste, formulation imprécise (« la fonction est lancée » au lieu de « donnée à React, qui l'appelle une fois ») · rien ne change à l'écran : non cité. Corrigé.

### 1. Cours de positionnement — demande S112, blanc réglé ✅

Une notion à la fois, chacune vérifiée dans le navigateur. **Format efficace** : « plus clair qu'hier ».
- **Chaîne des hauteurs** (`min-h-screen` → `flex-1` → `flex-1`, parent `flex flex-col` + enfant `flex-1`) 🟢 : maillon cassé testé (`flex` retiré du `<main>` → blanc déplacé sous le footer).
- **`mt-auto` + partage de l'espace libre** 🟢 : démontré seul (un seul `mt-auto` → même quantité de blanc, déplacée). Retenu : une marge `auto` ne supprime pas l'espace libre, elle le **place**.
- **Hero plein écran** (option choisie) : zone photo `relative flex-1 min-h-64`, image `absolute inset-0 h-full w-full object-cover`. **Mécanisme reformulé juste et seul** ; précisions données : `relative` = repère des enfants · `object-cover` recadre.
- **Neuf** : `Ctrl+F` et clic droit → Inspecter dans le panneau Elements 🟢.

### 2. Barre de recherche habillée ✅

- **Bouton 🔍** : `onSubmit` bien sur le `<form>` (suspens S112 levé), **4 tests passés**.
- Habillage déplacé sur le `<form>`, input `flex-1 outline-none`, icône Lucide : écrit seul 🟢.
- **Neuf** : `focus-within:` (cours CSS vs Tailwind demandé) 🟡 · **`ring` vs `border`** 🟡 — **décalage au focus remarqué par lui**, cause : bordure ajoutée seulement au focus ; `ring` = peinture, pas layout · `overflow-hidden` pour les coins · `aria-label` = l'action.
- Contour collé à la photo → `items-center py-3` sur le header 🟢.

### 3. Header

- Titre : **nom de marque inventé** (« ODIN Store ») plutôt que son nom ou une icône de profil.
- **Chevauchement avec la barre d'`App.tsx`** : `ml-24` écarté (nombre magique) → réserver l'espace dans `App.tsx`, ou sortir la barre du `fixed`. **Choix fait : à demander.**
- Barre décentrée (`justify-center` centre le **groupe**) → `grid grid-cols-3` + `justify-self-*`, `gap-36` retiré. **Application : à demander.**

### 4. Liste de résultats en `absolute` — expliquée, **non codée**

Parent `relative` · `<ul>` `absolute top-full left-0 w-full z-10` + fond opaque. `top-full` et `w-full` difficiles à visualiser → schémas donnés · `left-full` vs `left-0` (axe et base du pourcentage) · un `absolute` perd la pleine largeur du bloc · `z-10` car la photo positionnée vient après dans le HTML. **À relire et coder demain, à sa demande.**

---

**Niveaux** : `localStorage` + lazy initializer 🟢 (pourquoi 🟡) · chaîne des hauteurs 🟢 · `mt-auto` en flex 🟢 · `relative` / `absolute inset-0` 🟢 · `object-cover` 🟢 · `focus-within` 🟡 · `ring` vs `border` 🟡 · `items-center` / stretch 🟢 · `grid-cols-3` + `justify-self` 🟡 · `top-full` / `left` / `w-full` en `absolute` 🔴 (neuf, non pratiqué).

**⚠️ Mes erreurs** : aucune relevée.

**🔄 Cycle de reprise** : `localStorage` + lazy initializer → N+5 ≈ S116 · positionnement → liste de recherche (demain) puis mini-panier glissant.

**🔄 Rotation** : lazy initializer (le **pourquoi** à formuler seul).

**📌 Petites retouches** : « Réalis**é** par Frédéric » dans le footer · chaîne `className` des `NavLink` recopiée trois fois · `gap-1` / `gap-2` différents selon l'état actif.

**⏭️ Prochaine étape**
1. Relecture du mini-cours, puis **liste de résultats en `absolute`** (test : rien ne bouge à l'ouverture).
2. Vérifier : grille 3 colonnes du header · décision `App.tsx` (barre `fixed`).
3. Suite de l'habillage : retouches `NavLink`, pastille du panier, police, cartes, fiche, panier.
4. Mini-panier glissant au clic · décision tailles XS→XL · boutons − / + · **PR + fusion**, puis **hooks personnalisés + Context API**.

## Session 113 bis — Tokens `@theme`, architecture CSS pro, liste de recherche en `absolute`

**Durée** : ~2h (mercredi soir, 22h20 → 00h05). Séance « extra », à sa demande.

**🎹 Raccourci** : **`Ctrl+Maj+F` revenu spontanément** sur un vrai besoin (recherche de `rounded` dans le projet). Ajout : le champ « files to include » pour limiter la recherche à un dossier.

---

### Fait

- **Liste de résultats en `absolute`** ✅ appliquée (`top-full left-0 w-full z-10`) : plus rien ne bouge à l'ouverture. Notion 🔴 hier soir, appliquée seule ce soir.
- **`shopping-cart.css` créé** : un seul `@theme` préfixé `shop`, rangé par catégorie (couleurs → typo → formes → ombres), nommé par rôle et commenté. Importé depuis `index.css`. **Tokens appliqués à toute la barre et à la liste** 🟢.
- **Erreur Prettier** (`Can't resolve '/src/…'`) : le `/` initial est une convention Vite, que Prettier lit comme la racine du disque → **import relatif**. Cours `./` / `../` compris 🟢, **et déjà pratiqué sans le savoir** (`../../utils/format`).
- **Renommage `Shopping-cart.css` → minuscules** : les dossiers et fichiers hors composants vont en minuscules, les composants restent en PascalCase. ⚠️ **Piège Git Windows** : un changement de casse seule peut passer inaperçu → `git mv` en deux temps. **Vérification : à demander.**

### Expliqué (compris, pas encore pratiqué)

- **Architecture CSS d'un projet Tailwind** : très peu de CSS, rangé **par rôle** (`theme.css`, `base.css`), pas par page. Le fichier par section ne se justifie que dans l'atelier.
- **Pas de classe maison `@apply` pour alléger le JSX** : Tailwind reste dans le JSX ; un JSX trop chargé → **extraire un composant**. CSS réservé à `@layer base`, `@utility`, et au HTML qu'on ne contrôle pas.
- **Méthode pro du visuel** : partir d'une référence, limiter les choix (tokens), construire dans l'ordre structure → typo → couleurs → états → responsive.
- **F12 sur un site existant** : on relève des **mesures** (onglet Calculés, box model), on ne lit pas leur architecture (CSS compilé). Liste qui disparaît → « Emulate a focused page » *(cité de mémoire)*.
- **Police** : `--font-shop-titre` = liste de secours ; le nom seul ne charge rien → `@import` Google Fonts en premier dans `index.css`. **Reportée à demain.**
- **Titres trop longs dans la liste** : `truncate` + `min-w-0` (texte) + `shrink-0` (image, qui s'écrasait) + `items-center` + `title={p.title}`. **Non appliqué.**

### Non compris

- **`cn()` (`clsx` + `tailwind-merge`)** 🔴 : « je ne vois toujours pas ce que c'est ». **Cours à reprendre demain**, sur les `NavLink`.

**Divers** : *Refactoring UI* présenté (livre des créateurs de Tailwind). **Figma : demande de l'avancer dans la roadmap** → proposition : usage de base avant le SaaS optique, **à trancher**. Avertissement VS Code `Unknown at rule @theme` : sans conséquence, réglage `files.associations` reporté.

**Niveaux** : `@theme` + tokens par rôle 🟢 · `absolute` + `top-full` / `w-full` 🟢 (appliqué) · chemins relatifs 🟢 · architecture CSS Tailwind 🟡 · `truncate` + `min-w-0` 🟡 · `cn()` 🔴.

**⏭️ Prochaine étape**
1. **Cours `cn()`**, appliqué à la factorisation des `NavLink`.
2. Appliquer la coupure des titres, puis **trois remarques en attente sur `BarreRecherche`**.
3. Police · vérifier la casse dans Git · header en grille 3 colonnes et barre `fixed` d'`App.tsx` *(état à demander)*.
4. Suite de l'habillage → mini-panier → PR + fusion → hooks personnalisés + Context API.

## Session 114 — Révision lazy initializer et chaîne des hauteurs + `clsx`, `tailwind-merge`, `cn()` + pastille du panier

**Durée** : ~2h (jeudi, interrompue par un client). Énergie bonne.

**🎹 Raccourci** : Remove Brackets — non utilisé, reconduit.

---

### État vérifié en ouverture
- **Casse de `shopping-cart.css`** : aucun risque, le fichier n'avait jamais été commité (`U`). Le piège Git ne concerne que les fichiers déjà suivis.
- **Header en grille 3 colonnes** : appliqué ✅.
- **Barre `fixed` d'`App.tsx`** : conservée (navigation de l'atelier). **Idée de Frédéric** : pouvoir la masquer / l'afficher à la demande → exercice court noté (`useState` booléen + `&&`), sans notion neuve.

### Révision éclair
- **Lazy initializer** 🟢 : correction juste (flèche). Prédiction donnée dans le désordre, en connaissance de cause selon lui → **non fragile**. Variante sans parenthèses (`useState(lireHistorique)`) donnée.
- **Chaîne des hauteurs (N+1)** 🟢 : maillon `<main>` réparé, `<div>` inutile supprimée de sa propre initiative, `flex-1` sur le contenu (motif valide). `mt-auto` + `flex-1` redondants : signalé.

### `clsx` / `tailwind-merge` / `cn()`
- **Blocage initial** : « `clsx` c'est du JS natif ? » → c'est un **paquet npm**. Forme longue donnée (`filter` + `join`), qui a débloqué. Installé, absent du modèle Vite (`package.json` fait foi).
- **1ᵉʳ jet** 🔴 : `clsx` avec un template literal → une seule chaîne, virgule entrée dans la classe (survol cassé), `${false}` écrit `"false"`. Corrigé : **arguments séparés**. Appliqué aux trois `NavLink`, extrait en fonction `lienActif` 🟢.
- **🔴 `({ isActive }: boolean)`** : annotation portée sur ce qui est extrait, **5ᵉ occurrence**. Geste donné : survoler `isActive` sur un `NavLink` qui fonctionne.
- **`tailwind-merge`** 🟢 : conflits (l'ordre dans le HTML ne décide pas) → la dernière classe écrite gagne, par propriété. Utile **seulement** quand un composant accepte des classes de l'extérieur.
- **`cn()`** : fonction écrite soi-même dans `utils/cn.ts`, testée (`p-4` en console ✅). **`...inputs` (paramètre rest) expliqué en forme longue** 🟡 · `ClassValue` 🟡. Rôles retenus : le rest **collecte**, `clsx` **trie**, `twMerge` **arbitre**.

### Pastille du panier ✅
`` `${lienActif} relative` `` → la fonction devient son code source, `isActive` perdu. Corrigé : `relative` sur un `<span>` qui enveloppe l'icône, pastille `absolute -top-2 -right-2`. Un `absolute` sans décalage reste à sa place dans le flux.

---

**Niveaux** : lazy initializer 🟢 · chaîne des hauteurs 🟢 · `clsx` 🟢 · `twMerge` 🟢 · `cn()` / rest / `ClassValue` 🟡 · annotation d'un paramètre déstructuré 🔴 (5ᵉ) · `${}` avec une valeur non-chaîne 🟡 · décalages négatifs en `absolute` 🟢.

**⚠️ Mes erreurs** : consigne de l'item 2 sans **rendu attendu** (relevé par lui).

**🔄 Rotation — décision de Frédéric** : les notions simples récentes **entrent toutes en rotation**, parce qu'elles s'oublient si on ne les réemploie pas (fonctionnement ou simple nom) :
`clsx` · `twMerge` / `cn()` · paramètre rest · `relative` / `absolute` / `inset-0` · `top-full`, `left-0`, `w-full`, décalages négatifs, `z-10` · `object-cover` · `truncate` + `min-w-0` + `shrink-0` · `mt-auto` / chaîne `flex-1` · `focus-within` · `ring` vs `border` · `trim()` · `contains` / `onFocus` / `onBlur` · `${}` piège · préfixes `@theme` · chemins `./` `../`.
Toujours dedans : lazy initializer (le pourquoi).

**📌 En attente** : coupure des titres de la liste *(appliquée ? à demander)* · 3 remarques sur `BarreRecherche` · police · bascule de la barre d'`App.tsx` · Figma dans la roadmap (à trancher).

**⏭️ Prochaine étape**
1. **Composant `<Bouton>` avec `cn()`** (bouton « Ajouter au panier » de la Boutique et de la Fiche) → coller les deux JSX en ouverture.
2. Points en attente ci-dessus.
3. Suite de l'habillage → mini-panier → PR + fusion → hooks personnalisés + Context API.

## Session 115 — Cartes de la Boutique, composant `<Bouton>` avec `cn()`, polices

**Durée** : ~3h30 (vendredi, avec pause repas). Énergie bonne.

**🎹 Raccourci** : Remove Brackets — non utilisé (séances surtout CSS), reconduit.

---

### Révision éclair
- **`truncate` dans un flex** 🟡 : `shrink-0` sur l'image ✅ · **`min-w-0` sur le conteneur du texte oublié** ❌ · faute `object-contains` (classe inexistante, silencieuse).
- **Prédire** : `${false}` dans un template literal → écrit `"false"` ❌ (**2ᵉ fois**, après `clsx` en S114) · tableau vide truthy ✅ · `trim()` ✅.
- Fiche de définitions demandée : `shrink-0` / `min-w-0` / `truncate` / `object-contain` · **`truncate` (1 ligne, listes) vs `line-clamp-N` (N lignes, cartes)**.

### 1. Cartes de la Boutique
Débordement du titre : `line-clamp-2` fonctionnait, mais la **case de grille étirée** (`h-32` + `stretch`) laissait voir une 3ᵉ ligne. Correctif `h-14` jugé « tassé » → **refonte complète demandée** : deux flex au lieu d'une grille interne, `gap-4`, titre `h-14`, `flex-1` + `mt-auto` pour aligner les prix, `Link` en `block`. Retirés : `min-h-96`, `min-w-72`, `h-32`. **Validé : « propre »** 🟢.
Au passage : `text-[rgb(249-83-62)]` (tirets → classe silencieuse) → **token `--color-shop-prix`** créé et appliqué partout.

### 2. Composant `<Bouton>` + `cn()`
- **Intérêt contesté par lui**, à raison pour deux occurrences. Recadré : **cohérence** sur 6+ boutons (une définition, un seul endroit à modifier), et `cn()` comme condition d'un composant ajustable. Accepté.
- Rappels demandés : **`children`** · **où trouver `React.ReactNode`** (type décidé par soi → source : `Ctrl+clic` sur `StrictMode`) · **`...inputs: ClassValue[]`** réexpliqué (2ᵉ fois) par l'union + `[]` et le trajet d'un appel.
- 1ᵉʳ jet : `children` passé en attribut (forme longue) · `onAjouter` trop spécifique → `onClick` · `className` obligatoire · **aucune classe par défaut** (le composant n'apportait rien). Tout corrigé.
- Règle posée : **ce qui vaut pour tous les boutons → composant** (dont l'état grisé), **ajustements et marges extérieures → page**.
- **Test `twMerge` réussi** dans les DevTools (`px-2 py-1` gagne sur `px-4 py-2`). Réutilisé seul sur « Afficher plus ».

### 3. `BarreRecherche` terminée
Coupure des titres **déjà faite seul** (`items-center`, `shrink-0`, `min-w-0`, `truncate`, `title`). `text-shop-prix`, `aria-label="Rechercher"`. `equivalent.slice()` : copie inutile signalée ; **conservée par choix** (symétrie des deux branches), défendable.

### 4. Polices
**Bebas Neue** (titres, marque) + **Oswald** (texte) via `@import` en tête de `index.css` et tokens `--font-shop-*`. Points posés : graisse unique de Bebas → **pas de `font-bold`** (faux gras) · police posée une fois sur la racine (héritage) · Oswald à éviter sur les paragraphes longs · vérification par **Rendered Fonts**. ✅ Les deux fonctionnent.

---

**Niveaux** : `truncate` + `min-w-0` 🟡 (oubli en révision, appliqué en code) · `line-clamp` + hauteur de boîte 🟢 · flex dans une carte / `mt-auto` 🟢 · `${}` avec une valeur non-chaîne 🔴 (2ᵉ) · composant avec `children` + `cn()` 🟢 · rest / `ClassValue` 🟡 · tokens de police 🟢.

**⚠️ Mon erreur** : « trois remarques » annoncées en S113 bis **sans les écrire**, reconstituées aujourd'hui sans garantie. **Correctif : une remarque annoncée s'écrit tout de suite, même en une ligne.**

**🔄 Rotation** : ajouter **`${}` piège (priorité)** · `truncate` vs `line-clamp` · `children` entre les balises · rest / `ClassValue`. Le reste de la liste S114 est inchangé.

---

### 🛒 Shopping Cart — reste à faire

**Habillage** : fiche produit (mise en page, `formatEuro`, champ quantité) · page Panier + écran de paiement · états de chargement / d'erreur (Boutique, Fiche ; « Monture » → « produit ») · **`<Bouton>` partout** (Paiement, Retour, + / − / supprimer), à faire seul · footer « Réalisé » *(à confirmer)*.
**Fonctionnalités** : mini-panier glissant au clic · boutons − / + personnalisés (en dernier) · **tailles XS → XL : décision ouverte**.
**Clôture** : responsive (header 3 colonnes à adapter) · **PR + fusion**.
Atelier : bascule masquer / afficher de la barre d'`App.tsx`.

**⏭️ Prochaine étape** : habillage de la **fiche produit**, puis du **panier**.

## Session 116 — États de chargement et d'erreur, composant `EtatMessage`, début de l'habillage du panier

**Durée** : ~2h15 (samedi, en deux blocs). Énergie bonne. **API FakeStore en panne toute la journée.**

**🎹 Raccourci** : Remove Brackets — non utilisé, reconduit.

---

### Révision éclair (`${}`, `||`, `??`)
`${promo && "barré"}` ✅ · `quantite || "épuisé"` ✅ · **`quantite ?? "épuisé"` ❌** : `??` ne remplace que `null` / `undefined`, donc `0` est gardé (« un stock à 0 est une information »).

### 1. API en panne : lecture de la console
`ERR_FAILED 522` (Cloudflare, serveur d'origine injoignable) + message CORS. Repère posé : **le message CORS est une conséquence** (la page d'erreur de Cloudflare n'a pas l'en-tête) ; chercher le code serveur qui l'accompagne. Erreurs doublées = StrictMode. Images servies depuis le cache.

### 2. États de chargement et d'erreur ✅
- **Chargement** : centrage par `flex-1` + `items-center justify-center` **trouvé seul** (chaîne des hauteurs réinvestie) 🟢. Ajouts : `flex-col gap-3`, taille et couleur de l'icône. **Neuf** : `Loader2` + `animate-spin` 🟡 · classe `uppercase` plutôt que du texte tapé en capitales (lecteurs d'écran) 🟡.
- **Erreur** : message humain à l'écran, détail technique en `console.error` · `{erreur}` remis à l'écran au 2ᵉ jet, signalé · titre + phrase d'aide en deux éléments au lieu d'un `<br>`. **Neuf** : `window.location.reload()` 🟡, avec la distinction **`window.location` (navigateur, agit sur la page) vs `useLocation` (React Router, lit la route)** — demandée par lui.
- `min-h-44 min-w-44` réapparus par copier-coller (inutiles avec `flex-1`).

### 3. Composant `EtatMessage`
**Code donné** (interface, composant, trois états de la Fiche), faute de temps, à sa demande. **Réutilisé seul dans la Boutique** ✅. Question posée : `icone: React.ReactNode` → une **deuxième zone de contenu** passe par une prop nommée, de même type que `children`. `<Link>` (destination) et non `<Bouton>` (action) pour « Retour à la boutique ».

### 4. Panier — habillage commencé
Structure standard donnée (liste 2/3 + récapitulatif 1/3 en `lg:grid-cols-3`, ligne en flex : image `shrink-0`, texte `flex-1 min-w-0`, quantité, supprimer). Choix tranchés : `<Bouton>` pour Paiement, − et + ; bouton-icône `Trash2` pour supprimer. États vide et paiement → `EtatMessage`. **Étapes 1 et 2 faites par lui, code non vu.** Au passage : `paiment` (faute), total à sortir du JSX dans une `const`.

---

**Niveaux** : `??` vs `||` sur `0` 🔴 · lecture d'une erreur réseau 🟢 · centrage par `flex-1` 🟢 · `animate-spin` / `uppercase` 🟡 · `window.location` vs `useLocation` 🟡 · `EtatMessage` : utilisation 🟢 / **conception 🔴 (donnée, à rejouer seul)** · `ReactNode` pour une prop de contenu 🟢.

**🔄 Rotation** : ajouter **`??` vs `||` avec `0`** · `window.location` vs `useLocation` · `animate-spin` · `uppercase`. Le reste inchangé (dont `${}` piège).

---

### 🛒 Shopping Cart — reste à faire
**Habillage** : **panier (en cours)** + écran de paiement · fiche produit (mise en page, `formatEuro`, champ quantité) · `<Bouton>` sur les boutons restants · footer « Réalisé » *(à confirmer)*. ✅ États de chargement / d'erreur faits (Boutique, Fiche).
**Fonctionnalités** : mini-panier glissant au clic · boutons − / + personnalisés (en dernier) · **tailles XS → XL : décision ouverte**.
**Clôture** : responsive · **PR + fusion**.
Atelier : bascule de la barre d'`App.tsx`.

**⏭️ Prochaine étape** : coller `Panier.tsx` en ouverture → étapes 3 (ligne d'article) et 4 (récapitulatif).

## Session 117 — Panier terminé, bande latérale glissante, `SelecteurQuantite` + cours flex-grow / shrink / basis

**Durée** : ~6h45 (dimanche, 3h10 le matin + ~3h35 l'après-midi). Énergie bonne, fatigue en fin de journée. **API FakeStore toujours en panne** : fiche produit bloquée.

**🎹 Raccourci** : Remove Brackets — utilisé une fois, reconduit.

---

### Révision éclair (2 items, format code)
- **Prédire `??` / `||` / `${}`** 3/6 : **`${stock > 0 && "dispo"}` → `"false"` ✅, le piège `${}` tombe pour la première fois** (2 échecs avant) · `nom ?? "Sans nom"` → `""` ❌ (règle appliquée au `0`, pas à la chaîne vide) · `` `${null}` `` → `"null"` ❌. Repère : **le JSX masque `null` / `false` / `undefined`, un template literal les écrit tous.**
- **Déboguer — pastille `absolute`** 🟢 : `relative` posé, cause non énoncée. `flex` à la place d'`inline-block` → **`inline-flex`** donné.

---

### 1. Ligne d'article du panier
- `min-w-300` → `w-full max-w-6xl` (plafond, pas plancher) 🟢 reformulé seul.
- Image débordant de son conteneur + `shrink-0` au mauvais niveau 🟢.
- **`items-*` (parent) vs `self-*` (un enfant)** 🟢.
- **`min-w-0` à chaque niveau de la chaîne flex** 🟡 (réexpliqué à sa demande).
- **Colonne de prix alignée** (demande de sa part, site de référence) : chaque `<li>` est un flex indépendant → `w-32 shrink-0` + alignement du texte 🟢. **Neuf** : `tabular-nums` 🟡.
- `w-full` + `m-6` dans une case de grille → débordement, retirés 🟢.

### 2. 🎓 Cours flex-grow / flex-shrink / flex-basis — demandé (« jamais appris »)
basis = départ, grow = part de l'espace en trop, shrink = part du manque · calcul en trois temps · lien avec `min-width: auto` · `flex: grow shrink basis` · `flex-1` vs `flex-auto` vs `flex-none`.
- **Prédiction 3/3**, dont le cas `shrink-0` 🟢. Cas 3 : `grow` sur un `<input>` → forme robuste `flex-1 min-w-0`.
- Questions de suite : `0 1 auto` en forme longue · `basis-0` (n'a de sens qu'avec `grow`) · `size-16 shrink-0` = `0 0 auto` (**corrigé par lui**).
- **`w-*` vs `basis-*`** pour un élément fixe → `w-*` + `shrink-0` (`basis` dépend de l'axe, et laisse la boîte s'élargir en silence).
**Niveau** : calcul 🟢 · choix des classes en situation 🟡. **Notion ouverte.**

### 3. Pages blanches — deux `ReferenceError`
- Matin : icône collée sans import dans `Brouillon.tsx` → toute l'app tombe. Console lue sur demande 🟢. Rappel : **Vite ne vérifie pas les types** → `typecheck`.

### 4. Quantité éditable au clavier (initiative de sa part)
- 1ᵉʳ jet : un `useState` pour toutes les lignes, que `value` ne lit pas → débloqué par deux questions.
- **Écart `nouvelle − ancienne` trouvé seul, en réutilisant `modifierPanier`** 🟢.
- **🔴 `supprimerPanier` appelé dans `value`** → setter pendant le rendu (famille récurrente) + `value` à `undefined`. Correction demandée, donnée : handler en accolades + early return `< 1`. Limite assumée : champ impossible à vider.
- Flèches natives masquées en `@layer base` (extrait de mémoire, vérifié à l'écran). **Neuf** : sélecteur d'attribut, pseudo-éléments natifs, préfixes 🟡.

### 5. Récapitulatif du panier ✅
- Question de fond : **pourquoi sous-total et total ?** → identiques sans livraison ni réduction ; ligne « Livraison : Offerte » ajoutée pour justifier la séparation.
- Corrections, toutes appliquées : « continuer mes achats » appelait `setPaiement` (copier-coller) → **`<Link>`** · `<p>` dans un `<span>` (HTML invalide) → `<div>` · `reduce` en double → `const total` · séparateur en élément vide → `border-t` · boutons hors de la carte.
- **Étirement dans la grille** : la carte de la liste s'étirait à la hauteur de la colonne de droite → `items-start`. Distinction **case / élément dans la case** (`stretch` dimensionne l'élément) et **`items-*` = vertical / `justify-items-*` = horizontal** en grille 🟢. Question « la grille n'est pas adaptée ? » → non, flexbox a le même `stretch`.

### 6. Bande latérale (panier façon Amazon) — conçue par lui
- **Son idée** (la page se resserre pour laisser la place au panier) : écartée trop vite de ma part, **motif réel** (Amazon). `pr-36` refusé par lui (la photo d'accueil serait raccourcie) : décision argumentée, gardée.
- `<aside>` après le `<main>` 🟢 · `inset-y-0` (et non `h-screen`) 🟢 · **liste qui défile seule** : `flex-col` + `shrink-0` + `flex-1` + **`min-h-0`** + `overflow-y-auto` 🟡 (neuf, `min-w-0` sur l'autre axe).
- **`hidden 2xl:flex`** : affichage sur grand écran seulement (risque de recouvrement sur portable).
- **`afficherBande`** en donnée dérivée avec **`startsWith`** (règle positive : boutique + fiches) 🟢. Précédence `&&` / `||` signalée.
- **Bande glissante** : **élément toujours rendu pour pouvoir l'animer** (le rendu conditionnel supprime l'animation) 🟡 neuf · `translate-x-full` / `translate-x-0` + `transition-transform` 🟢 · **`cn()` pour une valeur par défaut surchargée par condition — initiative de sa part** 🟢 · state `bandeOuverte` ouvert dans `ajouterPanier` · croix de fermeture (`fixed` sert de repère au `absolute`).
- **Débogage « ça ne fonctionne pas »** : React DevTools (`bandeOuverte` à `true`) → **test d'élimination mené par lui, cause isolée** (`afficherBande` faux) → il testait sur la page Panier, où la bande est masquée par la règle `startsWith`. DevTools ancrés à droite = fenêtre < 1536 px = bande masquée.

### 7. Composant `SelecteurQuantite`
- **Construit seul, avant de lire la consigne**, fonctionnel du 1ᵉʳ coup 🟢 : version **spécialisée** (reçoit l'article + les fonctions du panier), prop `className` passée à `cn()` de lui-même. Corrections : `className?: ReactNode` → `string` · paramètre `quantite` qui était un **écart** → `delta`.
- Compromis spécialisé / générique expliqué : sa version ne pourrait pas servir à la fiche (pas d'`Article`). **Version générique donnée (fatigue)** : `quantite` + `onChangerQuantite(nouvelleQuantite)`, **le parent décide** (0 → suppression dans le panier, refus sous 1 sur la fiche) 🟡 (donnée).
- En place dans la bande. **Page Panier : pas encore.**

---

**Niveaux** : `${}` piège 🟢 · `??` sur chaîne vide 🟡 · `relative` + `absolute` 🟢 · `inline-flex` 🟡 · `items` / `self` 🟢 · `items` vs `justify-items` en grille 🟢 · `stretch` case / élément 🟢 · `min-w-0` / `min-h-0` à chaque niveau 🟡 · flex-grow / shrink / basis 🟢 calcul / 🟡 usage · `w-*` vs `basis` 🟡 · `tabular-nums` 🟡 · **setter dans `value` 🔴** · HTML : `<p>` dans `<span>` 🟡 · `<Link>` vs `<button>` 🟢 · `startsWith` / donnée dérivée 🟢 · élément toujours rendu pour l'animer 🟡 · `cn()` en surcharge conditionnelle 🟢 · extraction de composant en autonomie 🟢 · contrat générique d'un composant 🟡 · test d'élimination / React DevTools 🟢.

**🎓 Décisions de Frédéric**
- **Tailles XS → XL abandonnées.**
- Pas de `pr-36` : la bande repose sur les marges des pages limitées en largeur.
- **Les notions neuves ou fraîches du jour entrent en rotation dans quelques jours.**

**⚠️ Mes erreurs**
1. **Conclusion tirée d'une erreur de console ancienne** (« `X` is not defined ») : la console ne s'efface pas au rechargement de Vite. Correctif : vider la console avant de lire un résultat de test.

**🗑️ Instruction à ajuster** : §7 CSS « Flexbox complet » ✅ — ne couvrait pas `flex-grow` / `flex-shrink` / `flex-basis` (enseignés S117).

**🔄 Cycle de reprise** : flex-grow / shrink / basis → N+2 ≈ S119 · contrat générique d'un composant → fiche produit.

**🔄 Rotation — à partir de quelques jours (décision de Frédéric)** : flex-grow / shrink / basis · `min-w-0` / `min-h-0` · `??` sur chaîne vide · template literal qui écrit `null` · `tabular-nums` · `inline-flex` · `items` / `self` · `items` vs `justify-items` en grille · `stretch` (case / élément) · `inset-y-0` · `overflow-y-auto` + `min-h-0` · élément toujours rendu pour l'animer · `startsWith` · précédence `&&` / `||` · sélecteur d'attribut et pseudo-éléments natifs · setter dans `value`. **Reste** : `${}` piège (une réussite, à confirmer) · liste S114.

---

### 🛒 Shopping Cart — reste à faire (~2h30 à 3h)
1. `SelecteurQuantite` dans la **page Panier** (~10 min).
2. **Fiche produit** : mise en page, `formatEuro`, `SelecteurQuantite`, `<Bouton>` — avec l'API, ou `public/produits.json` construit depuis le `localStorage` si la panne dure. Tester l'ouverture de la bande à l'ajout.
3. **Responsive** : header en 3 colonnes, grille du panier, ligne d'article.
4. **PR + fusion.**

**⏭️ Prochaine étape** : finir Shopping Cart (liste ci-dessus), puis **hooks personnalisés + Context API**, avec le panier comme terrain.

## Session 118 — Panier : `SelecteurQuantite`, fiche produit, débordement de ligne, début du responsive

**Durée** : ~3h15 (mercredi, en deux blocs). Énergie bonne. API FakeStore revenue.

**🎹 Raccourci** : Remove Brackets — peu utilisé, reconduit.

---

### Révision éclair (3 items, format code)
- **Prédire `??` / `||` / `${}`** 🟢 5/5 : `??` sur chaîne vide **redressé** (raté en S117) · piège `${}` juste pour la 2ᵉ fois d'affilée.
- **Déboguer `onChange={fn(...)}`** 🟢 : corrigé en fonction fléchée, mécanisme compris. Non cité : `e` n'existe pas à cet endroit (`ReferenceError` avant tout appel). **Remarque fondée de sa part** : l'exercice manquait de contexte (pas de code parent).
- **Écrire `cn()`** 🟢 : `cn("… bg-green-100", stock === 0 && "bg-red-500 text-white")`. Il s'appuie sur l'arbitrage de `twMerge`, ce qui est valide. Variante en ternaire donnée.

### 1. `SelecteurQuantite` dans la page Panier ✅
Contrat générique respecté. Le `className` passé répétait la base du composant → la page ne fournit que ses ajustements (`gap-4 p-2`).
**Factorisation `changerQuantite` dans le layout** : proposée (même décision métier écrite deux fois), tentée (`id.quantite` sur un `number`), correction demandée et donnée (poser la quantité au lieu d'appliquer un écart). **Abandonnée par lui : trop de DRY nuit à la lisibilité.** Choix défendable avec deux occurrences.
`lienActif` annoté `{ isActive }: { isActive: boolean }` 🟢 : **la notion à 5 échecs est juste dans le code.**

### 2. Fiche produit ✅
- Retour en `<Link>` (adresse écrivable dans le JSX) 🟢 · `./shopping-cart/boutique` relatif → 404, corrigé en absolu 🟡.
- Handler du sélecteur (refus sous 1, early return) 🟢. **`desactive` conservé par choix** (inutile aujourd'hui).
- Image : principe boîte (hauteur fixe) / photo (`h-full w-full object-contain`) appliqué 🟢.
- **Mode « Modifier le panier » ajouté de sa propre initiative** → bug : `useState` ne lit sa valeur de départ qu'une fois (F5 pendant le chargement → 1 ; fiche → fiche via la recherche → composant réutilisé, quantité conservée). Solution donnée (découpage en deux composants + `key={produit.id}`) **jugée trop complexe → retour à l'ancienne version.** Effet résiduel assumé : la quantité suit d'une fiche à l'autre.

### 3. Ligne d'article qui déborde 🔴
Titre long → groupe de droite et icône de suppression sortis de la carte. Cause : `min-w-0` absent sur la `div` intermédiaire + `w-full` au lieu de `flex-1`. **Non trouvé malgré l'indice** (« j'en sais rien »), correction donnée. Notion S117, reste en rotation.
Message « error boundary » dans la console : trace probable de la version abandonnée. Vider la console et vérifier — **non confirmé**.

### 4. Git : revenir à un état précédent (question de sa part) 🟡
`git log --oneline` · `git restore` (non commité) · `git restore --source=<hash>` (un fichier) · `git switch --detach` (consulter) · `git revert` (annuler un commit) · **`reset --hard` à éviter**.

### 5. Responsive — commencé
- **Cours** : le designer livre des maquettes par taille, l'ordre du design dépend du produit (e-commerce → mobile ; outil métier → desktop, parfois desktop seul). **En code Tailwind, toujours mobile first, composant par composant, vérifié au fil de l'eau.** Une passe à la fin = inverser les classes (base mobile, actuel derrière `lg:`). `max-*` réservés aux exceptions. Un préfixe s'ajoute seulement là où la mise en page casse.
- **Header** : burger menu écarté (3 liens, le panier ne doit pas être caché) → icônes seules en mobile (`hidden lg:block` sur les textes), recherche en 2ᵉ ligne avec **`order-last w-full`** (neuf). Padding fixe `px-40` qui écrase la recherche → **conteneur `mx-auto w-full max-w-6xl px-4`** recommandé. **Non appliqué, à reprendre.**

---

**Niveaux** : `??` sur chaîne vide 🟢 · `${}` piège 🟢 (2ᵉ réussite) · `fn` vs `fn()` 🟢 · `cn()` / `twMerge` 🟢 · annotation d'un paramètre déstructuré 🟢 (dans le code) · contrat générique d'un composant 🟢 · `/` absolu vs `./` relatif 🟡 · boîte / `object-contain` 🟢 · `useState` lit sa valeur de départ une seule fois 🟡 · `key` pour réinitialiser un state 🔴 (donné, non pratiqué) · chaîne `min-w-0` + `flex-1` vs `w-full` 🔴 · Git restore / revert 🟡 · mobile first en pratique 🟡 · `order` 🟡 (neuf).

**🎓 Décisions de Frédéric** : pas de factorisation `changerQuantite` (lisibilité) · `desactive` conservé · pas de mode « Modifier le panier » · pas de burger.

**🔄 Rotation** : **reste** — chaîne `min-w-0` (priorité). **Entrent** — `useState` et valeur de départ · lien relatif vs absolu · Git restore / revert · `order`. **Sortie possible** — `${}` piège (deux réussites d'affilée, à confirmer une fois).

**⏭️ Prochaine étape — finir Shopping Cart**
1. **Header responsive** : conteneur plafonné, icônes seules, recherche en 2ᵉ ligne (`order`), trois colonnes à `lg:`.
2. Grille du panier · ligne d'article · fiche produit · vérification de la Boutique et de l'accueil.
3. **PR + fusion.**
4. Puis **hooks personnalisés + Context API**, avec le panier comme terrain.

## Session 119 — Shopping Cart responsive (header, boutique, fiche, panier) — projet terminé

**Durée** : ~2h50 (jeudi, 2h30). Énergie bonne.

**🎹 Raccourci** : Remove Brackets — usage non renseigné, reconduit.

---

### Révision éclair (2 items, format code)
- **Déboguer — chaîne `min-w-0`** 🟡 2/3 : `shrink-0` sur l'image et `flex-1 min-w-0` sur le `<p>` justes · **`div` intermédiaire manquée** (`w-full` au lieu de `flex-1 min-w-0`), même maillon que la veille. Règle reformulée seul : « un `min-w-0` par étage jusqu'au parent ».
- **Prédire — `useState` et prop** 🟡 : réponse juste (5), **raison fausse** (« le second setter se met à jour au prochain rendu »). Corrigé : l'argument de `useState` n'est lu qu'au montage, il est ignoré ensuite ; une prop recopiée dans un state cesse de la suivre.

### 1. Header ✅
- 1ᵉʳ jet : `hidden xl:block` sur la recherche → fonctionnalité supprimée sous 1280 px. Corrigé : **le layout place la recherche** via une prop `className` + `cn()` (`order-last col-span-2 lg:order-0 lg:col-span-1`) 🟢. Règle appliquée : le composant porte sa base, la page décide de la disposition.
- **Palier traité seul** : `lg:hidden xl:block` sur « Votre panier » (place manquante en 3 colonnes entre `lg` et `xl`) 🟢.
- **`clamp()` — notion neuve** : cours complet (MIN / préféré / MAX, `vw`, calcul d'une droite entre deux points). Besoin exprimé par lui : `px-40` sur grand écran, resserrement progressif jusqu'au mobile. Appliqué : `px-[clamp(16px,13.09vw-41px,160px)]`. « Je ne comprends pas tout mais ça fonctionne » 🟡. Tailwind ajoute lui-même les espaces autour de l'opérateur.
- `max-w-7xl` = taille nommée maximale ; au-delà, valeur arbitraire ou token `--container-*` 🟡 (non appliqué).

### 2. Boutique ✅
Le bug du titre qui dépasse est revenu avec le responsive : `h-14` calé sur `md:text-lg` (2 × 28 px), trop haut pour le texte de base (2 × 24 px). **`h-14` retiré**, l'alignement des prix tient par `flex-1` + `mt-auto` 🟢. Repère : une hauteur fixe sur un bloc de texte doit suivre sa taille de texte, ou disparaître.
**Effet de survol** : bordure noire puis blanche → couleur de bordure par défaut `currentColor` en v4 + `transition-all`. Corrigé par **`border border-transparent` permanent + `hover:border-white`** 🟢 (plus de saut d'1 px).

### 3. Fiche produit ✅
Colonne en mobile, deux colonnes à `md`, bouton d'ajout `flex-1 md:flex-none` 🟢.

### 4. Panier ✅
Grille `grid-cols-1` → `md:grid-cols-3` · ligne d'article en **colonne en mobile**, en ligne à `md` · piège `items-start` en colonne expliqué (le titre prendrait sa largeur pleine, `truncate` inopérant ; on garde le `stretch`) · `grid-col-1` (classe inexistante, silencieuse) corrigé · prix et paddings allégés en mobile. **Rendu à 375 px validé** 🟢. Retouches visuelles faites seul (cadre des images, `gap-0 md:gap-4`).
Reste facultatif : `shrink-0` à déplacer de l'`<img>` vers la `div` du cadre.

---

**🏁 Shopping Cart terminé.** Énoncé Odin couvert, plus : fiche produit, recherche, panier persistant, bande latérale, états de chargement / d'erreur, responsive complet. **PR + fusion faites par lui en fin de séance.**

**Niveaux** : chaîne `min-w-0` 🟡 (2ᵉ échec en révision, juste en code) · `useState` et valeur de départ 🟡 · placement d'un composant par le parent (`className` + `cn()`) 🟢 · `order` / `col-span` responsive 🟢 · `clamp()` + `vw` 🟡 (neuf) · hauteur fixe vs taille de texte responsive 🟢 · `border-transparent` au survol 🟢 · flex en colonne / `stretch` vs `items-start` 🟡 · mobile first en pratique 🟢.

**🔄 Rotation** : **restent** — chaîne `min-w-0` (priorité) · `useState` et valeur de départ. **Entrent** — `clamp()` + `vw` · `border-transparent` au survol · hauteur fixe sur texte responsive · `stretch` vs `items-start` en colonne.

**⏭️ Prochaine étape** : **hooks personnalisés + Context API**, avec le panier de Shopping Cart comme terrain, sur une séance fraîche.

## Session 119 bis — Chantier documentaire : registre, audit, projets réalisés, cap

**Durée** : ~45 min (jeudi après-midi). Aucun apprentissage.

**Fait** :
- `dettes-apprentissage.md` actualisé à la S119 : 54 → **45 dettes**, 🔴 12 → **6**. 13 soldées (`children`, `useRef`, `<table>`, types fonction, `unknown`/`instanceof`, branches + PR, coercion, hoisting, debugger, `localStorage`, `Promise.all`/`.then`, `line-clamp`, `clamp()`). Ajouts : portails, ErrorBoundary, render props (le nom), `IntersectionObserver` version React. Debugger classé soldé mais « à surveiller ».
- `audit-exercices-types.md` **durci sur sources officielles** (pages Odin fetchées le 08/10) et coupé en deux : **partie A** = canon vérifié, utilisable · **partie B** = liste générique, grille de lecture seulement. Constat : les 3 projets React d'Odin sont faits ; le nouveau trou est l'organisation du code JS (constructeurs, prototypes, classes).
- `Projets_realises_Frederic_S119.md` régénéré (S57 → S119). **Supprimer la version S56 du projet.**
- Instructions §6 et §10 : texte de remplacement livré pour la ligne sur l'audit.

**🎓 Décisions** :
- **Le bloc React se termine avant Next.js** : `useMemo` / `useCallback` / `React.memo` remontent avant Next.js (hooks de base sur roadmap.sh, dernière leçon React d'Odin). Next.js ne remplace pas React, il est construit dessus.
- **Tests** (Vitest, React Testing Library, Playwright) **avant le déploiement du SaaS**.
- **Figma en Phase 2**, avant le passage en Phase 3.
- **shadcn/ui** au moment du SaaS optique (prérequis déjà acquis : Tailwind, `cn()`, tokens par rôle).

**⏭️ Prochaines étapes (ordre théorique)**
1. **Bloc React complet** : Context API + hooks personnalisés + `useReducer` (sur le panier du Shopping Cart) → `useMemo` / `useCallback` / `React.memo` (warning `exhaustive-deps` de la calculatrice) → portails + ErrorBoundary.
2. **Todo List (Odin)** en React + TS, projet de synthèse (dates, état partagé, `localStorage`). Dark mode React possible dedans.
3. En créneaux courts, en parallèle : cycles de reprise et rotation · event loop · `@keyframes` (retournement de carte Memory Card).
4. **Next.js**.
5. Base de données + authentification → Zod + React Hook Form → shadcn/ui → **SaaS optique**.
6. **Tests**, puis déploiement du SaaS.
7. **Figma**, `this` + classes (projet Library d'Odin, JS sans React), puis **Phase 3**.

**📝 Edit post-séance (09/10) — cap et calendrier**

- **Compte d'heures** : ~357h au 08/10 (~285h jusqu'à la S93 + ~72h de la S94 à la S119 bis), soit ~17h par semaine travaillée, au-dessus du plancher de 15h. Le volume est dans les temps : 61 % de ~585h.
- **Retard de contenu** : Phase 2 faite côté React seulement. Reste estimé à ~130-180h (Next.js, base de données, authentification, Zod, Figma, tests, SaaS). Fin de Phase 2 prévue à l'origine au 22/10.
- **Lecture retenue** : pas de retard réel. Le planning de 9 mois à 15-20h par semaine était ambitieux. En heures, le parcours représente environ un tiers d'un cursus d'école à temps plein (35h × 6-9 mois). Aucun impératif de délai.
- **🎯 Décision** : **fin de Phase 2 au 31 janvier 2027**, puis Phase 3 allégée (une fonctionnalité IA greffée sur le SaaS, réactivation des outils d'IA de développement). Recalcul de la date à la fin du bloc React.
- **Critère de candidature** : être « compétent et confiant ». Il sera traduit en conditions concrètes en fin de Phase 2 (SaaS déployé, choix techniques expliqués, tests en place, cycle branche + PR réflexe).
- **Portfolio** : la vitrine principale est le **SaaS optique**. Les exercices canoniques ont une valeur pédagogique : en garder un ou deux soignés, sans qu'ils absorbent le temps du SaaS.

## Session 120 — Context API : cours, typage, ThemeProvider (dark mode étape 1)

**Durée** : ~3h10 (vendredi, en trois blocs avec pauses). Énergie bonne.

**🎹 Raccourci** : Remove Brackets **abandonné** (jamais utilisé). Nouveau : **`Ctrl+Entrée`** (ligne en dessous sans couper la ligne en cours) — donné de mémoire.

---

### Révision éclair (2 items)
- **Déboguer — chaîne `min-w-0`** 🟢 : `div` intermédiaire en `flex-1 min-w-0` trouvée (le maillon raté deux fois), `shrink-0` sur l'image, explication juste. Classes inutiles sur le `<p>` (parent non flex) · `ml-auto` au lieu de `shrink-0` sur la ville.
- **Prédire — `useState` et prop** 🟢 : 10, raison juste. Correction = supprimer le state, afficher la prop.
- Ressenti 8/10 : **bien calibré**.

### 1. Context API — notion neuve
- **⚠️ Premier message surchargé** (correction + raccourci + cours + exercice + note de version) → « je ne comprends rien ». Redécoupé : idée seule, sans code (analogie de l'écran au mur du magasin), puis les trois gestes un par un. **Ce format est passé.**
- Exercice à trou (la balise du Context) ✅ · prédiction sans balise : valeur par défaut ✅, **effet du clic manqué** (plus relié au state).
- `.Provider` vs forme courte : React 19 → **forme courte retenue**.
- **Typer un Context qui transporte un objet** : `createContext<T | null>(null)` + garde + `throw` ✅ (trou rempli seul). Écran vide + erreur pointant le composant observé et compris.
- Critères `useOutletContext` / `useContext` posés (portée, Next.js sans React Router, typage vérifié à la création).

**🎓 Décision de Frédéric** : **Shopping Cart non modifié** (correct en `useOutletContext`, projet fini présentable). Terrain retenu : **dark mode de `projet-vite-local`**.

### 2. Dark mode — étape 1 (thème qui bascule, sans couleurs)
**🎓 Refus fondé** : squelette complet donné après deux exercices à trou → « je veux coder ». Consigne refaite en livrable + contraintes, avec indices à la demande.

Écrit par lui : `contexts/ThemeContext.tsx` (`ThemeProvider` avec `children`, `BoutonTheme` exporté) · `main.tsx` (Provider dans `BrowserRouter`) · bouton dans la `<nav>` d'`App.tsx` ✅.
Accroches, toutes corrigées : **interface de props réutilisée comme type du Context** (un rôle = une interface) · constante en minuscule (balise lue comme HTML) · `useState` non typé · **signature sans déstructuration** (`ThemeProvider(children: …)`) → question de fond : `props` est un nom libre, l'objet est fourni par React, `children` est une clé réservée · `<button>` vide laissé dans le Provider.
**Test de persistance entre pages : à confirmer en ouverture.**

### 3. `throw` hors `fetch` 🔴
**Blocage mental exprimé** : `throw` collé au contexte `fetch`. Cours donné (`return` = sortie normale / `throw` = sortie anormale qui remonte jusqu'à un `try` ou plante ; deux usages : sauter au `catch`, refuser une situation impossible). Exemple `calculerRemise`. **À pratiquer, pas encore compris en situation.**

---

**Niveaux** : chaîne `min-w-0` 🟢 · `useState` et valeur de départ 🟢 · Context API (trois gestes) 🟢 compris / 🟡 en écriture · Context typé `T | null` + garde 🟡 · composant Provider avec `children` 🟡 (écrit avec indices) · interface de props vs interface de donnée 🟡 (rechute) · signature d'un composant = un objet 🟡 (rechute) · `throw` hors `fetch` 🔴.

**📌 Constaté** : `index.css` de `projet-vite-local` = CSS de démonstration Vite **hors layer**, avec un dark mode automatique (`prefers-color-scheme`) et des variables déjà nommées par rôle.

**⚠️ Mes erreurs**
1. **Message d'ouverture du Context API surchargé** — cinq sujets dans une réponse. Récurrence du dosage.
2. **Squelette complet donné alors qu'il était prêt à écrire seul** après deux trous réussis.
3. Durée de séance mal comptée (« 2h dépassées » alors qu'il revenait de pause).

**🔄 Cycle de reprise** : Context API → N+2 (étape 2 du dark mode) · interface de props vs donnée.
**🔄 Rotation** : **entrent** — `throw` hors `fetch` (priorité) · Context typé avec `null` + garde. **Sortent** — chaîne `min-w-0` · `useState` et valeur de départ.

**⏭️ Prochaine étape**
1. Ouverture : confirmer le test de persistance du thème entre pages.
2. **Dark mode étape 2** : faire réagir `dark:` à une classe (vérifier la syntaxe sur la page « Dark mode » de Tailwind) · classe `dark` posée sur `<html>` depuis le Provider · valeurs sombres des variables par rôle · `localStorage` + lazy initializer.
3. **Étape 3 : hook personnalisé `useTheme`.**
4. Plus tard, à décider : dark mode dans `projet-examen-blanc` (tokens pour Shopping Cart, conversion ou `dark:` pour les autres).
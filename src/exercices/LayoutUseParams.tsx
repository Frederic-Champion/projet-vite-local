import { Link, Outlet } from "react-router";

function LayoutUseParams() {
  return (
    <div>
      {/* Ce titre est PERMANENT : il reste affiché quel que soit
          l'exercice de la section qu'on regarde.
          Même rôle que ta <nav> dans App.tsx, mais pour une branche du site. */}
      <h2 className="text-xl font-semibold">Exercices useParams</h2>
      <Link to="/use-params" className="inline-block rounded-lg border p-2 mb-4 text-blue-500">
        retour au menu
      </Link>

      {/* Le trou. React Router y insère le composant enfant
          correspondant à l'URL courante.
          Ce fichier n'a AUCUNE idée de quel composant ce sera :
          c'est la route parente, dans App.tsx, qui l'a décidé. */}
      <Outlet />
    </div>
  );
}

export function AccueilUseParams() {
  return (
    <ul className="flex flex-col gap-3">
      <li>
        {/* Chemin ABSOLU (commence par /) : ce lien fonctionne
            d'où qu'on clique dessus. */}
        <Link className="text-blue-600 hover:underline" to="/use-params/clients">
          Clients
        </Link>
      </li>
      <li>
        <Link className="text-blue-600 hover:underline" to="/use-params/montures">
          Montures
        </Link>
      </li>
    </ul>
  );
}

export default LayoutUseParams;

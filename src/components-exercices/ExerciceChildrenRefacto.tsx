
interface EncadreProps {
  titre: string,
  children: React.ReactNode;
}

function Encadre({titre, children}: EncadreProps) {
  return (
    <section className="rounded-lg border-blue-500 border p-4">
      <h2 className="mb-2 font-semibold">{titre}</h2>
      {children}
    </section>
  )
}

function FicheClient2() {
  return (
    <div className="mt-16 flex flex-col gap-4">
      <Encadre titre="Coordonnées">
        <p>Marie Dupont</p>
        <p>06 12 34 56 78</p>
      </Encadre>

      <Encadre titre="Ordonnance">
        <ul>
          <li>OD : -1.25</li>
          <li>OG : -1.50</li>
        </ul>
      </Encadre>

      <Encadre titre="Actions">
        <button type="button" className="mr-2 rounded border px-2">
          Modifier
        </button>
        <button type="button" className="rounded border px-2">
          Supprimer
        </button>
      </Encadre>
    </div>
  );
}

export { FicheClient2 };

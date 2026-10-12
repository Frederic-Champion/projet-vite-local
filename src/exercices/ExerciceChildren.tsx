interface CarteProps {
  titre: string;
  children: React.ReactNode;
}

function Carte({ titre , children }: CarteProps) {
  return (
    <section className="rounded-lg border p-4">
      <h2 className="mb-2 font-semibold">{titre}</h2>
      {children}
    </section>
  );
}

function ExerciceChildren() {
  return (
    <div className="mt-16 flex flex-col gap-4">
      <Carte titre="Aviator">
        <p>Ray-Ban · 159 €</p>
      </Carte>

      <Carte titre="Stock faible">
        <ul>
          <li>Wayfarer : 2 exemplaires</li>
          <li>Clubmaster : 1 exemplaire</li>
        </ul>
        <button type="button" className="mt-2 rounded border px-2">
          Commander
        </button>
      </Carte>
    </div>
  );
}

export { ExerciceChildren };

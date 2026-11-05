import { useRef, useState } from "react";

export function Brouillon2() {
  const ref = useRef<HTMLDialogElement>(null);
  const [s, setS] = useState(true);

  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold">Suppression d'une monture</h1>

      {s ? (
        <p>
          Je t'avais juste demandé une monture ! Heureusement que je n'ai pas lu le code sinon j'avais limite toute la réponse
        </p>
      ) : (
        <p>Monture supprimé</p>
      )}
      <button onClick={() => ref.current?.showModal()}>Supprimer la monture</button>
      <dialog
      onClick={e => e.target === e.currentTarget && ref.current?.close()}
      className="m-auto bg-transparent backdrop:bg-white/50" ref={ref}>
        <div className="rounded-2xl border bg-gray-800 p-4">
          <p>Etes vous sur de vouloir supprimer ?</p>
          <button onClick={() => {setS(false); ref.current?.close()}}>Supprimer</button>
          <button onClick={() => ref.current?.close()}>Retour</button>
        </div>
      </dialog>
    </div>
  );
}

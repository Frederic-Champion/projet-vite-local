import { useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModaleProps {
  message: string;
  onConfirmer: () => void;
  onAnnuler: () => void;
}

function Modale({ message, onConfirmer, onAnnuler }: ModaleProps) {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="flex flex-col gap-3 rounded bg-white p-6 text-black">
        <p>{message}</p>
        <div className="flex gap-2">
          <button onClick={onAnnuler} className="border px-3 py-1">
            Annuler
          </button>
          <button onClick={onConfirmer} className="border bg-red-600 px-3 py-1 text-white">
            Confirmer
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CarteMonture({ nom }: { nom: string }) {
  const [ouverte, setOuverte] = useState(false);
  const [supprimee, setSupprimee] = useState(false);

  if (supprimee) return <p className="p-4 italic">{nom} supprimée.</p>;

  return (
    // translateZ(0) simule une carte animée au survol : c'est le piège.
    <article className="transform-translateZ(0) relative h-32 w-64 overflow-hidden rounded border p-4">
      <h2>{nom}</h2>
      <button onClick={() => setOuverte(true)} className="mt-2 border px-3 py-1">
        Supprimer
      </button>
      {ouverte && (
        <Modale
          message={`Supprimer ${nom} ?`}
          onConfirmer={() => setSupprimee(true)}
          onAnnuler={() => setOuverte(false)}
        />
      )}
    </article>
  );
}

function ExercicePortail() {
  return (
    <div className="flex gap-4 p-4">
      <CarteMonture nom="Ray-Ban Wayfarer" />
      <CarteMonture nom="Oakley Holbrook" />
    </div>
  );
}

/* ------------------------------------ Séparation des exercices ------------------------------------ */

function CarteMontureDialog({ nom }: { nom: string }) {
  const [supprimee, setSupprimee] = useState(false);
  const refModale = useRef<HTMLDialogElement>(null);

  if (supprimee) return <p className="p-4 italic">{nom} supprimée.</p>;

  return (
    <article className="relative h-32 w-64 transform-[translateZ(0)] overflow-hidden rounded border p-4">
      <h2>{nom}</h2>
      <button onClick={() => refModale.current?.showModal()} className="mt-2 border px-3 py-1">
        Supprimer
      </button>

      <dialog ref={refModale} className="m-auto rounded p-6 backdrop:bg-black/50">
        <div className="flex flex-col gap-3">
          <p>Supprimer {nom} ?</p>
          <div className="flex gap-2">
            <button onClick={() => refModale.current?.close()} className="border px-3 py-1">
              Annuler
            </button>
            <button onClick={() => setSupprimee(true)} className="border bg-red-600 px-3 py-1 text-white">
              Confirmer
            </button>
          </div>
        </div>
      </dialog>
    </article>
  );
}

export function ExerciceDialog() {
  return (
    <div className="flex gap-4 p-4">
      <CarteMontureDialog nom="Ray-Ban Wayfarer" />
      <CarteMontureDialog nom="Oakley Holbrook" />
    </div>
  );
}

/* ------------------------------------ Séparation des exercices ------------------------------------ */

function ExerciceDialog2() {
  const refModale = useRef<HTMLDialogElement>(null);
  const [affichage, setAffichage] = useState("Mme Martin — mardi 14h — examen de vue");

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Rendez-vous</h1>

      <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
        <p>{affichage}</p>
        {affichage !== "Rendez-vous annulé." && (
          <button
            onClick={() => refModale.current?.showModal()}
            className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Annuler le rendez-vous
          </button>
        )}

        <dialog
          onClick={(e) => e.target === e.currentTarget && refModale.current?.close()}
          ref={refModale}
          className="m-auto backdrop:bg-black/50"
        >
          <div className="rounded-lg border p-4">
            <p>Souhaitez-vous annuler le rendez-vous ?</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  setAffichage("Rendez-vous annulé.");
                  refModale.current?.close();
                }}
              >
                Confirmer
              </button>
              <button onClick={() => refModale.current?.close()}>Retour</button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

/* Affichage des exercices sur la même page */

export function ExerciceModales() {
  return (
    <div className="flex flex-col gap-8">
      <ExercicePortail />

      <div className="flex items-center gap-6">
        <hr className="grow" />
        <p>Séparation des exercices</p>
        <hr className="grow" />
      </div>

      <ExerciceDialog />

      <div className="flex items-center gap-6">
        <hr className="grow" />
        <p>Séparation des exercices</p>
        <hr className="grow" />
      </div>

      <ExerciceDialog2 />
    </div>
  );
}

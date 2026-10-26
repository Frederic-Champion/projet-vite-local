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

      <dialog ref={refModale} className="rounded p-6 backdrop:bg-black/50">
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
    </div>
  );
}

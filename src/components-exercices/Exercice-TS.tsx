interface CarteMontureProps {
  marque: string;
  prix: number;
}

function CarteMonture({ marque, prix }: CarteMontureProps) {
  return (
    <article>
      <h2>{marque}</h2>
      <p>{prix} €</p>
    </article>
  );
}

export default function Brouillon2() {
  return (
    <div>
      <CarteMonture marque="Ray-Ban Aviator" prix={149} />
    </div>
  );
}

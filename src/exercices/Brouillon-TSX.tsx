export function Brouillon2() {
  return (
    <div>
      <Badge stock={4} />
    </div>
  );
}

interface BadgeProps { stock: number }

function Badge({ stock }: { stock: number }) {
  return ( <span className="rounded bg-green-100 px-2">{stock} en stock</span>)
}
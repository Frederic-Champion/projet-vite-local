async function chargerLunettes() {
  try {
    const res = await fetch("https://dummyjson.com/products/category/sunglasses");
    if (!res.ok) throw new Error("Erreur " + res.status);
    const data = await res.json();
    console.log(data.products.length);
  } catch (e) {
    console.log(e.message);
  }
}

chargerLunettes();

function chargerFetch() {
  fetch("https://dummyjson.com/products/category/sunglasses")
    .then((res) => {
      if (!res.ok) throw new Error("Erreur " + res.status);
      return res.json();
    })
    .then((data) => console.log(data.products.length))
    .catch((e) => console.log(e.message));
}

chargerFetch();

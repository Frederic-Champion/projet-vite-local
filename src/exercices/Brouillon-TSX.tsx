const stock = new Map();

stock.set("RB-01", 4);
stock.set("OK-12", 0);

console.log(stock.get("RB-01"));
console.log(stock.has("RB-99"));
console.log(stock.size)
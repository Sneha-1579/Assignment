const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Phone", category: "electronics" },
    { name: "TV", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Shoes", category: "clothing" },
    { name: "Headphones", category: "electronics" },
    { name: "Jacket", category: "clothing" },
    { name: "Charger", category: "electronics" },
    { name: "Cap", category: "clothing" }
  ];

  function display(arr) {
    document.getElementById("list").innerHTML =
      arr.map(item => `<li>${item.name}</li>`).join("");
  }

  function showAll() {
    display(products);
  }

  function showElectronics() {
    display(products.filter(p => p.category === "electronics"));
  }

  function showClothing() {
    display(products.filter(p => p.category === "clothing"));
  }

  showAll(); 
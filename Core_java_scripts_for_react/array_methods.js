
// map, forEach, filter and find methods in JavaScript

const Products = 

[
  {
    "id": 101,
    "name": "Zenith Noise-Cancelling Headphones",
    "category": "Audio",
    "price": 299.99,
    "inStock": true
  },
  {
    "id": 102,
    "name": "Lunar Mechanical Keyboard",
    "category": "Accessories",
    "price": 145.00,
    "inStock": true 
  },
  {
    "id": 103,
    "name": "Titan Ultra Smartwatch",
    "category": "Wearables",
    "price": 399.00,
    "inStock": false
  },

  {
    "id": 104,
    "name": "Nebula 4K Curved Monitor",
    "category": "Computing",
    "price": 549.50,
    "inStock": true
  },

{
    "id": 105,
    "name": "Titan Ultra Premium-watch",
    "category": "Wearables",
    "price": 399.00,
    "inStock": false
  },
];

// Using map to create an array of product names

const productNames = Products.map(product => product.name);

// console.log(productNames);

// using forEach to log the price of each product

// Products.forEach(product => console.log(product.price));
// Products.forEach(product => console.log(product));

// Using filter to get products that are in stock

const cheap = Products.filter(product => product.price < 200);
// console.log(cheap);

const inStockProducts = Products.filter(product => product.inStock);
// console.log(inStockProducts);

const speicificByName = Products.filter(product => product.name.includes("Titan"));
// console.log(speicificByName);

// Using find to get the first product in the "wearables" category find and filter 
// are almost same just find will find the matched element and return the first element of the macthed


const wearables = Products.find(product => product.category.includes("Wearables"));
console.log(wearables);
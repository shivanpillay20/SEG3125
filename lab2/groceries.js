// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.99,
  },
  {
    name: "bread",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 2.35,
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 10.0,
  },
  {
    name: "chicken",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 12.0,
  },
  {
    name: "rice",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 5.0,
  },
  {
    name: "quinoa",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 7.0,
  },
  {
    name: "salad",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 8.0,
  },
  {
    name: "chips",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 4.0,
  },
  {
    name: "ice-cream",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 5.0,
  },
  {
    name: "tomato",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 2.0,
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [];

  // Filter products based on the restriction
  for (let i = 0; i < prods.length; i += 1) {
    if (
      (restriction == "Vegetarian" && prods[i].vegetarian == true) ||
      (restriction == "GlutenFree" && prods[i].glutenFree == true) ||
      (restriction == "Organic" && prods[i].organic == true) ||
      restriction == "None"
    ) {
      product_names.push(prods[i]);
    }
  }

  // Sort the products by price in ascending order
  product_names.sort((a, b) => a.price - b.price);

  // Extract only the names from the sorted products
  product_names = product_names.map((product) => product.name);

  console.log(product_names);
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}

// Get the price of a specific product
function getProductPrice(productName) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      return products[i].price.toFixed(2); // Format the price to two decimal places
    }
  }
  return "N/A"; // Return "N/A" if the product is not found
}

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    fruit:false,
    vegetable:true,
    meat: false,
    dairy:false,

    price: 1.99,
    image: "brocoli.jpg",
  },
  {
    name: "bread",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    fruit:false,
    vegetable:false,
    meat: false,
    dairy:false,
    price: 2.35,
    image: "bread.jpg",
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    fruit:false,
    vegetable:false,
    meat: true,
    dairy:false,
    price: 10.0,
    image: "salmon.jpg",
  },
  {
    name: "chicken",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 12.0,
    fruit:false,
    vegetable:false,
    meat: true,
    dairy:false,
    image: "chicken.jpg",
  },
  {
    name: "rice",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    fruit:false,
    vegetable:false,
    meat: false,
    dairy:false,
    price: 5.0,
    image: "rice.jpg",
  },
  {
    name: "quinoa",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    fruit:false,
    vegetable:false,
    meat: false,
    dairy:false,
    price: 7.0,
    image: "quinoa.jpg",
  },
  {
    name: "salad",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    fruit:false,
    vegetable:true,
    meat: false,
    dairy:false,
    price: 8.0,
    image: "salad.jpg",
  },
  {
    name: "chips",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    fruit:false,
    vegetable:false,
    meat: false,
    dairy:false,
    price: 4.0,
    image: "chips.jpg",
  },
  {
    name: "ice-cream",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    fruit:false,
    vegetable:false,
    meat: false,
    dairy:true,
    price: 5.0,
    image: "icecream.jpg",
  },
  {
    name: "tomato",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    fruit:false,
    vegetable:true,
    meat: false,
    dairy:false,
    price: 2.0,
    image: "tomato.jpg",
  },
  {
    name: "mango",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    fruit:true,
    vegetable:false,
    meat: false,
    dairy:false,
    price: 4.0,
    image: "mango.jpg",
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [];

  for (let i = 0; i < prods.length; i++) {
    if ((
      (restriction == "Vegetarian" && prods[i].vegetarian == true) ||
      (restriction == "GlutenFree" && prods[i].glutenFree == true) ||
      (restriction == "Organic" && prods[i].organic == true) ||
      (restriction == "Dairy" && prods[i].dairy == true) ||
      (restriction == "Vegetable" && prods[i].vegetable == true) ||
      (restriction == "Meat" && prods[i].meat == true) ||
      (restriction == "Fruit" && prods[i].fruit == true) ||
      restriction == "None"
    ) ){
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

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    category: "Fashion",
    price: 29.99,
    icon: "👕"
  },

  {
    id: 2,
    name: "Premium Sneakers",
    category: "Fashion",
    price: 89.99,
    icon: "👟"
  },

  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    icon: "🎧"
  },

  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 119.99,
    icon: "⌚"
  },

  {
    id: 5,
    name: "Minimal Lamp",
    category: "Home",
    price: 44.99,
    icon: "💡"
  },

  {
    id: 6,
    name: "Modern Chair",
    category: "Home",
    price: 149.99,
    icon: "🪑"
  },

  {
    id: 7,
    name: "Beauty Set",
    category: "Beauty",
    price: 39.99,
    icon: "💄"
  },

  {
    id: 8,
    name: "Perfume",
    category: "Beauty",
    price: 69.99,
    icon: "🌸"
  }
];


let cart = [];


/* Display Products */

function displayProducts(list = products) {

  const grid = document.getElementById("productGrid");

  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
    return;
  }

  list.forEach(product => {

    grid.innerHTML += `
      <div class="product">

        <div class="product-img">
          ${product.icon}
        </div>

        <div class="product-info">

          <h3>
            ${product.name}
          </h3>

          <p>
            ${product.category}
          </p>

          <div class="price">
            $${product.price.toFixed(2)}
          </div>

          <button
            class="add-btn"
            onclick="addToCart(${product.id})"
          >
            Add to Cart
          </button>

        </div>

      </div>
    `;
  });
}


/* Add Product */

function addToCart(id) {

  const product = products.find(
    product => product.id === id
  );

  cart.push(product);

  updateCart();

  openCart();
}


/* Remove Product */

function removeFromCart(index) {

  cart.splice(index, 1);

  updateCart();
}


/* Update Cart */

function updateCart() {

  const cartItems =
    document.getElementById("cartItems");

  const cartCount =
    document.getElementById("cartCount");

  const cartTotal =
    document.getElementById("cartTotal");


  cartCount.textContent = cart.length;


  if (cart.length === 0) {

    cartItems.innerHTML =
      "<p>Your cart is empty.</p>";

    cartTotal.textContent = "0.00";

    return;
  }


  let total = 0;

  cartItems.innerHTML = "";


  cart.forEach((product, index) => {

    total += product.price;

    cartItems.innerHTML += `
      <div class="cart-item">

        <div>
          <strong>
            ${product.icon} ${product.name}
          </strong>

          <br>

          $${product.price.toFixed(2)}
        </div>

        <button
          onclick="removeFromCart(${index})"
        >
          Remove
        </button>

      </div>
    `;
  });


  cartTotal.textContent =
    total.toFixed(2);
}


/* Open Cart */

function openCart() {

  document
    .getElementById("cart")
    .classList.add("open");
}


/* Close Cart */

function closeCart() {

  document
    .getElementById("cart")
    .classList.remove("open");
}


/* Search */

function searchProducts() {

  const query =
    document
      .getElementById("search")
      .value
      .toLowerCase();


  const results = products.filter(product =>

    product.name
      .toLowerCase()
      .includes(query)

    ||

    product.category
      .toLowerCase()
      .includes(query)
  );


  displayProducts(results);
}


/* Category Filter */

function filterCategory(category) {

  const results =
    products.filter(
      product =>
        product.category === category
    );


  displayProducts(results);


  document
    .getElementById("products")
    .scrollIntoView({
      behavior: "smooth"
    });
}


/* Checkout */

function checkout() {

  if (cart.length === 0) {

    alert("Your cart is empty.");

    return;
  }


  alert(
    "Thank you for your order!\n\n" +
    "Checkout integration can be connected here."
  );
}


/* Initial Load */

displayProducts();

updateCart();

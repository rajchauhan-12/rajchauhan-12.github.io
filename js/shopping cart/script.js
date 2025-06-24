let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

const showProducts = () => {
  let str = "<div class='row'>";
  products.forEach((value) => {
    str += `<div class='product'>
      <h3>${value.name}</h3>
      <h4>$${value.price}</h4>
      <button onclick='addToCart(${value.id})'>Add to Cart</button>
    </div>`;
  });
  str += "</div>";
  str += `<br><button onclick="showCart()">Go to Cart</button>`;
  document.getElementById("root").innerHTML = str;
};

const showCount = () => {
  document.getElementById("cartCount").innerText = Object.values(cart).reduce((a, b) => a + b, 0);
};

const addToCart = (id) => {
  cart[id] = (cart[id] || 0) + 1;
  showCount();
};

const increment = (id) => {
  cart[id]++;
  showCart();
  showCount();
};

const decrement = (id) => {
  if (cart[id] > 1) {
    cart[id]--;
  } else {
    delete cart[id];
  }
  showCart();
  showCount();
};

const showCart = () => {
  let str = `<ul>`;
  products.forEach((value) => {
    if (cart[value.id]) {
      str += `<li class="cart-item">
        ${value.name} - $${value.price} 
        <button onclick="decrement(${value.id})">-</button> 
        ${cart[value.id]} 
        <button onclick="increment(${value.id})">+</button> 
        = $${value.price * cart[value.id]}
      </li>`;
    }
  });
  str += `</ul>`;
  str += `<h4 id="orderValueH4"></h4>`;
  str += `<br><button onclick="showProducts()">Back to Products</button>`;
  document.getElementById("root").innerHTML = str;
  showOrderValue();
};

const showOrderValue = () => {
  const total = products.reduce((sum, value) => {
    return sum + (cart[value.id] || 0) * value.price;
  }, 0);
  document.getElementById("orderValueH4").innerText = `Total Order Value: $${total}`;
};

// Initial render
showProducts();

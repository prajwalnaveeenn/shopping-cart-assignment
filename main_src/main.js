const Cart = require("./cart");

async function main() {
  const cart = new Cart();
  await cart.addProduct("cornflakes", 1);
  await cart.addProduct("cornflakes", 1);
  await cart.addProduct("weetabix", 1);

  cart.displayCart();
}

main().catch(console.error);

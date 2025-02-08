class Cart {
  constructor() {
    this.items = {}; // Stores product quantities
    this.prices = {}; // Caches product prices
  }

  async addProduct(product, quantity = 1) {
    if (!this.prices[product]) {
      this.prices[product] = await this.fetchPrice(product);
    }
    this.items[product] = (this.items[product] || 0) + quantity;
  }

  async fetchPrice(product) {
    const BASE_URL = "http://localhost:3001/products";
    const response = await fetch(`${BASE_URL}/${product}`);
    if (!response.ok) throw new Error(`Price fetch failed for ${product}`);
    const data = await response.json();
    return data.price;
  }

  calculateTotals() {
    let subtotal = 0;
    for (const [product, quantity] of Object.entries(this.items)) {
      subtotal += this.prices[product] * quantity;
    }

    // Round subtotal up to two decimal places
    subtotal = Math.ceil(subtotal * 100) / 100;
    const tax = parseFloat((subtotal * 0.125).toFixed(2));
    // Ensure total is rounded up
    const total = Math.ceil((subtotal + tax) * 100) / 100;

    return { subtotal, tax, total };
  }

  displayCart() {
    for (const [product, quantity] of Object.entries(this.items)) {
      console.log(`Cart contains ${quantity} x ${product}`);
    }
    const { subtotal, tax, total } = this.calculateTotals();
    console.log(`Subtotal = ${subtotal.toFixed(2)}`);
    console.log(`Tax = ${tax.toFixed(2)}`);
    console.log(`Total = ${total.toFixed(2)}`);
  }
}

module.exports = Cart;

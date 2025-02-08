const Cart = require("../main_src//cart");
const fs = require("fs");
const path = require("path");

function loadTestData(product) {
  const filePath = path.join(__dirname, "..", "test_data", `${product}.json`);
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data).price;
  } catch (error) {
    throw new Error(`Test data not found for product: ${product}`);
  }
}

describe("Cart", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
    cart.fetchPrice = jest.fn(async (product) => loadTestData(product));
  });

  test("adds products and calculates totals correctly", async () => {
    await cart.addProduct("cornflakes", 2);
    await cart.addProduct("weetabix", 1);
    const totals = cart.calculateTotals();
    expect(totals.subtotal).toBeCloseTo(15.02, 2);
    expect(totals.tax).toBeCloseTo(1.88, 2);
    expect(totals.total).toBeCloseTo(16.9, 2);
  });

  test("fetches prices correctly from JSON files", async () => {
    const price = await cart.fetchPrice("cornflakes");
    expect(price).toBe(2.52);
  });

  test("displays cart contents correctly", async () => {
    console.log = jest.fn();
    await cart.addProduct("cornflakes", 2);
    await cart.addProduct("weetabix", 1);
    cart.displayCart();
    expect(console.log).toHaveBeenCalledWith("Cart contains 2 x cornflakes");
    expect(console.log).toHaveBeenCalledWith("Cart contains 1 x weetabix");
    expect(console.log).toHaveBeenCalledWith("Subtotal = 15.02");
    expect(console.log).toHaveBeenCalledWith("Tax = 1.88");
    expect(console.log).toHaveBeenCalledWith("Total = 16.90");
  });
});

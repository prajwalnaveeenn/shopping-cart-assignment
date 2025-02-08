# Assignment: Shopping Cart

## Aim

- This project aims to simulate an online shopping cart using Javascript(Node.js)
- The products can be added with desired quantities into the cart.
- The products are displayed with the prices fetched using the API along with their names.
- Then it also displays the subtotal of the products addition to the 12.5% tax, and also the final total price.

## Hierarchy of Project

1. main_src
1.1 cart.js # Functionality of the cart to sum up and display products and total, logic of fetching the prices through API
1.2 main.js # Input area to enter the products name and quantity

2. code_test
2.1 cart.test.js # Unit tests for the shopping cart

3. README.md # Project description document

4. package.json # Dependencies and json configs

## Instructions

Clone the repo: https://github.com/prajwalnaveeenn/shopping-cart-assignment.git
Enter the directory: cd shopping-cart-assignment

### Install dependencies

Install Node.js if not installed: `npm install`

### Price API

Use command: `npm run serve-products`

### Run application

Command: `node main_src/cart.js`

### Test the Script

Command: `npm test`

## Method functionality

- addProduct(): Adding products into the cart by their name and quantity(increments if present in cart).
- fetchPrice(): Fetches the prices through an api call(from url port 3001 '/products').
- calculateTotals(): Mathematical implementation to fetch subTotal, Tax(12.5%), Total along with roundoff logic.
- displayCart(): Displays the output with all the calculated and fetched values from above methods.
- LoadTestData(): Method inside code_test/cart.test.js file fetches prices from test_data folder and unit tests covers 100% functionality.

### Code Structure

This code provides a clear understanding of how this project works, with understandable method names and decent format. Handles all of the test cases.

# e-plantShopping

**Project name:** e-plantShopping

**Description:** e-plantShopping is the Paradise Nursery shopping application — a React plant shop where customers can browse houseplants, add them to a shopping cart, change quantities, and check out.

## Paradise Nursery shopping application

Paradise Nursery is a cozy houseplant store. This application includes:

- A landing page introducing Paradise Nursery, with a full-screen background image of lush greenery and a "Get Started" button.
- A product listing page showing plants grouped by category, with each plant's image, name, description, and cost.
- A shopping cart page showing cart items, quantities, and the total cost.

## Files

- `src/App.css` — landing page styles, including `.landing-page` with `background-image`, `background-size: cover`, `background-position: center`, and a responsive fallback for small screens.
- `src/App.jsx` — the Paradise Nursery landing page, with the company name and a "Get Started" button.
- `src/ProductList.jsx` — the product listing page for the plant shop, with plants grouped by category and "Add to Cart" buttons.
- `src/ProductList.css` — styles for the product listing page.
- `src/CartSlice.jsx` — Redux Toolkit slice for the shopping cart, with the `addItem()`, `removeItem()`, and `updateQuantity()` reducers.
- `src/CartItem.jsx` — the shopping cart page, with quantity increase/decrease, remove item, total items, total cost, Continue Shopping, and Checkout.
- `src/CartItem.css` — styles for the shopping cart page.

## Run

```sh
npm install
npm start
```

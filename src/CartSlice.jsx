import { createSlice } from '@reduxjs/toolkit';

// CartSlice.jsx — Redux Toolkit slice for the Paradise Nursery shopping cart.
// Implements three reducer functions:
//   addItem()        — add a plant to the cart (or increase its quantity)
//   removeItem()     — remove a plant from the cart
//   updateQuantity() — change the quantity of a plant already in the cart

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart.
    // If the plant is already in the cart, increase its quantity by 1.
    // Otherwise, add it with quantity 1.
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Remove an item from the cart by its name.
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },

    // Update the quantity of an item already in the cart.
    // payload: { name, quantity }
    // If the new quantity is 0 or less, the item is removed.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((cartItem) => cartItem.name === name);

      if (!item) {
        return;
      }

      if (quantity <= 0) {
        state.items = state.items.filter(
          (cartItem) => cartItem.name !== name
        );
      } else {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

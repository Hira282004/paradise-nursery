import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

// CartItem.jsx — Shopping Cart page for the Paradise Nursery plant shop.
// Displays every item in the cart with its image, name, unit cost and
// quantity, lets the user increase / decrease the quantity or remove an
// item, and shows the total number of items and the total cost.

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const parseCost = (cost) => parseFloat(String(cost).replace('$', ''));

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + parseCost(item.cost) * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({ name: item.name, quantity: item.quantity + 1 })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({ name: item.name, quantity: item.quantity - 1 })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert(`Thank you! Your order total is $${totalCost.toFixed(2)}.`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is empty. Add some plants to get started!</p>
        <button type="button">Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <p>
        Total items: {totalItems} | Total cost: ${totalCost.toFixed(2)}
      </p>

      {cartItems.map((item) => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Unit cost: {item.cost}</p>
            <p>
              Subtotal: ${(parseCost(item.cost) * item.quantity).toFixed(2)}
            </p>
          </div>
          <div className="cart-quantity">
            <button type="button" onClick={() => handleDecrease(item)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button type="button" onClick={() => handleIncrease(item)}>
              +
            </button>
          </div>
          <button type="button" onClick={() => handleRemove(item)}>
            Remove
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total: ${totalCost.toFixed(2)}</h2>
        <button type="button">Continue Shopping</button>
        <button type="button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;

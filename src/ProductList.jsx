import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

// ProductList.jsx — Product listing page for the Paradise Nursery plant shop.
// Displays all plants grouped by category, with each plant's image, name,
// description and cost, and an "Add to Cart" button for every plant.
// The button is disabled once the plant is already in the cart.

const plants = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image:
          'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80',
        description: 'A hardy, low-maintenance plant that cleans the air.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
        description: 'A fast-growing plant with arching green leaves.',
        cost: '$12',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image:
          'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80',
        description: 'A fragrant herb with calming purple flowers.',
        cost: '$18',
      },
      {
        name: 'Jasmine',
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
        description: 'A sweet-smelling flowering plant for sunny spots.',
        cost: '$20',
      },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      {
        name: 'Basil',
        image:
          'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
        description: 'A useful kitchen herb that also keeps insects away.',
        cost: '$10',
      },
      {
        name: 'Rosemary',
        image:
          'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80',
        description: 'A fragrant, woody herb that is easy to grow.',
        cost: '$14',
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantName) =>
    cartItems.some((item) => item.name === plantName);

  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      <p>Browse our plants by category and add your favourites to the cart.</p>

      {plants.map((category) => (
        <div key={category.category} className="product-category">
          <h2>{category.category}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <div key={plant.name} className="product-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p className="product-cost">{plant.cost}</p>
                <button
                  type="button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.name)}
                >
                  {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

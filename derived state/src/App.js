import "./styles.css";

export default function App() {
  // Sample shopping cart with items
  const shoppingCart = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 15 }
  ];

  // Function to calculate the total price (derived state)
  function calculateTotalPrice(cart) {
    let totalPrice = 0;

    for (const item of cart) {
      totalPrice += item.price;
    }

    return totalPrice;
  }

  // Calculate the total price (derived state) and display it
  const totalPrice = calculateTotalPrice(shoppingCart);
  console.log(`Total Price: $${totalPrice}`);

  // Later in the code, you can recompute the total price as needed
  const updatedShoppingCart = [...shoppingCart, { name: "Item 4", price: 25 }];

  const updatedTotalPrice = calculateTotalPrice(updatedShoppingCart);
  console.log(`Updated Total Price: $${updatedTotalPrice}`);

  return (
    <div className="App">
      <h1>Total price: {totalPrice}$ </h1>
      <h2>Updated total price: {updatedTotalPrice}$</h2>
    </div>
  );
}

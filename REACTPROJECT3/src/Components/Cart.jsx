function Cart({ cartItems = [] }) {
  return (
    <>
      <h2 className="heading">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="card-container">
          {cartItems.map((item, index) => (
            <div key={index} className="card">
              <img src={item.img} alt={item.name} className="card-image" />
              <div className="card-content">
                <h1 className="card-title">{item.name}</h1>
                <p className="card-price">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cart;
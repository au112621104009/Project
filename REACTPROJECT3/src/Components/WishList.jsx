function WishList({ likeItems= [] }) {
  return (
    <>
      <h2 className="heading">💗My WishList</h2>
      {likeItems.length === 0 ? (
        <p className="text-center">Your WishList is empty</p>
      ) : (
        <div className="card-container">
          {likeItems.map((item, index) => (
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

export default WishList;
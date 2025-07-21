import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Card.css";

function Chaats({ addToCart,addToLike}) {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleData() {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("http://localhost:3001/items3");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setItemsData(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  if (loading) return <h2>Loading…</h2>;
  if (error) return <h2>Error fetching data</h2>;

  return (
    <>
      <h2 className="heading">Chaat it up!</h2>

      <div className="card-container">
        {itemsData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.name} className="card-image" />
            <div className="card-content">
              <div>
                <h1 className="card-title">{item.name}</h1>
                <p className="card-price">₹{item.price}</p>
              </div>
               <div className="card-actions">
                <button  onClick={()=>addToLike(item)}>♡</button>
                <button className="add-to-cart-button" onClick={() => addToCart(item)}>
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </>
  );
}

export default Chaats;

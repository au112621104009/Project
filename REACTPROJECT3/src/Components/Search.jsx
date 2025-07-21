import { useState } from "react";
import data from "C:\\Users\\Swarnaa\\Downloads\\swarna\\swarna\\data\\db.json";


function Search() {
  const [searchItem, setsearchItem] = useState("");
  const allItems = [...data.items1, ...data.items2, ...data.items3];

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 position-relative">
          <input
            type="text"
            placeholder="Search for Food and Craft"
            className="form-control pe-5"
            value={searchItem}
            onChange={(e) => setsearchItem(e.target.value)}
          />
          <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
        </div>
      </div>

      {searchItem && (
        <div className="row mt-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={item.id + "-" + index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ₹{item.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No items found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
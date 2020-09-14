import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


const ListProducts = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="sort">

      </div>
      <div className="products-container">
        {props.products.map((product, index) => {
          return (
            <div key={index}>
              <Link to={`/products/${product._id}`}>
                <div key={product._id}>
                  <img src={product.imgURL} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
              </Link>
            </div>  
          )
        })}
      </div>
    </div>


  )
}

export default ListProducts;
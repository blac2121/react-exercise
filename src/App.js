import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://products-api-01.herokuapp.com/api/products`
      );
      setProducts(response.data);
    };
    getProducts();
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;

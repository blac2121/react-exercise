import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";

import ListProducts from "./components/ListProducts";
import ViewProduct from "./components/ViewProduct";

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
      <header>
        <Link to="/">
          <h1>ProductsApp</h1>
        </Link> 
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <ListProducts products={products} />
          </Route>
          <Route path="/products/:_id">
            <ViewProduct products={products} />
          </Route>          
        </Switch>
      </main>
    </div>
  );
}

export default App;

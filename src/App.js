import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import ListProducts from "./components/ListProducts";
import ViewProduct from "./components/ViewProduct";

import './App.css';

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
`

const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px 0.3px #E4E6E6;
`

const MainTitle = styled.h1`
  padding: 20px;
  font-family: 'Kalam', cursive;
  color: black;
`

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
    <MainPage>
      <MainHeader>
        <Link to="/">
          <MainTitle>ProductsApp</MainTitle>
        </Link> 
      </MainHeader>
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
    </MainPage>
  );
}

export default App;

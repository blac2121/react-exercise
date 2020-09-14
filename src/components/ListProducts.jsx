import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`

const SearchField = styled.input`
  width: 70vw;
  padding: 12px 20px 12px 40px;
  border: 1px solid #E4E6E6;
  margin-bottom: 40px;
  font-size: 18px;
`

const ProductMainContainter = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1450px;
  margin: 0 auto;
`

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  max-height: 450px;
  margin: 10px;
  border: 1px solid #E4E6E6;
  box-shadow: 1px 1px 1px 1px #E4E6E6;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
  transition: all .2s ease-in-out; 

  &:hover {
    transform: scale(1.01); 
  }
`

const ProductImg = styled.img`
  display: block;
  width: 300px;
  height: 300px;
`

const ProductName = styled.h3`
  font-size: 24px;
  font-weight: 100;
  color: black;
  padding: 10px;
  margin: 0;
`

const ProductPrice = styled.h3`
  font-size: 28px;
  margin: 0;
  font-weight: 100;
  color: black;
  padding: 10px;
`

const ListProducts = (props) => {
  const [search, setSearch] = useState(null);

  return (
    <div>
      <SearchContainer>
        <SearchField
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchContainer>
      <div className="sort">

      </div>
      <ProductMainContainter>
        {props.products.filter((product) => {
          if (search === null)
            return product
          else if (product.name.includes(search)) 
            return product           
          })
        .map((product, index) => {
          return (
            <Link to={`/products/${product._id}`} key={index}>
              <ProductContainer key={product._id}>
                <ProductImg src={product.imgURL} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price}</ProductPrice>
              </ProductContainer>
            </Link> 
          )
        })}
      </ProductMainContainter>
    </div>


  )
}

export default ListProducts;
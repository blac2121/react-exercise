import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 100px;
`

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchField = styled.input`
  width: 70vw;
  padding: 12px 20px 12px 40px;
  border: 1px solid #E4E6E6;
  margin-bottom: 40px;
  font-size: 18px;
`

const SortContainter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 80vw;
  margin: 20px;

  @media (max-width: 500px) {
    justify-content: center;
    margin: 50px auto;
    width: 100%
  }
`

const SortLabel = styled.label`
  margin-right: 20px;
  font-weight: 700;
  font-size: 18px;
`

const SortSelect = styled.select`
  border: none;
  font-size: 18px;
`

const ProductMainContainter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  max-height: 450px;
  margin: 10px 10px 60px;
  border: 1px solid #E4E6E6;
  box-shadow: 1px 1px 1px 1px #E4E6E6;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
  transition: all .2s ease-in-out; 

  &:hover {
    transform: scale(1.01); 
  }

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`

const ProductImg = styled.img`
  display: block;
  width: 300px;
  height: 300px;

  @media (max-width: 500px) {
    width: 185px;
    height: 185px;
  }
`

const ProductName = styled.h3`
  font-size: 24px;
  font-weight: 100;
  color: black;
  padding: 10px;
  margin: 0;
  text-align: center;
`

const ProductPrice = styled.h3`
  font-size: 28px;
  margin: 0;
  font-weight: 100;
  color: black;
  padding: 10px;
  text-align: center;
`

const ListProducts = (props) => {
  const [search, setSearch] = useState(null);
  const [sortData, setSortData] = useState([]);
  const [sortType, setSortType] = useState("names");

  useEffect(() => {
    const sortProducts = (field) => {
      const fields = {
        namesASC: "name",
        pricesAsc: "price",
        namesDesc: "name",
        pricesDesc: "price",
      };
      const sortField = fields[field];
      if (sortType === "pricesAsc") {
        let sorted = [...props.products].sort((a, b) => a[sortField] - b[sortField]);
        setSortData(sorted);
      } else if (sortType === "namesASC") {
        let sorted = [...props.products].sort((a, b) => a[sortField].localeCompare(b[sortField]));
        setSortData(sorted);
      } else if (sortType === "namesDesc") {
        let sorted = [...props.products].sort((a, b) => b[sortField].localeCompare(a[sortField]));
        setSortData(sorted);
      } else {
        let sorted = [...props.products].sort((a, b) => b[sortField] - a[sortField]);
        setSortData(sorted);
      }
    }
    sortProducts(sortType)
  }, [sortType, props.products]);


  return (
    <ListContainer>
      <SearchContainer>
        <SearchField
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchContainer>
      <SortContainter className="sort">
        <SortLabel htmlFor="sort">SORT BY:</SortLabel>
        <SortSelect onChange={(e) => setSortType(e.target.value)}>
          <option value="namesASC">Alphabetically, A-Z</option>
          <option value="namesDesc">Alphabetically, Z-A</option>
          <option value="pricesAsc">Price, low to high</option>
          <option value="pricesDesc">Price, high to low</option>
        </SortSelect>
      </SortContainter>
      <ProductMainContainter>
        {sortData.filter((product) => {
          if (search === null)
            return product
          else if (product.name.includes(search)) 
            return product           
          })
        .map((product, index) => {
          return (          
            <ProductContainer key={product._id}>
              <Link to={`/products/${product._id}`} key={index}>  
              <ProductImg src={product.imgURL} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price}</ProductPrice>
              </Link>  
            </ProductContainer>           
          )
        })}
      </ProductMainContainter>
    </ListContainer>


  )
}

export default ListProducts;
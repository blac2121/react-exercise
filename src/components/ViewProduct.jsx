import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  padding: 80px 200px 200px;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    padding: 50px 60px;
  }
`

const ImgContainer = styled.div`
  flex-grow: 1;  
`

const ProductContainer = styled.div`
  flex-grow: 1;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  text-align: left;
`

const ProductImg = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  padding: 0 40px;

  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`

const ProductName = styled.h3`
  font-size: 64px;
  font-weight: 500;
  color: black;
  padding: 10px;
  margin: 0;
`

const ProductPrice = styled.h4`
  font-size: 28px;
  margin: 0;
  font-weight: 100;
  color: black;
  padding: 10px;
`

const ProductDescription = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 100;
  color: black;
  padding: 10px;
`

const ViewProduct = (props) => {
  const params = useParams();

  const product = props.products.find((product) => params._id === product._id);

  if (!product) {
    return (
      <h4>No Product Here</h4>
    )
  }

  return (
    <ContentContainer>
      <ImgContainer>
        <ProductImg src={product.imgURL} />
      </ImgContainer>
      <ProductContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductContainer>
    </ContentContainer>
  )
}

export default ViewProduct;
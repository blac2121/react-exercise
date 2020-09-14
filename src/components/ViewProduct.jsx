import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";



const ViewProduct = (props) => {
  const params = useParams();

  const product = props.products.find((product) => params._id === product._id);

  if (!product) {
    return (
      <h4>No Product Here</h4>
    )
  }

  return (
    <div>
      <div>
        <img src={product.imgURL} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ViewProduct;
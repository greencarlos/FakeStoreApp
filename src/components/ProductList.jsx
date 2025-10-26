import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar.jsx";
import Product from "./Product";

function ProductList({ productList }) {
  return (
    <>
      <NavigationBar />
      {productList &&
        productList.map((product, i) => (
          <Product key={i} product={product} id={product.id} />
        ))}
    </>
  );
}

export default ProductList;

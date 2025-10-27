import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar.jsx";
import Product from "./Product";

function ProductList({ productList }) {
	const storage =
		localStorage.getItem("count") === 0
			? 0
			: parseInt(localStorage.getItem("count"));
	const [count, setCount] = useState(storage || 0);

  return (
    <>
      <NavigationBar count={count}/>
      {productList &&
        productList.map((product, i) => (
          <Product key={i} product={product} id={product.id} />
        ))}
    </>
  );
}

export default ProductList;

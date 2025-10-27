import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import checkPrice from "./checkPrice";
import NavigationBar from "./NavigationBar.jsx";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

function ProductDetails() {
  const storage =
    localStorage.getItem("count") === 0
      ? 0
      : parseInt(localStorage.getItem("count"));
  const [count, setCount] = useState(storage || 0);
  const [product, setProduct] = useState({});
  const price = checkPrice(`${product.price}`);
  let params = useParams();
  const id = params.id.split(":")[1]

  const addedToCart = () => {
    setCount(+count + 1);
    localStorage.setItem("count", count + 1);
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <NavigationBar count={count} />
      <hr />
      <h1>{product.title}</h1>
      <Image className="productImage" src={product.image} />
      <p>
        <em>
          <b>${price}</b>
        </em>{" "}
        <s>${(product.price * 1.3).toFixed(2)}</s>
      </p>
      <p>
        <b>Category:</b> {product.category}
      </p>
      <p>
        <b>Rating:</b> {product && product.rating && product.rating.rate} / 5
      </p>
      <p>
        <b>Description:</b> {product.description}
      </p>
      <Button
        className="button"
        variant="primary"
        size="sm"
        onClick={addedToCart}
      >
        Add to Cart
      </Button>
      <DeleteProduct id={id} />
      <EditProduct product={product} id={id} />
    </>
  );
}

export default ProductDetails;

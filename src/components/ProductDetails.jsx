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
  const [product, setProduct] = useState({});
  const price = checkPrice(`${product.price}`);
  let params = useParams();

  const addedToCart = () => {
    alert("Product Added to Cart!");
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id.split(":")[1]}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <NavigationBar />
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
      <DeleteProduct />
      <EditProduct product={product} />
    </>
  );
}

export default ProductDetails;

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";
import EditProduct from "./components/EditProduct";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [productList, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route
          path="/products"
          element={<ProductList productList={productList} />}
        />
      </Routes>
    </>
  );
}

export default App;

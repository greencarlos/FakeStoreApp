import { useState } from "react";
import NavigationBar from "./NavigationBar.jsx";
import Button from "react-bootstrap/Button";

function HomePage() {
  const storage =
    localStorage.getItem("count") === 0
      ? 0
      : parseInt(localStorage.getItem("count"));
  const [count, setCount] = useState(storage || 0);
  return (
    <>
      <NavigationBar count={count} />
      <h1>Welcome to my Ecom Store!</h1>
      <a href="/products">
        <Button variant="light">Check out our products</Button>
      </a>
      <a href="/add">
        <Button variant="light">Or add a product</Button>
      </a>
    </>
  );
}

export default HomePage;

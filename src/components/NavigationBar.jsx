import { Routes, Route } from "react-router";
import { useState } from "react";
import HomePage from "./HomePage.jsx";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import CartImage from "../assets/cart.svg";
import Image from "react-bootstrap/Image";

function NavigationBar({ count }) {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Nav className="me-auto">
          <Navbar.Brand href="/home" className="mb-3">
            Home Page
          </Navbar.Brand>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/add">Add Product</Nav.Link>
          {count > 0 ? (
            <div className="cart">
              <p>{count}</p>
            </div>
          ) : (
            <></>
          )}

          <Image className="cart" src={CartImage} />
        </Nav>
      </Navbar>
    </>
  );
}

export default NavigationBar;

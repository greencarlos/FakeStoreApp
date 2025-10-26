import { Routes, Route } from "react-router";
import HomePage from "./HomePage.jsx";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavigationBar() {
	return (
		<>
			<Navbar bg="primary" data-bs-theme="dark">
				<Nav className="me-auto">
					<Navbar.Brand href="/home" className="mb-3">
						Home Page
					</Navbar.Brand>
					<Nav.Link href="/products">Products</Nav.Link>
					<Nav.Link href="/add">Add Product</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
}

export default NavigationBar;

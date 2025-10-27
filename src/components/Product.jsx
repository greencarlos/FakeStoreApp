import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import checkPrice from "./checkPrice";

function Product({ product }) {
	const price = checkPrice(`${product.price}`);
	const descPath = `/details:${product.id}`;

	return (
		<Container>
			<Row>
				<hr />
				<Col xs={3} md={4}>
					<h1>{product.title}</h1>
					<p>
						<em>
							<b>${price}</b>
						</em>{" "}
						<s>${(product.price * 1.3).toFixed(2)}</s>
					</p>
					<p>
						<b>Cateogry:</b> {product.category}
					</p>
				</Col>
				<Col xs={3} md={4}>
					<Image className="productImage" src={product.image} rounded />
				</Col>
				<Col xs={3} md={4}>
					<Button
						className="button buttonDetails"
						href={descPath}
						variant="outline-primary"
						size="sm"
					>
						Read Description
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Product;

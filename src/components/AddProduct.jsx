import { useState } from "react";
import NavigationBar from "./NavigationBar.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function AddProduct() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Form>
      <NavigationBar />
      {submitted && <Alert variant="success">Submission successful!</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Product Title</Form.Label>
        <Form.Control placeholder="Enter Product Title" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control placeholder="Enter a Price" type="number" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Enter Description" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control placeholder="Enter Category" required />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default AddProduct;

import { useState } from "react";
import NavigationBar from "./NavigationBar.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

function AddProduct() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "https://fakestoreapi.com/products/",
      data: formData,
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  return (
    <>
      <NavigationBar />
      <Form className="form">
        {submitted && <Alert variant="success">Submission successful!</Alert>}
        <Form.Group className="mb-3">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            placeholder="Enter Product Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            placeholder="Enter a Price"
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Enter Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            placeholder="Enter Category"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddProduct;

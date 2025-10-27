import { useState } from "react";
import NavigationBar from "./NavigationBar.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

function EditProduct({ product, id }) {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    category: product.category,
    rating: product.rating && product.rating.rate,
    description: product.description,
  });

  const handleSubmit = () => {
    axios({
      method: "put",
      url: `https://fakestoreapi.com/products/${id}`,
      data: formData,
    });
    setEdit(false);
  };

  return (
    <>
      {edit && (
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              defaultValue={product.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              defaultValue={product.rating.rate}
              onChange={(e) =>
                setFormData({ ...formData, rating: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              defaultValue={product.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      )}
      {!edit && (
        <Button
          className="button"
          variant="info"
          size="sm"
          onClick={() => setEdit(true)}
        >
          Edit Product
        </Button>
      )}
      {edit && (
        <Button
          className="button"
          variant="success"
          size="sm"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )}
    </>
  );
}

export default EditProduct;

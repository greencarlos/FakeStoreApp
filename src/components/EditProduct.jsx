import { useState } from "react";
import NavigationBar from "./NavigationBar.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function EditProduct({ product }) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      {edit && (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control defaultValue={product.category} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" defaultValue={product.rating.rate} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control defaultValue={product.description} />
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
          onClick={() => setEdit(false)}
        >
          Submit
        </Button>
      )}
    </>
  );
}

export default EditProduct;

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteProduct({ id }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    axios({
      method: "delete",
      url: `https://fakestoreapi.com/products/${id}`,
    }).then((res) => console.log(res));
    setShow(false);
  };

  return (
    <>
      <Button
        className="button"
        variant="danger"
        size="sm"
        onClick={handleShow}
      >
        Delete the Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <a href="/products">
            <Button variant="success" onClick={handleClose}>
              Yes, Delete
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProduct;

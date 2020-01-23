import React, { useEffect, useState } from 'react';
import API from "../utils/API";

export default function Cart() {
  const [cart, setCart] = useState([{id: "", name: "", price: 0, quantity: 0, image: ""}]);

  useEffect(() => {
    loadProducts();
  }, [])

  function loadProducts() {
    API.getProducts()
    .then(res => {
      setCart(res.data)
      console.log(cart)
    })
    .catch(err => console.log(err));
  };

  function deleteProduct(id) {
    API.deleteProduct(id)
    .then(res => loadProducts())
    .catch(err => console.log(err));
  };

  function getTotal(cart) {
    const total = cart.reduce((p, c) => (parseFloat(p) + parseFloat(c.price)), 0);
    return total;
  };

  function renderRow(product) {
    return (
    <tr key={product.id}>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td><img alt={product.name} height="50" width="50" src={product.image}/></td>
        <td>{product.quantity}</td>
        <td>
          <button id={product.id} className="add-btn btn-sm btn-danger mt-2" role="button" onClick={() => deleteProduct(product.id)}>
            Remove
          </button>
        </td>
    </tr>
    );
  };

  return (
    <container className="container mt-2">
      <h5>Your Cart:</h5>
        <table className="table cart">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(renderRow)}
          </tbody>
        </table>
        <h5>Your Subtotal: ${getTotal(cart)}</h5>
      </container>
  );
};
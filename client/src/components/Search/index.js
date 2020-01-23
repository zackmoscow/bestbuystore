import React, { useState, useContext, useRef } from "react";
import ProductContext from '../../utils/ProductContext';
import API from "../../utils/API";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const inputRef = useRef();
  const { productState } = useContext(ProductContext);

  function productSearch(e) {
    e.preventDefault();
    API.Search(searchTerm)
      .then(res => {
          setProducts(res.data);
      })
      .catch(err => console.log(err));
  }

  function addProduct(value) {
    let addedProduct = products.filter(product => product.sku === value);
    API.addProduct({
      id: addedProduct[0].sku,
      name: addedProduct[0].name,
      price: addedProduct[0].salePrice,
      image: addedProduct[0].thumbnailImage,
      quantity: 1
    })
  }

  function renderRow(product) {
      return (
      <tr key={product.sku}>
          <td>{product.name}</td>
          <td>${product.salePrice}</td>
          <td><img alt={product.sku} height="50" width="50" src={product.thumbnailImage}/></td>
          <td>
            <button id={product.sku} className="add-btn btn-sm btn-success mt-2" role="button" onClick={() => addProduct(product.sku)}>
              Add to Cart
            </button>
          </td>
      </tr>
      )
  }

  return (
    <ProductContext.Provider value={{ productState, inputRef, addProduct, setSearchTerm }}>
      <container className="container mt-2">
        <h5>Search by Keyword:</h5>
        <form className="form-group mt-2" onSubmit={(e) => productSearch(e)}>
            <input className="form-control" name="search" type="search" onChange={(e) => setSearchTerm(e.target.value)} placeholder="e.g. Mobile" />
            <button className="btn btn-primary mt-3" type="submit">
                Search
          </button>
        </form>
        <table className="table results">
          <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {products.map(renderRow)}
          </tbody>
        </table>
      </container>
    </ProductContext.Provider>

  );
}

export default Search;
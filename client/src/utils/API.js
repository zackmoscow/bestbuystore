import axios from "axios";

export default {
  getProducts: function() {
    return axios.get('/api/products/cart')
  },
  addProduct: function(data) {
    console.log(data)
    return axios.post("/api/products/", data);
  },
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  updateProduct: function(id, value) {
    return axios.put("/api/products/", id, value);
  },
  Search: function(term) {
    return axios.get(`/api/products?q=${term}`)
  }
};
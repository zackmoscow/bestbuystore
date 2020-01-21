import axios from "axios";

export default {
  getProducts: function() {
    return axios.get("/api/products");
  },
  newProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  updateProduct: function(id) {
    return axios.put("/api/products/" + id);
  },
  getProductsByCategory: function(id) {
    return axios.get("api/category/" + id);
  }
};
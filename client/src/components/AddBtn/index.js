import React from "react";

function AddBtn(props) {
  return (
    <button className="add-btn btn-sm btn-success" {...props} role="button" tabIndex="0">
      Add to Cart
    </button>
  );
}

export default AddBtn;
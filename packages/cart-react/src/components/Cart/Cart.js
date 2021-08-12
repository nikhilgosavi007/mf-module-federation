/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Cart.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
  return (
    <React.Fragment>
      <div className="cart-container">
        <div className="cart-items">
          <div className="image-container">
              <img src="https://picsum.photos/200" alt="product-image"/>
          </div>
          <div className="product-info">
              <h3> Product </h3>
              <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <p className="limited-stock"> Only 5 left in stock </p>
              <p className="qty"> Quantity: 1 </p>
              <button className="btn-primary delete-btn">Delete</button>
          </div>
        </div>
        <div>
          <button className="btn-primary checkout-btn">Proceed to Checkout </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;

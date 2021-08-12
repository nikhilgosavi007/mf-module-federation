/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './ProductDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  return (
    <React.Fragment>
        <div className="product-detail-container">
            <div className="product-image">
                 <img src="https://picsum.photos/400/500" alt="product-image"/>
            </div>
            <div className="product-detail-info">
                <h3 className="product-name"> Product one </h3>
                <p>€ 80.00</p>    
                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
                <p className="limited-stock"> Only 3 left in stock </p>
                <p className="qty"> Quantity: 1 </p>
                <button className="cart-btn">Add to Cart</button>
            </div>
        </div>
    </React.Fragment>
  );
}

export default ProductDetail;
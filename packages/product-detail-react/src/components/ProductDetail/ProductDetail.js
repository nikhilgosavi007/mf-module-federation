/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from 'react';
import './ProductDetail.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {

  let [productDetail, setproductDetail] = React.useState({}) 

  React.useEffect(() => {
    const id = (new URL(document.location)).searchParams.get('id');
    fetch(`http://localhost:3001/products?id=${id}`)
      .then(results => results.json())
      .then(data => {
        setproductDetail(data);
      });
  }, [setproductDetail]);

  const addToCart = (id) => {
    fetch(`http://localhost:3001/cart/${id}`, {method: 'POST'})
    .then(response => {
      if(response && response.status === 200){
        window.location.href =  `http://localhost:8080/cart`;
      }    
    })
  }

  return (
    <React.Fragment>
        <div className="product-detail-container">
            <div className="product-image">
                 <img src={ productDetail.productImage } alt="product-image"/>
            </div>
            <div className="product-detail-info">
                <h3 className="product-name"> { productDetail.productName } </h3>
                <p>€ 80.00</p>    
                <p> { productDetail.ProductDescription } </p>
                <p className="limited-stock"> Only 3 left in stock </p>
                <p className="qty"> Quantity: 1 </p>
                <button onClick={ () => addToCart(productDetail.productId) } className="cart-btn">Add to Cart</button>
            </div>
        </div>
    </React.Fragment>
  );
}

export default ProductDetail;

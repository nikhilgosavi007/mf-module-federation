/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Cart.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {

  let [cartData, setcartData] = React.useState({}) 

  React.useEffect(() => {
    fetch(`http://localhost:3001/cart`)
      .then(results => results.json())
      .then(data => {
        setcartData(data);
      });
  }, [setcartData]);

  const removeFromCart = (id) => {
    fetch(`http://localhost:3001/removeFromCart/${id}`, {method: 'POST'})
    .then(results => results.json())
      .then(data => {
        setcartData(data);
    });
  }

  return (
    <React.Fragment>
      <div className="cart-container">
        { 
        (cartData && cartData.length > 0) ? (
          cartData.map((cartItem)=> {
            return (
                <div>
                  <div className="cart-items" key={cartItem.productId}>
                    <div className="image-container">
                    <img src={ cartItem.productImage } alt="product-image"/>
                    </div>
                    <div className="product-info">
                        <h3> { cartItem.productName } </h3>
                        <p> { cartItem.ProductDescription } </p>
                        <p className="limited-stock"> Only 5 left in stock </p>
                        <p className="qty"> Quantity: 1 </p>
                        <button onClick={ () => removeFromCart(cartItem.productId) } className="btn-primary delete-btn">Delete</button>
                    </div>
                  </div>
                  <div>
                    <button className="btn-primary checkout-btn">Proceed to Checkout </button>
                  </div>
                </div>
          ); 
        }) ) : "" 
      }
      </div>
    </React.Fragment>
  );
}

export default Cart;

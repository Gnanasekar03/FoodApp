import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrdder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                  <p>${getTotalCartAmount()=== 0? 0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${ getTotalCartAmount()=== 0? 0:getTotalCartAmount()+2}</p>
              </div>
            </div>
            <button id="button" onClick={() => navigate("/order")}>
              Proceed To Payment
            </button>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

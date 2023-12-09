
  /* eslint-disable */
import { useState, useEffect } from 'react';
import shippingText from './../lib/shippingText';

const DiscountApply = ({selectedOffer, setSelectedOffer, shippingC, shippingCT}) =>


{
    var shippingT = shippingText(shippingCT);
return(
  <div className="quantity-selector w-full">
    <ul className="list-group list-unstyled m-0">
      <li className="">
        <label
          htmlFor="offer-1"
          className={`list-item-wrapper flex items-center justify-between ${
            selectedOffer === "1" ? "checked" : ""
          }`}
        >
          <input
            type="radio"
            name="offer"
            id="offer-1"
            className="offer-select"
            value="1"
            onChange={() => setSelectedOffer("1")}
          />
          <span className="button_check"></span>
          <span className="button-title flex-1 pl-3">BUY 1 ONLY</span>
          <span
            style={{ fontWeight: 500 }}
            className="button-details"
          >
           {shippingT}
          </span>
        </label>
      </li>
      <li className="">
        <label
          htmlFor="offer-2"
          className={`list-item-wrapper flex items-center justify-between ${
            selectedOffer === "2" ? "checked" : ""
          }`}
        >
          <span className="title-tag">Most Selling</span>
          <input
            type="radio"
            name="offer"
            id="offer-2"
            className="offer-select"
            value="2"
            onChange={() => setSelectedOffer("2")}
          />
          <span className="button_check"></span>
          <span className="button-title flex-1 pl-3">BUY 2 GET 1 FREE</span>
          <span
            style={{ fontWeight: 500 }}
            className="button-details"
          >
                       {shippingT}

          </span>
        </label>
      </li>
    </ul>
  </div>
);

}

export default DiscountApply;
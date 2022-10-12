import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addItem } from '../service/cartService';
import { formatPrice } from '../utils/helpers';
import { changeAmountItem } from '../service/cartService';
const AddtoCart = ({ product }) => {
  const navigate = useNavigate()
  const { _id, price } = product;
  const [amount, setAmount] = useState(1);
  
  const cartId = useSelector(s => s.cartReducer.cartId)
  const items = useSelector(s => s.cartReducer.items)
  const dispatch = useDispatch()
  const increase = () => {
    if (amount >= 10) {
      return;
    }
    setAmount(amount + 1);
  };
  const decrease = () => {
    if (amount <= 1) {
      return;
    }
    setAmount(amount - 1);
  };
  const addToCart = (id) => {
    for (let item of items) {
      if(item.productId == null){
        alert("Sản phẩm đã hết hàng")
      }else if (item.productId._id == id) {

        console.log('change amount');
        const oldTotal = item.total;

        if (item.amount + amount > 10) {
          const newTotal = item.productId.price * 10
          changeAmountItem(cartId, item._id, 10, { oldTotal, newTotal }, dispatch,navigate)
        } else {
          const newTotal = item.productId.price * (item.amount + amount)
          changeAmountItem(cartId, item._id, (item.amount + amount), { oldTotal, newTotal }, dispatch,navigate)
        }
        return;
      }
    }
    console.log('add item');
    addItem(cartId, { id, amount }, dispatch,navigate)
  }

  return (
    <>
      {/* Colors + Amount btns */}
      <div className="flex-col mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        {/* Colors */}
        {/* <div className="flex mb-3 ">
          <span className="mr-3">Color: </span>
          {colors?.map((color, index) => {
            return (
              <button
                style={{ backgroundColor: color }}
                key={index}
                className={`border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none flex items-center justify-center`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : null}
              </button>
            );
          })}
        </div> */}

        {/* Amount btns */}
        <div className="flex justify-start items-center w-32 text-2xl lg:text-3xl py-5">
          {/* Decrease btn */}
          <button className="w-4" type="button" onClick={() => decrease()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M18 12H6" />
            </svg>
          </button>
          <h2 className="amount mx-8">{amount}</h2>

          {/* Increase btn */}
          <button className="w-4" type="button" onClick={() => increase()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Add to cart btn */}
      <div className="flex items-center">
        <span className="title-font font-medium text-2xl text-gray-900">
          {formatPrice(price)}
        </span>
        <p
          className="flex ml-auto bg-secondary-800 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-900 rounded"
          onClick={() => { addToCart(_id) }}
        >
          Add to cart
        </p>

      </div>
    </>
  );
};

export default AddtoCart;
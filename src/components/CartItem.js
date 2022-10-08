import React, { useState } from 'react';
import { formatPrice } from '../utils/helpers';
import { useDispatch } from "react-redux"
import { deleteItem } from '../service/cartService';

const CartItem = ({item,idCart}) => {
  const [amount,setAmount] = useState(item.amount)

  const increase = (id) => {
    changeAmountItem(idCart,id,data,dispatch)
  };
  const decrease = (id) => {
    changeAmountItem(idCart,id,data,dispatch)
  };

  const dispatch = useDispatch()
  const handelDelete = ( idItem) => {
    deleteItem(idCart,idItem,dispatch)
  }
  return (
    <div className="flex flex-wrap items-center -mx-4  border-b py-5">
      {/* Item img, info*/}
      <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0 ">
        <div className="flex -mx-4 flex-wrap items-center">
          <div className="w-full md:w-1/3 px-4 mb-3">
            {/* img */}
            <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
              <img className="h-full object-contain" src={item.productId.image} alt={item.productId.name} />
            </div>
          </div>
          <div className="w-full md:w-2/3 px-4  text-left">
            <h3 className="mb-2 text-xl font-bold ">{item.productId.name}</h3>
            <p className="text-gray-500">{item.productId.name}</p>

            {/* remove item btn */}
            <button
              className="text-secondary-700 text-base w-4 h-4 md:w-5 md:h-5 mt-3 md:mt-4 "
              onClick={() => handelDelete(item._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Price*/}
      <div className="hidden lg:block lg:w-2/12 px-4">
        <p className="text-lg text-tertiary-500 font-bold">
          {formatPrice(item.productId.price)}
        </p>
      </div>

      {/* Amount btns*/}
      <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
        <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
          {/* minus btn */}
          <button className="py-2 hover:text-gray-700"

          onClick={()=>{decrease(item._id)}}
          >
            <svg
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.35">
                <rect
                  x="12"
                  width="2"
                  height="12"
                  transform="rotate(90 12 0)"
                  fill="currentColor"
                ></rect>
              </g>
            </svg>
          </button>
          <p className="w-12 m-0 px-2 py-4 text-center  border-0 focus:ring-transparent focus:outline-none rounded-md">
            {amount}
          </p>

          {/* plus btn */}
          <button className="py-2 hover:text-gray-700"
          onClick={()=>{increase(item._id)}}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.35">
                <rect x="5" width="2" height="12" fill="currentColor"></rect>
                <rect
                  x="12"
                  y="5"
                  width="2"
                  height="12"
                  transform="rotate(90 12 5)"
                  fill="currentColor"
                ></rect>
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
        <p className="text-lg text-tertiary-500 font-bold">
          {formatPrice(item.productId.price * item.amount)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;

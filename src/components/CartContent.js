import React from 'react';
import CartTotals from './CartTotals';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import {  useDispatch, useSelector } from "react-redux"
import { clearCart } from '../service/cartService';

const CartContent = () => {
  const cartId = useSelector(s => s.cartReducer.cartId)
  const dispatch = useDispatch()
  const items = useSelector(s => s.cartReducer.items)
  const totals = useSelector(s => s.cartReducer.totals)

  const handelClear = () => {
    clearCart(cartId,dispatch)
 }
  return (
    <>
      <section className="container mx-auto text-center py-14">
        <h2 className="mb-10 text-4xl md:text-5xl font-bold ">Your cart</h2>

        <div className="flex flex-wrap items-center -mx-4">
          {/* Your Cart */}
          <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
            {/* Products columns*/}
            <div className="hidden lg:flex w-full">
              <div className="w-full lg:w-3/6 text-center">
                <h4 className="mb-6 font-bold  text-gray-500">Description</h4>
              </div>
              <div className="w-full lg:w-1/6">
                <h4 className="mb-6 font-bold  text-gray-500">Price</h4>
              </div>
              <div className="w-full lg:w-1/6 text-center">
                <h4 className="mb-6 font-bold  text-gray-500">Quantity</h4>
              </div>
              <div className="w-full lg:w-1/6 text-right">
                <h4 className="mb-6 font-bold  text-gray-500">Subtotal</h4>
              </div>
            </div>

            {/* Products rows*/}
            <div className="mb-12  border-t  border-gray-200">
              {items?.map(item => {
               return ( <CartItem key={item._id} item = {item} idCart={cartId}/>);
              })}
            </div>

            <div className="flex justify-between flex-wrap items-center lg:-mb-4">
              <button
                onClick={handelClear}
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Clear Cart
                </span>
              </button>

              <Link to="/user/products">
                <button className="relative inline-block px-4 py-2 font-medium group">
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Back to shop
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Cart totals */}
          <CartTotals name="Proceed to checkout" to="/shipping" totals = {totals}/>

        </div>
      </section>
    </>
  );
};

export default CartContent;

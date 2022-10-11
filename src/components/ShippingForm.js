import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Btn from './Btn';
import { Link, useNavigate } from "react-router-dom"
import { addOrder } from '../service/orderService';
const ShippingForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfo = useSelector(s => s.userReducer.userInfo)

  const cart = useSelector(s => s.cartReducer.cart)
  const items = useSelector(s => s.cartReducer.items)
  const totals = useSelector(s => s.cartReducer.totals)


  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('');
  const [discount, setDiscount] = useState('');

  const handelSupmit = (e) => {
    if (address == '' || payment == '' || shipping == '' || discount == '') {
      alert('điền đầy đủ thông tin')
    } else {
      addOrder({
        address: address,
        userId: userInfo._id,
        payment: payment,
        shipping: shipping,
        discount: discount,
        content: {
          item: items,
          totals: totals
        }
      }, dispatch)
      navigate('/order')
    }
  }

  return (
    <div className="flex-col items-center justify-center mt-20 pb-10">
      <div
        className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto"
      >
        {/* Address */}
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Address
          </label>
          <input
            type="text"
            placeholder="Enter address"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>

        {/* City */}
        <div className="mb-6">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Shipping
          </label>
          <select
            value={shipping}
            onChange={e => setShipping(e.target.value)}
            name="shipping"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 "

          >
            <option selected="selected" disabled="disabled">Shipping</option>
            <option value={'Grapt'}>Grapt</option>
            <option value={''}></option>
            <option value={''}></option>
          </select>
        </div>

        {/* Postal Code */}
        <div className="mb-6">
          <label
            htmlFor="postalCode"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Payment
          </label>

          <select
            value={payment}
            onChange={e => setPayment(e.target.value)}
            name="payment"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 "

          >
            <option selected="selected" disabled="disabled">Payment</option>
            <option value={'bank'}>Bank</option>
            <option value={''}></option>
            <option value={''}></option>
          </select>
        </div>

        {/* Country */}
        <div className="mb-6">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Discount
          </label>
          <input
            type="text"
            placeholder="Enter country"
            id="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            value={discount}
            onChange={e => setDiscount(e.target.value)}
          />
        </div>

        <p
          
          onClick={() => { handelSupmit() }}
        ><Btn name="Next" /></p>
      </div>
    </div>
  );
};

export default ShippingForm;

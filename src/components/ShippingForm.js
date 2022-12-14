import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Btn from './Btn';
import { Link, useNavigate } from "react-router-dom"
import { addOrder } from '../service/orderService';
import Steps from "./Steps";
import { clearCart } from '../service/cartService';
const ShippingForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfo = useSelector(s => s.userReducer.userInfo)

  const cart = useSelector(s => s.cartReducer.cart)
  const items = useSelector(s => s.cartReducer.items)
  const totals = useSelector(s => s.cartReducer.totals)
  const cartId = useSelector(s => s.cartReducer.cartId)

  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('');
  const [discount, setDiscount] = useState('');

  useEffect(() => {
    if (!userInfo.name) {
      navigate('/login')
    }
  }, [])
  const handelSubmit = (e) => {
    if (!items[0]) {
      alert('không có sản phẩm trong cart')
    } else {
      if (address == '' || payment == '' || shipping == '') {
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
      clearCart(cartId, dispatch)
    }
  }

  return (
    <div className="flex-col items-center justify-center mt-20 pb-10">
      <div
        className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto border-8 p-4"
      >
        {/* Address */}
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Địa chỉ nhận Hàng:
          </label>
          <input
            type="text"
            placeholder="Nhập địa chỉ"
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
            placeholder="Chọn"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phương thức vận chuyển:
          </label>
          <select
            value={shipping}
            onChange={e => setShipping(e.target.value)}
            name="Chọn Phương thức"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 "

          >
            <option selected="selected" disabled="disabled">Shipping</option>
            <option value={'Grab'}>Grab</option>
            <option value={'ViettelPost'}>Viettel Post</option>
            <option value={''}></option>
          </select>
        </div>

        {/* Postal Code */}
        <div className="mb-6 ">
          <label
            htmlFor="postalCode"
            className="block mb-2 text-sm font-medium text-gray-900  "

          >
            Phương thức thanh toán
          </label>

          <select
            value={payment}
            onChange={e => setPayment(e.target.value)}
            name="trạng thái"

            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 "

          >
            <option selected="selected"
              disabled="disabled">Payment</option>
            <option value={'bank'}>
              Chuyển Khoản Ngân Hàng
            </option>
            <option value={'Thanh toán'}>Thanh toán khi nhận hàng </option>
            <option value={''}></option>
          </select>
        </div>

        {/* Country */}
        <div className="mb-6">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mã giảm giá
          </label>
          <input
            type="text"
            placeholder="Nhập mã"
            id="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            value={discount}
            onChange={e => setDiscount(e.target.value)}
          />
        </div>

        <p

          onClick={() => { handelSubmit() }}
        ><Btn name="Tiếp theo" /></p>
      </div>
    </div>
  );
};

export default ShippingForm;

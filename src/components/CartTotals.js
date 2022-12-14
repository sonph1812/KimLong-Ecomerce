import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const CartTotals = ({ name, to, totals }) => {
  const userInfo = useSelector(s => s.userReducer.userInfo)
  const total_amount = 10;
  const shipping_fee = 10000;

  return (
    <div className="w-1/2 xl:w-1/3 px-4">
      <div className="p-6 md:p-12 bg-black text-white">
        <h2 className="mb-6 text-4xl font-bold">Thanh Toán</h2>
        <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
          <span className="font-bold text-lg">Giá</span>
          <span className="text-xl font-bold  text-secondary-200">
            {formatPrice(totals)}
          </span>
        </div>
        <h4 className="mb-2 font-bold text-left text-lg">Phí vận chuyển</h4>
        <div className="flex mb-2 justify-between items-center">
          <span className="">Phí dịch vụ</span>
          <span className="text-xl font-bold  text-secondary-200">
            {formatPrice(shipping_fee)}
          </span>
        </div>
        <div className="flex mb-10 justify-between items-center">
          <span className="">Phí giao hàng tận nơi</span>
          <span className="text-xl font-bold  ">-</span>
        </div>
        <div className="flex mb-10 justify-between items-center ">
          <span className="text-lg sm:text-2xl font-bold ">Tổng tiền</span>
          <span className="text-xl font-bold  text-secondary-200">
            {formatPrice(totals + shipping_fee)}
          </span>
        </div>
        {userInfo.name ? (
          <Link to={to}>
            <button className="block w-full py-4 bg-yellow-300 hover:bg-yellow-200 hover:text-secondary-900 text-center  font-bold  uppercase rounded-md transition duration-200 text-secondary-50">
              {name}
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="block w-full py-4 bg-yellow-300 hover:bg-yellow-200 hover:text-secondary-900 text-center  font-bold  uppercase rounded-md transition duration-200 text-secondary-50">
              Đăng nhập để mua hàng
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartTotals;

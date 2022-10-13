import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../reducer/slice/userSlice';
import CartBtn from "./CartBtn";
import Search from "./Search";
import { UserProfile } from "./index";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {IoSearch} from "react-icons/io5";
import SearchUser from "./search/SearchUser";
// import CartBtn from './CartBtn';

const NavbarUser = () => {
  const userInfo = useSelector(s => s.userReducer.userInfo)
  const { handleClick, isClicked } = useStateContext();


  const role = localStorage.getItem('role')
  const dispatch = useDispatch()

  return (
    <div className="bg-white">
      <div className="container mx-auto py-5 ">
        <div className="items-center flex justify-between">
          {/* Left links */}
          <ul className="items-stretch hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="HomePage"
                title="HomePage"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our new product"
                title="Our new product"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Sản phẩm mới
              </a>
            </li>
            <li>
              <Link
                to="/products"
                aria-label="All products"
                title="All products"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Sản phẩm
              </Link>
            </li>
          </ul>

          {/* Logo */}
          <a
            href="/"
            aria-label="HomePage"
            title="HomePage"
            className="inline-flex justify-between mr-36"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              KIM LONG            </span>
          </a>

          {/* Right links */}

          <ul className="items-center space-x-1 lg:flex justify-end">
            <li style={{marginRight: '15px'}}>
              <CartBtn />
            </li>
            {userInfo.name && <TooltipComponent content="Profile" position="BottomCenter">
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                onClick={() => handleClick('userProfile')}
              >
                <img
                  className="rounded-full w-8 h-8"
                  src={userInfo.avatar ? userInfo.avatar : "https://symbols.vn/wp-content/uploads/2022/01/Hinh-Anime-tho-trang-cuc-ky-ngo-nghinh.jpg"}
                  alt="user-profile"
                />
                <p>
                  <span className="text-gray-400 text-14">Hi,</span>{' '}
                  <span className="text-gray-400 font-bold ml-1 text-14">
                    {userInfo.name ? userInfo.name : ""}
                  </span>
                </p>
                <MdKeyboardArrowDown className="text-gray-400 text-14" />
              </div>
            </TooltipComponent>}
            {isClicked.userProfile && (<UserProfile userInfo={userInfo} />)}

            {!role && <>
              <li style={{marginRight: '10px'}}>
                <Link
                  to="/login"
                  aria-label="Log in"
                  title="Log in"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Đăng nhập
                </Link>
              </li>
              <li style={{marginRight: '10px'}}>
                <Link
                  to="/register"
                  aria-label="Register"
                  title="Register"
                  className="font-medium  text-center tracking-wide text-gray-700 pr-2 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Đăng kí
                </Link>
              </li>
            </> }
            {/*)}*/}
          </ul>


        </div>
      </div>
    </div>
  );
};

export default NavbarUser;

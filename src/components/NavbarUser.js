import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../reducer/slice/userSlice';
import CartBtn from "./CartBtn";
import Search from "./Search";
import {UserProfile} from "./index";
import React, {useState} from "react";
// import UserMenu from './UserMenu';
// import AdminMenu from './AdminMenu';
// import { useProductsContext } from '../context/products_context';
import { useStateContext } from '../contexts/ContextProvider';
import {IoSearch} from "react-icons/io5";
// import CartBtn from './CartBtn';

const NavbarUser = () => {
  const userInfo = useSelector(s => s.userReducer.userInfo)
  console.log(userInfo,"sontest")
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (clicked) => setIsClicked(  {userProfile:true,[clicked]:true });


  const role = localStorage.getItem('role')
  const dispatch = useDispatch()
  const logOutHome = () => {
    dispatch(logOut())
  }
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
                href="/#features"
                aria-label="Our featured products"
                title="Our featured products"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#new"
                aria-label="Our new product"
                title="Our new product"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                New
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
            <li>
              <div className="hover:scale-105 shadow-amber-700relative block  w-1/2 bg-white rounded transition-delay-150 duration-300 ease-in-out">
                <input type="text"   className="absolute right-20 bottom-0  w-fit bg-yellow-200 p-2 text-black hover:scale-105"
                       placeholder="Search..."/>
                  <button className="flex items-center justify-center px-5">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                    </svg>
                  </button>
              </div>

            </li>
            <li>
              <CartBtn />
            </li>
            <div onClick={handleClick}>
              {role && <span  className="text-dark font-bold ml-1 text-14">
                Hi,  {userInfo.name ? userInfo.name : ""}
              </span>}
            </div>
            <>
              <li className="bg-black text-white">
                {isClicked.userProfile && (<UserProfile userInfo = {userInfo}/>)}
              </li>
            </>
            {/*) : (*/}
           {!role? <>
              <li>
                <Link
                  to="/login"
                  aria-label="Log in"
                  title="Log in"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                // onClick={closeMenu}
                >
                  Đăng nhập
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  aria-label="Register"
                  title="Register"
                  className="font-medium  text-center tracking-wide text-gray-700 pr-2 transition-colors duration-200 hover:text-deep-purple-accent-400"
                // onClick={closeMenu}
                >
                  Đăng kí
                </Link>
              </li>
            </>: <li>
                {/*<Link*/}
                {/*  to="/login"*/}
                {/*  aria-label="Log in"*/}
                {/*  title="Log in"*/}
                {/*  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"*/}
                {/*onClick={()=>{logOutHome()}}*/}
                {/*>*/}
                {/*  Log out*/}
                {/*</Link>*/}
              </li>}
            {/*)}*/}
          </ul>


        </div>
      </div>
    </div>
  );
};

export default NavbarUser;

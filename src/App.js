import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    Staffs,
    Ecommerce,
    Orders,
    Customers,

    Editor
} from './pages';
import CreateStaff from './pages/staffs/CreateStaff';
import UpdateStaff from './pages/staffs/UpdateStaff';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { getUserInfo } from './reducer/slice/userSlice';
import { getAllUser, getAllStaff } from "./service/userService"
import jwt_decode from "jwt-decode"


import Admin from './pages/admin/Admin';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Products from "./pages/Products";
import EditProducts from "./pages/EditProducts";
import { getAllProduct } from "./service/productService";
import { getAllBrand } from "./service/brandService";
import HomeUser from "./pages/user/HomeUser";
import ProductList from "./pages/user/ProductList";
import SingleProductPage from "./pages/user/SingleProductPage";

import { getAllCategory } from "./service/categoryService";
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';


import CartPage from "./pages/user/CartPage";
import ShippingPage from "./pages/user/ShippingPage";
import { getDetailCart } from './service/cartService';
import CreateCategory from './pages/CreateCategory';
import Categories from './pages/Categories';
import EditCategories from './pages/EditCategories';
import Brands from './pages/brand/Brand';
import CreateBrand from './pages/brand/EditBrand';
import { getAllOrder, myOrders } from './service/orderService';
import ProductDetail from "./pages/ProductDetail";
import User from "./pages/user/User";
import OrderPage from './pages/OrderPage';
import MyOrderPage from './pages/MyOrderPage';
import SearchPage from "./components/search/SearchPage";
import {socket} from "./socket/socket"
import ChatAdmin from "./pages/chat/ChatAdmin"

const App = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const userInfo = useSelector(s => s.userReducer.userInfo)
    let socketIo = useRef()

    useEffect(() => {
        getAllProduct(dispatch)
        getAllBrand(dispatch)
        getAllCategory(dispatch)
        if (token) {
            const user = jwt_decode(token).user
            dispatch(getUserInfo(user))
            if (user.roleId.name == "admin") {
                getAllStaff(dispatch)
                getAllUser(dispatch)
            } else if (user.roleId.name == "accountant") {
                socketIo.current = socket
                getAllOrder(dispatch)
            } else if (user.roleId.name == "user") {
                getDetailCart(user.cartId, dispatch)
                myOrders(user._id, dispatch)
            }
        }
    }, [token]);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm />}></Route>
                <Route path="/register" element={<RegisterForm />}></Route>


                <Route path="" element={<User />}>
                    <Route path="" element={<HomeUser />}></Route>
                    <Route path="products" element={<ProductList />} />
                    <Route
                        path="product/:id"
                        element={<SingleProductPage />}></Route>
                    <Route path="cart" element={<CartPage />}></Route>
                    <Route path="shipping" element={<ShippingPage />}></Route>
                    <Route path="order" element={<OrderPage />}></Route>
                    <Route path="myOrder" element={<MyOrderPage />}></Route>
                    <Route path="/search" element={<SearchPage></SearchPage>}></Route>

                </Route>
                <Route path='profile' element={<Profile />} />
                <Route path='profile/update' element={<EditProfile />} />
                <Route path="/admin" element={<Admin></Admin>}>
                    <Route path="editor" element={<Editor />} />
                    <Route path="products" element={<Products />} />
                    <Route path="editProducts/:id" element={<EditProducts></EditProducts>} />
                    <Route path="productDetail/:id" element={<ProductDetail />}></Route>
                    <Route path="userDetail/:id" element={<Profile />}></Route>
                    <Route path='profile' element={<Profile />} />


                    <Route path="staffs" element={<Staffs />} />
                    <Route path='staffs/create' element={<CreateStaff />} />
                    <Route path='staffs/update' element={<UpdateStaff />} />


                    <Route path="" element={(<Ecommerce />)} />
                    <Route path="customers" element={(<Customers />)} />
                    <Route path="categories" element={(<Categories />)} />
                    <Route path='addCategory' element={(<CreateCategory />)} />
                    <Route path="editCategories/:id" element={<EditCategories></EditCategories>} />
                    <Route path="brands" element={<Brands />} />;
                    <Route path='addBrands' element={(<CreateBrand />)} />
                    <Route path="chat" element={<ChatAdmin></ChatAdmin>}></Route>

                    <Route path="orders" element={<Orders />} />


                </Route>
            </Routes>


        </BrowserRouter>
    );
};

export default App;

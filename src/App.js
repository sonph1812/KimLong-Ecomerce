import React, { useEffect } from 'react';
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
import UserDetail from "./pages/UserDetail";
import User from "./pages/user/User";
import EditBrand from './pages/brand/EditBrand';
import OrderPage from './pages/OrderPage';
import MyOrderPage from './pages/MyOrderPage';
import SearchPage from "./components/search/SearchPage";
// import { socket } from './socket.io/roomSocket';
// import socketIO from 'socket.io-client';
// import SearchPage from './components/search/SearchPage';
// export const socket = socketIO().connect('http://localhost:3000');
const App = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const userInfo = useSelector(s => s.userReducer.userInfo)
    useEffect(() => {
        getAllProduct(dispatch)
        getAllBrand(dispatch)
        getAllCategory(dispatch)
        // const x = socket

        if (token) {
            const user = jwt_decode(token).user
            dispatch(getUserInfo(user))
            if (user.roleId.name == "admin") {
                getAllStaff(dispatch)
                getAllUser(dispatch)
                getAllOrder(dispatch)
            } else if (user.roleId.name == "seller") {
                // getAllProduct(dispatch)
                // getAllBrand(dispatch)
            } else if (user.roleId.name == "user") {
                getDetailCart(user.cartId, dispatch)
                myOrders(user._id, dispatch)
            }
        }
    }, [token]);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm/>}></Route>
                <Route path="/register" element={<RegisterForm/>}></Route>
                {/*<Route path="/test" element={<CategoryDetail1/>}></Route>*/}


                <Route path="" element={<User/>}>
                    <Route path="" element={<HomeUser/>}></Route>
                    <Route path="products" element={<ProductList/>}/>
                    <Route
                        path="product/:id"
                        element={<SingleProductPage />}></Route>
                    <Route path="cart" element={<CartPage />}></Route>
                    <Route path="shipping" element={<ShippingPage />}></Route>
                    <Route path="order" element={<OrderPage />}></Route>
                    <Route path="myOrder" element={<MyOrderPage />}></Route>
                    <Route path="/search" element={<SearchPage></SearchPage>}></Route>

                </Route>
                <Route path='profile' element={<Profile/>}/>
                <Route path='profile/update' element={<EditProfile/>}/>
                <Route path="/admin" element={<Admin></Admin>}>
                    <Route path="editor" element={<Editor/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="editProducts/:id" element={<EditProducts></EditProducts>}/>
                    <Route path="productDetail/:id" element={<ProductDetail/>}></Route>
                    <Route path="userDetail/:id" element={<Profile/>}></Route>
                    <Route path='profile' element={<Profile/>}/>
                    {/*<Route path='profile/update' element={<EditProfile/>}/>*/}


                    <Route path="staffs" element={<Staffs />} />
                    <Route path='staffs/create' element={<CreateStaff />} />
                    <Route path='staffs/update' element={<UpdateStaff />} />


                    <Route path="" element={(<Ecommerce />)} />
                    <Route path="customers" element={(<Customers/>)}/>
                    <Route path="categories" element={(<Categories/>)}/>
                    <Route path='addCategory' element={(<CreateCategory/>)}/>
                    <Route path="editCategories/:id" element={<EditCategories></EditCategories>}/>
                    <Route path="brands" element={<Brands/>}/>;
                    <Route path='addBrands' element={(<CreateBrand/>)}/>
                    {/*<Route path='addBrands' element={(<EditBrand/>)}/>*/}








                    <Route path="orders" element={<Orders />} />
                    {/*<Route path="kanban" element={<Kanban />} />*/}
                    {/*<Route path="calendar" element={<Calendar />} />*/}
                    {/*<Route path="color-picker" element={<ColorPicker />} />*/}
                    {/*<Route path="line" element={<Line />} />*/}
                    {/*<Route path="area" element={<Area />} />*/}
                    {/*<Route path="bar" element={<Bar />} />*/}
                    {/*<Route path="pie" element={<Pie />} />*/}
                    {/*<Route path="financial" element={<Financial />} />*/}
                    {/*<Route path="color-mapping" element={<ColorMapping />} />*/}
                    {/*<Route path="pyramid" element={<Pyramid />} />*/}
                    {/*<Route path="stacked" element={<Stacked />} />*/}

                </Route>
            </Routes>


        </BrowserRouter>
    );
};

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Staffs, Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
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
import CartPage from "./pages/user/CartPage";
import ShippingPage from "./pages/user/ShippingPage";



const App = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const userInfo = useSelector(s => s.userReducer.userInfo)
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
      } else if (user.roleId.name == "seller" || user.roleId.name == "user") {
        // getAllProduct(dispatch)
        // getAllBrand(dispatch)
      }
    }
  }, [token]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/home" element={<HomeUser />}></Route>

        <Route >
         <Route path="" element={<HomeUser />}></Route>
          <Route path="products" element={<ProductList />} />
          <Route
              path="/product/:id"
              element={<SingleProductPage />} ></Route>
          <Route path="cart" element={<CartPage/>}></Route>
          <Route  path="shipping" element={<ShippingPage/>}></Route>
        </Route>


        <Route path="/admin" element={<Admin></Admin>}>
          <Route path="editor" element={<Editor />} />
          <Route path="products" element={<Products />} />
          <Route path="editProducts/:id" element={<EditProducts></EditProducts>} />




          <Route path="staffs" element={<Staffs />} />
          <Route path='staffs/create' element={<CreateStaff />} />
          <Route path='staffs/update' element={<UpdateStaff />} />




          {/*<Route path="" element={(<Ecommerce />)} />*/}
          <Route path="customers" element={(<Customers />)} />
          {/*<Route path="orders" element={<Orders />} />*/}
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

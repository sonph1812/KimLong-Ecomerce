import React from 'react';
import ScrollToTop from "../../components/ScrollToTop";
import NavbarUser from "../../components/NavbarUser";
import { Outlet } from "react-router-dom";
import ProductList from "./ProductList";
import { useSelector } from 'react-redux';
import { getDetailCart } from '../../service/cartService';
import { myOrders } from '../../service/orderService';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const User = () => {
    const role = localStorage.getItem('role')
    const userInfo = useSelector(s => s.userReducer.userInfo)
    const dispatch = useDispatch()
    const isLoginYet = useSelector(s=> s.userReducer.isLogin)
    useEffect(() => {
        if (isLoginYet) {
            if (role == "user") {
                getDetailCart(userInfo.cartId, dispatch)
                myOrders(userInfo._id, dispatch)
            }
        }
    }, [isLoginYet]);

    return (
        <div className="relative min-w-screen">
            <ScrollToTop>
                <NavbarUser />
                <main className="min-h-screen">
                    <Outlet></Outlet>
                </main>
            </ScrollToTop>

        </div>
    );
};

export default User;
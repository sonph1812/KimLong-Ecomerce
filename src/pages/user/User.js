import React from 'react';
import ScrollToTop from "../../components/ScrollToTop";
import NavbarUser from "../../components/NavbarUser";
import {Outlet} from "react-router-dom";
import ProductList from "./ProductList";

const User = () => {
    return (
        <div className="relative min-w-screen">
            <ScrollToTop>
                <NavbarUser/>
                <main className="min-h-screen">
                    <Outlet></Outlet>
                </main>
            </ScrollToTop>

        </div>
    );
};

export default User;
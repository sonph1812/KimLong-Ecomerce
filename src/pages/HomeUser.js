import React from 'react';
import Promo from '../components/Promo';
import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";
import FeaturedProducts from "../components/FeaturedProducts";
import NavbarUser from "../components/NavbarUser";
import FooterUser from "../FooterUser";

const HomePage = () => {
    return (
        <>
            <p className="flex h-10 items-center justify-center bg-yellow-200 px-4 text-sm font-medium text-black sm:px-6 lg:px-8">Get free delivery on orders over $999</p>
            <NavbarUser/>
            {/*<Hero />*/}
            <FeaturedProducts />
            {/*<Promo />*/}
            <NewProducts />
            <NewProducts />
            <NewProducts />
            <NewProducts />
            <FooterUser/>
        </>
    );
};

export default HomePage;

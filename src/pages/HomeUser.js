import React from 'react';
import Promo from '../components/Promo';
import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";
import FeaturedProducts from "../components/FeaturedProducts";
import NavbarUser from "../components/NavbarUser";

const HomePage = () => {
    return (
        <>
            <NavbarUser/>
            <Hero />
            <FeaturedProducts />
            <Promo />
            <NewProducts />
            <FeaturedProducts/>
        </>
    );
};

export default HomePage;

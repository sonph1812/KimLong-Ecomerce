import React from 'react';
import Promo from '../../components/Promo';
import Hero from "../../components/Hero";
import NewProducts from "../../components/NewProducts";
import FeaturedProducts from "../../components/FeaturedProducts";
import NavbarUser from "../../components/NavbarUser";
import FooterUser from "../../FooterUser";
import Search from "../../components/Search";
import AppleWatch from "../../components/appleWatch";
import IPad from "../../components/iPad";
import Airpod from "../../components/Airpod";
import {useSelector} from "react-redux";
import CategoryDetail from "../../components/CategoryDetail";
// import NewProducts2 from "../../components/appleWatch";

const HomePage = () => {
    const categories = useSelector(state=>state.categoryReducer.categories)
    const products = useSelector(state=>state.productReducer.products)
    return (
        <>
            <p className="flex h-10 items-center justify-center bg-yellow-200 px-4 text-sm font-medium text-black sm:px-6 lg:px-8">Get free delivery on orders over $999</p>
            <NavbarUser/>
            {/*<Hero />*/}
            <FeaturedProducts />
            {/*<Promo />*/}
            <NewProducts />
            <AppleWatch/>
            <div>
                {categories.map((item)=>{
                    let list = products.filter(item1=>{
                        // return (item1.categoryId.name === item.name)
                    })
                    return(
                    <CategoryDetail list={list}></CategoryDetail>
                )})}
            </div>
            <FooterUser/>

        </>
    );
};

export default HomePage;

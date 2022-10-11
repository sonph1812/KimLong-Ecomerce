import React from 'react';
import Promo from '../../components/Promo';
import Hero from "../../components/Hero";
import NewProducts from "../../components/NewProducts";
import FeaturedProducts from "../../components/FeaturedProducts";

import FooterUser from "../../FooterUser";

import { useSelector } from "react-redux";
import CategoryDetail from "../../components/CategoryDetail";
import { logBase } from "@syncfusion/ej2-react-charts";
import Banner from "../../components/home/banner";
import Card from "../../components/home/Card";
import SearchUser from '../../components/search/SearchUser';

const HomePage = () => {
    const categories = useSelector(state => state.categoryReducer.categories)
    const products = useSelector(state => state.productReducer.products)
    const brands = useSelector (s => s.brandReducer.brands)
    return (
        <><div className="relative min-h-screen">
            <p className="flex h-10 items-center justify-center bg-yellow-200 px-4 text-sm font-medium text-black sm:px-6 lg:px-8">Get free delivery on orders over $999</p>
            {/*<Hero />*/}
            <Banner />
            <FeaturedProducts />
            {/*<Promo />*/}
            <NewProducts />
            {/*<AppleWatch/>*/}
            <SearchUser products = {products} categories = {categories} brands = {brands}></SearchUser>
            <div>
                {categories && categories.map((item) => {
                    let list = products.filter(item1 => {
                        return (item1.categoryId.name === item.name)
                    })
                    return (
                        list[0] && <CategoryDetail list={list} category={item}></CategoryDetail>

                    )
                })}
            </div>
            <Card />
            <FooterUser />
        </div>
        </>
    );
};

export default HomePage;

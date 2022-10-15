import React from 'react';
import NewProducts from "../../components/NewProducts";
import FeaturedProducts from "../../components/FeaturedProducts";

import FooterUser from "../../FooterUser";

import { useSelector } from "react-redux";
import CategoryDetail from "../../components/CategoryDetail";
import Card from "../../components/home/Card";
import SearchUser from "../../components/search/SearchUser";

const HomePage = () => {
    const categories = useSelector(state => state.categoryReducer.categories)
    const products = useSelector(state => state.productReducer.products)
    const brands = useSelector(s => s.brandReducer.brands)
    return (
        <><div className="relative min-h-screen">
            <p className="flex h-14 items-center justify-center bg-yellow-200 px-4  text-xl font-medium text-black sm:px-6 lg:px-8">Đăng kí ngay nhận ngay hàng ngàn quà tặng</p>
            <FeaturedProducts />
            <SearchUser />
            <NewProducts />
            <div>
                {categories && categories.map((item) => {
                    let list = products.filter(item1 => {
                        if (item1.categoryId != null) {
                            return (item1.categoryId.name === item.name)
                        }
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

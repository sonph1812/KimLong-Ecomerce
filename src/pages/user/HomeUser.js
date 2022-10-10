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
import {logBase} from "@syncfusion/ej2-react-charts";
// import NewProducts2 from "../../components/appleWatch";

const HomePage = () => {
    const categories = useSelector(state=>state.categoryReducer.categories)
    const products = useSelector(state=>state.productReducer.products)
    console.log(categories)
    return (
        <><div className="relative min-h-screen">
        <p className="flex h-10 items-center justify-center bg-yellow-200 px-4 text-sm font-medium text-black sm:px-6 lg:px-8">Get free delivery on orders over $999</p>
            {/*<Hero />*/}
            <FeaturedProducts />
            {/*<Promo />*/}
            <NewProducts />
            {/*<AppleWatch/>*/}
            <div>
                {categories && categories.map((item)=>{
                    let list = products.filter(item1=>{
                        return (item1.categoryId.name === item.name)
                                 })
                    return(

                        list[0] &&  <CategoryDetail list={list} category={item}></CategoryDetail>
                )})}
            </div>
            <FooterUser/>
</div>
        </>
    );
};

export default HomePage;

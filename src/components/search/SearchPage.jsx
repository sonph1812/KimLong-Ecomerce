import SearchUser from "./SearchUser"
import { useSelector } from "react-redux";
import { useEffect } from "react";

function SearchPage () {
    const categories = useSelector(state => state.categoryReducer.categories)
    const products = useSelector(state => state.productReducer.products)
    const brands = useSelector (s => s.brandReducer.brands)

    const categoriesSearch = useSelector(state => state.categoryReducer.listSearch)
    const productsSearch = useSelector(state => state.productReducer.listSearch)
    const brandsSearch = useSelector (s => s.brandReducer.listSearch)
    useEffect(()=>{

    },[categories,products,brands])
    return (
        <div>
            <SearchUser products = {products} categories = {categories} brands = {brands}></SearchUser>
            <div>
                {
                    categoriesSearch && categoriesSearch[0] && categoriesSearch.map((item)=>(
                        <p>{item.name}</p>
                    ))
                }
            </div>
            <div>
                {
                   productsSearch && productsSearch[0] && productsSearch.map((item)=>(
                        <p>{item.name}</p>
                    ))
                }
            </div>
            <div>
                {
                   brandsSearch && brandsSearch[0] && brandsSearch.map((item)=>(
                        <p>{item.name}</p>
                    ))
                }
            </div>
        </div>
        
    )
}
export default SearchPage
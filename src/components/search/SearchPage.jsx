import SearchUser from "./SearchUser"
import { useSelector } from "react-redux";

function SearchPage () {
    const categories = useSelector(state => state.categoryReducer.categories)
    const products = useSelector(state => state.productReducer.products)
    const brands = useSelector (s => s.brandReducer.brands)
    return (
        <div>
            <SearchUser products = {products} categories = {categories} brands = {brands}></SearchUser>
            <div>
                
            </div>
        </div>
        
    )
}
export default SearchPage
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setProductSearch } from "../../reducer/slice/productSlice"
import { setBrandSearch } from "../../reducer/slice/brandSlice"
import { setCategorySearch } from "../../reducer/slice/categorySlice"
import { useDispatch } from "react-redux"

function SearchUser({ products, categories, brands }) {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const arr = ['product', 'category', 'brand']


    const handelClick = () => {
        dispatch(setProductSearch(products.filter(isSearch)))
        dispatch(setBrandSearch(categories.filter(isSearch)))
        dispatch(setCategorySearch(brands.filter(isSearch)))
        navigate('/user/search')
    }
    const isSearch = (item) => {
        if (search === "") {
            return;
        }
        return item.name.toLowerCase().includes(search.toLowerCase())
    }

    return (

        <div>
            <input style={{
                position: "absolute", right: "80px", top: "190px",
                width: "400px"

            }}
                onChange={e => { handleChange(e) }}
                type="text"
                placeholder="Search" className="mb-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button
                style={{
                    position: "absolute", right: "90px", top: "195px"

                }}
                onClick={() => {
                    handelClick()
                }}
                class="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            {search !== "" && <div className="absolute right-20 z-10 w-96  origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
               
                <div>
                    {
                    arr.map((item, index) => {
                        let list = []
                        if (item == 'product') {
                            list = products.filter(isSearch)
                        } else if (item == "category") {
                            list = categories.filter(isSearch)
                        } else if (item == 'brand') {
                            list = brands.filter(isSearch)
                        }
                        return (
                           list[0] && <div key = {index}>
                                <p>{item}</p>
                                {list.map((i,index2) => (
                                    <div key = {index2}>{i.name}</div>
                                ))}
                            </div>

                        )

                    })
                    }
                </div>
            </div>
            }
        </div>)
}
export default SearchUser;
import { useState } from "react"
import { Link } from "react-router-dom"
import { setListSearch } from "../reducer/slice/userSlice"
import { setProductSearch } from "../reducer/slice/productSlice"
import { useDispatch } from "react-redux"
function Search({ list, model }) {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handelClick = () => {
        if (model === 'user') {
            dispatch(setListSearch(list.filter(isSearch)))
        } else if (model === 'product') {
            dispatch(setProductSearch(list.filter(isSearch)))
        }
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
                {list && list.filter(isSearch)
                    .map((item) => (
                        <Link to=""
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-700"
                        >
                            {item.name}
                        </Link>
                    ))}
            </div>}
        </div>)
}
export default Search;
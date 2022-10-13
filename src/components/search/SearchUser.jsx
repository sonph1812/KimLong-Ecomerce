import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setProductSearch } from "../../reducer/slice/productSlice"
import { setBrandSearch } from "../../reducer/slice/brandSlice"
import { setCategorySearch } from "../../reducer/slice/categorySlice"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react";
import {Combobox, Dialog, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {SearchIcon} from "@heroicons/react/outline";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";

function SearchUser() {
    let [isOpen, setIsOpen] = useState(false)
    let [query, setQuery] = useState('')
    const categories = useSelector(state => state.categoryReducer.categories)
    const products = useSelector(state => state.productReducer.products)
    console.log(products)
    const brands = useSelector (s => s.brandReducer.brands)

    const categoriesSearch = useSelector(state => state.categoryReducer.listSearch)
    const productsSearch = useSelector(state => state.productReducer.listSearch)
    const brandsSearch = useSelector (s => s.brandReducer.listSearch)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const arr = ['product', 'category', 'brand']

    const handleGetDetail = (id) => {
        navigate(`/product/${id}`)
    }
    const handelClick = () => {
        dispatch(setProductSearch(products.filter(isSearch)))
        dispatch(setBrandSearch(categories.filter(isSearch)))
        dispatch(setCategorySearch(brands.filter(isSearch)))
    }
    const isSearch = (item) => {
        if (search === "") {
            return;
        }
        return item.name.toLowerCase().includes(search.toLowerCase())
    }

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
                setIsOpen(!isOpen)
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen])
  var  list = products?.filter(isSearch)

    return (

        <div>

            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog
                    className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
                    onClose={setIsOpen}>
                    <Transition.Child
                        enter="duration-300 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-200 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-50/75" />
                    </Transition.Child>

                    <Transition.Child
                        enter="duration-300 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">

                        <Combobox
                            as="div"
                            className="bg-white max-w-lg mx-auto relative rounded-xl shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100 overflow-hidden"
                            onChange={() => {
                                setIsOpen(false)
                            }} value="">

                            <div className="flex items-center px-4">
                                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500"  onClick={() => {
                                    handelClick()
                                }} />

                                <Combobox.Input
                                    placeholder="Search..."
                                    className="h-12 w-full border-0 bg-transparent ring-0 focus:ring-transparent focus:ring-0 text-sm text-gray-800 placeholder-gray-400"
                                    onChange={(e) => (handleChange(e))} />
                            </div>
                                <Combobox.Options static className="py-4 text-sm max-h-96 overflow-y-auto">
                                    {list.map((item,index2) => (
                                        <Combobox.Option key={index2} value={item}>
                                            {({ active}) => (
                                                <div className={`px-4 py-2 space-x-1 ${active ? 'bg-yellow-400' : 'bg-white'}`} >
                                                    <span  onClick={()=>(handleGetDetail(item._id))} className={`font-medium ${active ? 'text-white' : 'text-gray-900'}` }>{item.name}</span>
                                                    {/*<span className={`${active ? 'text-indigo-200' : 'text-gray-400'}`}>{user.gender}</span>*/}
                                                </div>
                                            )}
                                        </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                        </Combobox>
                    </Transition.Child>

                </Dialog>
            </Transition.Root>

        </div>)
}
export default SearchUser;
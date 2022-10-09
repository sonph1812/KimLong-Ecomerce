import React, {useEffect, useState} from 'react';
import NavbarUser from "../../components/NavbarUser";
import PageHero from "../../components/PageHero";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {formatPrice} from "../../utils/helpers";
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import Btn from "../../components/Btn";
import {filterReducer, setProductSort} from "../../reducer/slice/productSlice";
import {getDetailProduct, getProductByCate} from "../../service/productService";



const ProductList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        getProductByCate(dispatch)
    },[])
    const productFilter = useSelector(state => state.productReducer.productByCate)

    const products = useSelector(state => state.productReducer.products)
    const brands = useSelector(s => s.brandReducer.brands)
    const categories = useSelector(s => s.categoryReducer.categories)
    const handlerChange = (e) => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }
    const handleGetDetail = (id) => {
        getDetailProduct(dispatch,id)
        navigate(`product/${id}`)

    }




    return (
        <>
            <NavbarUser/>
            <PageHero title="Products" className="bg-amber-200"/>

            <div
                className=" z-10 flex flex-col  sm:flex-row items-baseline justify-between pt-24 pb-6 border-b border-gray-200 ">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">{products.length} Products</h2>
                <div className="flex flex-col sm:flex-row sm:items-start ">
                    <form className="relative inline-block text-left -mr-2 sm:mr-4 mb-6 "><label
                        className="text-gray-700" htmlFor="sort"></label><select id="sort" className="py-1 ">
                        <option value="price-lowest" className="text-gray-500 block px-4 py-2">Price: Low to High
                        </option>
                        <option value="price-highest" className="text-gray-500 block px-4 py-2">Price: High to Low
                        </option>
                        <option value="name-a" className="text-gray-500 block px-4 py-2" >Name: A-Z</option>
                        <option value="name-z" className="text-gray-500 block px-4 py-2">Name: Z-A</option>
                    </select></form>
                    <div className="flex justify-between ">
                        <button type="button"
                                className="p-2 sm:p-2  sm:ml-5 text-gray-400 hover:text-gray-500 bg-tertiary-100"><span
                            className="sr-only">Grid view</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " aria-hidden="true" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                        </button>
                        <button type="button"
                                className="p-2 sm:p-2  sm:ml-5 text-gray-400 hover:text-gray-500 bg-tertiary-100"><span
                            className="sr-only">List view</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                            </svg>
                        </button>
                        <button type="button"
                                className="p-2 sm:p-2  sm:ml-5 text-gray-400 hover:text-gray-500 lg:hidden bg-tertiary-100">
                            <span className="sr-only">Filters</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">


<div className="hidden lg:block "><h1>chỗ này đổ filter</h1>
    <div>
        <label htmlFor="states" className="sr-only">Brand</label>
        <select id="brandId"
                name = "brandId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e)=>{handlerChange(e)}}
        >
            <option selected>Brand</option>
            {brands && brands.map((brand)=>(
                <option value={brand._id}>{brand.name}</option>
            ))}
        </select>
    </div>
    <div>
        <label htmlFor="states" className="sr-only">Category</label>
        <select id="categoryId"
                name = "categoryId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e)=>{handlerChange(e)}}
        >
            <option selected>Category</option>
            {categories && categories.map((category)=>(
                <option value={category._id}>{category.name}</option>
            ))}
        </select>
    </div>
    <button>Filter</button>


</div>
               <div className="lg:col-span-3">
                   <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-10 place-items-center">
                       {products?.map((product, index) => (
                           <Link to={`product/${product._id}`} onClick={()=>{handleGetDetail(product._id)}} className="group">
                               <div className="w-full  max-w-sm aspect-square rounded-lg overflow-hidden  bg-tertiary-50">
                                   <img
                                       src={product.image}
                                       // alt={name}
                                       className="w-40 h-40 object-center object-cover group-hover:opacity-75"
                                   />
                               </div>
                               <div className="flex-col items-center justify-center">
                                   <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                   <p className="mt-1 text-lg font-medium text-gray-900">
                                       {formatPrice(product.price)}
                                   </p>
                               </div>
                           </Link>
                       ))}
                   </div>

               <div/>
            {/*<>*/}
            {/*    /!* Price header *!/*/}
            {/*    <h3 className="-mx-2 -my-3 flow-root">*/}
            {/*        <Disclosure>*/}




            {/*            */}
            {/*        </Disclosure>*/}
            {/*        <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">*/}
            {/*                <span className="font-medium text-gray-900">*/}
            {/*                  Price*/}
            {/*                </span>*/}
            {/*            <span className="ml-6 flex items-center">*/}
            {/*                  {open ? (*/}
            {/*                      <svg*/}
            {/*                          xmlns="http://www.w3.org/2000/svg"*/}
            {/*                          className="h-5 w-5"*/}
            {/*                          aria-hidden="true"*/}
            {/*                          fill="none"*/}
            {/*                          viewBox="0 0 24 24"*/}
            {/*                          stroke="currentColor"*/}
            {/*                      >*/}
            {/*                          <path d="M18 12H6" />*/}
            {/*                      </svg>*/}
            {/*                  ) : (*/}
            {/*                      <svg*/}
            {/*                          xmlns="http://www.w3.org/2000/svg"*/}
            {/*                          className="h-5 w-5"*/}
            {/*                          aria-hidden="true"*/}
            {/*                          fill="none"*/}
            {/*                          viewBox="0 0 24 24"*/}
            {/*                          stroke="currentColor"*/}
            {/*                      >*/}
            {/*                          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />*/}
            {/*                      </svg>*/}
            {/*                  )}*/}
            {/*                </span>*/}
            {/*        </Disclosure.Button>*/}
            {/*    </h3>*/}

            {/*    /!* Price panel *!/*/}
            {/*    <Disclosure.Panel className="pt-6">*/}
            {/*        /!* <div className="space-y-6">*/}
            {/*                {companies.map((option, optionIdx) => (*/}
            {/*                  <div*/}
            {/*                    key={optionIdx}*/}
            {/*                    className="flex items-center"*/}
            {/*                  >*/}
            {/*                    <button*/}
            {/*                      name="company"*/}
            {/*                      type="button"*/}
            {/*                      onClick={updateFilters}*/}
            {/*                      className={`${*/}
            {/*                        option.toLowerCase() === company*/}
            {/*                          ? 'font-bold'*/}
            {/*                          : null*/}
            {/*                      }  text-gray-500 capitalize`}*/}
            {/*                    >*/}
            {/*                      {option}*/}
            {/*                    </button>*/}
            {/*                  </div>*/}
            {/*                ))}*/}
            {/*              </div> *!/*/}
            {/*        <div className="space-y-6">*/}
            {/*            {products.price?.map((p, priceIdx) => {*/}
            {/*                if (p === 'all') {*/}
            {/*                    return (*/}
            {/*                        <div*/}
            {/*                            key={priceIdx}*/}
            {/*                            className="flex-col items-center"*/}
            {/*                        >*/}
            {/*                            <Disclosure.Button*/}
            {/*                                name="price"*/}
            {/*                                data-price={priceIdx}*/}
            {/*                                // onClick={updateFilters}*/}
            {/*                                className={`${*/}
            {/*                                    priceIdx === p.price ? 'font-bold' : null*/}
            {/*                                }  text-gray-500 capitalize`}*/}
            {/*                            >*/}
            {/*                                all*/}
            {/*                            </Disclosure.Button>*/}
            {/*                        </div>*/}
            {/*                    );*/}
            {/*                }*/}
            {/*                return (*/}
            {/*                    <div*/}
            {/*                        key={priceIdx}*/}
            {/*                        className="flex-col items-center"*/}
            {/*                    >*/}
            {/*                        <Disclosure.Button*/}
            {/*                            key={priceIdx}*/}
            {/*                            name="price"*/}
            {/*                            data-price={p}*/}
            {/*                            onClick={updateFilters}*/}
            {/*                            className={`${*/}
            {/*                                p === price ? 'font-bold' : null*/}
            {/*                            }  text-gray-500 capitalize`}*/}
            {/*                        >*/}
            {/*                            less than {formatPrice(p)}*/}
            {/*                        </Disclosure.Button>*/}
            {/*                    </div>*/}
            {/*                );*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </Disclosure.Panel>*/}
            {/*</>*/}
            {/*<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-10 place-items-center">*/}

            {/*<Disclosure>*/}
            {/*    <Disclosure.Button className="py-2">*/}
            {/*        Is team pricing available?*/}
            {/*    </Disclosure.Button>*/}
            {/*    <Disclosure.Panel className="text-gray-500">*/}
            {/*        Yes! You can purchase a license that you can share with your entire*/}
            {/*        team.*/}
            {/*    </Disclosure.Panel>*/}
            {/*</Disclosure>*/}
            {/*    </div>*/}
</div>


</div>

        </>
    );
};

export default ProductList;


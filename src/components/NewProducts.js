import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {formatPrice} from "../utils/helpers";

const NewProducts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGetDetail = (id) => {
        navigate(`/product/${id}`)

    }

    const list = useSelector(state => state.productReducer.products)
    const products = list.filter((item) => { return item.rating == 5 }).slice(0, 8)

    console.log(products);
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 bg-white ">
                <div className="relative mx-auto max-w-3xl text-center">
                    <span
                        className="absolute  rounded inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"
                    ></span>

                    <h2
                        className="relative inline-block bg-white px-4 text-center text-2xl font-bold"
                    >
                        Top Sản Phẩm HOT      </h2>
                </div>

                <div className=" mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 rounded-2xl ">
                    {products?.map((product, index) => (

                        <a onClick={() => (handleGetDetail(product._id))} className="hover:scale-105 shadow-amber-700relative block rounded-2xl border border-gray-100 transition-delay-150 duration-300 ease-in-out">
                            <img
                                alt="Toy"
                                src={product.image}
                                className="h-56 w-full object-contain "
                            />

                            <div className="p-6">
                                <p className="text-sm font-medium text-gray-600">{formatPrice(product.price)}</p>

                                <h5 className="mt-1 text-lg font-bold">{product.name}</h5>

                                <button
                                    type="button"
                                    name="wishlist"
                                    className="absolute right-4 bottom-3 rounded-full rounded-fit bg-yellow-200 p-4 text-white hover:scale-105"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="black"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </a>
                    ))}


                </div>
            </div>
        </section>


    );
};

export default NewProducts;

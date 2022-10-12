import React, { useEffect, useState } from 'react';
import { Link, useHistory, useNavigate, useParams } from 'react-router-dom';
import Btn from '../../components/Btn';
import PageHero from '../../components/PageHero';
import SingleReview from '../../components/SingleReview';
import Stars from '../../components/Stars';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import NavbarUser from "../../components/NavbarUser";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../service/productService";
import AddtoCart from "../../components/AddtoCart";
import {formatPrice} from "../../utils/helpers";

const SingleProductPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const product = useSelector(state => state.productReducer.product)
    useEffect(() => {
        getDetailProduct(dispatch, params.id)

    }, [])



    return (
        <>
            {/*<NavbarUser/>*/}


            <PageHero title={name} product />
            <section className="  px-20  justify-center bg-white py-10 ">
                {/*{Loading ? (*/}
                {/*    <Loading />*/}
                {/*) : error ? (*/}
                {/*    <Error title={error} />*/}
                {/*) : (*/}
                {product && <>
                    {/* Product details */}
                    <div className=" mx-auto flex flex-wrap ">
                        <img
                            alt="ecommerce-product"
                            className=" w-full h-full sm:w-2/3 sm:h-2/3 lg:w-1/2 lg:h-1/2 object-cover object-center rounded border border-gray-200 "
                            src={product.image}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                                {product.brand}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {product.name}  </h1>

                            {/*<Stars stars={stars} />*/}
                            <p className="leading-relaxed mt-4">
                                {product.description}
                            </p>
                            {product.stock > 0
                                && <AddtoCart product={product} />}
                        </div>
                    </div>

                    {/* Product reviews */}
                    <div className="max-w-screen-xl  py-8 mx-auto  ">
                        <h2 className="text-xl font-bold sm:text-2xl">
                            Customer Reviews
                        </h2>

                        <div className="flex items-center mt-4">
                            <p className="text-3xl font-medium">
                                {/*{stars}*/}
                                <span className="sr-only"> Average review score </span>
                            </p>

                            <div className="ml-4">
                                <Stars />

                                <p className="mt-0.5 text-xs text-gray-500">
                                    {/*Based on {numReviews} reviews*/}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-x-16 gap-y-12">
                            {/*{reviews?.map(review => {*/}
                            {/*    return <SingleReview key={review._id} review={review} />;*/}
                            {/*})}*/}
                        </div>
                    </div>

                    {/* Review form*/}
                    <div className="max-w-screen-xl  py-8 mx-auto  ">
                        <h2 className="text-xl font-bold sm:text-2xl mb-5">
                            Write a review
                        </h2>
                        {/*{createProductReviewLoading && <Loading />}*/}
                        {/*{createProductReviewError && (*/}
                        {/*    <Error title={createProductReviewError} />*/}
                        {/*)}*/}
                        {/*{loginUser ? (*/}
                            <>
                                <form >
                                    {/* Rating */}
                                    <label
                                        htmlFor="rating"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Rating
                                    </label>
                                    <select
                                        name="rating"
                                        // value={rating}
                                        // onChange={e => setRating(e.target.value)}
                                        id="rating"
                                        className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select...</option>
                                        <option value="1">1 - Poor</option>
                                        <option value="2">2 - Fair</option>
                                        <option value="3">3 - Good</option>
                                        <option value="4">4 - Very Good</option>
                                        <option value="5">5 - Excellent</option>
                                    </select>

                                    {/* Title */}
                                    <label
                                        htmlFor="title"
                                        className="block my-2 text-sm font-medium text-gray-900 "
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        // value={title}
                                        // onChange={e => setTitle(e.target.value)}
                                        id="title"
                                        placeholder="Leave a title..."
                                        className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                    />

                                    {/* Message */}
                                    <label
                                        htmlFor="message"
                                        className="block my-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your message
                                    </label>
                                    <textarea
                                        id="message"
                                        // value={comment}
                                        // onChange={e => setComment(e.target.value)}
                                        rows="4"
                                        className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  mb-5"
                                        placeholder="Leave a comment..."
                                    ></textarea>

                                    {/* Submit btn */}
                                    <Btn name="Submit" />
                                </form>
                            </>
                        // ) : (
                        //     <Link to="/login">
                        //         <Btn name="Login" />
                        //     </Link>
                        // )}
                    </div>
                </>}
                {/*)}*/}
            </section>
        </>
    );
};

export default SingleProductPage;

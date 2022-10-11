import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="flex flex-col items-end justify-right h-fit bg-gray-100 sm:flex-row">
                <div className="p-4 sm:w-1/2 sm:w-1/3">
                    <div
                        className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                        <img className="h-30 rounded-t-lg" alt="article image"
                             src={"../../assets/banner/banner.png"}/>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 sm:w-1/3">
                    <div
                        className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                        <img className="h-30 rounded-t-lg" alt="article image"
                             src={"../../assets/banner/banner 2.png"}/>

                    </div>
                </div>
                <div className="p-4 sm:w-1/2 sm:w-1/3">
                    <div
                        className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                        <img className="h-30 rounded-t-lg" alt="article image"
                             src={"../../assets/banner/zenbook 14.webp"}/>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Card;
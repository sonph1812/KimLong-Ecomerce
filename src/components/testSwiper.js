import React from 'react';

const TestSwiper = ({product}) => {
    return (
        <div>

            {/* <img className="w-100 h-30" src={"assets/iphone14.jpeg"} alt=""/> */}
            <img className="w-100 h-30" src={product.image} alt=""/>

        </div>
    );
};

export default TestSwiper;
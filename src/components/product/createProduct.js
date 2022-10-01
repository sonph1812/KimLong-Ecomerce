import React from 'react';

const CreateProduct = () => {
    return (
        <div>
                <form
                    className="createProductForm"
                    encType="multipart/form-data"

                >
                    <h1>Create Product</h1>

                    <div>
                        <input
                            type="text"
                            placeholder="Product Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Price"
                            required
                        />
                    </div>

                    <div>

                        <textarea
                            placeholder="Product Description"
                            cols="30"
                            rows="1"
                        ></textarea>
                    </div>

                    <div>
                        {/*<AccountTreeIcon />*/}
                        {/*    <option value="">Choose Category</option>*/}
                        {/*    {categories.map((cate) => (*/}
                        {/*        <option key={cate} value={cate}>*/}
                        {/*            {cate}*/}
                        {/*        </option>*/}
                        {/*    ))}*/}
                    </div>

                    <div>
                        <input
                            type="number"
                            placeholder="Stock"
                            required
                        />
                    </div>

                    <div id="createProductFormFile">
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            multiple
                        />
                    </div>

                    {/*<div id="createProductFormImage">*/}
                    {/*    {imagesPreview.map((image, index) => (*/}
                    {/*        <img key={index} src={image} alt="Product Preview" />*/}
                    {/*    ))}*/}
                    {/*</div>*/}

                </form>
            
        </div>
    );
};

export default CreateProduct;
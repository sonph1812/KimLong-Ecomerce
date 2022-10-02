import React, {useState} from 'react';
import {useSelector} from "react-redux";

const CreateProduct = () => {
    const { product} = useSelector((state) => state.newProductReducer);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [Stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);


    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };


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

                    <div id="createProductFormImage">
                        {imagesPreview.map((image, index) => (
                            <img key={index} src={image} alt="Product Preview" />
                        ))}
                    </div>

                </form>
            
        </div>
    );
};

export default CreateProduct;
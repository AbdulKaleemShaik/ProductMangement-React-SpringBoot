import React, { useState } from "react";
import ProductService from "../service/product_service"
const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "",
    });
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {

        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value })
    }

    const ProductRegister = (e) => {
        e.preventDefault();
        ProductService.saveProduct(product).then((res) => {
            console.log("Product Added Successfully");
            setMsg("Product Added Successfully ")
            setProduct({
                productName: "",
                description: "",
                price: "",
                status: "",
            });

        }).catch((err) => {
            console.log("Something Went Wrong");
        });
    }




    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">Add Product Details </div>
                            {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                            <div className="card-body">
                                <form onSubmit={(e) => ProductRegister(e)}>
                                    <div className="mb-3">
                                        <label>Enter Product Name </label>
                                        <input type="text"
                                            name="productName"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={product.productName} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Description </label>
                                        <input type="text"
                                            name="description"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={product.description} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Price </label>
                                        <input type="text"
                                            name="price"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={product.price} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Status </label>
                                        <input type="text"
                                            name="status"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={product.status} />
                                    </div>
                                    <button className="btn btn-primary col-md-12">Add Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddProduct
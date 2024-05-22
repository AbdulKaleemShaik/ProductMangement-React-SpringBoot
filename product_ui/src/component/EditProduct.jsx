
import React, { useEffect, useState } from "react";
import ProductService from "../service/product_service"
import { useNavigate, useParams } from "react-router-dom";
const EditProduct = () => {

    const [product, setProduct] = useState({
        id: "",
        productName: "",
        description: "",
        price: "",
        status: "",
    });


    const navigate = useNavigate();

    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        ProductService.getProductByid(id).then((res) => {
            setProduct(res.data)
        }).catch((err) => {
            console.log("error");
        })
    }, [])
    const handleChange = (e) => {

        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value })
    }

    const ProductUpdate = (e) => {
        e.preventDefault();
        ProductService.editProduct(product).then((res) => {
            console.log("Product Added Successfully");
            setProduct({
                id: "",
                productName: "",
                description: "",
                price: "",
                status: "",
            })
            navigate("/")

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
                            <div className="card-header fs-3 text-center">Edit Product Details </div>
                            <div className="card-body">
                                <form onSubmit={(e) => ProductUpdate(e)}>
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
                                    <button className="btn btn-primary col-md-12">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default EditProduct
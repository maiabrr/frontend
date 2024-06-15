import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${match.params.id}`);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchProduct();
    }, [match.params.id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h2>Product Details</h2>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        </div>
    );
    };

export default ProductDetails;
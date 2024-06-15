import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState(null);
    const history = useHistory();

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

    const handleDelete = async (id) => {
        try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        history.push('/'); // Redireccionar a la vista principal después de la eliminación
        } catch (error) {
        console.error(error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h2>Product Details</h2>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
    );
    };

export default ProductDetails;
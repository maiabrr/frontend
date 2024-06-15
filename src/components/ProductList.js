
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchProducts();
    }, []);

    return (
        <div>
        <h2>Product List</h2>
        <ul>
            {products.map(product => (
            <li key={product._id}>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <Link to={`/products/${product._id}`}>View Details</Link> {/* Enlace a la página de detalles */}
            </li>
            ))}
        </ul>
        </div>
    );
    };

export default ProductList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProductEdit = ({ match }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${match.params.id}`);
            setTitle(response.data.title);
            setPrice(response.data.price);
            setDescription(response.data.description);
        } catch (error) {
            console.error(error);
        }
        };

        fetchProduct();
    }, [match.params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.put(`http://localhost:5000/api/products/${match.params.id}`, {
            title,
            price,
            description,
        });
        history.push('/'); // Redireccionar a la vista principal después de la actualización
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Price:</label>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Description:</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            </div>
            <button type="submit">Update Product</button>
        </form>
        </div>
    );
    };

export default ProductEdit;

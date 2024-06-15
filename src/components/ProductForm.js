import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        console.log('Enviando datos al servidor...'); // Mensaje de log para verificar que se esté enviando la solicitud
        const response = await axios.post('http://localhost:5000/api/products', {
            title,
            price,
            description,
        });
        console.log('Respuesta del servidor:', response.data); // Mensaje de log para verificar la respuesta del servidor
        // Aquí puedes hacer cualquier manejo adicional luego de agregar el producto
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div>
        <h2>Add New Product</h2>
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
            <button type="submit">Add Product</button>
        </form>
        </div>
    );
    };

export default ProductForm;
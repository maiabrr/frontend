import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductEdit from './components/ProductEdit'; 

function App() {
  return (
    <Router>
      <div>
        <h1>Product Admin Panel</h1>
        <Routes>
          <Route path="/" exact component={ProductList} /> {/* Ruta para la página principal */}
          <Route path="/products/add" component={ProductForm} /> {/* Ruta para el formulario de producto */}
          <Route path="/products/:id/edit" component={ProductEdit} />
          <Route path="/products/:id" component={ProductDetails} /> {/* Ruta para la página de detalles del producto */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

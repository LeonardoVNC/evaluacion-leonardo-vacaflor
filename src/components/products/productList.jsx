import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './productForm';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Gestión de Productos</h1>
            <button
                onClick={() => {
                    setEditingProduct(null);
                    setShowForm(true);
                }}
            >
                Agregar Producto
            </button>

            {showForm && (
                <ProductForm
                    product={editingProduct}
                    onClose={() => {
                        setShowForm(false);
                        fetchProducts();
                    }}
                />
            )}

            <div>
                {products.map((product) => (
                    <div key={product._id}>
                        <h2>{product.nombre_producto}</h2>
                        <img src={product.imagen} alt={product.nombre_producto} />
                        <p>Categoría: {product.categoria}</p>
                        <p>Vendedor: {product.vendedor}</p>
                        <p>Precio: ${product.precio_unitario}</p>
                        <p>Cantidad: {product.cantidad}</p>
                        <button
                            onClick={() => handleEdit(product)}
                        >
                            Editar
                        </button>
                        <button className="button-delete"
                            onClick={() => handleDelete(product._id)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

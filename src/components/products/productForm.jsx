import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const ProductForm = ({ product, onClose }) => {
    const [nombre_producto, setNombreProducto] = useState('');
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');
    const [vendedor, setVendedor] = useState('');
    const [sucursal, setSucursal] = useState('');
    const [precio_unitario, setPrecioUnitario] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        if (product) {
            setNombreProducto(product.nombre_producto);
            setImagen(product.imagen);
            setCategoria(product.categoria);
            setVendedor(product.vendedor);
            setSucursal(product.sucursal);
            setPrecioUnitario(product.precio_unitario);
            setCantidad(product.cantidad);
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!nombre_producto) {
            setError('El nombre es requerido para publicar su producto.');
            return;
        } else if (precio_unitario <= 0) {
            setError('No puede sacar ganancias con precios negativos o nulos.');
            return;
        } else if (cantidad < 0) {
            setError('No puede tener una cantidad negativa.');
            return;
        }

        const productData = {
            nombre_producto,
            imagen,
            categoria,
            vendedor,
            sucursal,
            precio_unitario,
            cantidad,
        };

        try {
            if (product) {
                await axios.put(`${API_URL}/api/products/${product._id}`, productData);
            } else {
                await axios.post(`${API_URL}/api/products`, productData);
            }
            onClose();
        } catch (err) {
            setError('Error al guardar el producto.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
                <h2>{product ? 'Editar Producto' : 'Agregar Producto'}</h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre del Producto"
                        value={nombre_producto}
                        onChange={(e) => setNombreProducto(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Imagen URL"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Categoría"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Vendedor"
                        value={vendedor}
                        onChange={(e) => setVendedor(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Sucursal"
                        value={sucursal}
                        onChange={(e) => setSucursal(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Precio Unitario"
                        value={precio_unitario}
                        onChange={(e) => setPrecioUnitario(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Cantidad"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        required
                    />
                    <button type="submit">
                        {product ? 'Actualizar Producto' : 'Agregar Producto'}
                    </button>
                    <button
                        className="button-delete"
                        type="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;

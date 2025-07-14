const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// GET - listar productos
router.get('/', async (req, res) => {
  try {
    const { categoria, nombre } = req.query; // Filtrado por categoría y búsqueda por nombre
    let query = {};

    if (categoria) {
      query.categoria = categoria;
    }

    if (nombre) {
      query.nombre_producto = { $regex: nombre, $options: 'i' }; // Búsqueda insensible a mayúsculas
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar productos' });
  }
});

// POST - crear producto
router.post('/', async (req, res) => {
  const { nombre_producto, imagen, categoria, vendedor, sucursal, precio_unitario, cantidad } = req.body;

  const newProduct = new Product({
    nombre_producto,
    imagen,
    categoria,
    vendedor,
    sucursal,
    precio_unitario,
    cantidad,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el producto' });
  }
});

// PUT - actualizar producto
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedProduct) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el producto' });
  }
});

// DELETE - eliminar producto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
});

module.exports = router;
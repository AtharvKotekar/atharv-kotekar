import express from 'express';
import Product from '../models/product.model.js'
import mongoose from 'mongoose';
import { createNewProduct, deleteProduct, getAllProduct, updateProduct } from '../controller/product.controller.js';

const router = express.Router();

//get all products
router.get('/', getAllProduct);

//create product 
router.post('/', createNewProduct);

//delete product 
router.delete('/:id', deleteProduct);

//update products
router.put('/:id', updateProduct);

export default router;
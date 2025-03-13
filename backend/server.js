import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/products.routes.js'
dotenv.config();

const app = express();
app.use(express.json()); //Parse the json into data object

//root 
app.get('/',(req,res) => {
    res.send("Hello World!");
});

//products routing 
app.use('/api/products', productRoutes);

//listeing
const port = process.env.PORT || 8080;
app.listen(port, () =>{
    connectDB();
    console.log(`alive at http://localhost:${port}`);
})
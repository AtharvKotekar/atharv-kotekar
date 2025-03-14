import Product from "../models/product.model.js";


export const getAllProduct = async (req,res) => {
    try{
        const products = await Product.find({})
        res.status(200).json({success:true, data:products});
    } catch(error){
        console.log("Error in fetching products: ", error.message);
        res.status(500).json({success:false, message:"Internal server error"});
    }
};

export const createNewProduct = async (req,res) => {
    const product = req.body; //user passed body 
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: "Please provide all the fields"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch(error){
        console.log("Error in creating product: ", error.message);
        res.status(500).json({success:false,message:"Internal server error"});
    }
};

export const updateProduct = async (req,res) => {
    const { id } = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Product Id"});
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{ new : true});
        res.status(200).json({success:true,data: updatedProduct});
    } catch (error) {
        res.status(500).json({success:false, message:"Internal server error"})
    }
};

export const deleteProduct = async (req,res) => {
    const { id } = req.params.id;

    try{
        await Product.findOneAndDelete(id);
        res.status(200).json({success:true, message: "Product deleted succesfully"});
    } catch (error) {
        console.log("Error in deleting product : ", error.message);
        res.status(500).json({success:false, message: "Internal server error"});
    }
};
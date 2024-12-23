const Product = require('../models/productModel')

// business logic

const getProducts = async(req,res) => {
    try{
        const allProducts = await Product.find();

        if(!allProducts || allProducts.length === 0)
        {
            res.status(500).json({
                success: false,
                message : "No data found",
            })
        }
        res.status(200).json({
            success: true,
            products: allProducts,
        })
    }
    catch{
        res.status(500).json({
            success: false,
            message : "Internal Server Error",
        })
    }
}

// Insert Product 
const createProduct = async (req,res)=>{
    try{
        const {name,price,description,category} = req.body;
        const newUser = new Product({name,price,description,category});
        await newUser.save();
        res.status(200).json({
            success:true,
            message:"Inserted Successfully"
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            other: "Can not inserted",
            message: `${err}`
        });
    }
} 



// update
const updateProduct = async (req,res)=>{
    const {id} = req.params;
    const {name,price,description,category} = req.body;

    try{
        const updatedUser = await Product.findByIdAndUpdate(id,{name,price,description,category});
        if(!updatedUser)
        {
            res.json({
                message: "User not found"
            })
        }

        res.status(200).json({
            success:true,
            message:updatedUser
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message: err.message
        });
    }
}


// delete
const deleteProduct = async (req,res) =>{
    const {id} = req.params;
    try{
        const deletedUser = await Product.findByIdAndDelete(id);

        if(!deletedUser)
        {
            res.json({
                message : "User Not Found"
            })
        }

        res.status(200).json({
            success:true,
            message:deletedUser
        })


    }
    catch(err){
        res.status(500).json({
            success:false,
            message: err.message
        });
    }
}



module.exports = {getProducts,createProduct,updateProduct,deleteProduct}
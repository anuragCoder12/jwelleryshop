const Product=require('../models/cartModels')
const mongoose=require('mongoose')

//posting 
const postProduct= async (req,res)=>{
    console.log(req.body)
    
    const {title,description,price,category,product}=req.body
    try{
        const item=await Product.create({title,description,price,category,product})
        res.status(200).json(item)
    }
    catch{
        res.status(400).json('error occured')
    }
   
}
//getting all item
const getProducts=async(req,res)=>{
    const items=await Product.find({}).sort({createdAt:-1})
    res.status(200).json(items)
}
//getting one item
const getProduct=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such data found"})
    }
    const item=await Product.findById(id)
    if(!item){
        return res.status(404).json({error:"no such data found"})
     }  
     res.status(200).json(item)
 }


module.exports={
    postProduct,
    getProducts,
    getProduct

}
const express=require('express')
const router=express.Router()
const multer=require('multer')
const path=require('path')
const {
    postProduct,
    getProducts,
    getProduct
   
}=require('../controllers/productControllers')



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})
const upload=multer({storage:storage})


//getting data
router.get('/',getProducts)

//get single data
router.get('/:id',getProduct)




//posting data
router.post('/',upload.single('image'),postProduct)

//deleting data
router.delete('/:id',(req,res)=>{
    res.json('delete')
})

//updating data
router.patch('/:id',(req,res)=>{
    res.json('update')
})

module.exports=router
const express = require("express")
const router = express.Router()
const {getAllProducts, getProduct, editProduct} = require("../Controllers/productController.js")

router.use((req, res, next)=>{
    req.productName = "chocolate"
    console.log("im router middleware")
    next()
})

const checkAuthkey = (req, res, next)=>{
    const {secret} = req.query;
    if(secret == "sha123456"){
        next()
    }else{
        res.status(401).json({ message:"access dined "})
    }

}

function checkToken (req, res, next){
    const token = req.headers.authorization
    if(token == "Bearer qwerty"){
        next()
    }else{
        // res.status(401).json({message:"access denied and invalid token"})
        const er = {message:"access denied and invalid token", status:401}
        next(er)
    }
} 

router.get("/getAllProducts", checkAuthkey, getAllProducts)
router.post("/addProducts", checkToken, (req, res)=>{
    res.send("product added successfully " + req.productName)
})

router.get("/getProduct", getProduct)
router.put("/editProduct", editProduct )

module.exports = router
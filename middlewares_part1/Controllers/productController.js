const getAllProducts =  (req, res)=>{
    res.status(200).json({message:"access granted"})
}

const getProduct = (req, res, next)=>{
    try {
        res.json(name)
    } catch (error) {
        const err = {message: error.message, status: 400}  
        next(err)
        // res.status(400).send("something went wrong")
    }
}

const editProduct = (req, res, next)=>{
    try {
        const editProduct = product
        res.status(200).json({message: "updated product successfully " +editProduct })
    } catch (error) {
        const er = {
            message:error.message,
            status: 429
        }
        next(er)
        // res.status(400).send("some internal error")
    }
}

module.exports = {getAllProducts, getProduct, editProduct}
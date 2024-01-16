const getAllProductsStatic = async()=>{
        res.status(200).json({msg:`product testing route`})
}

const getAllProducts = async()=>{
        res.status(200).json({msg:`product route`})
}

module.exports = {
        getAllProductsStatic,
        getAllProducts
}
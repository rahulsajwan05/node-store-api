const {CustomError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err,req,res,next) =>{  
    return res.status(500).json({err:err.message})
}

module.exports = errorHandlerMiddleware;
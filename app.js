require('dotenv').config();

const express = require('express')
const notFoundMiddleware = require('./middleWare/not-found');
const errorMiddleware = require('./middleWare/error-handler');
const connectDb= require('./db/connect')

const app = express();
app.use(express.json());

//route
app.get('/' , (req,res) =>{
  res.send(`<h1>Store APi</h1> <a href="/api/v1/products"> Products Route</a>` )
});

//product route

app.use('/api/v1/products')


app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async()=>{
  try{
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening port ${port}...`))
  } catch (error){
    console.log(error)
  }
}

start()

 
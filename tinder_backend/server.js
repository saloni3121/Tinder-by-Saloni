import express from 'express'
import mongoose from 'mongoose'
import cards from './dbCards.js'
import Cors from 'cors'

// App config
const app = express()   //creating instant
const port = process.env.PORT ||8001   //process environment and run it on 8001
const connection_url =`mongodb+srv://Admin:XnaORsEIicYGJ0pz@cluster0.soovl.mongodb.net/tinderdb?retryWrites=true&w=majority`


// Middleware
app.use(express.json())
app.use(Cors())

// DB config(connect db)
mongoose.connect(connection_url,{
    userNewParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API endpoint
app.get('/',(req,res)=>{
    res.status(200).send("hello Saloni")
})  //root or base url

app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;
    cards.create(dbCard,(error,data)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards',(req,res)=>{
    cards.find((error,data)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(200).send(data)
        }
    })
});

// listener
app.listen(port,()=> console.log(`listening on localhost: ${port}`));






// XnaORsEIicYGJ0pz
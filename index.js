let users = require('./state').users
let products = require('./state').products
let bodyparser = require('body-parser')
var express = require('express')
var app = express()
app.use(bodyparser.json())
app.use(express.static('public'))
const thePort = 3000

let object = {
    users: users,
    products: products
}

app.get('/users', (req, res)=>{
    res.json(users)
})
app.post('/users', (req, res)=>{
    res.json(users)
})
app.put('/users', (req, res)=>{
    res.json(users)
})
app.delete('/users', (req, res)=>{
    res.json(users)
})

app.get('/users/:id', (req, res)=>{
    let result = []
    let id = parseInt(req.params.id)
    users.map((element)=>{if(element.id === id)return result.push(element)})
    res.json(result)
})
app.put('/users/:id', (req, res)=>{
    let result = []
    let id = parseInt(req.params.id)
    users.map((element)=>{if(element.id === id)return result.push(element)})
    res.json(result)
})
app.post('/users/:id', (req, res)=>{
    let result = []
    let id = parseInt(req.params.id)
    users.map((element)=>{if(element.id === id)return result.push(element)})
    res.json(result)
})
app.delete('/users/:id', (req, res)=>{
    let result = []
    let id = parseInt(req.params.id)
    users.map((element)=>{if(element.id === id)return result.push(element)})
    res.json(result)
})


app.listen(thePort, (err)=>{
    if(err){
        return console.log('Error', err)
    }
})


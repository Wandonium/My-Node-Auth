const express = require('express')

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("testing...")
})
app.get('/profile', (req, res) => {
    res.send("getting profile...")
})
app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send("success")
})

app.post('/auth', (req, res) => {
    console.log(req.body)
    const user = {
        username: "admin",
        password: "supersecret"
    }
    const username = req.body.user
    const password = req.body.password
    if(username === user.username && password === user.password){
        res.send("Success")
    } else {
        res.send("Failure")
    }
})
app.listen(3000);
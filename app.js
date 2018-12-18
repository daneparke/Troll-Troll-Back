const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get('/units', (req, res) => {
    queries.getAllUnits().then(response => res.send(response))
})
app.get('/units/:id', (req, res) => {
    queries.getUnitById(req.params.id).then(unit => res.status(200).send(unit[0]))
})
app.get('/users', (req, res) => {
    queries.getAllUsers().then(response => res.send(response))
})
app.get('/users/:id', (req, res) => {
    queries.getUserById(req.params.id).then(review => res.status(200).send(review[0]))
})
app.post('/users', (req, res) => {
    queries.createUser(req.body).then(review => {
        res.send(review[0])
    })
})
app.delete('/users/:id', (req, res) => {
    queries.deleteUser(req.params.id).then(res.status(204).send())
})



const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)
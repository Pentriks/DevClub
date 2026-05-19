import express from 'express'

const app = express()
app.use(express.json())

app.listen(3002, () => {
    console.log("Servidor funcionando")
})

const users = []

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {
    users.push(req.body)
    res.status(201).json({ message: "Cadastro realizado com sucesso!"})
})
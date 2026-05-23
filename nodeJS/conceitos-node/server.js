import express from 'express'

const app = express()

app.use(express.json())

app.get('/usuarios/:idProduto', (req, res) => {
    console.log(req)

    res.send("Rota get acessada com sucesso!")
})

app.post('/usuarios', (req, res) => {
    console.log(req)
    res.send("Rota post acessada!")
})

// req = requisição
// res = resposta

app.listen(3001, () => {
    console.log ("Servidor funcionando")
})
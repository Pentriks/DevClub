import express from 'express'
import { PrismaClient } from "./generated/prisma/client.js"

const app = express()
app.use(express.json())

app.listen(3002, () => {
    console.log("Servidor funcionando")
})

const users = []

const prisma = new PrismaClient()

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {

   const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(200).json(user)
})



app.delete('/usuarios/:id', async (req, res) => {

   await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usuário deletado com sucesso!"})
})
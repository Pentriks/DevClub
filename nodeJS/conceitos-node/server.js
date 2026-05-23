import express from 'express'
import { PrismaClient } from "./generated/prisma/client.js"

const app = express()

app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor funcionando")
})

const prisma = new PrismaClient()


app.post('/usuarios', async (req, res) => {

    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email
            }
        })

        if (user.age < 18) throw new Error("Only allowed users over 18 years old")

        console.log(user)

        return res.status(202).json({ message: "Cadastro realizado com muito sucesso!" })

    } catch (err) {
        res.status(400).json({error : err.message})
    } finally {
        console.log("Terminou tudo!")
    }
})

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

    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})
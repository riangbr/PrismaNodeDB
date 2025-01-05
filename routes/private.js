
import express from 'express' 
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()


router.get('/list', async (req ,res)=> {
    try {
        
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                password: false
            },
        })

        res.status(200).json({
            message: "Usuario listado com sucesso",
            users
        })

    } catch (error) {
        res.status(500).json({mesage: "falha no serividor"})
    }
})

export default router
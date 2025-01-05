/*
Publicas
    Criar Usuarios, Login
*/

import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET

//Cadastro

router.post("/cadastro", async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassowrd = await bcrypt.hash(user.password, salt);

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassowrd,
      },
    });

    res.status(201).json(userDB);
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor, tente novamete" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userInfo = req.body;
    //busca usuario no banco de dados
    const user = await prisma.user.findUnique({
      where: { email: userInfo.email }, 
    });
    //verifica se o usuario existe no banco da dados
    if(!user){
        return res.status(404).json({message: "usuario não encontrado"})
    }
    //compara se a senha esta correta(banco / usuario )
    const isMatch = await bcrypt.compare(userInfo.password , user.password)


    //se a senha estiver errada retornar um erro

    if(!isMatch){
        return res.status(400).json({message: "senha invalida"})
    }

    //gera token jwt
    const token = jwt.sign({id: user.id }, JWT_SECRET, {expiresIn: '1d'})


    //enviar token para usuario - frontEnd
    res.status(200).json(token)

  } catch (err) {
    res.status(500).json({ message: "Erro no servidor, tente novamete" });
  }
});

export default router;

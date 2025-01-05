import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req , res, next) => {
    //pega o token do header
    const token = req.headers.authorization

    //se o token estiver ativo e existir passa
    if(!token){
        res.status(401).json({message: "não autorizado"})
    }

    try {
        //verfica p tokne e remove o "Bearer " para não dar erros
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)

        req.userID = decoded.id

    } catch (error) {
        return res.status(401).json({message: "token invalido "})
    }
        //se o token estiver correto continua
    next()

}

export default auth
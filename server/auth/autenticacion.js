const jwt = require('jsonwebtoken');

let verificarToken = ( req, res, next ) =>{

    let token = req.get('Authorization');

    jwt.verify( token, process.env.SEED, (err, decoded)=>{

        if( err ){
            return res.status(401).json({
                ok:false,
                err: {
                    message: 'token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

};

let verificar_Role = (req, res, next)=>{
    let usuario = req.usuario;

    if(usuario.Role == 'ADMIN_ROLE'){
        next();
    }else{
        res.status(401).json({
            ok:false,
                err: {
                    message: 'El usuario no es administrador'
                }
        })
    }

}

let verificarTokenImg = (req, res, next)=>{
    let token = req.query.token;

    jwt.verify( token, process.env.SEED, (err, decoded)=>{

        if( err ){
            return res.status(401).json({
                ok:false,
                err: {
                    message: 'token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

}

module.exports = {
    verificarToken,
    verificar_Role,
    verificarTokenImg
};
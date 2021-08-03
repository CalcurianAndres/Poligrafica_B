const nodemailer = require('nodemailer');
const {header, footer} = require('../templates/template.email');
let {tituloCorreo} = require('../templates/template.email')

function emailModificacion(Correo, Nombre, Apellido, tipo, titulo, causa){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.CORREO,
            pass: process.env.PASS_CORREO
        }
    });
    let tituloCorreo = 'Se ha realizado un cambio!'
    const mensaje = 
        `${header(tituloCorreo)}
        ${Nombre} ${Apellido} ${tipo} en tu ticket '${titulo}' <br>
        <b>"${causa}"</b>.
        ${footer}`;

    var mailOptions = {
        from: '"Soporte Técnico" <ticket.purissima@gmail.com>',
        to: Correo,
        subject: `Tu ticket ${titulo} ha sido modificado`,
        html:mensaje
    };

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    });

}

module.exports = {
    emailModificacion
}
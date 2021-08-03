const getMenu = (role = 'USER_ROLE', departamento='soporte') => {
    const menu = [
        {
          titulo: 'Perfil',
          color: 'azul',
          icono:'fas fa-user',
          submenu: [
            {
              titulo:'Perfil',
              url:'perfil',
              icono: 'far fa-id-card'
            },
            {
              titulo:'Configuración',
              url:'configuracion',
              icono: 'fas fa-user-lock'
            }
          ]
        },
    
        {
          titulo: 'Tickets',
          color: 'morado',
          icono:'fas fa-ticket-alt',
          submenu: [
            {
              titulo:'Nuevo',
              url:'nuevo',
              icono: 'fas fa-plus'
            }
          ]
        },
        
    ]

    if( role === 'ADMIN_ROLE') {
      if(departamento === 'soporte'){
        
        menu[2] = {
          titulo: 'Administración',
          color: 'negro',
          icono: 'fas fa-users-cog',
          submenu: [
            {
              titulo:'Usuarios',
              url:'usuarios',
              icono: 'fas fa-users'
            },
            {
              titulo:'Nuevo usuario',
              url:'nuevo-usuario',
              icono: 'fas fa-user-plus'
            }
          ]
        }
      }

        menu[1].submenu.unshift({
            titulo:'Bandeja',
            url:'bandeja',
            icono: 'fas fa-folder'
          })
        
        menu[1].submenu.unshift({
            titulo:'Estadística',
            url:'estadisticas',
            icono: 'fas fa-chart-pie'
          })
    }

    return menu;
}

module.exports = {
    getMenu
}
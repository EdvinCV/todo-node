const opt = {
    description: {
        demand: true,
        alias: "d",
    },
    completado: {
        alias: "c",
        default: false,
    }
}

const argv = require('yargs')
    .command('list', 'Listado de tareas por hacer')
    .command('create', 'Crear tarea por hacer', opt)
    .command('update', 'Actualiza el estado de una tarea por hacer', opt)
    .command('delete', 'Eliminar una tarea de la base de datos', opt)
    .help()
    .argv;

module.exports = {
    argv
}
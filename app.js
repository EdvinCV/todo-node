const argv = require('./config/yargs').argv;
const colors = require('colors');
const { createTodo, listTodo, updateTodo, deleteTodo } = require('./todo/todo'); 

let comando = argv._[0];

switch( comando ){
    case 'list':
        console.log("Listado de tareas");
        let listado = listTodo();
        for (let todo of listado){
            console.log("====================".green);
            console.log("Descripcion: ", todo.description);
            console.log("Completado: ", todo.completado);
            console.log("====================".green);
        }
        break;
    case 'create':
        console.log("Crear nueva tarea");
        console.log(createTodo(argv.description));
        break;
    case 'update':
        console.log("Actualizar el estado de una tarea");
        let actualizado = updateTodo(argv.description, argv.completado);
        break;
    case 'delete':
        console.log("Borrado de una tarea");
        let todoDeleted = deleteTodo(argv.description);
        console.log(todoDeleted);
        break;
    default:
        console.log("Comando no reconocido.");
}
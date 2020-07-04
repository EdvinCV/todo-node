// required
const fs = require('fs');

let todoList = [];

const guardarDB = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('./db/data.json', data, (err) => {
        if(err){
            throw new Error("No se pudo guardar la tarea.");
        }
    })
}

const cargarDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
}

const createTodo = (description) => {
    cargarDB();
    let todo = {
        description,
        completado: false
    }
    todoList.push(todo);
    guardarDB();
    return todo;
}

const listTodo = () => {
    cargarDB();
    return todoList;
}

const updateTodo = (description, completado = true) => {
    cargarDB();
    let index = todoList.findIndex( (todo) => todo.description === description );

    if(index >= 0){
        todoList[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const deleteTodo = (description) => {

    cargarDB();
    let nuevoListado = todoList.filter( tarea => {
        return tarea.description !== description
    });

    if(todoList.length === nuevoListado.length){
        return false;
    } else {
        todoList = nuevoListado;
        guardarDB();
        return true;
    }

    // Buscar tarea
    // let output = {};
    // cargarDB();
    // let index = todoList.findIndex( (todo) => todo.description === description );

    // if(index >= 0){
    //     output = todoList[index];
    //     delete todoList[index];
    //     guardarDB();
    //     return output;
    // } else {
    //     return false;
    // }
}

module.exports = {
    createTodo,
    listTodo,
    updateTodo,
    deleteTodo
}

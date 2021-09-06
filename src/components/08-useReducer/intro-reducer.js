
const initialstate = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialstate, action ) => {
    // Aquí se porecesa el agregar   
    if( action?.type === 'agregar' ) {
        return [...state, action.payLoad]
    }

    return state;
    
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

//acción
const agregarTodo = {
    type: 'agregar', // Le dice al reducer que tipo de acción es
    payLoad: newTodo // es un estandar llamarlo payLoad
}


todos = todoReducer( todos, agregarTodo );


console.log( todos );
import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const init = () => {

    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
  
    // return[{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export default function TodoApp() {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {

    localStorage.setItem( 'todos', JSON.stringify( todos ) );

  }, [todos]);

  const handleDelete = ( todoId ) => {
    // Maneja la actualizacion de estado cuando borramos objetos
    console.log( todoId );

    // LLamar el case delete para ejecute un nuevo estado y me regregese el listado de los todos actualizado
    //crear la accion
    const action = {
      type: "delete",
      payload: todoId,
    };

    //hacer el dispatch
    dispatch( action );
  }


  const handleToggle = ( todoId ) => {

    dispatch({
      type: 'toggle',
      payload: todoId
    })

  } 

  const handleAddTodo = ( newTodo ) => {
    dispatch({
        type: "add",
        payload: newTodo
    });
  }

  return (
    <div>
      <h1>Todo APP ( {todos.length} )</h1>
      <hr />

      <div className="row">

      <div className="col-7">
        <TodoList
          todos={ todos }
          handleDelete={ handleDelete }
          handleToggle={ handleToggle }
        />
      </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}

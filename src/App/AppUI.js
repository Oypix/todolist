import React from "react";
import { TodoContext  } from "../TodoContext";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    const { 
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
      }= React.useContext(TodoContext)

    return (
        <React.Fragment>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && <p>Error</p>}
            {loading && <p>Loading</p>}
            {(!loading && !searchedTodos.length) && <p>You have no ToDo's, create your first ToDo by clicking on the + button.</p>}

            {searchedTodos.map(todo => (
              <TodoItem 
              key= {todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onCompleted={() => completeTodo(todo.text)} 
              onDeleted={() => deleteTodo(todo.text)} 
              />
          ))}
      </TodoList>

     {!!openModal && (
      <Modal>
        <TodoForm></TodoForm>
      </Modal>
     )}


    <CreateTodoButton 
      setOpenModal = {setOpenModal}
    />

    </React.Fragment>
    );
}

export { AppUI }
import React from "react";

import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {error && <p>Error</p>}
        {loading && <p>Loading</p>}
        {(!loading && !searchedTodos.length) && <p>Crea Tu primer todo</p>}

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
    <CreateTodoButton />
    </React.Fragment>
    );
}

export { AppUI }
import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form';



class TodoList extends React.Component {

  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        receiveTodo={ receiveTodo } />
        )
      );


    // React, when an array is in jsx, will turn it into a list
    return (
      <div>
        <h3>Todo List goes here!</h3>
        <ul>
          { todoItems }
        </ul>
        <TodoForm receiveTodo={ receiveTodo } />
      </div>
    );
  }
}


export default TodoList;

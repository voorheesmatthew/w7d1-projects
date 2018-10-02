import React from 'react';

class TodoListItem extends React.Component{

  render(){
    const { todo } = this.props;
    const { title } = todo;

    return(
      <div>
        <li>{title}</li>
      </div>
    );
  }


}

export default TodoListItem;

// presentation component
// const TodoListItem = ({title}) => (
//
// );

// export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);
// window.allTodos = allTodos;
export const allTodos = ({ todos }) => {
  return Object.keys(todos).map(id => todos[id])
};
// window.allTodos = allTodos;

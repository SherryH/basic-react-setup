const dummyTodos = [
  {id: 0, isDone: true, text: 'cook dinner'},
  {id: 1, isDone: false, text: 'laundry'}
];

const Todo = ({todo}) =>{
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}


const TodoList = ({todos}) =>{
  return (
    <div>
      <input type='text' placeholder='Add todo' />
      <ul>
        {todos.map((todo) => (
          <li><Todo todo={todo} /></li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoList todos={dummyTodos}/>, document.getElementById('todoList'));
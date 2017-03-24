import {List, Map} from 'immutable';

const dummyTodos = List([
  Map({id: 0, isDone: true, text: 'cook dinner'}),
  Map({id: 1, isDone: false, text: 'laundry'})
]);

const Todo = ({todo}) =>{
  if (todo.isDone) {
    return <strike>{todo.get('text')}</strike>;
  } else {
    return <span>{todo.get('text')}</span>;
  }
}


const TodoList = ({todos}) =>{
  return (
    <div>
      <input type='text' placeholder='Add todo' />
      <ul>
        {todos.map((todo) => (
          <li key={todo.get('id').toString()}><Todo todo={todo} /></li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoList todos={dummyTodos}/>, document.getElementById('todoList'));
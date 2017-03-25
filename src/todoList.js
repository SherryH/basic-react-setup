import {List, Map} from 'immutable';


//because  .toJS() is called when passing the todo store to <Todo/> props
// the todo here is a plain JS object
const Todo = ({todo}) =>{
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}


const TodoList = ({todos, addTodo, toggleTodo}) =>{
  // console.log('Todolist props', props);
  const onSubmit = (event) => {
    //get users input
    // {text: input}
    //addTodo(text)
    // trigger todolist to update display
    const text = event.target.value;
    if (event.which === 13 && text.length > 0) {
      addTodo(text);
      event.target.value = '';
    }
  };

  const onToggle = (key,todo) => toggleTodo(key);;

  return (
    <div>
      <input type='text' placeholder='Add todo' onKeyDown={onSubmit}/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.get('uid')} onClick={e => onToggle(todo.get('uid'))}><Todo todo={todo.toJS()} /></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
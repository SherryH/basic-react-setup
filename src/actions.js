
var uid = () => {
  return Math.random().toString(34).slice(2);
};

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      text: text,
      isDone: false,
      uid: uid()
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}
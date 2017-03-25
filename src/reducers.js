import {List, Map} from 'immutable';

const initState = List([]);

export default function reducer(todoStates=initState, {type, payload}) {
  // const reducerFunc = {
  //   'ADD_TODO': (payload) => {
  //     return todoStates.push(Map(payload));
  //   },
  //   'TOGGLE_TODO': (payload) => {
  //     return todoStates.map((todo) => {
  //       if (todo.get('id') === payload) {
  //         return todo.update('isDone', isDone=>!isDone);
  //       } else {
  //         return todo;
  //       }
  //     });
  //   }
  // };
  //return reducerFunc[type](payload) || todoStates; //createStore() cant recognise this as a function
  switch (type){
    case 'ADD_TODO':
      return todoStates.push(Map(payload));
    case 'TOGGLE_TODO':
      return todoStates.map((todo) => {
        if (todo.get('uid') === payload) {
          return todo.update('isDone', isDone=>!isDone);
        } else {
          return todo;
        }
      });
    default:
      return todoStates;
  }

}
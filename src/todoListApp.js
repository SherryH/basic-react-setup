import React from 'react';
import {render} from 'react-dom';
import {List, Map} from 'immutable';
import TodoListContainer from './todoListContainer';
import reducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const dummyTodos = List([
  Map({id: 0, isDone: true, text: 'cook dinner'}),
  Map({id: 1, isDone: false, text: 'laundry'})
]);

// all the states in the app are managed by this store
// reducers update state and need to know the initial state from store
// if multiple reducers present, need to use 'combinereducers' to combine first
// then create store
const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoListContainer />
  </Provider>,
  document.getElementById('todoList')
);
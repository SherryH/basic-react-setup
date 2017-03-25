// this container wraps around component to manage states and props
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])(components)

import {connect} from 'react-redux';
import TodoList from './todoList';
import {addTodo, toggleTodo} from './actions';

// mapStateToProps is a function
// any time the store is updated, mapStateToProps will be called
// I: mapStateToProps(state, [ownProps])
// O: stateProps, a plain object {}
// e.g. <Todo todo={state} />
function mapStateToProps(state) {
  return {todos: state};
}

// this is for passing callbacks into props
// I: mapDispatchToProps(dispatch, [ownProps])
// O: dispatchProps,  a plain object {}
// dispatchProps{} must uses dispatch to bind action creator
// dispatch(action) - this is a store method, only way to trigger state change
/* <TodoList todos={state}
          addTodo={text => dispatch(addTodo(text))}
          toggleTodo={id => dispatch(toggleTodo(id))} />
*/
function mapDispatchToProps(dispatch) {
  // we already create the action creators! just pass them in
  return {
    'addTodo': text => dispatch(addTodo(text)),
    'toggleTodo': id => dispatch(toggleTodo(id)),
  };
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer;
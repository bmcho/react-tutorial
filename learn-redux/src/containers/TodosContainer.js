import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';
import { connect } from 'react-redux';

function TodosContainer({ todos, addTodo, toggleTodo }) {
  // // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
  // const todos = useSelector(state => state.todos);
  // const dispatch = useDispatch();

  const onCreate = useCallback(text => addTodo(text), [addTodo]);
  const onToggle = useCallback(id => toggleTodo(id), [toggleTodo]); // 최적화를 위해 useCallback 사용

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

const mapStateToProps = state => ({todos: state.todos});
const mapDispatchToProps =  {
  addTodo,
  toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
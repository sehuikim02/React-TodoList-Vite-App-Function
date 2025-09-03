import { memo } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllTodos } from '../reducers/todosSlice';
import FunctionalTodoItem from './FunctionalTodoItem';

const FunctionalTodoItemList = () => {
  /*
        React-Redux의 connect() 함수의 첫번째 아규먼트 mapStateToProps 함수와 같은 역할
        useSelector()는 store에 저장된 상태변수를 props 변수로 매핑 해준다
    */
  const todos = useSelector((state) => state.todos);

  /*
    React-Redux의 connect() 함수의 두번째 아규먼트 mapDispatchToProps 함수와 같은 역할 
    useDispatch는 Action 생성함수를 dispatch 해주는 역할
  */
  const dispatch = useDispatch();

  /*
    lifecycle method
    render() 호출 후에 호출되어짐
    서버와 http 통신을 하는 action 함수 호출하기
  */
  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchAllTodos());
  }, [dispatch]);

  // componentDidMount() {
  //     this.props.fetchAllTodos();
  // }

  const todoList = todos.map(
    ({ id, text, checked }) =>
    (<FunctionalTodoItem
      id={id} text={text} checked={checked} key={id}
    />));

  return (
    <div>
      {todoList}
    </div>
  );
};

// memo를 사용하여 shouldComponentUpdate 대체
// myTodos가 변경될 때만 리렌더링
export default memo(
  FunctionalTodoItemList,
  (prevProps, nextProps) => prevProps.myTodos === nextProps.myTodos
);
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { memo } from 'react';
import PropTypes from 'prop-types';

import { removeTodo, toggleTodo } from '../reducers/todosSlice';
import './TodoItem.css';

const FunctionalTodoItem = ({ text, checked, id }) => {
  const dispatch = useDispatch();

  /*
    useCallback은 함수를 메모이제이션하여 동일한 함수 참조를 유지합니다
    handleRemove와 handleToggle은 useCallback으로 감싸져 있어서 dispatch가 변경되지 않는 한 동일한 함수 참조를 유지하도록 해줍니다.
  */
  const handleRemove = useCallback((id) => {
    console.log('>> handleRemove');
    dispatch(removeTodo(id));
  }, [dispatch]);

  const handleToggle = useCallback((todo) => {
    dispatch(toggleTodo(todo));
  }, [dispatch]);

  return (
    <div className="todo-item" onClick={() => {
      const todo = { id, text, checked };
      todo.checked = !todo.checked;
      handleToggle(todo);
    }}>
      <div className="remove" onClick={(e) => {
        e.stopPropagation(); // myToggle 이 실행되지 않도록 함
        handleRemove(id)
      }
      }>&times;</div>
      <div className={`todo-text ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>
      {
        checked && (<div className="check-mark">✓</div>)
      }
    </div>
  );
};

FunctionalTodoItem.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.number,
};

// memo를 사용하여 shouldComponentUpdate 대체
// checked가 변경될 때만 리렌더링
export default memo(
  FunctionalTodoItem,
  (prevProps, nextProps) => prevProps.checked === nextProps.checked
);
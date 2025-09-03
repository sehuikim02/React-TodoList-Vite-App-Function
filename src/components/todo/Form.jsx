import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../reducers/todosSlice';
import './Form.css';

const Form = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  //Event Handler 메서드 선언
  const handleChange = useCallback((e) => {
    setTodo(e.target.value);
  }, [setTodo]);

  const handleCreate = useCallback(() => {
    console.log('handleCreate');
    const newTodo = {
      text: todo,
      checked: false
    }
    dispatch(addTodo(newTodo));

    setTodo('');

  }, [dispatch, todo]);

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleCreate();
    }
  }

  return (
    <div className="form">
      <input value={todo} onChange={handleChange}
        onKeyDown={handleEnter} />
      <div className="create-button" onClick={handleCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
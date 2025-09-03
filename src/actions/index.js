import axios from 'axios';

//Action type 정의
export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const apiUrl = process.env.REACT_APP_APIURL;
//'http://localhost:8083/api/todos';

//4. Todo 수정
export const toggleTodo = (todo) => {
    return (dispatch) => {
        axios.put(`${apiUrl}/${todo.id}`, todo)
            .then(res => {
                dispatch({
                    type: TOGGLE_TODO,
                    payload: res.data
                });
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }
};

//3. Todo 삭제
export const removeTodo = (id) => {
    return (dispatch) => {
        axios.delete(`${apiUrl}/${id}`)
            .then(res => {
                dispatch({
                    type: REMOVE_TODO,
                    payload: res.data
                });
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }
};

//2. Todo 등록
export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(apiUrl, todo)
            .then(res => {
                dispatch({
                    type: ADD_TODO,
                    payload: res.data
                });
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }
};

//1. Todo 목록 가져오기
export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl)
            .then(res => {
                dispatch({
                    type: FETCH_TODOS,
                    payload: res.data
                });
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }
};
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

// Action과 Reducer를 합친 개념이 Slice입니다.
const BASE_URL = import.meta.env.VITE_API_URL;
const apiUrl = `${BASE_URL}/todos`;

// 비동기 액션 생성자: 모든 Todo 목록을 가져오기
export const fetchAllTodos = createAsyncThunk(
    "todos/fetchAllTodos", 
    async () => {
        const response = await axios.get(apiUrl);
        return response.data;
    }
);

// 비동기 액션 생성자: Todo 삭제하기
export const removeTodo = createAsyncThunk(
    "todos/removeTodo",
    async (id) => {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    }
);

// 비동기 액션 생성자: Todo 토글하기 (완료/미완료 상태 변경)
export const toggleTodo = createAsyncThunk(
    "todos/toggleTodo",
    async (todo) => {
        const response = await axios.patch(`${apiUrl}/${todo.id}`, todo);
        return response.data;
    }
);

// 비동기 액션 생성자: Todo 추가하기
export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async (todo) => {
        const response = await axios.post(apiUrl, todo);
        return response.data;
    }
);

// 초기 상태 정의
const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    
    // extraReducers: 비동기 액션의 생명주기(pending, fulfilled, rejected) 처리
    extraReducers: (builder) => {
        builder
            // 먼저 모든 addCase를 처리합니다 (특정 액션에 대한 fulfilled 처리)
            .addCase(fetchAllTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            
            // 그 다음 addMatcher를 사용하여 공통 처리 (모든 pending/rejected 액션)
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'An error occurred';
                }
            );
    }
});

// slice의 reducer export
export default todosSlice.reducer;

// 선택자(selectors)
export const selectTodos = (state) => state.todos.todos;
export const selectLoading = (state) => state.todos.loading;
export const selectError = (state) => state.todos.error;
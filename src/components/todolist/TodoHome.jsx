import Form from '@components/todolist/Form';
import TodoItemList from '@components/todolist/TodoItemList';
import TodoListTemplate from '@components/todolist/TodoListTemplate';


const TodoHome = () => {
    return (
        <TodoListTemplate form={<Form />}>
            <TodoItemList />
        </TodoListTemplate>
    );
};

export default TodoHome;
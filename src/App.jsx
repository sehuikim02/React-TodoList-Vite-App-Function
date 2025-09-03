import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

const App = () => {
  return (
    <TodoListTemplate form={ <Form />}>
      <TodoItemList />
    </TodoListTemplate>
  );
};
export default App;
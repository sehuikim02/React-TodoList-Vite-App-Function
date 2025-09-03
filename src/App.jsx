import FunctionalTodoItemList from './components/FunctionalTodoItemList';
import FuctionalTodoListTemplate from './components/FuntionalTodoListTemplate';
import FunctionalForm from './components/FuctionalForm';

const App = () => {
  return (
    <FuctionalTodoListTemplate
      form={ <FunctionalForm />}
    >
      <FunctionalTodoItemList />
    </FuctionalTodoListTemplate>
  );
};
export default App;
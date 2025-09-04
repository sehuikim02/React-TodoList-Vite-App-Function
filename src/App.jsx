import { Link } from "react-router-dom";
import './App.css';
import AppRoutes from '@/routes/AppRoutes';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">TodoList</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
        <li>
          <Link to="/callback">useCallback</Link>
        </li>
      </ul>
      <AppRoutes />
    </>
  );
}
export default App;
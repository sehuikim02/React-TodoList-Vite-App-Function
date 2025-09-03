import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './App.css';

const App = () => {
  return (
    <div>
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
      </ul>
      
      <AppRoutes />
    </div>
  );
};
export default App;
import { Routes, Route } from "react-router-dom";
import TodoHome from "@components/todolist/TodoHome";
import Profiles from '@components/profile/Profiles';
import HistorySample from '@components/HistorySample';
import ParentComponent from '@components/callback/ParentComponent';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoHome />} exact={true} />
      <Route path="/profiles/*" element={<Profiles />} />
      <Route path="/history" element={<HistorySample />} />
      <Route path="/callback" element={<ParentComponent />} />
      <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
    </Routes>
  );
};
export default AppRoutes;
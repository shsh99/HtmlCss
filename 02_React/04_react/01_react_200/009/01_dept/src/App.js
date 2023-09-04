import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"; // 메뉴 라이브러리
import Home from "./pages/Home"; // 자식 컴포넌트
import DeptList from "./pages/dept/DeptList";
import AddDept from "./pages/dept/AddDept";
import NotFound from "./components/NotFound";
// import AddEmp from "./../../../009/src/pages/Add_Emp";
// import Emp from "./../../../009/src/pages/Emp";

function App() {
  return (
    <div className="App">
      {/* 메뉴 컴포넌트 : Header */}
      <Header />

      {/* 본문 : 라우팅 설정 */}
      <div className="container mt-3">
        <Routes>
          {/* 1st 페이지 : / */}
          <Route path="/" element={<Home />} />
          {/* path="*" : 지정되지 않은 모든 url  */}
          <Route path="*" element={<NotFound />} />

          <Route path="/dept" element={<DeptList />} />
          <Route path="/add-dept" element={<AddDept />} />
          {/* <Route path="/emp" element={<Emp />} />
          <Route path="/add-emp" element={<AddEmp />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

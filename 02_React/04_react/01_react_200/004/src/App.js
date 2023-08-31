import "./App.css";

import A_Accommodate from "./pages/A_Accommodate";
import A_Accommodate_Exam from "./pages/A_Accommodate_Exam";
import A_Accommodate_Exam2 from "./pages/A_Accommodate_Exam2";
import D_ConfirmButton from "./pages/D_ConfirmButton";
import E_ConfirmButton_Exam from "./pages/E_ConfirmButton_Exam";
import F_ConfirmButton_Exam2 from "./pages/F_ConfirmButton_Exam2";
import G_LandingPage from "./pages/G_LandingPage";
import H_Book from "./pages/H_Book";

function App() {
  return (
    <div className="App">
      {/* 자식 컴포넌트 추가 */}
      {/* <A_Accommodate /> */}
      {/* <A_Accommodate_Exam /> */}
      {/* <A_Accommodate_Exam2 /> */}
      {/* <D_ConfirmButton /> */}
      {/* <E_ConfirmButton_Exam /> */}
      {/* <F_ConfirmButton_Exam2 /> */}
      {/* <G_LandingPage/> */}
      <H_Book />
    </div>
  );
}

export default App;

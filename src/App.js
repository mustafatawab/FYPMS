import Header from "./components/header/header";
import Login from "./views/login/Login";
import Todo from "./views/todo/todo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar1 from "./views/Coordinator/SideBar1";
import Panel from "./views/Panel/Panel";
import Rooms from "./views/Rooms/Rooms";
import Evaluator from "./views/Evaluator/Evaluator";
import Sidebar2 from "./views/Supervisor/Sidebar2";
import Gradding from "./views/Gradding/Gradding";
import UploadDocument from "./views/UploadDocument/UploadDocument"
import GroupEnrollment from './views/GroupdEnrollment/GroupEnrollment'
import Students from "./views/Students/Students";

const App = () => {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          
          <Route path="/SideBar1" element={<SideBar1 />}/>
          <Route path="/Sidebar2" element={<Sidebar2 />}/>
          <Route path="/Panel" element={<Panel />}/>
          <Route path="/Rooms" element={<Rooms/>}/>
          <Route path="/Evaluator" element={<Evaluator />}/>
          <Route path="/GroupEnrollment" element={<GroupEnrollment />}/>
          <Route path="/Gradding" element={<Gradding />}/>
          <Route path="/UploadDocument" element={<UploadDocument />}/>
          <Route path="/Students" element={<Students />}/>
        </Routes> 
      </Router>
    </>
  );
};

export default App;

import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './Pages/404';
import UserList from "./Components/UserList";
import Profile from "./Components/Profile";
const Login = React.lazy(()=>import("./Components/Login/index"));
const Register = React.lazy(()=>import("./Components/Register/index"));
const Dashboard = React.lazy(()=>import("./Components/Dashboard/index"));
function App() {
  let token = localStorage.getItem("login-token");
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<div>loading....</div>}>
        {
          token ?
          <Routes>
            <Route path="/dashboard/" element={<Dashboard />} >
              <Route path="userlist" element={<UserList />}/>
              <Route path="user-profile" element={<Profile />}/>
            </Route>
          </Routes>
          :
          <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="*" exact={true} element={<PageNotFound/>}/>
        </Routes>
        }
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import PageNotFound from "./Pages/404";
import UserList from "./Components/UserList";
import Profile from "./Components/Profile";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
const Login = React.lazy(() => import("./Components/Login/index"));
const Register = React.lazy(() => import("./Components/Register/index"));
const Dashboard = React.lazy(() => import("./Components/Dashboard/index"));

function App() {
  let token = localStorage.getItem("login-token");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = useSelector((state) => state?.userReaducer?.isAuth);

  useEffect(() => {
    if (isAuth && pathname == "/") {
      navigate("/dashboard");
    } else if(!isAuth && pathname == "/dashboard") {
      navigate('/');
    }
    else{
      navigate(pathname);
    }
  }, [isAuth]);

  return (
    <div className="App">
      <ToastContainer />
      {/* <Router> */}
      <Suspense
        fallback={
          <div>
            <Box
              sx={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          </div>
        }
      >
        <Routes>
          {isAuth ? (
            <Route path="/dashboard/" element={<Dashboard />}>
              <Route path="userlist" element={<UserList />} />
              <Route path="user-profile" element={<Profile />} />
            </Route>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
              <Route path="*" exact={true} element={<PageNotFound />} />
        </Routes>
      </Suspense>
      {/* </Router> */}
    </div>
  );
}

export default App;

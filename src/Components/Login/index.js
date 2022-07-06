import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { LoginUser } from "../../Services/Redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login_response = useSelector((state) => state?.userReaducer);
  console.log("loginrespone", login_response?.status);

  const onSubmit = (data) => {
    dispatch(LoginUser(data));
    if (login_response?.status === 200) {
      alert(`${login_response?.message}`)
}
    reset();
  };

  useEffect(() => {
    if(login_response?.status === 400){
        toast.error(`${login_response?.message}`,
        {position: toast.POSITION.TOP_RIGHT})
    }else{
      console.log(null);
    }
  }, [login_response]);
  
  return (
    <div className="login-form">  
      <div className="form">
        <div className="form-heading">
          <h4>Login...</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="error">email is required*</p>
            )}
          </div>
          <div className="form-field">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              {...register("password", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="error">password is required*</p>
            )}
          </div>
          <div className="form-field">
            <Button variant="contained" type="submit">
              Login
            </Button>
          </div>
        </form>
        <div className="register-link">
          <p>
            If not Register Please <a href="/register">Register</a> first.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

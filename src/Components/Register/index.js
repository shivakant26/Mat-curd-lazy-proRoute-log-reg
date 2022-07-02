import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegsiterUser } from "../../Services/Redux/Action/userAction";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getuser = useSelector((state) => state?.userReaducer);
  console.log(32132132, getuser);

  const onSubmit = (data) => {
    let list = JSON.parse(localStorage.getItem("registerUser")) || [],
       isExist = list.findIndex((obj) => {
          return obj.email === data.email
        }) != -1;
    if (isExist) {
        debugger;
      alert("Email Already be taken")
    } else {
        dispatch(RegsiterUser(data))
    }
    reset();
  };
  useEffect(() => {
    if (getuser?.status === 201) {
      alert(`${getuser?.message}`);
      navigate("/");
    }
  }, [getuser]);
  return (
    <div className="Register-form">
      <div className="form">
        <div className="form-heading">
          <h4>Register...</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name?.type === "required" && (
              <p className="error">name is required*</p>
            )}
          </div>
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
            {errors?.password?.type === "required" && (
              <p className="error">password is required*</p>
            )}
          </div>
          <div className="form-field">
            <TextField
              id="outlined-basic"
              label="phone"
              variant="outlined"
              {...register("phone", {
                required: true,
              })}
            />
            {errors?.phone?.type === "required" && (
              <p className="error">phone is required*</p>
            )}
          </div>
          <div className="form-field">
            <Button variant="contained" type="submit">
              Register
            </Button>
          </div>
        </form>
        <div className="register-link">
          <p>
            If have allready Account Please <a href="/">Login</a> first.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { registerUser } from "../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/authAction";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // 1. dispatch: useDispatch
  // useDispatch : is a hook that returns an object with a dispatch method ==> is going to send the actions to the reducer
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  //navigation hook
  const navigate = useNavigate();

  // useSelector : is a hoook ot get the state from the store ==> state refers to ur store.
  // authReducer : will refer ur user related data
  // 2. reducer : authState ==> isAuthenticated status
  // state
  // 1.imporrt usestate
  // define state variables for form inputs
  // consume useState from 'react'
  const [formData, setFormData] = useState({
    name: "abhi",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setError] = useState([]);
  //destructure formData
  const { name, email, password, password2 } = formData;
  /// on submit handler
  const onSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    dispatch(registerAction({ name, email, password }));
  };
  //onChange handler
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const
  // onChange : name of the event handler==> onChange event js ==> form
  // e : event object
  // setFormData : function to update formData state variable
  // e.target.name : name of the input field that triggered the event
  // e.target.value : value of the input field that triggered the event
  // ...formData : spread operator to copy existing formData
  //   const name = formData.name;
  //   const email = formData.email;
  //   const password = formData.password;
  //   const password2 = formData.password2;
  // const
  // formData = state variable/ name
  // setFormData = function to update formData
  if (isAuthenticated) {
    navigate("/dashboard/");
  }
  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

export default Register;

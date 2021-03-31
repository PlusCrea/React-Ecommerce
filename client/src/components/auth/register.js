import React, { useState, useEffect } from "react";
import Breadcrumb from "../layout/Breadcrumb";
import { signupAuthAction } from "../../action/authAction";
import { useForm } from "../util/useForm";
//import SetError from "../util/setError";
import { useSelector, useDispatch } from "react-redux";
import Message from "../util/message";

const Register = () => {
  const [values, handleChange] = useForm({
    firstname: "Ahmet",
    lastname: "Keklik",
    email: "aa@aa.com",
    password: "a",
    repassword: "a",
  });

  const [status, setstatus] = useState(false);
  const [message, setmessage] = useState("");

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setstatus(!user.status);
      if (!user.status) {
        user.error.errmsg
          ? setmessage(user.error.errmsg)
          : setmessage(user.error.message);
      }
    }
  }, [user]);
  /*
  useEffect(() => {
    if (status && user) {
      user.error.errmsg
        ? setmessage(user.error.errmsg)
        : setmessage(user.error.message);
    }
  }, [status]);
*/
  const onRegister = (e) => {
    e.preventDefault();

    if (
      values.firstname === "" ||
      values.lastname === "" ||
      values.email === "" ||
      values.password === "" ||
      values.repassword === ""
    ) {
      setstatus(true);
      setmessage("Lütfen tüm alanları doldurunuz!");
      return;
    }

    if (values.password !== values.repassword) {
      setstatus(true);
      setmessage("Sifreler esit degil!");
      return;
    }
    const newUser = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
    };

    dispatch(signupAuthAction(newUser));
    setstatus(false);
    setmessage("");
  };

  return (
    <div>
      <Breadcrumb />
      <div className="register-login-section spad">
        <div className="container jumbotron border border-primary">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              {status ? <Message status={status} message={message} /> : null}
              <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={onRegister}>
                  <div className="group-input ">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group-input">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group-input">
                    <label>Username or email address *</label>
                    <input
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group-input">
                    <label>Password *</label>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group-input">
                    <label>Confirm Password *</label>
                    <input
                      type="password"
                      name="repassword"
                      value={values.repassword}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="site-btn register-btn">
                    REGISTER
                  </button>
                </form>
                <div className="switch-login">
                  <a href="./login" className="or-login">
                    Or Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

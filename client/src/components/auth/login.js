import React, { useState, useEffect } from "react";
import Breadcrumb from "../layout/Breadcrumb";
import { useForm } from "../util/useForm";
import { loginAuthAction } from "../../action/authAction";
import Message from "../util/message";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });

  const [status, setstatus] = useState(false);
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let history = useHistory();
  const { user } = auth;
  console.log("Auth", user);

  useEffect(() => {
    if (user) {
      setstatus(!user.status);
      if (!user.status) {
        user.error.errmsg
          ? setmessage(user.error.errmsg)
          : setmessage(user.error.message);
      } else {
        localStorage.setItem("userToken", JSON.stringify(user));
        history.push("/mark");
      }
    }
  }, [user]);

  const onLogin = (e) => {
    e.preventDefault();

    const user = {
      email: values.email,
      password: values.password,
    };

    dispatch(loginAuthAction(user));
    console.log(user);

    setstatus(false);
    setmessage("");
  };

  return (
    <div>
      <Breadcrumb />
      <div className="register-login-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              {status ? <Message status={status} message={message} /> : null}
              <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={onLogin}>
                  <div className="group-input">
                    <label htmlFor="username">
                      Username or email address *
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="E Mail"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group-input">
                    <label htmlFor="pass">Password *</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group-input gi-check">
                    <div className="gi-more">
                      <label htmlFor="save-pass">
                        Save Password
                        <input type="checkbox" id="save-pass" />
                        <span className="checkmark"></span>
                      </label>
                      <a href="/forgotpass" className="forget-pass">
                        Forget your Password
                      </a>
                    </div>
                  </div>
                  <button type="submit" className="site-btn login-btn">
                    Sign In
                  </button>
                </form>
                <div className="switch-login">
                  <a href="./register" className="or-login">
                    Or Create An Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

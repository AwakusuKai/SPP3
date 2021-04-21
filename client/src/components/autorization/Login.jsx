import React, { useState } from "react";
import "./autorization.css";
import Input from "../utils/input/Input";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";
import {NavLink} from "react-router-dom";
import { logout } from "../../reducers/userReducer";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  console.log(props.isAuth);

  return (
    <div>

    <div className="auth_form">
      <h1>Вход</h1>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите почту..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button
        onClick={() => dispatch(login(email, password))}
      >
        Войти
      </button>
    </div>
    </div>
  );
};

export default Login;
import React, { useState } from "react";
import "./autorization.css";
import Input from "../utils/input/Input";
import { registration } from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth_form">
      <h1>Регистрация</h1>
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
        onClick={() => registration(email, password)}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Registration;
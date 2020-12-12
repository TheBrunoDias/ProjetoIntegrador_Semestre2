import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Blog/Main/style.css";
import "../Blog/NewPost/style.css";

import admin from "../../server/admin.json";
import { useAuth } from "../../context/auth";

export default function AdminPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");

  const { setAuth } = useAuth();

  function handleSubmit(event) {
    const loginData = {
      email: email,
      password: password,
    };

    if (
      loginData.email !== admin.email ||
      loginData.password !== admin.password
    ) {
      console.log("Usuário Inválido");
      setCheck(true);
    } else {
      setAuth(true);
      history.push("/admin/update");
      setCheck(false);
    }
    setEmail("");
    setPassword("");

    event.preventDefault();
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <div className="container-new-post">
        <h1>Painel Administrativo - Numigame</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="email"
              name="admin_email"
              id="admin_email"
              placeholder="Insira seu Email"
              onChange={handleEmail}
              required
              value={email}
            />
            <br />
            <input
              type="password"
              name="admin_password"
              id="admin_password"
              placeholder="Insira o Password"
              onChange={handlePassword}
              required
              value={password}
            />
          </div>
          <br />
          <br />

          <input type="submit" className="button button1" value="LOGIN" />
        </form>

        {check ? (
          <p style={{ color: "red" }}>
            Email: admin@admin <br />
            Senha: admin
          </p>
        ) : null}
      </div>
    </>
  );
}

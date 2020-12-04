import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


import admin from "../../server/admin.json";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 30px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #f3f3f3;
  height: 60vh;

  form {
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
`;

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");

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
      console.log(loginData);
      console.log(`Bem Vindo ${admin.name}`);
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
    <PageContainer>
      <h1>Painel Administrativo - Numigame</h1>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="admin_email"
            id="admin_email"
            placeholder="Insira seu Email"
            onChange={handleEmail}
            required
            value={email}
          />
          <Input
            type="password"
            name="admin_password"
            id="admin_password"
            placeholder="Insira o Password"
            onChange={handlePassword}
            required
            value={password}
          />
          <Link to="/admin/update">Login</Link>
        </form>

        {check ? (
          <p style={{ color: "red" }}>Usuário Invalido, tente novamente</p>
        ) : null}
      </Container>
    </PageContainer>
  );
}

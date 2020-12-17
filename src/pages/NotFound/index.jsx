import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img from "../../Assets/img/NotFound/NotFound.svg";

const Container = styled.div`
  background-color: #32c5d2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 30px;
  font-size: 34px;
`;

export default function NotFound() {
  return (
    <Container>
      <img src={Img} alt="Page Not Found" />

      <CustomLink to="/">Voltar Para Pagina principal</CustomLink>
    </Container>
  );
}

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgba(14, 193, 238, 0.445);
  justify-content: flex-start;
  padding: 0 5vw;
  align-items: center;
  height: 10vh;
`;

const Divider = styled.div`
  width: 2px;
  height: 6vh;
  margin: 0 30px;
  background-color: #000000;
`;

export default function BlogHeader({ title, subtitle }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Divider />
      <h3>{subtitle}</h3>
    </Container>
  );
}

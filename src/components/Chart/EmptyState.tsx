import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

export function EmptyState() {
  return (
    <Container>
      <h2>Для начала введите свою зарплату</h2>
    </Container>
  );
}
